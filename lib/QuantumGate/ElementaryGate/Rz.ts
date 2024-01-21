import Vector from "../../../util/Vector";
import StaticImpl from "../../../util/StaticImpl";
import QuantumState from "../../QuantumState";
import ComplexNumber from "../../../util/ComplexNumber";
import QuantumVectorState from "../../QuantumVectorState";
import { GateGettable, GateConstructor } from "../GateInterface";
import { requireLengthMatched, requireWireInBound } from "../GateHelper";
import { GeneratorMatrixFunctionSubType, GeneratorType } from "../Generator";
import { GateConstructorParameter, GateEnum, GateParameterTransformFunction } from "../GateType";
import { GeneratorMatrixMap } from "../GeneratorMatrixMap";


@StaticImpl<GateConstructor<GateEnum["Rz"]>>()
export default class Rz implements GateGettable<GateEnum["Rz"]> {
    readonly wireLength: number;
    readonly wire : number;
    readonly angle : number;
    
    constructor({ wireLength, wire, angle } : GateConstructorParameter<GateEnum["Rz"]>) {
        this.wireLength = wireLength;
        this.wire = wire;
        this.angle = angle;
    }

    static create = ({ wireLength, wire, angle } : GateConstructorParameter<GateEnum["Rz"]>) => {
        requireWireInBound(wireLength, wire);

        return new Rz({ wireLength, wire, angle });
    }

    get wireRange() : [number, number] {
        return [this.wire, this.wire + 1];
    }

    shift({shift, wireLength}: { shift: number; wireLength: number; }) {
        return Rz.create({
            wireLength,
            wire: this.wire + shift,
            angle: this.angle
        })
    }

    clone() {
        return new Rz(this);
    }

    transform(callbackFn: GateParameterTransformFunction<GateEnum["Rz"]>) {
        return Rz.create(callbackFn(this));
    }

    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType : G) {
        return (GeneratorMatrixMap[generatorType]).fromArray([
            [ComplexNumber.fromPolar(1, -this.angle / 2), 0],
            [0, ComplexNumber.fromPolar(1, this.angle / 2)]
        ])
    }

    getStringStateFunction() {
        return (quantumState : QuantumState) => {
            requireLengthMatched(quantumState, this.wireLength);

            return quantumState.transform((value, key, _, newState) => {
                newState.increment(
                    key,
                    value.multiply(ComplexNumber.fromPolar(1, key[this.wire] === "0" 
                        ? -this.angle / 2 
                        : this.angle / 2
                    ))
                )
            });
        }
    }

    getNumberStateFunction() {
        return <T extends Vector | QuantumVectorState>(state : T) => {
            requireLengthMatched(state, this.wireLength);

            return state.transform((value, index, _, newState) => {
                newState.increment(
                    index,
                    value.multiply(ComplexNumber.fromPolar(1, index & (1 << (this.wireLength - 1 - this.wire))
                       ? -this.angle / 2
                       : this.angle / 2
                    ))
                )
            }) as T;
        }
    }


    isValidControlWire(controlWire : number) : boolean {
        return controlWire !== this.wire;
    }

    isGettable<G extends GeneratorType>(_: G): true {
        return true
    }

    toString() {
        return `Rz(${this.wire}, ${(this.angle/Math.PI).toFixed(4)}PI)`;
    }
}
