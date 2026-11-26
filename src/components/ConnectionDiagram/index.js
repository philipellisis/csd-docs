import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/*
 * Pan / zoom connection diagram.
 *
 * World coordinates are plain pixels. Every node is a card at (x, y, w, h).
 * Ports are labelled "chips" drawn just outside a card edge; every edge runs
 * from one port's pin to another port's pin so the reader can see exactly
 * which connector each cable plugs into.
 */

const CHIP_H = 26; // height of a top/bottom port chip
const DEFAULT_PORT_W = 150; // width of a left/right port chip
const MIN_K = 0.12;
const MAX_K = 2.5;
const DRAG_THRESHOLD = 4;
const DIRS = {top: [0, -1], bottom: [0, 1], left: [-1, 0], right: [1, 0]};

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function portAnchor(node, port) {
  const at = port.at == null ? 0.5 : port.at;
  const pw = port.w || DEFAULT_PORT_W;
  switch (port.side) {
    case 'top':
      return {x: node.x + node.w * at, y: node.y - CHIP_H};
    case 'bottom':
      return {x: node.x + node.w * at, y: node.y + node.h + CHIP_H};
    case 'left':
      return {x: node.x - pw, y: node.y + node.h * at};
    default:
      return {x: node.x + node.w + pw, y: node.y + node.h * at};
  }
}

function bezierAt(p0, p1, p2, p3, t) {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  return {
    x: a * p0.x + b * p1.x + c * p2.x + d * p3.x,
    y: a * p0.y + b * p1.y + c * p2.y + d * p3.y,
  };
}

function edgeGeometry(a, sideA, b, sideB) {
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const k = clamp(dist * 0.45, 50, 240);
  const [ax, ay] = DIRS[sideA];
  const [bx, by] = DIRS[sideB];
  const c1 = {x: a.x + ax * k, y: a.y + ay * k};
  const c2 = {x: b.x + bx * k, y: b.y + by * k};
  return {
    d: `M${a.x},${a.y} C${c1.x},${c1.y} ${c2.x},${c2.y} ${b.x},${b.y}`,
    at: (t) => bezierAt(a, c1, c2, b, t),
  };
}

function PcIcon() {
  return (
    <svg viewBox="0 0 64 48" className={styles.pcIcon} aria-hidden="true">
      <rect x="4" y="2" width="56" height="34" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M24 46h16M32 36v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function ConnectionDiagram({nodes, edges, edgeTypes, height}) {
  const {withBaseUrl} = useBaseUrlUtils();
  const rootRef = useRef(null);
  const viewportRef = useRef(null);
  const [view, setView] = useState({x: 0, y: 0, k: 0.3});
  const viewRef = useRef(view);
  viewRef.current = view;
  const [ready, setReady] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [hint, setHint] = useState(false);
  const [hover, setHover] = useState(null); // {kind, id}
  const [pinned, setPinned] = useState(null); // {kind, id}
  const pointers = useRef(new Map());
  const gesture = useRef(null);
  const movedRef = useRef(false);
  const activeRef = useRef(false);
  const interactedRef = useRef(false);
  const hintTimer = useRef(null);

  // ---------- derived geometry ----------
  const nodeById = useMemo(() => {
    const m = {};
    nodes.forEach((n) => {
      m[n.id] = n;
    });
    return m;
  }, [nodes]);

  const portOf = useCallback(
    (nodeId, portId) => {
      const n = nodeById[nodeId];
      const p = n && n.ports.find((pp) => pp.id === portId);
      if (!p) throw new Error(`ConnectionDiagram: unknown port ${nodeId}.${portId}`);
      return {node: n, port: p};
    },
    [nodeById],
  );

  const geoEdges = useMemo(
    () =>
      edges.map((e) => {
        const A = portOf(e.from[0], e.from[1]);
        const B = portOf(e.to[0], e.to[1]);
        const a = portAnchor(A.node, A.port);
        const b = portAnchor(B.node, B.port);
        const g = edgeGeometry(a, A.port.side, b, B.port.side);
        return {...e, A, B, a, b, d: g.d, mid: g.at(e.labelAt == null ? 0.5 : e.labelAt)};
      }),
    [edges, portOf],
  );

  // colour of each port = colour of the first edge using it
  const portColor = useMemo(() => {
    const m = {};
    geoEdges.forEach((e) => {
      const c = edgeTypes[e.type].color;
      const ka = `${e.from[0]}.${e.from[1]}`;
      const kb = `${e.to[0]}.${e.to[1]}`;
      if (!m[ka]) m[ka] = c;
      if (!m[kb]) m[kb] = c;
    });
    return m;
  }, [geoEdges, edgeTypes]);

  const bounds = useMemo(() => {
    let x0 = Infinity;
    let y0 = Infinity;
    let x1 = -Infinity;
    let y1 = -Infinity;
    const add = (x, y) => {
      x0 = Math.min(x0, x);
      y0 = Math.min(y0, y);
      x1 = Math.max(x1, x);
      y1 = Math.max(y1, y);
    };
    nodes.forEach((n) => {
      add(n.x, n.y);
      add(n.x + n.w, n.y + n.h);
      n.ports.forEach((p) => {
        const a = portAnchor(n, p);
        add(a.x, a.y);
      });
    });
    const pad = 60;
    return {x: x0 - pad, y: y0 - pad, w: x1 - x0 + pad * 2, h: y1 - y0 + pad * 2};
  }, [nodes]);

  // ---------- view helpers ----------
  const fit = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const {width, height: h} = el.getBoundingClientRect();
    if (!width || !h) return;
    const k = clamp(Math.min(width / bounds.w, h / bounds.h), MIN_K, 1);
    setView({
      k,
      x: (width - bounds.w * k) / 2 - bounds.x * k,
      y: (h - bounds.h * k) / 2 - bounds.y * k,
    });
  }, [bounds]);

  const zoomAt = useCallback((px, py, factor) => {
    interactedRef.current = true;
    setView((v) => {
      const k = clamp(v.k * factor, MIN_K, MAX_K);
      const r = k / v.k;
      return {k, x: px - (px - v.x) * r, y: py - (py - v.y) * r};
    });
  }, []);

  const zoomCenter = useCallback(
    (factor) => {
      const el = viewportRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      zoomAt(r.width / 2, r.height / 2, factor);
    },
    [zoomAt],
  );

  const flashHint = useCallback(() => {
    setHint(true);
    clearTimeout(hintTimer.current);
    hintTimer.current = setTimeout(() => setHint(false), 1400);
  }, []);

  // initial fit + refit on resize until the user moves the view
  useEffect(() => {
    fit();
    setReady(true);
    const onResize = () => {
      if (!interactedRef.current) fit();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [fit]);

  // refit when entering / leaving full screen
  useEffect(() => {
    interactedRef.current = false;
    const id = requestAnimationFrame(fit);
    if (!fullscreen) return () => cancelAnimationFrame(id);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setFullscreen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [fullscreen, fit]);

  // wheel: zoom when the diagram is active (clicked into), Ctrl/Cmd held, or full screen
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;
    const onWheel = (e) => {
      if (!(e.ctrlKey || e.metaKey || activeRef.current || fullscreen)) {
        flashHint();
        return;
      }
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015));
      zoomAt(e.clientX - r.left, e.clientY - r.top, factor);
    };
    el.addEventListener('wheel', onWheel, {passive: false});
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomAt, flashHint, fullscreen]);

  // click outside the diagram makes it inactive again (so the page scrolls normally)
  useEffect(() => {
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) activeRef.current = false;
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);

  // ---------- pointer pan / pinch ----------
  useEffect(() => {
    const onMove = (e) => {
      if (!pointers.current.has(e.pointerId)) return;
      pointers.current.set(e.pointerId, {x: e.clientX, y: e.clientY});
      const g = gesture.current;
      if (!g) return;
      if (g.type === 'pan') {
        const dx = e.clientX - g.sx;
        const dy = e.clientY - g.sy;
        if (!movedRef.current && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
        if (!movedRef.current) {
          movedRef.current = true;
          interactedRef.current = true;
          setDragging(true);
        }
        setView({k: g.view.k, x: g.view.x + dx, y: g.view.y + dy});
      } else if (g.type === 'pinch') {
        const pts = [...pointers.current.values()];
        if (pts.length < 2) return;
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const r = viewportRef.current.getBoundingClientRect();
        const mx = (pts[0].x + pts[1].x) / 2 - r.left;
        const my = (pts[0].y + pts[1].y) / 2 - r.top;
        const k = clamp((g.view.k * dist) / g.dist, MIN_K, MAX_K);
        // keep the world point that was under the start midpoint under the current midpoint
        const wx = (g.mx - g.view.x) / g.view.k;
        const wy = (g.my - g.view.y) / g.view.k;
        movedRef.current = true;
        interactedRef.current = true;
        setView({k, x: mx - wx * k, y: my - wy * k});
      }
    };
    const onUp = (e) => {
      if (!pointers.current.has(e.pointerId)) return;
      pointers.current.delete(e.pointerId);
      if (pointers.current.size === 0) {
        gesture.current = null;
        setDragging(false);
      } else if (pointers.current.size === 1) {
        const [p] = [...pointers.current.values()];
        gesture.current = {type: 'pan', sx: p.x, sy: p.y, view: viewRef.current};
      }
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, []);

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target.closest && e.target.closest('[data-diagram-ui]')) return;
    activeRef.current = true;
    pointers.current.set(e.pointerId, {x: e.clientX, y: e.clientY});
    if (pointers.current.size === 1) {
      movedRef.current = false;
      gesture.current = {type: 'pan', sx: e.clientX, sy: e.clientY, view: viewRef.current};
    } else if (pointers.current.size === 2) {
      const pts = [...pointers.current.values()];
      const r = viewportRef.current.getBoundingClientRect();
      gesture.current = {
        type: 'pinch',
        dist: Math.max(1, Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y)),
        mx: (pts[0].x + pts[1].x) / 2 - r.left,
        my: (pts[0].y + pts[1].y) / 2 - r.top,
        view: viewRef.current,
      };
    }
  };

  const onBackgroundClick = (e) => {
    if (movedRef.current) return;
    if (e.target === viewportRef.current || e.target.dataset.world) setPinned(null);
  };

  const onKeyDown = (e) => {
    const step = 80;
    let handled = true;
    if (e.key === '+' || e.key === '=') zoomCenter(1.2);
    else if (e.key === '-' || e.key === '_') zoomCenter(1 / 1.2);
    else if (e.key === '0') fit();
    else if (e.key === 'ArrowLeft') setView((v) => ({...v, x: v.x + step}));
    else if (e.key === 'ArrowRight') setView((v) => ({...v, x: v.x - step}));
    else if (e.key === 'ArrowUp') setView((v) => ({...v, y: v.y + step}));
    else if (e.key === 'ArrowDown') setView((v) => ({...v, y: v.y - step}));
    else handled = false;
    if (handled) {
      interactedRef.current = true;
      e.preventDefault();
    }
  };

  // links on cards must not fire after a drag
  const suppressClickAfterDrag = (e) => {
    if (movedRef.current) e.preventDefault();
  };

  // ---------- highlight state ----------
  const focus = hover || pinned;
  const related = useMemo(() => {
    if (!focus) return null;
    const nodesOn = new Set();
    const edgesOn = new Set();
    if (focus.kind === 'node') {
      nodesOn.add(focus.id);
      geoEdges.forEach((e) => {
        if (e.from[0] === focus.id || e.to[0] === focus.id) {
          edgesOn.add(e.id);
          nodesOn.add(e.from[0]);
          nodesOn.add(e.to[0]);
        }
      });
    } else {
      const e = geoEdges.find((x) => x.id === focus.id);
      if (e) {
        edgesOn.add(e.id);
        nodesOn.add(e.from[0]);
        nodesOn.add(e.to[0]);
      }
    }
    return {nodesOn, edgesOn};
  }, [focus, geoEdges]);

  const panel = useMemo(() => {
    if (!focus) return null;
    if (focus.kind === 'edge') {
      const e = geoEdges.find((x) => x.id === focus.id);
      if (!e) return null;
      return (
        <>
          <div className={styles.panelTitle}>
            <span className={styles.panelSwatch} style={{background: edgeTypes[e.type].color}} />
            {edgeTypes[e.type].label}
            {e.dashed ? ' (alternative)' : ''}
          </div>
          <div className={styles.panelRow}>
            <strong>{e.A.node.title}</strong> · {e.A.port.label}
          </div>
          <div className={styles.panelArrow}>↓</div>
          <div className={styles.panelRow}>
            <strong>{e.B.node.title}</strong> · {e.B.port.label}
          </div>
          {e.cable && (
            <div className={styles.panelCable}>
              Cable: {e.cable.url ? <a href={e.cable.url} target="_blank" rel="noopener noreferrer">{e.cable.text}</a> : e.cable.text}
              {e.cable.separate ? ' (sold separately)' : ''}
            </div>
          )}
          {e.note && <div className={styles.panelNote}>{e.note}</div>}
        </>
      );
    }
    const n = nodeById[focus.id];
    if (!n) return null;
    const count = geoEdges.filter((e) => e.from[0] === n.id || e.to[0] === n.id).length;
    return (
      <>
        <div className={styles.panelTitle}>{n.title}</div>
        {n.subtitle && <div className={styles.panelRow}>{n.subtitle}</div>}
        {n.note && <div className={styles.panelNote}>{n.note}</div>}
        <div className={styles.panelMuted}>
          {count} connection{count === 1 ? '' : 's'} highlighted
          {n.url ? ' · click the card to open it in the store' : ''}
        </div>
      </>
    );
  }, [focus, geoEdges, nodeById, edgeTypes]);

  const usedTypes = useMemo(() => [...new Set(edges.map((e) => e.type))], [edges]);
  const gridSize = 24 * view.k;

  return (
    <div ref={rootRef} className={clsx(styles.root, fullscreen && styles.fullscreen)}>
      <div className={styles.legend}>
        {usedTypes.map((t) => (
          <span key={t} className={styles.legendItem}>
            <span className={styles.swatch} style={{background: edgeTypes[t].color}} />
            {edgeTypes[t].label}
          </span>
        ))}
        <span className={styles.legendItem}>
          <span className={clsx(styles.swatch, styles.swatchDashed)} />
          Alternative hookup
        </span>
      </div>

      <div
        ref={viewportRef}
        className={clsx(styles.viewport, dragging && styles.grabbing)}
        style={{
          height: fullscreen ? undefined : height,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: `${view.x}px ${view.y}px`,
        }}
        tabIndex={0}
        role="application"
        aria-label="Connection diagram. Drag to pan, use plus and minus keys to zoom, 0 to fit."
        onPointerDown={onPointerDown}
        onClick={onBackgroundClick}
        onKeyDown={onKeyDown}>
        <div
          data-world="1"
          className={styles.world}
          style={{
            transform: `translate(${view.x}px, ${view.y}px) scale(${view.k})`,
            opacity: ready ? 1 : 0,
          }}>
          <svg className={styles.edges} width="1" height="1" aria-hidden="true">
            {geoEdges.map((e) => {
              const on = related && related.edgesOn.has(e.id);
              const dim = related && !on;
              return (
                <g key={e.id} className={clsx(styles.edge, dim && styles.dimmed, on && styles.edgeOn)}>
                  <path
                    className={styles.line}
                    d={e.d}
                    stroke={edgeTypes[e.type].color}
                    strokeDasharray={e.dashed ? '10 8' : undefined}
                  />
                  <path
                    className={styles.hit}
                    d={e.d}
                    onMouseEnter={() => setHover({kind: 'edge', id: e.id})}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => {
                      if (!movedRef.current) setPinned({kind: 'edge', id: e.id});
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {nodes.map((n) => {
            const Tag = n.url ? 'a' : 'div';
            const linkProps = n.url
              ? {href: n.url, target: '_blank', rel: 'noopener noreferrer', onClick: suppressClickAfterDrag}
              : {};
            const dim = related && !related.nodesOn.has(n.id);
            return (
              <React.Fragment key={n.id}>
                <Tag
                  {...linkProps}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className={clsx(styles.card, n.variant === 'hub' && styles.hub, dim && styles.dimmed)}
                  style={{left: n.x, top: n.y, width: n.w, height: n.h}}
                  onMouseEnter={() => setHover({kind: 'node', id: n.id})}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover({kind: 'node', id: n.id})}
                  onBlur={() => setHover(null)}>
                  <div className={styles.cardImg}>
                    {n.img ? (
                      <img src={withBaseUrl(n.img)} alt={n.title} draggable={false} loading="lazy" />
                    ) : (
                      <PcIcon />
                    )}
                    {n.badge && <span className={styles.badge}>{n.badge}</span>}
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{n.title}</div>
                    {n.subtitle && <div className={styles.cardSub}>{n.subtitle}</div>}
                    {n.url && <div className={styles.cardLink}>View product ↗</div>}
                  </div>
                </Tag>
                {n.ports.map((p) => {
                  const a = portAnchor(n, p);
                  const color = portColor[`${n.id}.${p.id}`] || '#8b8d98';
                  const at = p.at == null ? 0.5 : p.at;
                  let style;
                  if (p.side === 'top' || p.side === 'bottom') {
                    style = {
                      left: n.x + n.w * at,
                      top: p.side === 'top' ? n.y - CHIP_H : n.y + n.h,
                      height: CHIP_H,
                    };
                  } else {
                    const pw = p.w || DEFAULT_PORT_W;
                    style = {
                      left: p.side === 'left' ? n.x - pw : n.x + n.w,
                      top: n.y + n.h * at,
                      width: pw,
                    };
                  }
                  return (
                    <React.Fragment key={p.id}>
                      <div
                        className={clsx(styles.port, styles[`port_${p.side}`], dim && styles.dimmed)}
                        style={{...style, '--accent': color}}>
                        {p.label}
                      </div>
                      <span
                        className={clsx(styles.pin, dim && styles.dimmed)}
                        style={{left: a.x, top: a.y, '--accent': color}}
                      />
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}

          {geoEdges
            .filter((e) => e.label || (e.cable && e.cable.separate))
            .map((e) => {
              const dim = related && !related.edgesOn.has(e.id);
              const pos = {left: e.mid.x, top: e.mid.y};
              if (e.cable && e.cable.separate) {
                return (
                  <a
                    key={e.id}
                    href={e.cable.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable={false}
                    onDragStart={(ev) => ev.preventDefault()}
                    onClick={suppressClickAfterDrag}
                    onMouseEnter={() => setHover({kind: 'edge', id: e.id})}
                    onMouseLeave={() => setHover(null)}
                    className={clsx(styles.cablePill, dim && styles.dimmed)}
                    style={pos}>
                    {e.cable.img && <img src={withBaseUrl(e.cable.img)} alt="" draggable={false} loading="lazy" />}
                    <span>
                      {e.cable.text}
                      <small>Sold separately ↗</small>
                    </span>
                  </a>
                );
              }
              return (
                <span
                  key={e.id}
                  className={clsx(styles.edgeLabel, dim && styles.dimmed)}
                  style={{...pos, '--accent': edgeTypes[e.type].color}}
                  onMouseEnter={() => setHover({kind: 'edge', id: e.id})}
                  onMouseLeave={() => setHover(null)}>
                  {e.label}
                </span>
              );
            })}
        </div>

        <div className={styles.toolbar} data-diagram-ui="1">
          <button type="button" onClick={() => zoomCenter(1.25)} title="Zoom in (+)" aria-label="Zoom in">
            +
          </button>
          <span className={styles.zoomLevel}>{Math.round(view.k * 100)}%</span>
          <button type="button" onClick={() => zoomCenter(1 / 1.25)} title="Zoom out (−)" aria-label="Zoom out">
            −
          </button>
          <button type="button" onClick={fit} title="Fit to screen (0)" aria-label="Fit to screen">
            ⤢
          </button>
          <button
            type="button"
            onClick={() => setFullscreen((f) => !f)}
            title={fullscreen ? 'Exit full screen (Esc)' : 'Full screen'}
            aria-label={fullscreen ? 'Exit full screen' : 'Full screen'}>
            {fullscreen ? '✕' : '⛶'}
          </button>
        </div>

        <div className={clsx(styles.hint, hint && styles.hintShow)} aria-hidden="true">
          Click the diagram, or hold Ctrl / ⌘, to zoom with the scroll wheel
        </div>

        <div className={styles.panel} data-diagram-ui="1">
          {panel || (
            <div className={styles.panelMuted}>
              <strong>Drag</strong> to pan · <strong>scroll</strong> or <strong>pinch</strong> to zoom ·{' '}
              <strong>hover</strong> a product or wire for details · <strong>click</strong> a product to open it in
              the store
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Plain-text list of every connection, generated from the same data as the diagram. */
export function ConnectionTable({nodes, edges, edgeTypes}) {
  const byId = {};
  nodes.forEach((n) => {
    byId[n.id] = n;
  });
  const end = ([nid, pid]) => {
    const n = byId[nid];
    const p = n.ports.find((x) => x.id === pid);
    return (
      <>
        {n.url ? (
          <a href={n.url} target="_blank" rel="noopener noreferrer">
            {n.title}
          </a>
        ) : (
          n.title
        )}
        <br />
        <small>{p.label}</small>
      </>
    );
  };
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Cable</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {edges.map((e) => (
          <tr key={e.id}>
            <td>{end(e.from)}</td>
            <td>{end(e.to)}</td>
            <td>
              <span className={styles.tableSwatch} style={{background: edgeTypes[e.type].color}} />
              {e.cable ? (
                e.cable.url ? (
                  <a href={e.cable.url} target="_blank" rel="noopener noreferrer">
                    {e.cable.text}
                  </a>
                ) : (
                  e.cable.text
                )
              ) : (
                edgeTypes[e.type].label
              )}
              {e.cable && e.cable.separate && (
                <>
                  <br />
                  <strong>Sold separately</strong>
                </>
              )}
            </td>
            <td>
              {e.dashed && <strong>Alternative. </strong>}
              {e.note}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
