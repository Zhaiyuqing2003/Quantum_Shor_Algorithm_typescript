import Vector from "../../../util/Vector";
import StaticImpl from "../../../util/StaticImpl";
import QuantumState from "../../QuantumState";
import QuantumVectorState from "../../QuantumVectorState";
import { replaceCharAt } from "../../../util/StringHelper";
import { GateGettable, GateConstructor } from "../GateInterface";
import { requireLengthMatched, requireWireInBound } from "../GateHelper";
import { IBasicMatrixStatic, Matrix, MatrixType, SparseMatrix } from "../../../util/Matrix";
import { GeneratorMatrixFunctionSubType, GeneratorType } from "../Generator";
import { GateConstructorParameter, GateEnum, GateParameterTransformFunction } from "../GateType";
import { GeneratorMatrixMap } from "../GeneratorMatrixMap";

@StaticImpl<GateConstructor<GateEnum["PauliX"]>>()
export default class PauliX implements GateGettable<GateEnum["PauliX"]> {
    readonly wireLength: number;
    readonly wire : number;
    
    constructor({ wireLength, wire } : GateConstructorParameter<GateEnum["PauliX"]>) {
        this.wireLength = wireLength;
        this.wire = wire;
    }

    static create = ({ wireLength,  wire } : GateConstructorParameter<GateEnum["PauliX"]>) => {
        requireWireInBound(wireLength, wire);

        return new PauliX({ wireLength, wire });
    }

    get wireRange() : [number, number] {
        return [this.wire, this.wire + 1];
    }

    shift({shift, wireLength}: { shift: number; wireLength: number; }) {
        return PauliX.create({
            wireLength,
            wire: this.wire + shift
        })
    }
    
    clone() {
        return new PauliX(this);
    }
    
    transform(callbackFn: GateParameterTransformFunction<GateEnum["PauliX"]>) {
        return PauliX.create(callbackFn(this));
    }

    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType: G) {
        return (GeneratorMatrixMap[generatorType]).fromNumberArray([
            [0, 1],
            [1, 0]
        ])
    }
    
    getStringStateFunction() {
        return (quantumState : QuantumState) => {
            requireLengthMatched(quantumState, this.wireLength);
            
            return quantumState.transform((value, key, _, newState) => {
                newState.increment(
                    replaceCharAt(key, this.wire, key[this.wire] === '0' ? '1' : '0'),
                    value.clone()
                    );
            });
        }
    }

    getNumberStateFunction() {
        return <T extends Vector | QuantumVectorState>(state : T) => {
            requireLengthMatched(state, this.wireLength);

            return state.transform((value, index, _, newState) => {
                newState.increment(index ^ (1 << (this.wireLength - 1 - this.wire)), value.clone());
            }) as T
        }
    }

    
    isValidControlWire(controlWire : number) : boolean {
        return controlWire !== this.wire;
    }

    isGettable<G extends GeneratorType>(_: G): true {
        return true
    }

    toString() {
        return `PauliX(${this.wire})`;
    }
}