import React, { useState } from 'react';
const { create } = require('xmlbuilder2');
import styles from './cabinet.module.css';

export default function CabinetXml() {
    const [numControllers, setNumControllers] = useState(1);
    const [controllers, setControllers] = useState([{ name: 'WemosD1MPStripController', numToys: 3, comPort: 1, dtrEnable: true}]);
    const [toys, setToys] = useState([
        [{ name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp', outputNumber: 1 },
        { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp', outputNumber: 2 },
        { name: 'Back Panel', numberOfLeds: '256', width: '32', height: '8', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 3 }
        ]]);


    const handleSingleMatrixToyChange = () => {
        setControllers([{ name: 'WemosD1MPStripController', numToys: 3, comPort: 1, dtrEnable: true}]);
        setToys([[
            { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp', outputNumber: 1 },
            { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp', outputNumber: 2 },
            { name: 'Back Panel', numberOfLeds: '256', width: '32', height: '8', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 3 }
        ]]);
    };
    const handle4MatrixToyChange = () => {
        setControllers([{ name: 'WemosD1MPStripController', numToys: 6, comPort: 1, dtrEnable: true}]);
        setToys([[
            { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp', outputNumber: 1 },
            { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp', outputNumber: 2 },
            { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 3 },
            { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 4 },
            { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 5 },
            { name: 'Back Panel', numberOfLeds: '256', width: '64', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 6 }
        ]]);
    };
    const handle5MatrixToyChange = () => {
        setControllers([{ name: 'WemosD1MPStripController', numToys: 7, comPort: 1, dtrEnable: true}]);
        setToys([[
            { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp', outputNumber: 1 },
            { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp', outputNumber: 2 },
            { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 3 },
            { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 4 },
            { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 5 },
            { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 6 },
            { name: 'Back Panel', numberOfLeds: '256', width: '80', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 7 }
        ]]);
    };
    const handle6MatrixToyChange = () => {
        setControllers([{ name: 'WemosD1MPStripController', numToys: 8, comPort: 1, dtrEnable: true}]);
        setToys([[
            { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp', outputNumber: 1 },
            { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp', outputNumber: 2 },
            { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 3 },
            { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 4 },
            { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 5 },
            { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 6 },
            { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 7 },
            { name: 'Back Panel', numberOfLeds: '256', width: '96', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 8 }
        ]]);
    };

    const handle7MatrixToyChange = () => {
        setControllers([{ name: 'WemosD1MPStripController', numToys: 9, comPort: 1, dtrEnable: true}]);
        setToys([[
            { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp', outputNumber: 1 },
            { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp', outputNumber: 2 },
            { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 3 },
            { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 4 },
            { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 5 },
            { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 6 },
            { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 7 },
            { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 8 },
            { name: 'Back Panel', numberOfLeds: '256', width: '112', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 9 }
        ]]);
    };

    const handle8MatrixToyChange = () => {
        setControllers([{ name: 'WemosD1MPStripController', numToys: 10, comPort: 1, dtrEnable: true}]);
        setToys([[
            { name: 'Right Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'LeftRightBottomUp', outputNumber: 1 },
            { name: 'Left Side', numberOfLeds: '144', width: '1', height: '144', ledStripArrangement: 'RightLeftBottomUp', outputNumber: 2 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 3 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 4 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 5 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 6 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 7 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 8 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 9 },
            { name: 'Back Panel', numberOfLeds: '256', width: '128', height: '16', ledStripArrangement: 'TopDownAlternateRightLeft', outputNumber: 10 }
        ]]);
    };
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
            newControllers.push({ name: 'WemosD1MPStripController', numToys: 3, comPort: 1, dtrEnable: true});
            setControllers(newControllers);
        }
    };

    const handleControllerChange = (index, key, value) => {
        let newValue = '0'
        if (key === 'numToys') {
            newValue = Math.min(Math.max(1, parseInt(value || '0', 10)), 36);
        } else {
            newValue = value;
        }
        console.log(index, key, newValue)
        const updatedControllers = [...controllers];
        updatedControllers[index] = { ...updatedControllers[index], [key]: newValue };
        console.log(updatedControllers)
        setControllers(updatedControllers)
    };


    const handleToyChange = (controllerIndex, index, key, value) => {
        const updatedToys = [...toys[controllerIndex]];
        updatedToys[index] = { ...updatedToys[index], [key]: value };
        const newToys = [...toys];
        newToys[controllerIndex] = updatedToys;
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

            // Group toys by outputNumber and sum their LED counts
            const outputLedCounts = {};
            toys[index].forEach((toy, toyIndex) => {
                if (toy && toy.name && toy.numberOfLeds) {
                    const outputNum = toy.outputNumber !== undefined ? toy.outputNumber : Math.min(toyIndex + 1, 10);
                    outputLedCounts[outputNum] = (outputLedCounts[outputNum] || 0) + parseInt(toy.numberOfLeds, 10);
                }
            });
            Object.keys(outputLedCounts).map(Number).sort((a, b) => a - b).forEach(outputNum => {
                wemosController.ele('NumberOfLedsStrip' + outputNum).txt(outputLedCounts[outputNum]).up();
            });

            if (controller.comPort) {
                wemosController.ele('ComPortName').txt('COM' + controller.comPort.toString()).up();
            }


            if (controller.name === 'WemosD1MPStripController') {
                wemosController.ele('ComPortTimeOutMs').txt('300').up();
                wemosController.ele('ComPortBaudRate').txt('2000000').up();
                wemosController.ele('ComPortOpenWaitMs').txt('300').up();
                wemosController.ele('ComPortHandshakeStartWaitMs').txt('100').up();
                wemosController.ele('ComPortHandshakeEndWaitMs').txt('100').up();
                wemosController.ele('SendPerLedstripLength').txt('true').up();
                wemosController.ele('UseCompression').txt('true').up();
                wemosController.ele('ComPortDtrEnable').txt(controller.dtrEnable).up();
            }

            wemosController.ele('TestOnConnect').txt('true').up();
            wemosController.up(); // Properly close WemosD1MPStripController

        });

        outputControllers.up(); // Close OutputControllers
        // Creating Toys tag
        const toysElement = doc.ele('Toys');

        controllers.forEach((controller, controllerIndex) => {
            // Build output groups ordered by outputNumber to calculate FirstLedNumber
            const outputGroups = {};
            toys[controllerIndex].forEach((toy, idx) => {
                const outputNum = toy.outputNumber !== undefined ? toy.outputNumber : Math.min(idx + 1, 10);
                if (!outputGroups[outputNum]) outputGroups[outputNum] = [];
                outputGroups[outputNum].push({ toy, idx });
            });

            const sortedOutputNums = Object.keys(outputGroups).map(Number).sort((a, b) => a - b);
            const toyFirstLed = {};
            let globalLedCount = 1;
            sortedOutputNums.forEach(outputNum => {
                outputGroups[outputNum].forEach(({ toy, idx }) => {
                    toyFirstLed[idx] = globalLedCount;
                    globalLedCount += parseInt(toy.numberOfLeds || '0', 10);
                });
            });

            toys[controllerIndex].forEach((toy, index) => {
                const isFirstOccurrence = !toys[controllerIndex].some((t, i) => t.name === toy.name && i < index);
                if (toy && toy.name && isFirstOccurrence) {
                    const ledStrip = toysElement.ele('LedStrip');
                    ledStrip.ele('Name').txt(toy.name).up();
                    ledStrip.ele('Width').txt(toy.width || '0').up();
                    ledStrip.ele('Height').txt(toy.height || '0').up();
                    ledStrip.ele('LedStripArrangement').txt(toy.ledStripArrangement || '').up();
                    // Add other static elements for LedStrip here
                    ledStrip.ele('ColorOrder').txt('RGB').up();
                    ledStrip.ele('FirstLedNumber').txt(toyFirstLed[index]).up();
                    ledStrip.ele('FadingCurveName').txt('SwissLizardsLedCurve').up();
                    ledStrip.ele('Brightness').txt('100').up();
                    ledStrip.ele('OutputControllerName').txt('LED Strips ' + controllerIndex).up();
                }
            });

            const LedWizEquivalent = toysElement.ele('LedWizEquivalent');
            LedWizEquivalent.ele('Name').txt('LedWizEquivalent 3' + controllerIndex).up();
            LedWizEquivalent.ele('LedWizNumber').txt('3' + controllerIndex).up();
            const outputs = LedWizEquivalent.ele('Outputs');
            let toyIndex = 0;
            toys[controllerIndex].forEach((toy) => {
                if (toy && toy.name) {
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
                        Number of LED Strips (1-36):
                        <input className={styles.input} type="number" value={controllers[controllerIndex]?.numToys || 0} onChange={(e) => handleControllerChange(controllerIndex, 'numToys', e.target.value)} min="1" max="36" />
                    </label>

                </div>
                <div className={styles.label}>
                    <label>
                        COM Port Number (Find in device manager):
                        <input className={styles.input} type="number" value={controllers[controllerIndex]?.comPort || 1} onChange={(e) => handleControllerChange(controllerIndex, 'comPort', e.target.value)} min="1" max="30" />
                    </label>

                </div>
                <div className={styles.label}>
                    <label>
                        DTR Enabled (Only enable if using a Wemos S2 or S3 mini)
                        <input
                            className={styles.input}
                            type="checkbox"
                            checked={controllers[controllerIndex]?.dtrEnable || false}
                            onChange={(e) => handleControllerChange(controllerIndex, 'dtrEnable', e.target.checked)}
                        />
                    </label>
                </div>
                {[...Array(controllers[controllerIndex].numToys)].map((_, index) => (
                    <div className={styles.toyContainer} key={index}>
                        <div className={styles.label}>
                            <label>
                                Name of Toy {index + 1} (Same name will combine outputs into one):
                                <input className={styles.input} type="text" value={toys[controllerIndex][index]?.name || ''} onChange={(e) => handleToyChange(controllerIndex, index, 'name', e.target.value)} />
                            </label>
                        </div>
                        <div className={styles.label}>
                            <label>
                                Output Number (1-10):
                                <input className={styles.input} type="number" value={toys[controllerIndex][index]?.outputNumber !== undefined ? toys[controllerIndex][index].outputNumber : Math.min(index + 1, 10)} onChange={(e) => handleToyChange(controllerIndex, index, 'outputNumber', parseInt(e.target.value, 10))} min="1" max="10" />
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
