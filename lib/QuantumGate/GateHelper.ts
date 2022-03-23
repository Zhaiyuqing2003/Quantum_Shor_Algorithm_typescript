import Vector from "../../util/Vector";
import QuantumState from "../QuantumState";
import QuantumVectorState from "../QuantumVectorState";

export const requireLengthMatched = (stateOrVector : QuantumState | QuantumVectorState | Vector, wireLength : number) => {
    if (!stateOrVector.isFitLength(wireLength)) {
        throw new Error(`Quantum state or vector is not fit length.`);
    }
}
export const requireWireInBound = (wireLength : number, wire : number) => {
    if (wire < 0 || wire >= wireLength) {
        throw new Error(`Wire number is out of bound.`);
    }
}
export const requireWireIsNotEqual = (wireOne : number, wireTwo : number) => {
    if (wireOne === wireTwo) {
        throw new Error(`wire ${wireOne} is equal to wire ${wireTwo}`);
    }
}
export const requireWireIsSmallerThan = (wireOne : number, wireTwo : number) : void => {
    if (wireOne >= wireTwo) {
        throw new Error(`wire ${wireOne} is not smaller than wire ${wireTwo}`);
    }
}