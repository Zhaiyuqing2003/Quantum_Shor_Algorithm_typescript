import ComplexNumber from "../util/ComplexNumber";
import { toDecimal } from "../util/StringHelper";
import Vector from "../util/Vector";
import { GateSymbol } from "./QuantumGate/GateSymbol";
import { QuantumGate } from "./QuantumGate/QuantumGate";
import QuantumState from "./QuantumState";
import QuantumVectorState from "./QuantumVectorState";
import { QuantumWire } from "./QuantumWire";

type Parser = typeof vectorStateParser | typeof quantumStateParser | typeof quantumVectorStateParser;


export const parseQuantumWire = <T extends Parser>(string : string, parser : T) : {
    wire : QuantumWire,
    shouldMeasure : boolean,
    initialState : ReturnType<T> | undefined
} => {
    // first line store the wireLength
    const lines = string.split('\n');
    const wireLength = parseInt(lines[0]);
    const quantumWire = QuantumWire.create(wireLength);

    // wireLength should not be NaN, and should > 0
    if (isNaN(wireLength) || wireLength <= 0) {
        throw new Error("Wire length should be a positive integer.");
    }


    let hasInitialState = false;
    let hasMeasurement = false;
    let hasGate = false;
    let initialState : ReturnType<T> | undefined = undefined;

    for (let i = 1; i < lines.length; i ++) {
        const currentString = lines[i];
        const gateInfo = currentString.trim().split(' ');

        // if the line is empty, skip it
        if (gateInfo.length === 0) {
            continue;
        }

        const startingIndicator = gateInfo[0];

        if (startingIndicator === "INITSTATE") {
            if (hasInitialState || hasMeasurement || hasGate) {
                throw new Error("Initial state should be the first line.");
            }

            hasInitialState = true;

            // the line format should look like
            // INITSTATE |001>
            if (gateInfo.length !== 2) {
                throw new Error("Invalid initial state format.");
            }
            
            initialState = parser(gateInfo[1], wireLength) as ReturnType<T>;
            continue;

        } else if (startingIndicator === "MEASURE") {
            if (!hasGate) {
                throw new Error("Measurement should be after gates.");
            }
            if (i === lines.length - 1) {
                console.warn("Measurement should be the last line. The gate after that will be ignored");
            }

            hasMeasurement = true;
            break;
        } else if (startingIndicator === "H") {
            // the line format should look like
            // H 0

            if (gateInfo.length !== 2) {
                throw new Error("Invalid H gate format.");
            }

            // the wire must be a non-negative integer, > 0 and < wireLength and not NaN
            const wire = parseInt(gateInfo[1]);

            if (isNaN(wire) || wire < 0 || wire >= wireLength) {
                throw new Error("Invalid wire number.");
            }

            quantumWire.addGate(QuantumGate.fromBasis({
                type : GateSymbol.Hadamard,
                wire,
                wireLength
            }));

        } else if (startingIndicator === "CX") {

            // the line format should look like
            // CX 0 1

            if (gateInfo.length !== 3) {
                throw new Error("Invalid CX gate format.");
            }

            // the wire must be a non-negative integer, >= 0 and < wireLength and not NaN, and the target wire and control wire must be different 
            const controlWire = parseInt(gateInfo[1]);
            const targetWire = parseInt(gateInfo[2]);

            if (isNaN(controlWire) || isNaN(targetWire) || 
                controlWire < 0 || targetWire < 0 || 
                controlWire >= wireLength || targetWire >= wireLength || 
                controlWire === targetWire) {
                throw new Error("Invalid wire number.");
            }

            quantumWire.addGate(QuantumGate.fromSingleControlled({
                type : GateSymbol.PauliX,
                wire : targetWire,
                controlWire,
                wireLength
            }));

        } else if (startingIndicator === "P") {

            // the line format should look like
            // P 0 1

            if (gateInfo.length !== 3) {
                throw new Error("Invalid P gate format.");
            }

            // the parameter is name, wire, angle
            const wire = parseInt(gateInfo[1]);
            const angle = parseFloat(gateInfo[2]);

            // wire must be a non-negative integer, >= 0 and < wireLength and not NaN
            if (isNaN(wire) || wire < 0 || wire >= wireLength) {
                throw new Error("Invalid wire number.");
            }

            // angle must be a number, and not NaN
            if (isNaN(angle)) {
                throw new Error("Invalid angle.");
            }

            quantumWire.addGate(QuantumGate.fromBasis({
                type : GateSymbol.Phase,
                wire,
                angle,
                wireLength
            }));
        }
    }

    
    if (!hasInitialState) {
        initialState = parser("|" + new Array(wireLength).fill('0').join('') + ">", wireLength) as ReturnType<T>;
    }

    return {
        wire : quantumWire,
        shouldMeasure : hasMeasurement,
        initialState
    }
}

export const vectorStateParser = (string : string, wireLength : number) => {
    const vector = Vector.zeros(2 ** wireLength);
    vector.set(toDecimal(stateParser(string, wireLength)), ComplexNumber.ONE);

    return vector;
}

export const quantumStateParser = (string : string, wireLength : number) => {
    const state = QuantumState.create(wireLength);
    state.increment(stateParser(string, wireLength), ComplexNumber.ONE);

    return state;
}

export const quantumVectorStateParser = (string : string, wireLength : number) => {
    const state = QuantumVectorState.create(wireLength);
    state.increment(toDecimal(stateParser(string, wireLength)), ComplexNumber.ONE);

    return state;
}

const stateParser = (string : string, wireLength : number) => {
    // the string should only be single line
    const lines = string.split('\n');

    if (lines.length !== 1) {
        throw new Error("Invalid initial state format.");
    }

    const stateString = lines[0];

    // the string should be like |001>, |0001>, |0100>...
    if (stateString.length !== wireLength + 2) {
        throw new Error("Invalid initial state format.");
    }

    if (stateString[0] !== '|' || stateString[stateString.length - 1] !== '>') {
        throw new Error("Invalid initial state format.");
    }

    return stateString.substring(1, stateString.length - 1);
}




//     // first one is bit length
//     const lines = string.split('\n');
//     const bitLength = parseInt(lines[0]);
//     let shouldMeasure = false;

//     // let initialState = QuantumState.zeros(bitLength);

//     const wire = QuantumWire.create(bitLength);

//     // remain is the gate string
//     for (let i = 1; i < lines.length; i++) {
//         const gateString = lines[i];
//         const gateInfo = gateString.trim().split(' ')
//         // first one is the name
//         const gateName = gateInfo[0].trim();
//         // remains are the parameters
//         if (gateName === 'INITSTATE') {
//             // two cases, one is a file indicate the path
//             // the other is a string like sqrt(0.5)|1> + sqrt(0.5)|0>
//             // val|state> the format
//             if (gateInfo[1].startsWith('FILE')) {
//             }

//             continue
//         }


//         if (gateName === 'MEASURE') {
//             shouldMeasure = true;
//             if (i !== lines.length - 1) {
//                 console.warn('MEASURE should be the last gate, gate after MEASURE will be ignored');
//             }
//             break;
//         }


//         if (gateInfo.length < 2) {

//         }

//         const wire = parseInt(gateInfo[1]);



//         if (gateName === 'H') {
//             if (gateInfo.length !== 2) {
//                 throw new Error('H gate should have one parameter');
//             }

//             const wire = parseInt(gateInfo[1]);

//             if (isNaN(wire)) {

//             }
            

//             wire.addGate(QuantumGate.fromBasis({
//                 type : GateSymbol.Hadamard,
//                 wireLength : bitLength,
//                 wire : parseInt(gateInfo[1]),
//             }))
//         } else if (gateName === 'P') {
//             if (gate)

//             wire.addGate({
//                 type: GateType.Phase,
//                 wire: parseInt(gateInfo[1]),
//                 phase: parseFloat(gateInfo[2])
//             });
//         } else if (gateName === 'CNOT') {
//             wire.addGate({
//                 controlWire: parseInt(gateInfo[1]),
//                 gateType: {
//                     type: GateType.Not,
//                     wire: parseInt(gateInfo[2])
//                 },
//             });
//         } else {
//             console.warn("Unsupported gate: ", gateString);
//         }
//     }

//     return [wire, bitLength, shouldMeasure];