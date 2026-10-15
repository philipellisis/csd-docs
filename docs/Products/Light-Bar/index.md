---
sidebar_position: 8
---

# RGB 12V Virtual Pinball Light Bar

## Introduction

The CSD RGB 12V Virtual Pinball Light Bar is a purpose-built RGB lighting accessory for virtual pinball cabinets. It provides bright, multi-color LED lighting effects that react to in-game events via DOF (DirectOutput Framework). The all-aluminum anodized housing gives it a clean, finished look whether mounted behind the cabinet or on top of an existing surface.

- **Dimensions:** 18" x 1-7/8" x 1-7/8" (including clear light caps)
- **Power:** 12V DC, ~1A total draw
- **LED boards:** Built-in current-limiting resistors — no extra components needed
- **Maintenance:** Replaceable LED components, no soldering required

## Requirements

The light bar connects to the **Low Power Expansion Board** via a 2-meter 20-pin ribbon cable — a single cable hookup. The PinOne Main Board cannot drive the light bar directly; it must route through the expansion board.

:::note
The PinOne only supports the **16-output version** of the expansion board for use with the light bar.
:::

## Mounting

The bar can be mounted two ways:

- **Behind the cabinet** — hidden installation
- **On top of a surface** — aluminum housing provides a finished appearance

## Wiring

1. Connect the PinOne Main Board to the Low Power Expansion Board via the 4-pin header labeled "to expansion board."
2. Run the 20-pin ribbon cable from the expansion board to the light bar.
3. **Polarity must be correct** when plugging in the ribbon cable — reversed polarity will cause unexpected behavior. Ensure the black wire goes to the GND pin on both boards.

The full connection chain looks like this:

```
PinOne Main Board
    → Low Power Expansion Board (4-pin header)
        → RGB 12V Light Bar (20-pin ribbon cable)
            → Strobe Lights (optional, up to 2)
```

## DOF Configuration

The light bar works with all DOF tables in Visual Pinball X out of the box. DOF sends signals from VPX to the PinOne, which triggers the light bar's RGB outputs through the expansion board's PWM channels — no special per-table configuration is needed.

## Strobe Light Add-On (Optional)

CSD also sells a 12V Strobe Light that plugs directly into the back of the light bar. Each light bar supports up to two strobes.

- **Specs:** 2" x 2" aluminum anodized housing, ~0.5A draw, up to 600 lumens at full power
- **Thermal limit:** Maximum continuous full-power on-time is approximately 30 seconds
- **Polarity matters for strobes** — incorrect polarity can damage the expansion board or the strobes

## Custom Cabinet Mount by Chris Crawford

Many thanks to Chris Crawford for designing a custom 3-piece topper mount for the CSD Light Bar. The mount is split into left, center, and right sections, making it easy to print and install on your cabinet.

![Light Bar mounted on cabinet](./img/CSD%20Light%20Bar%20Face.jpg)

STL files for 3D printing:
- [Left Section](./img/CSD_Light_Bar_Topper_Left.stl)
- [Center Section](./img/CSD_Light_Bar_Topper_Center.stl)
- [Right Section](./img/CSD_Light_Bar_Topper_Right.stl)

## Light Bar Breakout Board (Optional)

A breakout board is available that lets you connect the light bar to any DOF-compatible device with 15 outputs, not just the PinOne. The light bar uses 15 output channels (5 RGB zones × 3 channels each).
