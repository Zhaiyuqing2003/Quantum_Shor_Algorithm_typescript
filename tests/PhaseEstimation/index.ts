import { phaseEstimationWire } from "../../lib/PhaseEstimation"
import { Atomizer, AtomizeStrategy } from "../../lib/QuantumGate/Atomizer";
import { GateSymbol } from "../../lib/QuantumGate/GateSymbol"
import { GeneratorType } from "../../lib/QuantumGate/Generator";
import { QuantumGate } from "../../lib/QuantumGate/QuantumGate"
import QuantumVectorState from "../../lib/QuantumVectorState";

// @ts-ignore
import Plotly from "plotly.js-dist";
import ComplexNumber from "../../util/ComplexNumber";

window.onload = () => {
    // get the hash tag
    const hash = window.location.hash.substring(1);

    if (hash[0] === "V") {
        const hashSlice = hash.slice(1);
        const estimationWire = isNaN(parseInt(hashSlice)) ? 3 : parseInt(hashSlice);
    
        const repeatTime = 100;
        phaseEstimationValidation(estimationWire, repeatTime);
    } else if (hash[0] === "S") {
        const hashSlice = hash.slice(1);
        const estimationWire = isNaN(parseInt(hashSlice)) ? 3 : parseInt(hashSlice);

        phaseSuperpositionValidation(estimationWire);
    } else if (hash[0] === "M") {
        const hashSlice = hash.slice(1);
        const estimationWire = isNaN(parseInt(hashSlice)) ? 3 : parseInt(hashSlice);

        phaseMultipleGateValidation(estimationWire);
    }
}

const phaseEstimationValidation = (estimationWire : number, repeatTime : number) => {
    const [data, estimationData] = getEstimationData(estimationWire, repeatTime);

    Plotly.newPlot("histogram", [{
        x : data.map((_, index) => index / 100),
        y : data,
        name : "Most Probable Angle"
    }, {
        x : estimationData.map((_, index) => index / 100),
        y : estimationData,
        name : "Expected Angle"
    }], {
        title : "Phase Estimation",
        xaxis : {
            title : "Angle",
        },
        yaxis : {
            title : "Expected Angle (In 2π)",
        },
        height : window.innerHeight
    }, {
        responsive : true
    });
}

const getEstimationData = (estimationWire : number, repeatTime : number) => {
    const data : number[] = [];
    const estimationData : number[] = [];
    for (let i = 0; i < repeatTime; i ++) {
        const wire = phaseEstimationWire(estimationWire, [QuantumGate.fromBasis({
            type : GateSymbol.Phase,
            wire : 0,
            angle : Math.PI * 2 * i / repeatTime,
            wireLength : 1,
        })]);
        
        const circuit = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction)
        
        const state = QuantumVectorState.unique(estimationWire + 1, 1);

        const finalState = circuit.execute(state);

        let probabilityList : [number, number][] = [];
        for (const [index, value] of finalState.entries()) {
            probabilityList.push([(index >> 1) / (2 ** estimationWire), value.squaredR]);
        }
        // pick the largest one in the list
        const [index, _] = probabilityList.reduce((acc, [index, value]) => value > acc[1] ? [index, value] : acc, [-1, 0]);
        
        const map = new Map<number, number>();
        for (let i = 0; i < repeatTime; i ++){
            const key = (finalState.measure() >> 1) / (2 ** estimationWire);
            map.set(key, (map.get(key) ?? 0) + 1/repeatTime);
        }
        let estimation = 0;
        for (let [key, value] of map) {
            estimation += key * value;
        }


        data.push(index);
        estimationData.push(estimation);
    }

    return [data, estimationData];
}

const phaseSuperpositionValidation = (estimationWire : number) => {
    const wire = phaseEstimationWire(estimationWire, [QuantumGate.fromBasis({
        type : GateSymbol.Phase,
        wire : 0,
        angle : 0.5 * Math.PI * 2,
        wireLength : 1,
    })]);
    
    const circuit = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction)
    console.log(circuit.toString());
    
    const state = QuantumVectorState.create(estimationWire + 1);
    state.increment(0, ComplexNumber.fromReal(Math.sqrt(0.3)));
    state.increment(1, ComplexNumber.fromReal(Math.sqrt(0.7)));

    const finalState = circuit.execute(state);

    let probabilityList : number[] = Array(2 ** estimationWire).fill(0);
    for (const [index, value] of finalState.entries()) {
        probabilityList[(index >> 1)] += value.squaredR;
    }

    Plotly.newPlot("histogram", [{
        x : probabilityList.map((_, index) => index / (2 ** estimationWire)),
        y : probabilityList,
        name : "Probability"
    }], {
        title : "Phase Superposition",
        xaxis : {
            title : "Angle (In 2π)",
        },
        yaxis : {
            title : "Probability",
        },
        height : window.innerHeight
    }, {
        responsive : true
    });


}

const phaseMultipleGateValidation = (estimationWire : number) => {
    const wire = phaseEstimationWire(estimationWire, [
        QuantumGate.fromBasis({
            type : GateSymbol.PauliX,
            wire : 0,
            wireLength : 2,
        }),
        QuantumGate.fromBasis({
            type : GateSymbol.Phase,
            wire : 0,
            angle : 0.3,
            wireLength : 2,
        }),
        QuantumGate.fromBasis({
            type : GateSymbol.PauliX,
            wire : 1,
            wireLength : 2,
        }),
    ]);

    const circuit = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction);

    const state = QuantumVectorState.create(estimationWire + 2);

    state.increment(0, ComplexNumber.fromReal(0.5));
    state.increment(1, ComplexNumber.fromReal(0.5));
    state.increment(2, ComplexNumber.fromReal(0.5));
    state.increment(3, ComplexNumber.fromReal(0.5));

    const finalState = circuit.execute(state);


    let probabilityList : number[] = Array(2 ** estimationWire).fill(0);
    for (const [index, value] of finalState.entries()) {
        probabilityList[(index >> 2)] += value.squaredR;
    }

    Plotly.newPlot("histogram", [{
        x : probabilityList.map((_, index) => index / (2 ** estimationWire)),
        y : probabilityList,
        name : "Probability"
    }], {
        title : "Phase Superposition",
        xaxis : {
            title : "Angle (In 2π)",
        },
        yaxis : {
            title : "Probability",
        },
        height : window.innerHeight
    }, {
        responsive : true
    });
}
