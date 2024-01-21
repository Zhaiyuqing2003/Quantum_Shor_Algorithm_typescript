import { QuantumCircuit } from "../../lib/QuantumCircuit"
import { AtomizeStrategy } from "../../lib/QuantumGate/Atomizer";
import { GateSymbol } from "../../lib/QuantumGate/GateSymbol";
import { GeneratorType } from "../../lib/QuantumGate/Generator";
import { QuantumGate } from "../../lib/QuantumGate/QuantumGate";
import QuantumState from "../../lib/QuantumState";
import QuantumVectorState from "../../lib/QuantumVectorState";
import { QuantumWire } from "../../lib/QuantumWire";
import ComplexNumber from "../../util/ComplexNumber";
import Vector from "../../util/Vector";

// @ts-ignore
import Plotly from "plotly.js-dist";
// @ts-ignore
import parameter from "./speed.json"

const generateRandomCircuit = (wireLength : number, gateNumber : number = 50) => {
    // generator one of three H, CX, P
    const wire = QuantumWire.create(wireLength);

    for (let i = 0; i < gateNumber; i++) {
        const rand = Math.random();

        if (rand < 0.33) {
            wire.addGate(QuantumGate.fromBasis({
                type : GateSymbol.Hadamard,
                wire : Math.floor(Math.random() * wireLength),
                wireLength
            }));
        } else if (rand < 0.66) {
            wire.addGate(QuantumGate.fromBasis({
                type : GateSymbol.Phase,
                wire : Math.floor(Math.random() * wireLength),
                angle : Math.random() * Math.PI * 2,
                wireLength
            }))

        } else {
            const targetWire = Math.floor(Math.random() * wireLength);
            // rand control wire !== targetWire
            let controlWire = Math.floor(Math.random() * wireLength);
            while (controlWire === targetWire)
                controlWire = Math.floor(Math.random() * wireLength);

            wire.addGate(QuantumGate.fromSingleControlled({
                type : GateSymbol.PauliX,
                wire : targetWire,
                controlWire,
                wireLength
            }));
        }
    }

    return wire;
}

const testSimulatorSpeed = <T extends GeneratorType>(
    circuitGenerationFn : (wire : QuantumWire) => [QuantumCircuit<T>, number],
    circuitExecutionFn : (circuit : QuantumCircuit<T>) => number,
    startWireLength : number = 3, endWireLength = 10, iterations : number = 5, 
) => {
    return new Promise((resolve) => {
        const generateTimeData : number[][] = [];
        const executeTimeData : number[][] = [];

        let currentWireLength = startWireLength;
        let currentIteration = 0;

        const iter = () => {
            if (currentWireLength >= endWireLength && currentIteration >= iterations) {
                resolve({
                    generateTimeData,
                    executeTimeData
                });
                return;
            }

            if (currentWireLength < endWireLength && currentIteration >= iterations) {
                currentWireLength++;
                currentIteration = 0;
            }

            if (generateTimeData[currentWireLength] === undefined) {
                generateTimeData[currentWireLength] = [];
            }

            if (executeTimeData[currentWireLength] === undefined) {
                executeTimeData[currentWireLength] = [];
            }

            const wire = generateRandomCircuit(currentWireLength);
    

            const [circuit, deltaGenTime] = circuitGenerationFn(wire);

            generateTimeData[currentWireLength].push(deltaGenTime);

            const deltaRuntime = circuitExecutionFn(circuit);

            executeTimeData[currentWireLength].push(deltaRuntime);

            console.log(`Wire length: ${currentWireLength}, iteration: ${currentIteration}`);

            currentIteration++;
            setTimeout(iter, 0);
        }
        setTimeout(iter, 0);
    }) as Promise<{
        generateTimeData : number[][],
        executeTimeData : number[][]
    }>;
}
const testAllSimulator = async () => {
    const {
        generateTimeData : IaGenData,
        executeTimeData : IaExecData
    } = await testSimulatorSpeed(
        (wire) => {
            const startGenTime = performance.now();
            const circuitIa = wire.generate(AtomizeStrategy.Min, GeneratorType.Matrix);
            const endGenTime = performance.now();
            return [circuitIa, endGenTime - startGenTime];
        },
        (circuit) => {
            const vec = Vector.zeros(2 ** circuit.wireLength);
            vec.set(0, ComplexNumber.ONE);

            const startExecTime = performance.now();
            circuit.executeMatrix(vec);
            const endExecTime = performance.now();
            return endExecTime - startExecTime;
        }
    , 3, 7, 5);

    const {
        generateTimeData : IbGenData,
        executeTimeData : IbExecData
    } = await testSimulatorSpeed(
        (wire) => {
            const startGenTime = performance.now();
            const circuitIa = wire.generate(AtomizeStrategy.Min, GeneratorType.Matrix);
            const endGenTime = performance.now();
            return [circuitIa, endGenTime - startGenTime];
        },
        (circuit) => {
            const vec = Vector.zeros(2 ** circuit.wireLength);
            vec.set(0, ComplexNumber.ONE);

            const startExecTime = performance.now();
            circuit.execute(vec);
            const endExecTime = performance.now();
            return endExecTime - startExecTime;
        }
    , 3, 9, 5)

    const {
        generateTimeData : IcGenData,
        executeTimeData : IcExecData
    } = await testSimulatorSpeed(
        (wire) => {
            const startGenTime = performance.now();
            const circuitIc = wire.generate(AtomizeStrategy.Min, GeneratorType.SparseMatrix);
            const endGenTime = performance.now();
            return [circuitIc, endGenTime - startGenTime];
        },
        (circuit) => {
            const vec = Vector.zeros(2 ** circuit.wireLength);
            vec.set(0, ComplexNumber.ONE);

            const startExecTime = performance.now();
            circuit.execute(vec);
            const endExecTime = performance.now();
            return endExecTime - startExecTime;
        },
    3, 15, 5);

    const {
        generateTimeData : IIGenData,
        executeTimeData : IIExecData
    } = await testSimulatorSpeed(
        (wire) => {
            const startGenTime = performance.now();
            const circuitII = wire.generate(AtomizeStrategy.Min, GeneratorType.StateFunction);
            const endGenTime = performance.now();
            return [circuitII, endGenTime - startGenTime];
        },
        (circuit) => {
            const startExecTime = performance.now();
            circuit.execute(QuantumState.zero(circuit.wireLength));
            const endExecTime = performance.now();
            return endExecTime - startExecTime;
        },
    3, 20, 20);

    const {
        generateTimeData : IIIGenData,
        executeTimeData : IIIExecData
    } = await testSimulatorSpeed(
        (wire) => {
            const startGenTime = performance.now();
            const circuitII = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorFunction);
            const endGenTime = performance.now();
            return [circuitII, endGenTime - startGenTime];
        },
        (circuit) => {
            const vec = Vector.zeros(2 ** circuit.wireLength);
            vec.set(0, ComplexNumber.ONE);

            const startExecTime = performance.now();
            circuit.execute(vec);
            const endExecTime = performance.now();
            return endExecTime - startExecTime;
        },
    3, 15, 5)

    const {
        generateTimeData : IVGenData,
        executeTimeData : IVExecData
    } = await testSimulatorSpeed(
        (wire) => {
            const startGenTime = performance.now();
            const circuitII = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction);
            const endGenTime = performance.now();
            return [circuitII, endGenTime - startGenTime];
        },
        (circuit) => {
            const startExecTime = performance.now();
            circuit.execute(QuantumVectorState.zero(circuit.wireLength));
            const endExecTime = performance.now();
            return endExecTime - startExecTime;
        },
    3, 20, 20)

    return [
        ["Ia Function", IaGenData, IaExecData],
        ["Ib Function", IbGenData, IbExecData],
        ["Ic Function", IcGenData, IcExecData],
        ["II Function", IIGenData, IIExecData],
        ["III Function", IIIGenData, IIIExecData],
        ["IV Function", IVGenData, IVExecData],
    ] as [string, number[][], number[][]][];
}

window.onload = () => {
    (document.querySelector("#generation_lines") as HTMLDivElement)!.style.height = "100vh";
    (document.querySelector("#execution_lines") as HTMLDivElement)!.style.height = "100vh";
    (document.querySelector("#sum_lines") as HTMLDivElement)!.style.height = "100vh"

    // get the hash tag
    const hash = window.location.hash.substring(1);
    const testFn = (hash === "UseCache") 
        ? () => Promise.resolve(parameter.data as [string, number[][], number[][]][]) 
        : testAllSimulator;

    testFn().then((data) => {
        console.log(data);
        downloadJSON(JSON.stringify({ data }));

        const generationPlotData = data.map(([name, genData], index) => {
            genData.forEach((arr, index) => {
                if (arr === null) {
                    delete genData[index];
                }
            })

            console.log(genData);


            const avgData = genData.map((arr) => arr?.reduce((a, b) => a + b) / arr?.length);
            return {
                x : Object.keys(avgData).map(Number),
                y : Object.values(avgData),
                name
            }
        })

        const executionPlotData = data.map(([name, _, execData], index) => {
            execData.forEach((arr, index) => {
                if (arr === null) {
                    delete execData[index];
                }
            })

            const avgData = execData.map((arr) => arr?.reduce((a, b) => a + b) / arr?.length);
            return {
                x : Object.keys(avgData).map(Number),
                y : Object.values(avgData),
                name
            }
        })

        const sumPlotData = data.map(([name, genData, execData], index) => {
            const genAvgData = genData.map((arr) => arr?.reduce((a, b) => a + b) / arr?.length);
            const execAvgData = execData.map((arr) => arr?.reduce((a, b) => a + b) / arr?.length);

            const sumAvgData = genAvgData.map((gen, index) => gen + execAvgData[index]);

            return {
                x : Object.keys(sumAvgData).map(Number),
                y : Object.values(sumAvgData),
                name
            }
        })


        const layout = {
            xaxis : {
                title : "Wire Length",
            },
            yaxis : {
                type : 'log',
                title : "Execution Time (ms)",
            },
        }

        Plotly.newPlot("generation_lines", generationPlotData, {
            ...layout,
            title : "Simulator Generation Speed Comparison",
        }, {
            responsive : true,
        });

        Plotly.newPlot("execution_lines", executionPlotData, {
            ...layout,
            title : "Simulator Execution Speed Comparison",
        }, {
            responsive : true,
        });

        Plotly.newPlot("sum_lines", sumPlotData, {
            ...layout,
            title : "Simulator Speed Comparison",
        }, {
            responsive : true,
        });
    })
}

const downloadJSON = (json : string) => {
    // let browser download the file
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(json));
    element.setAttribute("download", "parameter.json");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}