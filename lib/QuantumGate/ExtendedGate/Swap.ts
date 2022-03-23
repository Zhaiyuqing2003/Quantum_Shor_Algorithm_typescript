import Vector from "../../../util/Vector";
import StaticImpl from "../../../util/StaticImpl";
import QuantumState from "../../QuantumState";
import QuantumVectorState from "../../QuantumVectorState";
import { swapCharAt } from "../../../util/StringHelper";
import { Gate, GateConstructor, GateNotGettable } from "../GateInterface";
import { MatrixType, IBasicMatrixStatic, Matrix, SparseMatrix } from "../../../util/Matrix";
import { requireWireInBound, requireLengthMatched, requireWireIsNotEqual } from "../GateHelper";
import { GateConstructorParameter, GateEnum, GateParameterTransformFunction } from "../GateType";
import { TransformFunction, GeneratorType, GeneratorFunctionType } from "../Generator";

@StaticImpl<GateConstructor<GateEnum["Swap"]>>()
export default class Swap implements GateNotGettable<GateEnum["Swap"]> {
    readonly wireLength: number;
    readonly wireOne : number;
    readonly wireTwo : number;
    
    get wireRange() {
        return undefined;
    }

    constructor({ wireLength, wireOne, wireTwo } : GateConstructorParameter<GateEnum["Swap"]>) {
        this.wireLength = wireLength;
        this.wireOne = wireOne;
        this.wireTwo = wireTwo;
    }

    static create = ({ wireLength, wireOne, wireTwo } : GateConstructorParameter<GateEnum["Swap"]>) => {
        requireWireInBound(wireLength, wireOne);
        requireWireInBound(wireLength, wireTwo);
        requireWireIsNotEqual(wireOne, wireTwo);

        return new Swap({ wireLength, wireOne, wireTwo });
    }

    shift({shift, wireLength}: { shift: number; wireLength: number; }) {
        return Swap.create({
            wireLength,
            wireOne : this.wireOne + shift,
            wireTwo : this.wireTwo + shift
        })
    }

    clone() {
        return new Swap(this);
    }

    transform(callbackFn: GateParameterTransformFunction<GateEnum["Swap"]>) {
        return Swap.create(callbackFn(this));
    }

    getBaseMatrix() {
        return null
        // const countBetween = Math.abs(this.wireTwo - this.wireOne) - 2;
        // const identity = MatrixCtor.identity(2 ** countBetween);

        // const matrixLeftUp = identity.kroneckerProduct(
        //     MatrixCtor.fromNumberArray([
        //         [1, 0],
        //         [0, 0]
        //     ])
        // )
        // const matrixRightUp = identity.kroneckerProduct(
        //     MatrixCtor.fromNumberArray([
        //         [0, 1],
        //         [0, 0]
        //     ])
        // )
        // const matrixLeftDown = identity.kroneckerProduct(
        //     MatrixCtor.fromNumberArray([
        //         [0, 0],
        //         [1, 0]
        //     ])
        // )
        // const matrixRightDown = identity.kroneckerProduct(
        //     MatrixCtor.fromNumberArray([
        //         [0, 0],
        //         [0, 1]
        //     ])
        // )

        // return MatrixCtor.concat(matrixLeftUp, matrixLeftDown, matrixRightUp, matrixRightDown);
    }


    getStringStateFunction() {
        // return (quantumState : QuantumState) => {
        //     requireLengthMatched(quantumState, this.wireLength);

        //     return quantumState.transform((value, key, _, newState) => {
        //         newState.increment(
        //             swapCharAt(key, this.wireOne, this.wireTwo),
        //             value.clone()
        //         );
        //     });
        // }
        return null;
    }

    getNumberStateFunction() {
        // return <T extends Vector | QuantumVectorState>(state : T) => {
        //     requireLengthMatched(state, this.wireLength);

        //     return state.transform((value, key, _, newState) => {
        //         const bitOne = (key >> this.wireOne) & 1;
        //         const bitTwo = (key >> this.wireTwo) & 1;

        //         let x = bitOne ^ bitTwo;
        //         x = (x << this.wireOne) | (x << this.wireTwo);

        //         newState.increment(
        //             x ^ key,
        //             value.clone()
        //         )
        //     }) as T;
        // }

        return null;
    }

    isValidControlWire(controlWire : number) : boolean {
        return controlWire !== this.wireOne && controlWire !== this.wireTwo;
    }

    isGettable<G extends GeneratorType>(_: G): false {
        return false;
    }
}