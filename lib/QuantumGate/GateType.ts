import { ElementaryGateParameterMap } from "./ElementaryGate/ElementaryGateType";
import { ExtendedGateParameterMap } from "./ExtendedGate/ExtendedGateType";
import { GateConstructorMap } from "./GateConstructorMap";
import { GateSymbol } from "./GateSymbol";


export type GateEnum = typeof GateSymbol;
export type GateEnumKey = keyof GateEnum;
export type GateEnumValue = GateEnum[GateEnumKey];


export type GateParameterMap = ElementaryGateParameterMap & ExtendedGateParameterMap;
export type GateParameter<T extends GateEnumValue> = GateParameterMap[T];
export type GateConstructorParameter<T extends GateEnumValue> = GateParameter<T> & {
    wireLength : number
};
export type GateInstanceType<T extends GateEnumValue> = InstanceType<typeof GateConstructorMap[T]>;

export type GateParameterTransformFunction<T extends GateEnumValue> = 
    (parameter : GateConstructorParameter<T>) => GateConstructorParameter<T>;
