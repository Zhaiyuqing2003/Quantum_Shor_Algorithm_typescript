import { GeneratorType, GeneratorFunctionType, GeneratorStateFunctionSubType, GeneratorMatrixFunctionSubType, GeneratorMatrixType, GeneratorMatrixInstanceType } from "./Generator";
import { IBasicMatrix, IBasicMatrixStatic, Matrix, MatrixType } from "../../util/Matrix";
import { GateConstructorParameter, GateEnumValue } from "./GateType";
import { ElementaryGateEnumValue } from "./ElementaryGate/ElementaryGateType";
import { ExtendedGateEnumValue } from "./ExtendedGate/ExtendedGateType";
import { GateConstructorMap } from "./GateConstructorMap";


export interface Gate<T extends GateEnumValue> {
    readonly wireLength : number;
    readonly wireRange : [number, number] | undefined;
    clone() : Gate<T>;
    shift(parameter : { shift : number, wireLength : number}) : Gate<T>;
    transform(callbackFn : (parameter : GateConstructorParameter<T>) => GateConstructorParameter<T>) : Gate<T>;
    isValidControlWire(controlWire : number) : boolean;

    isGettable<G extends GeneratorType>(generatorType : G) : boolean;
    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType : G) : GeneratorMatrixInstanceType<G> | null;
    getStringStateFunction() : GeneratorFunctionType<GeneratorType.StateFunction> | null;
    getNumberStateFunction() : GeneratorFunctionType<GeneratorType.VectorFunction | GeneratorType.VectorStateFunction> | null;
}

export interface GateConstructor<T extends GateEnumValue> {
    new(parameter : GateConstructorParameter<T>) : Gate<T>;
    create(parameter : GateConstructorParameter<T>) : Gate<T>
}

export interface GateGettable<T extends GateEnumValue> extends Gate<T> {
    readonly wire : number;
    readonly wireRange : [number, number];
    isGettable<G extends GeneratorType>(generatorType : G) : true;
    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType : G) : GeneratorMatrixInstanceType<G>;
    getStringStateFunction() : GeneratorFunctionType<GeneratorType.StateFunction>;
    getNumberStateFunction() : GeneratorFunctionType<GeneratorType.VectorFunction | GeneratorType.VectorStateFunction>;
}

export interface GateNotGettable<T extends ExtendedGateEnumValue> extends Gate<T> {
    readonly wireRange : undefined;
    isGettable<U extends GeneratorType>(generatorType : U) : false;
    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType : G) : null;
    getStringStateFunction() : null
    getNumberStateFunction() : null
}

export interface GateMaybeGettable<T extends ExtendedGateEnumValue> extends Gate<T> {
    readonly wireRange : [number, number];
    isGettable<U extends GeneratorType>(generatorType : U) : boolean;
    getBaseMatrix<G extends GeneratorMatrixFunctionSubType>(generatorType : G) : GeneratorMatrixInstanceType<G> | null;
    getStringStateFunction() : GeneratorFunctionType<GeneratorType.StateFunction> | null;
    getNumberStateFunction() : GeneratorFunctionType<GeneratorType.VectorFunction | GeneratorType.VectorStateFunction> | null;
}