import Vector from "../../../util/Vector";
import StaticImpl from "../../../util/StaticImpl";
import QuantumState from "../../QuantumState";
import QuantumVectorState from "../../QuantumVectorState";
import { replaceCharAt } from "../../../util/StringHelper";
import { GeneratorMatrixFunctionSubType, GeneratorType } from "../Generator";
import { GateGettable, GateConstructor, Gate } from "../GateInterface";
import { Matrix, SparseMatrix } from "../../../util/Matrix";
import { requireLengthMatched, requireWireInBound } from "../GateHelper";
import { GateConstructorParameter, GateEnum, GateParameterTransformFunction } from "../GateType";
import { GeneratorMatrixMap } from "../GeneratorMatrixMap";

@StaticImpl<GateConstructor<GateEnum["Hadamard"]>>()
export default class Hadamard implements GateGettable<GateEnum["Hadamard"]> {
    readonly wireLength: number;
    readonly wire : number;
    
    constructor({ wireLength, wire } : GateConstructorParameter<GateEnum["Hadamard"]>) {
        this.wireLength = wireLength;
        this.wire = wire;
    }

    static create = ({ wireLength, wire } : GateConstructorParameter<GateEnum["Hadamard"]>) => {
        requireWireInBound(wireLength, wire);

        return new Hadamard({ wireLength, wire });
    }

    get wireRange() : [number, number] {
        return [this.wire, this.wire + 1];
    }

    shift({shift, wireLength}: { shift: number; wireLength: number; }) {
        return Hadamard.create({
            wireLength,
            wire: this.wire + shift
        })
    }
    
    clone() {
        return new Hadamard(this);
    }
    
    transform(callbackFn : GateParameterTransformFunction<GateEnum["Hadamard"]>) {
        return Hadamard.create(callbackFn(this))
    }
    
    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType: G) {
        return (GeneratorMatrixMap[generatorType]).fromNumberArray([
            [1 / Math.sqrt(2) , 1 / Math.sqrt(2)],
            [1 / Math.sqrt(2), -1 / Math.sqrt(2)]
        ])
    }

    getStringStateFunction() {
        return (state : QuantumState) => {
            requireLengthMatched(state, this.wireLength);

            return state.transform((value, key, _, newState) => {
                newState.increment(
                    replaceCharAt(key, this.wire, '0'), 
                    value.divideReal(Math.sqrt(2))
                );
                newState.increment(
                    replaceCharAt(key, this.wire, '1'),
                    value.divideReal(key[this.wire] === '0' ? Math.sqrt(2) : -Math.sqrt(2))
                )
            });
        }
    }

    getNumberStateFunction() {
        return <T extends QuantumVectorState | Vector>(state : T) => {
            requireLengthMatched(state, this.wireLength);
            const signatureNumber = 1 << (this.wireLength - 1 - this.wire);

            return state.transform((value, index, _, newState) => {
                newState.increment(
                    index & ~signatureNumber,
                    value.divideReal(Math.sqrt(2))
                );
                newState.increment(
                    index | signatureNumber, 
                    (index & signatureNumber) === 0 ? value.divideReal(Math.sqrt(2)) : value.divideReal(-Math.sqrt(2))
                )
            }) as T
        }
    }

    isValidControlWire(controlWire : number) : boolean {
        return controlWire !== this.wire;
    }

    isGettable<G extends GeneratorType>(_: G) : true {
        return true
    }

    toString() {
        return `H(${this.wire})`;
    }
}
