import { GateGettable } from './GateInterface';
import { GateEnum, GateEnumValue, GateInstanceType } from './GateType';

export type Uncontrolled = {
    readonly controlWire : [];
} 

export type SinglyControlled = {
    readonly controlWire : [number];
}

export type Controlled = {
    readonly controlWire : [number, ...number[]];
}

export type Inverted = {
    readonly isInverse : true;
}

export type NotInverted = {
    readonly isInverse : false;
}

export type BasisGettable = {
    basis : GateGettable<GateEnumValue>
}

export type Gettable = NotInverted & BasisGettable;

export type BasedOn<T extends GateEnumValue> = {
    basis : GateInstanceType<T>
}

export type NotInvertedUncontrolledBasedOn<T extends GateEnumValue> = NotInverted & Uncontrolled & BasedOn<T>
export type NotInvertedSinglyControlledBasedOn<T extends GateEnumValue> = NotInverted & SinglyControlled & BasedOn<T>

export type InvertedUncontrolledBasedOn<T extends GateEnumValue> = Inverted & Uncontrolled & BasedOn<T>
export type InvertedSinglyControlledBasedOn<T extends GateEnumValue> = Inverted & SinglyControlled & BasedOn<T>


export type AtomicGate = 
    NotInvertedUncontrolledBasedOn<GateEnum["Hadamard"]> |
    NotInvertedUncontrolledBasedOn<GateEnum["Phase"]> |
    NotInvertedSinglyControlledBasedOn<GateEnum["PauliX"]>
