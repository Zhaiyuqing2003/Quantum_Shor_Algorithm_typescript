import StaticImpl from "../../../util/StaticImpl";
import QuantumState from "../../QuantumState";
import { reverseString } from "../../../util/StringHelper";
import { GateMaybeGettable, GateConstructor } from "../GateInterface";
import { GeneratorType } from "../Generator";
import { requireLengthMatched, requireWireInBound, requireWireIsSmallerThan } from "../GateHelper";
import { GateConstructorParameter, GateEnum, GateParameterTransformFunction } from "../GateType";

@StaticImpl<GateConstructor<GateEnum["Flip"]>>()
export default class Flip implements GateMaybeGettable<GateEnum["Flip"]> {
    readonly wireLength: number;
    readonly startWire : number;
    readonly endWire : number;

    get wireRange() : [number, number] {
        return [this.startWire, this.endWire];
    }

    constructor({ wireLength, startWire, endWire } : GateConstructorParameter<GateEnum["Flip"]>) {
        this.wireLength = wireLength;
        this.startWire = startWire;
        this.endWire = endWire;
    }

    static create = ({ wireLength, startWire, endWire } : GateConstructorParameter<GateEnum["Flip"]>) => {
        requireWireInBound(wireLength, startWire);
        requireWireInBound(wireLength, endWire - 1);
        requireWireIsSmallerThan(startWire, endWire);
 
        return new Flip({ wireLength, startWire, endWire });
    }

    shift({shift, wireLength}: { shift: number; wireLength: number; }) {
        return Flip.create({
            wireLength,
            startWire: this.startWire + shift,
            endWire: this.endWire + shift
        })
    }


    clone() {
        return new Flip(this);
    }

    transform(callbackFn: GateParameterTransformFunction<GateEnum["Flip"]>) {
        return Flip.create(callbackFn(this))
    }

    getBaseMatrix() {
        return null;
    }

    getStringStateFunction() {
        return (quantumState : QuantumState) => {
            requireLengthMatched(quantumState, this.wireLength);

            return quantumState.transform((value, key, _, newState) => {
                newState.increment(
                    reverseString(key),
                    value.clone()
                )
            }); 
        }
    }

    getNumberStateFunction() : null {
        return null;
    }

    isValidControlWire(controlWire : number) : boolean {
        return controlWire < this.startWire || controlWire >= this.endWire;
    }

    isGettable<U extends GeneratorType>(generatorType: U) {
        return generatorType === GeneratorType.StateFunction;
    }
}