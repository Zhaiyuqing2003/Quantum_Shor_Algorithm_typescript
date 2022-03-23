
import { ElementaryGateSymbol } from "../GateSymbol";

export type ElementaryGateEnum = typeof ElementaryGateSymbol;
export type ElementaryGateEnumKey = keyof ElementaryGateEnum;
export type ElementaryGateEnumValue = ElementaryGateEnum[ElementaryGateEnumKey];
export type ElementaryGateParameter<T extends ElementaryGateEnumValue> = ElementaryGateParameterMap[T];

export type ElementaryGateParameterMap = {
    [ElementaryGateSymbol.Hadamard]: {
        wire : number,
    },
    [ElementaryGateSymbol.PauliX]: {
        wire : number,
    },
    [ElementaryGateSymbol.Phase]: {
        wire : number,
        angle : number,
    },
    [ElementaryGateSymbol.Rz]: {
        wire : number,
        angle : number,
    }
}