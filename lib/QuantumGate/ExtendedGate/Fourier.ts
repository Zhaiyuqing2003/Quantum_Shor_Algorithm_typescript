import StaticImpl from "../../../util/StaticImpl";
import { GeneratorType } from "../Generator";
import { GateConstructor, GateNotGettable } from "../GateInterface";
import { requireWireInBound, requireWireIsSmallerThan } from "../GateHelper";
import { GateConstructorParameter, GateEnum, GateParameterTransformFunction } from "../GateType";

@StaticImpl<GateConstructor<GateEnum["Fourier"]>>()
export default class Fourier implements GateNotGettable<GateEnum["Fourier"]> {
    readonly wireLength: number;
    readonly startWire : number;
    readonly endWire : number;

    get wireRange() {
        return undefined;
    }

    constructor({ wireLength, startWire, endWire } : GateConstructorParameter<GateEnum["Fourier"]>) {
        this.wireLength = wireLength;
        this.startWire = startWire;
        this.endWire = endWire;
    }

    static create = ({ wireLength, startWire, endWire } : GateConstructorParameter<GateEnum["Fourier"]>) => {
        requireWireInBound(wireLength, startWire);
        requireWireInBound(wireLength, endWire - 1);
        requireWireIsSmallerThan(startWire, endWire);

        return new Fourier({ wireLength, startWire, endWire });
    }

    shift({shift, wireLength}: { shift: number; wireLength: number; }) {
        return Fourier.create({
            wireLength,
            startWire: this.startWire + shift,
            endWire: this.endWire + shift
        })
    }

    clone() {
        return new Fourier(this);
    }

    transform(callbackFn: GateParameterTransformFunction<GateEnum["Fourier"]>) {
        return Fourier.create(callbackFn(this))
    }

    getBaseMatrix() {
        return null;
    }

    getStringStateFunction() {
        return null
    }

    getNumberStateFunction() {
        return null;
    }

    isGettable<G extends GeneratorType>(_: G): false {
        return false
    }

    isValidControlWire(controlWire : number) : boolean {
        return controlWire < this.startWire || controlWire >= this.endWire;
    }

    toString() {
        return `Fourier(${this.startWire}..${this.endWire})`;
    }
}