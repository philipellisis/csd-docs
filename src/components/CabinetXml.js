import React, { useState } from 'react';
const { create } = require('xmlbuilder2');
import styles from './cabinet.module.css';

export default function CabinetXml() {
    const [numToys, setNumToys] = useState(3);
    const [comPort, setComPort] = useState(1);
    const [dtrEnable, setDtrEnable] = useState(false);
    const [toys, setToys] = useState([{ name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp'},
                                      { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp'},
                                      { name: 'Back Panel', numberOfLeds: '256', width: '32', height: '8', ledStripArrangement: 'BottomUpAlternateRightLeft'}
                                    ]);

    const handleNumToysChange = (event) => {
        const newNumToys = Math.min(Math.max(1, parseInt(event.target.value || '0', 10)), 6);
        setNumToys(newNumToys);
        setToys(toys.slice(0, newNumToys));
    };

    const handleComPortChange = (event) => {
        const newComPort = Math.min(Math.max(1, parseInt(event.target.value || '0', 10)), 6);
        setComPort(newComPort);
        
    }

    const handleDtrEnableChange = (event) => {
        setDtrEnable(event.target.checked);
    }

    const handleToyChange = (index, key, value) => {
        const updatedToys = [...toys];
        updatedToys[index] = { ...updatedToys[index], [key]: value };
        toys.forEach((toy, toyIndex) => {
            toys.forEach((toyDup, dupIndex) => {
                if (toy.name === toyDup.name && toyIndex > dupIndex) {
                    updatedToys[toyIndex] = { ...updatedToys[toyIndex], [key]: value };
                }
            })
        })


        setToys(updatedToys);
    };

    const generateXML = () => {
        const doc = create({ version: '1.0' })
            .ele('Cabinet', { 'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance', 'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema' })
            .ele('Name').txt('AddressableLEDSetup').up()
    
        // WemosD1MPStripController and its contents
        const outputControllers = doc.ele('OutputControllers');
        const wemosController = outputControllers.ele('WemosD1MPStripController');
        wemosController.ele('Name').txt('LED Strips').up();
        // Add other elements to WemosD1MPStripController here
        // ...
        toys.forEach((toy, index) => {
            if (toy && toy.name && toy.numberOfLeds) {
                wemosController.ele("NumberOfLedsStrip" + (index + 1)).txt(toy.numberOfLeds.toString()).up();
            }
        });
        wemosController.ele('ComPortName').txt('COM' + comPort.toString()).up();
        wemosController.ele('ComPortTimeOutMs').txt('300').up();
        wemosController.ele('ComPortBaudRate').txt('2000000').up();
        wemosController.ele('ComPortOpenWaitMs').txt('300').up();
        wemosController.ele('ComPortHandshakeStartWaitMs').txt('100').up();
        wemosController.ele('ComPortHandshakeEndWaitMs').txt('100').up();
        wemosController.ele('SendPerLedstripLength').txt('true').up();
        wemosController.ele('UseCompression').txt('true').up();
        wemosController.ele('TestOnConnect').txt('true').up();
        wemosController.ele('ComPortDtrEnable').txt(dtrEnable).up();


        wemosController.up(); // Properly close WemosD1MPStripController
        outputControllers.up(); // Close OutputControllers
        // Creating Toys tag
        const toysElement = doc.ele('Toys');
        let currentLedCount = 1;
        toys.forEach((toy, index) => {
            let shouldAdd = true;
            toys.forEach((toyDup, dupIndex) => {
                if (toy.name === toyDup.name && index > dupIndex) {
                    shouldAdd = false;
                }
            })
            if (toy && toy.name && shouldAdd) {
                const ledStrip = toysElement.ele('LedStrip');
                ledStrip.ele('Name').txt(toy.name).up();
                ledStrip.ele('Width').txt(toy.width || '0').up();
                ledStrip.ele('Height').txt(toy.height || '0').up();
                ledStrip.ele('LedStripArrangement').txt(toy.ledStripArrangement || '').up();
                // Add other static elements for LedStrip here
                ledStrip.ele('ColorOrder').txt('RGB').up();
                ledStrip.ele('FirstLedNumber').txt(currentLedCount).up();
                ledStrip.ele('FadingCurveName').txt('SwissLizardsLedCurve').up();
                ledStrip.ele('Brightness').txt('100').up();
                ledStrip.ele('OutputControllerName').txt('LED Strips').up();
            }
            currentLedCount += parseInt(toy.numberOfLeds || '0', 10);

        });
        const LedWizEquivalent = toysElement.ele('LedWizEquivalent');
        LedWizEquivalent.ele('Name').txt('LedWizEquivalent 30').up();
        LedWizEquivalent.ele('LedWizNumber').txt('30').up();
        const outputs = LedWizEquivalent.ele('Outputs');
        let toyIndex = 0;
        toys.forEach((toy, index) => {
            let shouldAdd = true;
            toys.forEach((toyDup, dupIndex) => {
                if (toy.name === toyDup.name && index > dupIndex) {
                    shouldAdd = false;
                }
            })
            if (toy && toy.name && shouldAdd) {
                const equivalent = outputs.ele('LedWizEquivalentOutput');
                equivalent.ele('OutputName').txt(toy.name).up();
                equivalent.ele('LedWizEquivalentOutputNumber').txt((toyIndex * 3) + 1).up();
                toyIndex += 1;
            }
        });
    
        toysElement.up(); // Close Toys
        
    
        return doc.end({ prettyPrint: true });
    };

    const ledStripArrangements = [
        '',
        'LeftRightTopDown', 'LeftRightBottomUp', 'RightLeftTopDown', 'RightLeftBottomUp',
        'TopDownLeftRight', 'TopDownRightLeft', 'BottomUpLeftRight', 'BottomUpRightLeft',
        'LeftRightAlternateTopDown', 'LeftRightAlternateBottomUp', 'RightLeftAlternateTopDown', 'RightLeftAlternateBottomUp',
        'TopDownAlternateLeftRight', 'TopDownAlternateRightLeft', 'BottomUpAlternateLeftRight', 'BottomUpAlternateRightLeft'
    ];

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <label>
                    Number of LED Outputs (1-6):
                    <input className={styles.input} type="number" value={numToys} onChange={handleNumToysChange} min="1" max="6" />
                </label>

            </div>
            <div className={styles.label}>
                <label>
                    COM Port Number (Find in device manager):
                    <input className={styles.input} type="number" value={comPort} onChange={handleComPortChange} min="1" max="30" />
                </label>
                
            </div>
            <div className={styles.label}>
                <label>
                    DTR Enabled (Only enable if using a Wemos S2 or S3 mini)
                    <input
                        className={styles.input}
                        type="checkbox"
                        checked={dtrEnable}
                        onChange={handleDtrEnableChange}
                    />
                </label>
            </div>
            {[...Array(numToys)].map((_, index) => (
                <div className={styles.toyContainer} key={index}>
                    <div className={styles.label}>
                        <label>
                            Name of Toy {index + 1} (Same name will combine outputs into one):
                            <input className={styles.input} type="text" value={toys[index]?.name || ''} onChange={(e) => handleToyChange(index, 'name', e.target.value)} />
                        </label>
                    </div>
                    <div className={styles.label}>
                        <label>
                            Number of LEDs:
                            <input className={styles.input} type="number" value={toys[index]?.numberOfLeds || ''} onChange={(e) => handleToyChange(index, 'numberOfLeds', e.target.value)} min="1" max="4096" />
                        </label>
                    </div>
                    <div className={styles.label}>
                        <label>
                            Width:
                            <input className={styles.input} type="number" value={toys[index]?.width || ''} onChange={(e) => handleToyChange(index, 'width', e.target.value)} min="1" />
                        </label>
                    </div>
                    <div className={styles.label}>
                        <label>
                            Height:
                            <input className={styles.input} type="number" value={toys[index]?.height || ''} onChange={(e) => handleToyChange(index, 'height', e.target.value)} min="1" />
                        </label>
                    </div>
                    <div className={styles.label}>
                        <label>
                            LED Strip Arrangement:
                            <select className={styles.input} value={toys[index]?.ledStripArrangement || ''} onChange={(e) => handleToyChange(index, 'ledStripArrangement', e.target.value)}>
                                {ledStripArrangements.map(arrangement => (
                                    <option key={arrangement} value={arrangement}>{arrangement}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
            ))}

            <pre>
                <code class="language-xml">
                {generateXML()}
                </code>
                
            </pre>
            {/* <XMLViewer xml={generateXML()} /> */}
        </div>
    );
    
}
