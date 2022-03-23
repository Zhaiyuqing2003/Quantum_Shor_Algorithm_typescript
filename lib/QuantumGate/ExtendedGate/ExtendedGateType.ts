import { ExtendedGateSymbol } from "../GateSymbol";

export type ExtendedGateEnum = typeof ExtendedGateSymbol;
export type ExtendedGateEnumKey = keyof ExtendedGateEnum;
export type ExtendedGateEnumValue = ExtendedGateEnum[ExtendedGateEnumKey];
export type ExtendedGateParameter<T extends ExtendedGateEnumValue> = ExtendedGateParameterMap[T];

export type ExtendedGateParameterMap = {
    [ExtendedGateSymbol.Swap]: {
        wireOne : number,
        wireTwo : number,
    },
    [ExtendedGateSymbol.Shor]: {
        startWire : number,
        endWire : number,
        x : number,
        N : number,
    },
    [ExtendedGateSymbol.Flip]: {
        startWire : number,
        endWire : number,
    },
    [ExtendedGateSymbol.Fourier]: {
        startWire : number,
        endWire : number,
    },
}