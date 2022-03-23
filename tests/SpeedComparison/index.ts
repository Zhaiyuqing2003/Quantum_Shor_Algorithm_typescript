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


const generateRandomCircuit = (wireLength : number, gateNumber : number = 100) => {
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


const testSpeed = (wireLength : number) => {
    const wire = generateRandomCircuit(wireLength);

    // const circuitIab = wire.generate(AtomizeStrategy.Min, GeneratorType.Matrix);
    // const genStart3 = performance.now();
    // const circuitIc = wire.generate(AtomizeStrategy.Min, GeneratorType.SparseMatrix);
    // const genEnd3 = performance.now();
    // console.log(`Ic: ${genEnd3 - genStart3} ms`);
    const genStartII = performance.now();
    const circuitII = wire.generate(AtomizeStrategy.Min, GeneratorType.StateFunction);
    const genEndII = performance.now();
    console.log(`II: ${genEndII - genStartII} ms`);

    // const genStartIII = performance.now();
    // const circuitIII = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorFunction);
    // const genEndIII = performance.now();
    // console.log(`III: ${genEndIII - genStartIII} ms`);

    const genStartIV = performance.now();
    const circuitIV = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction);
    const genEndIV = performance.now();
    console.log(`IV: ${genEndIV - genStartIV} ms`);

    const vec = Vector.zeros(2 ** wireLength);
    vec.set(0, ComplexNumber.ONE);

    // simulator Ia
    // const start = performance.now();
    // const _Ia = circuitIab.executeMatrix(vec);
    // const end = performance.now();
    // console.log(`Ia: ${end - start} ms`);
    // simulator Ib
    // const start2 = performance.now();
    // const _Ib = circuitIab.execute(vec);
    // const end2 = performance.now();
    // console.log(`Ib: ${end2 - start2} ms`);
    // simulator Ic
    // const start3 = performance.now();
    // circuitIc.execute(vec);
    // const end3 = performance.now();
    // console.log(`Ic: ${end3 - start3} ms`);
    // simulator II
    const start4 = performance.now();
    circuitII.execute(QuantumState.zero(wireLength));
    const end4 = performance.now();
    console.log(`II: ${end4 - start4} ms`);
    // simulator III
    // const start5 = performance.now();
    // circuitIII.execute(vec);
    // const end5 = performance.now();
    // console.log(`III: ${end5 - start5} ms`);
    // simulator IV
    const start6 = performance.now();
    circuitIV.execute(QuantumVectorState.zero(wireLength));
    const end6 = performance.now();
    console.log(`IV: ${end6 - start6} ms`);
    
}

const testStateFunctionSparse = () => {
    return new Promise((resolve) => {
        const circuitIIData : number[][] = [];
        const circuitIVData : number[][] = [];

        const startLength = 3;
        const endLength = 10;

        const iterations = 100

        let currentLength = startLength;
        let currentIteration = 0;

        const iter = () => {
            if (currentLength >= endLength && currentIteration >= iterations) {
                resolve({
                    circuitIIData,
                    circuitIVData
                });
                return;
            }

            if (currentLength < endLength && currentIteration >= iterations) {
                currentLength++;
                currentIteration = 0;
            }

            if (circuitIIData[currentLength] === undefined) {
                circuitIIData[currentLength] = [];
            }

            if (circuitIVData[currentLength] === undefined) {
                circuitIVData[currentLength] = [];
            }

            const wire = generateRandomCircuit(currentLength);
    
            const circuitII = wire.generate(AtomizeStrategy.Min, GeneratorType.StateFunction);    
            const circuitIV = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction);
    

            const startII = performance.now();
            circuitII.execute(QuantumState.zero(currentLength));
            const endII = performance.now();

            circuitIIData[currentLength].push(endII - startII);

            const startIV = performance.now();
            circuitIV.execute(QuantumVectorState.zero(currentLength));
            const endIV = performance.now();

            circuitIVData[currentLength].push(endIV - startIV);

            console.log(`${currentLength}: ${currentIteration}`);
            currentIteration++;

            setTimeout(iter, 0);
        }

        setTimeout(iter, 0);
    }) as Promise<{
        circuitIIData : number[][],
        circuitIVData : number[][]
    }>;
}

// console.log("1")

// for (let index in circuitIIData) {
//     Promise.all(circuitIIData[index]).then(values => {
//         console.log(`II at ${index} wire: ${values.reduce((a, b) => a + b) / values.length} ms`);
//     })
// }

// for (let index in circuitIVData) {
//     Promise.all(circuitIVData[index]).then(values => {
//         console.log(`IV at ${index} wire: ${values.reduce((a, b) => a + b) / values.length} ms`);
//     })
// }

window.onload = () => {
    testStateFunctionSparse().then(({ circuitIIData, circuitIVData }) => {
        const avgIIData = circuitIIData.map(arr => arr?.reduce((a, b) => a + b) / arr.length);
        const avgIVData = circuitIVData.map(arr => arr?.reduce((a, b) => a + b) / arr.length);

        console.log(avgIIData);
        console.log(avgIVData);        
    });
}