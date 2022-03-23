import { AtomizeStrategy } from "../../lib/QuantumGate/Atomizer";
import { GeneratorType } from "../../lib/QuantumGate/Generator";
import QuantumState from "../../lib/QuantumState";
import QuantumVectorState from "../../lib/QuantumVectorState";
import { parseQuantumWire, quantumVectorStateParser } from "../../lib/QuantumWireParser"
import ComplexNumber from "../../util/ComplexNumber";
import Vector from "../../util/Vector";

// @ts-ignore
import Plotly from "plotly.js-dist";

const wireString = `5
P 3 6.27268427646
H 4
H 4
P 1 5.10940500719
P 1 4.9078263081
CX 1 2
P 3 0.49543462544
P 2 3.83472723148
H 4
P 4 0.771206773752
H 1
CX 3 2
H 3
H 1
CX 3 4
CX 2 1
H 3
CX 0 1
CX 0 1
H 2
CX 2 1
P 3 4.9383121224
CX 2 1
H 1
P 4 3.2883684441
P 2 4.61949080556
P 2 0.918989863254
H 2
P 2 3.10718130134
CX 1 0
CX 3 4
P 4 4.9188406848
H 3
CX 3 4
P 4 2.51037456068
P 1 5.01293807682
H 2
CX 4 3
P 3 0.945628001768
CX 1 2
H 3
CX 2 1
CX 1 0
P 0 3.65276586215
H 3
H 0
CX 1 2
P 0 5.48166723266
H 4
CX 0 1
CX 2 1
H 0
CX 2 3
CX 2 3
CX 1 0
CX 1 2
P 3 3.09910291231
H 2
P 0 4.62629990408
P 0 0.613536553901
H 4
CX 0 1
P 4 5.57649516772
P 4 6.21800579498
H 3
CX 2 1
CX 3 2
P 0 5.48873760859
CX 0 1
H 3
P 3 1.37899824562
P 1 2.97479543629
P 2 4.25967312042
H 1
P 2 1.18358991222
H 4
CX 1 0
P 0 1.75820279861
H 3
H 1
P 0 3.87614758734
CX 1 0
P 4 5.92692060653
P 2 2.19007789964
CX 0 1
H 2
CX 1 0
P 0 4.4355136224
P 2 5.39834474596
P 4 3.88670062551
P 1 4.25386222644
P 3 3.89954154473
P 2 1.49230397825
CX 1 0
CX 0 1
H 4
H 0
P 3 3.23824985068
H 3
P 1 0.558258881544
`

const stateString = `-0.0437138694031 -0.16970343667
0.131225044752 -0.168519332832
-0.0989482530634 -0.186906851488
0.0703799879961 0.00388331833179
0.091213763468 0.0900045915036
0.0845662167992 -0.105461871814
-0.0836378035336 -0.0410177324958
-0.0386362526832 -0.0724794117773
0.207845482215 -0.0886834756322
-0.182229067633 -0.195338486547
-0.163507179696 -0.191879012067
0.16185067068 0.141217912512
-0.179407853333 -0.0643252211308
0.0265018672095 -0.156993436434
0.0808321474568 -0.122090803198
-0.0262633854918 -0.205287940098
0.112075110713 0.0480951514638
0.124124236217 0.00791579849931
0.138557917081 -0.135698769507
-0.0938543059125 0.140688392941
-0.177203478881 -0.189935159609
0.00560609809135 -0.0914672560604
0.0038136160494 0.0286627419565
-0.135801037604 -0.069870560182
0.112453067055 0.163045905508
-0.0502939330701 -0.114096952806
-0.0899678294346 0.193240183672
-0.160771419398 -0.0257891833001
-0.0886182540583 0.0628017240655
-0.143258600238 -0.0741833571282
-0.0311742180235 0.204169332474
0.208382448751 0.136278592244`


const parseState = (stateString: string, wireLength : number) => {
    const state = QuantumVectorState.create(wireLength)

    for (const [index, line] of stateString.split("\n").entries()) {
        const [real, imaginary] = line.split(" ").map(Number)
        state.increment(index, ComplexNumber.fromCartesian(real, imaginary));
    }

    return state;
}

const parseCircuit = () => {
    const { wire } = parseQuantumWire(wireString, quantumVectorStateParser);
    const wireVectorStateFunction = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction);
    return wireVectorStateFunction
}

const testRandCircuit = () => {
    const circuit = parseCircuit();
    const finalState = circuit.execute(QuantumVectorState.zero(5));
    return finalState;
}

const testMeasureCircuit = () => {
    const state = testRandCircuit();

    const data : number[] = [];

    for (let i = 0; i < 100000; i ++) {
        data.push(state.measure())
    }

    const trace = {
        x : data,
        opacity : 0.5,
        type : "histogram",
        histnorm: 'probability',
        marker: {
            color: 'blue',
        },
    }

    const layout = {
        bargap: 0.05, 
        bargroupgap: 0.2, 
        barmode: "overlay", 
        title: "Quantum State Distribution", 
        xaxis: {title: "Quantum State"}, 
        yaxis: {title: "Probability"},
    };

    const config = {responsive: true}

    Plotly.newPlot('histogram', [trace], layout, config)
}

const testInputCircuit = () => {
    const state = parseState(stateString, 5);
    const circuit = parseCircuit();
    const finalState = circuit.execute(state);
    return finalState;
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
    }, {
        responsive: true,
    })
}

window.onload = () => {
    // check the hash log
    (document.querySelector("#histogram") as HTMLDivElement)!.style.height = "100vh"

    const hash = window.location.hash.substring(1);

    if (hash === "testRandCircuit") {
        showQuantumVectorState(testRandCircuit());
    }

    if (hash === "testMeasureCircuit") {
        testMeasureCircuit();
    }

    if (hash === "testInputCircuit") {
        showQuantumVectorState(testInputCircuit());
    }
}






