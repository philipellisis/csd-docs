import React, { useState } from 'react';
const { create } = require('xmlbuilder2');
import styles from './cabinet.module.css';

export default function CabinetXml() {
    const [numControllers, setNumControllers] = useState(1);
    const [numToys, setNumToys] = useState([3]);
    const [comPort, setComPort] = useState([1]);
    const [controllers, setControllers] = useState([{ name: 'WemosD1MPStripController', numToys: 3, comPort: 1, dtrEnable: true}]);
    const [dtrEnable, setDtrEnable] = useState([true]);
    const [toys, setToys] = useState([
        [{ name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp' },
        { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp' },
        { name: 'Back Panel', numberOfLeds: '256', width: '32', height: '8', ledStripArrangement: 'TopDownAlternateRightLeft' }
        ]]);


    const handleSingleMatrixToyChange = () => {
        setNumToys([3]);
        setToys([[{ name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp' },
        { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp' },
        { name: 'Back Panel', numberOfLeds: '256', width: '32', height: '8', ledStripArrangement: 'TopDownAlternateRightLeft' }
        ]])
    }
    const handle4MatrixToyChange = () => {
        setNumToys([6]);
        setToys(
            [[
                { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp' },
                { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp' },
                { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' }
            ]]
        )
    }
    const handle5MatrixToyChange = () => {
        setNumToys([7]);
        setToys(
            [[
                { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp' },
                { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp' },
                { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' }
            ]]
        )
    }
    const handle6MatrixToyChange = () => {
        setNumToys([8]);
        setToys(
            [[
                { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp' },
                { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp' },
                { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' }
            ]]
        )
    }

    const handle7MatrixToyChange = () => {
        setNumToys([9]);
        setToys(
            [[
                { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp' },
                { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp' },
                { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' }
            ]]
        )
    }

    const handle8MatrixToyChange = () => {
        setNumToys([10]);
        setToys(
            [[
                { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp' },
                { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' },
                { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft' }
            ]]
        )
    }
    const handleNumToysChange = (index, event) => {
        const newNumToys = Math.min(Math.max(1, parseInt(event.target.value || '0', 10)), 6);
        const newNumToysArray = [...numToys];
        newNumToysArray[index] = newNumToys;

        setNumToys(newNumToysArray);
        const newToys = [...toys];
        newToys[index] = newToys[index].slice(0, newNumToys);
        setToys(newToys);
    };

    const handleNumControllersChange = (event) => {
        const newNumControllers = Math.min(Math.max(1, parseInt(event.target.value || '0', 10)), 6);
        setNumControllers(newNumControllers);
        if (toys.length < newNumControllers) {
            const newToys = [...toys];
            newToys.push([]);
            setToys(newToys);
        }
        if (controllers.length < newNumControllers) {
            const newControllers = [...controllers];
            newControllers.push({ name: 'WemosD1MPStripController' });
            setControllers(newControllers);
        }
    };

    const handleControllerChange = (index, key, value) => {
        const updatedControllers = [...controllers];
        updatedControllers[index] = { ...updatedControllers[index], [key]: value };

        controllers.forEach((toy, toyIndex) => {
            controllers.forEach((toyDup, dupIndex) => {
                if (toy.name === toyDup.name && toyIndex > dupIndex) {
                    updatedControllers[toyIndex] = { ...updatedControllers[toyIndex], [key]: value };
                }
            })
        })
        setControllers(updatedControllers)
    };

    const handleComPortChange = (index, event) => {
        const newComPort = Math.min(Math.max(1, parseInt(event.target.value || '0', 10)), 30);
        const newCom = [...comPort];
        newCom[index] = newComPort;
        setComPort(newCom);

    }

    const handleDtrEnableChange = (index, event) => {
        const newDtr = [...dtrEnable];
        newDtr[index] = event.target.checked;
        setDtrEnable(newDtr);
    }

    const handleToyChange = (controllerIndex, index, key, value) => {
        const updatedToys = [...toys[controllerIndex]];
        updatedToys[index] = { ...updatedToys[index], [key]: value };
        toys.forEach((toy, toyIndex) => {
            toys.forEach((toyDup, dupIndex) => {
                if (toy.name === toyDup.name && toyIndex > dupIndex) {
                    updatedToys[toyIndex] = { ...updatedToys[toyIndex], [key]: value };
                }
            })
        })

        const newToys = [...toys];
        newToys[controllerIndex] = updatedToys
        setToys(newToys);

    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generateXML());
            alert('Code copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const generateXML = () => {
        const doc = create({ version: '1.0' })
            .ele('Cabinet', { 'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance', 'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema' })
            .ele('Name').txt('AddressableLEDSetup').up()

        // WemosD1MPStripController and its contents
        const outputControllers = doc.ele('OutputControllers');

        controllers.forEach((controller, index) => {

            const wemosController = outputControllers.ele(controller.name);
            wemosController.ele('Name').txt('LED Strips ' + index).up();
            // Add other elements to WemosD1MPStripController here
            // ...
            toys.forEach((toy, index) => {
                if (toy && toy.name && toy.numberOfLeds) {
                    wemosController.ele("NumberOfLedsStrip" + (index + 1)).txt(toy.numberOfLeds.toString()).up();
                }
            });
            if (comPort[index]) {
                wemosController.ele('ComPortName').txt('COM' + comPort[index].toString()).up();
            }
            

            if (controller.name === 'WemosD1MPStripController') {
                wemosController.ele('ComPortTimeOutMs').txt('300').up();
                wemosController.ele('ComPortBaudRate').txt('2000000').up();
                wemosController.ele('ComPortOpenWaitMs').txt('300').up();
                wemosController.ele('ComPortHandshakeStartWaitMs').txt('100').up();
                wemosController.ele('ComPortHandshakeEndWaitMs').txt('100').up();
                wemosController.ele('SendPerLedstripLength').txt('true').up();
                wemosController.ele('UseCompression').txt('true').up();
                wemosController.ele('ComPortDtrEnable').txt(dtrEnable[index]).up();
            }

            wemosController.ele('TestOnConnect').txt('true').up();
            wemosController.up(); // Properly close WemosD1MPStripController

        });

        outputControllers.up(); // Close OutputControllers
        // Creating Toys tag
        const toysElement = doc.ele('Toys');

        controllers.forEach((controller, controllerIndex) => {
            let currentLedCount = 1;
            toys[controllerIndex].forEach((toy, index) => {
                let shouldAdd = true;
                toys[controllerIndex].forEach((toyDup, dupIndex) => {
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
                    ledStrip.ele('OutputControllerName').txt('LED Strips ' + controllerIndex).up();
                }
                currentLedCount += parseInt(toy.numberOfLeds || '0', 10);

            });
            const LedWizEquivalent = toysElement.ele('LedWizEquivalent');
            LedWizEquivalent.ele('Name').txt('LedWizEquivalent 3' + controllerIndex).up();
            LedWizEquivalent.ele('LedWizNumber').txt('3' + controllerIndex).up();
            const outputs = LedWizEquivalent.ele('Outputs');
            let toyIndex = 0;
            toys[controllerIndex].forEach((toy, index) => {
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
        <div>
            <div className={styles.container}>
                Press buttons below to set pre-configured cabinet files (All configurations include L/R side strip LEDs)
                <div>
                    < button className={styles.Button} onClick={handleSingleMatrixToyChange}>Single Matrix Config</button>
                    < button className={styles.Button} onClick={handle4MatrixToyChange}>4 Matrix Config</button>
                    < button className={styles.Button} onClick={handle5MatrixToyChange}>5 Matrix Config</button>
                    < button className={styles.Button} onClick={handle6MatrixToyChange}>6 Matrix Config</button>
                    < button className={styles.Button} onClick={handle7MatrixToyChange}>7 Matrix Config</button>
                    < button className={styles.Button} onClick={handle8MatrixToyChange}>8 Matrix Config</button>
                </div>

            </div>

            <div className={styles.container}>
                <div className={styles.label}>
                    <label>
                        Number of Controllers
                        <input className={styles.input} type="number" value={numControllers} onChange={handleNumControllersChange} min="1" max="3" />
                        
                    </label>

                </div>
            </div>

            {[...Array(numControllers)].map((_, controllerIndex) => (
            <div className={styles.container}>

                <div className={styles.label}>
                    <label>
                        Type of Controller {controllerIndex + 1}:
                        <select className={styles.input} value={controllers[controllerIndex]?.name || ''} onChange={(e) => handleControllerChange(controllerIndex, 'name', e.target.value)}>
                            <option value="WemosD1MPStripController">WemosD1MPStripController</option>
                            <option value="TeensyStripController">TeensyStripController</option>
                        </select>
                    </label>

                </div>
                <div className={styles.label}>
                    <label>
                        Number of LED Outputs (1-10):
                        <input className={styles.input} type="number" value={numToys[controllerIndex]} onChange={(e) => handleNumToysChange(controllerIndex, e)} min="1" max="10" />
                    </label>

                </div>
                <div className={styles.label}>
                    <label>
                        COM Port Number (Find in device manager):
                        <input className={styles.input} type="number" value={comPort[controllerIndex]} onChange={(e) => handleComPortChange(controllerIndex, e)} min="1" max="30" />
                    </label>

                </div>
                <div className={styles.label}>
                    <label>
                        DTR Enabled (Only enable if using a Wemos S2 or S3 mini)
                        <input
                            className={styles.input}
                            type="checkbox"
                            checked={dtrEnable[controllerIndex]}
                            onChange={(e) => handleDtrEnableChange(controllerIndex, e)}
                        />
                    </label>
                </div>
                {[...Array(numToys[controllerIndex])].map((_, index) => (
                    <div className={styles.toyContainer} key={index}>
                        <div className={styles.label}>
                            <label>
                                Name of Toy {index + 1} (Same name will combine outputs into one):
                                <input className={styles.input} type="text" value={toys[controllerIndex][index]?.name || ''} onChange={(e) => handleToyChange(controllerIndex, index, 'name', e.target.value)} />
                            </label>
                        </div>
                        <div className={styles.label}>
                            <label>
                                Number of LEDs:
                                <input className={styles.input} type="number" value={toys[controllerIndex][index]?.numberOfLeds || ''} onChange={(e) => handleToyChange(controllerIndex, index, 'numberOfLeds', e.target.value)} min="1" max="4096" />
                            </label>
                        </div>
                        <div className={styles.label}>
                            <label>
                                Width:
                                <input className={styles.input} type="number" value={toys[controllerIndex][index]?.width || ''} onChange={(e) => handleToyChange(controllerIndex, index, 'width', e.target.value)} min="1" />
                            </label>
                        </div>
                        <div className={styles.label}>
                            <label>
                                Height:
                                <input className={styles.input} type="number" value={toys[controllerIndex][index]?.height || ''} onChange={(e) => handleToyChange(controllerIndex, index, 'height', e.target.value)} min="1" />
                            </label>
                        </div>
                        <div className={styles.label}>
                            <label>
                                LED Strip Arrangement:
                                <select className={styles.input} value={toys[controllerIndex][index]?.ledStripArrangement || ''} onChange={(e) => handleToyChange(controllerIndex, index, 'ledStripArrangement', e.target.value)}>
                                    {ledStripArrangements.map(arrangement => (
                                        <option key={arrangement} value={arrangement}>{arrangement}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                ))}
                </div>
            ))}
                <div className={styles.container}>
                <div className={styles.preContainer}>
                    <button className={styles.copyButton} onClick={copyToClipboard}>Copy to Clipboard</button>
                    <pre>
                        <code class="language-xml">
                            {generateXML()}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );

}
