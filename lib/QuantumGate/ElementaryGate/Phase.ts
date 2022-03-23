import Vector from "../../../util/Vector";
import StaticImpl from "../../../util/StaticImpl";
import QuantumState from "../../QuantumState";
import ComplexNumber from "../../../util/ComplexNumber";
import QuantumVectorState from "../../QuantumVectorState";
import { GateGettable, GateConstructor } from "../GateInterface";
import { requireWireInBound, requireLengthMatched } from "../GateHelper";
import { GeneratorType, GeneratorMatrixFunctionSubType } from "../Generator";
import { GateConstructorParameter, GateEnum, GateParameterTransformFunction } from "../GateType";
import { GeneratorMatrixMap } from "../GeneratorMatrixMap";

@StaticImpl<GateConstructor<GateEnum["Phase"]>>()
export default class Phase implements GateGettable<GateEnum["Phase"]> {
    readonly wireLength: number;
    readonly wire : number;
    readonly angle : number;
    
    constructor({ wireLength, wire, angle } : GateConstructorParameter<GateEnum["Phase"]>) {
        this.wireLength = wireLength;
        this.wire = wire;
        this.angle = angle;
    }

    static create = ({ wireLength, wire, angle } : GateConstructorParameter<GateEnum["Phase"]>) => {
        requireWireInBound(wireLength, wire);

        return new Phase({ wireLength, wire, angle });
    }

    get wireRange() : [number, number] {
        return [this.wire, this.wire + 1];
    }
    
    shift({shift, wireLength}: { shift: number; wireLength: number; }) {
        return Phase.create({
            wireLength,
            wire: this.wire + shift,
            angle: this.angle
        })
    }

    clone() {
        return new Phase(this);
    }
    
    transform(callbackFn: GateParameterTransformFunction<GateEnum["Phase"]>) {
        return Phase.create(callbackFn(this));
    }
    
    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType : G){
        return (GeneratorMatrixMap[generatorType]).fromArray([
            [1, 0],
            [0, ComplexNumber.fromPolar(1, this.angle)]
        ])
    }

    getStringStateFunction() {
        return (quantumState : QuantumState) => {
            requireLengthMatched(quantumState, this.wireLength);

            return quantumState.transform((value, key, _, newState) => {
                newState.increment(
                    key,
                    key[this.wire] === "0" ? value.clone() : value.multiply(ComplexNumber.fromPolar(1, this.angle))
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
                    (index & (1 << (this.wireLength - 1 - this.wire))) === 0 ? value : value.multiply(ComplexNumber.fromPolar(1, this.angle))
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
}
