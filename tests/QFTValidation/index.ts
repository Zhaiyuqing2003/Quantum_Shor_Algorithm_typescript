import { Atomizer, AtomizeStrategy } from "../../lib/QuantumGate/Atomizer"
import { GateSymbol } from "../../lib/QuantumGate/GateSymbol"
import { GeneratorType } from "../../lib/QuantumGate/Generator"
import { QuantumGate } from "../../lib/QuantumGate/QuantumGate"
import QuantumVectorState from "../../lib/QuantumVectorState"
import { QuantumWire } from "../../lib/QuantumWire"
import ComplexNumber from "../../util/ComplexNumber"

// @ts-ignore
import Plotly from "plotly.js-dist";

window.onload = () => {
    // QFT exposure
    
    const qftDescription = (n : number) => {
        const fourier = QuantumGate.fromBasis({
            type : GateSymbol.Fourier,
            startWire : 0,
            endWire : n,
            wireLength : n,
        })
        
        return Atomizer.atomize(fourier)?.map((gate) => gate.toString()).join("\n")
    }
    // @ts-ignore
    window.qft = qftDescription;
    // QFT verification
    console.log(`
        ----------------Three Qubits QFT------------------\n${qftDescription(3)}\n
        --------------------------------------------------
    `);
    console.log(`
        ----------------Three Qubits QFT------------------\n${qftDescription(5)}\n
        --------------------------------------------------`);

    // QFT with initial state
    const fiveQFT = QuantumGate.fromBasis({
        type : GateSymbol.Fourier,
        startWire : 0,
        endWire : 5,
        wireLength : 5,
    })

    const wire = QuantumWire.create(5)
    wire.addGate(fiveQFT);

    const stateArray = [
        [-0.0437138694031, -0.16970343667],
        [0.131225044752, -0.168519332832],
        [-0.0989482530634, -0.186906851488],
        [0.0703799879961, 0.00388331833179],
        [0.091213763468, 0.0900045915036],
        [0.0845662167992, -0.105461871814],
        [-0.0836378035336, -0.0410177324958],
        [-0.0386362526832, -0.0724794117773],
        [0.207845482215, -0.0886834756322],
        [-0.182229067633, -0.195338486547],
        [-0.163507179696, -0.191879012067],
        [0.16185067068, 0.141217912512],
        [-0.179407853333, -0.0643252211308],
        [0.0265018672095, -0.156993436434],
        [0.0808321474568, -0.122090803198],
        [-0.0262633854918, -0.205287940098],
        [0.112075110713, 0.0480951514638],
        [0.124124236217, 0.00791579849931],
        [0.138557917081, -0.135698769507],
        [-0.0938543059125, 0.140688392941],
        [-0.177203478881, -0.189935159609],
        [0.00560609809135, -0.0914672560604],
        [0.0038136160494, 0.0286627419565],
        [-0.135801037604, -0.069870560182],
        [0.112453067055, 0.163045905508],
        [-0.0502939330701, -0.114096952806],
        [-0.0899678294346, 0.193240183672],
        [-0.160771419398, -0.0257891833001],
        [-0.0886182540583, 0.0628017240655],
        [-0.143258600238, -0.0741833571282],
        [-0.0311742180235, 0.204169332474],
        [0.208382448751, 0.136278592244],
    ] as const;

    const state = QuantumVectorState.create(5);
    stateArray.forEach(([re, im], i) => state.set(i, ComplexNumber.fromCartesian(re, im)));
    const afterState = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction).execute(state);
    
    showQuantumVectorState(afterState);
}

const showQuantumVectorState = (state : QuantumVectorState) => {
    const data : [number, number, number][] = [];

    for (let [index, value] of state.entries()) {
        data.push([index, value.squaredR, (value.theta + 2 * Math.PI) % (2 * Math.PI)]);
    }

    // sort data
    data.sort((a, b) => a[0] - b[0]);

    const trace = {
        x : data.map(x => x[0]),
        y : data.map(x => x[1]),
        z : data.map(x => x[2]),
        type : "bar",
        mode : "lines+markers",
        marker: {
            color : data.map(x => {
                const grayScale = Math.round((x[2] / (2 * Math.PI) * 255))
                return `hsl(${grayScale}, 60%, 50%)`
            }),
        },
    }

    state.printStringColorfulSorted();
    console.log("data is", data);

    Plotly.newPlot('histogram', [trace], {
        title: "Quantum Vector Visualization",
        xaxis: {title: "Quantum State"}, 
        yaxis: {title: "R^2"},
        height : window.innerHeight
    }, {
        responsive: true,
    })
}