import { IBasicMatrix, MatrixType } from "../../util/Matrix";
import Vector from "../../util/Vector";
import QuantumState from "../QuantumState";
import QuantumVectorState from "../QuantumVectorState";

export enum GeneratorType {
    Matrix = "Matrix",
    SparseMatrix = "SparseMatrix",
    StateFunction = "StateFunction",
    VectorFunction = "VectorFunction",
    VectorStateFunction = "VectorStateFunction",
}

type GeneratorInputMap = {
    [GeneratorType.Matrix]: Vector;
    [GeneratorType.SparseMatrix]: Vector;
    [GeneratorType.StateFunction]: QuantumState;
    [GeneratorType.VectorStateFunction]: QuantumVectorState;
    [GeneratorType.VectorFunction]: Vector;
}

type GeneratorMatrixTypeMap = {
    [GeneratorType.Matrix] : MatrixType.Dense;
    [GeneratorType.SparseMatrix] : MatrixType.Sparse;
}


export type TransformFunction<T extends Vector | QuantumState | QuantumVectorState> = (state: T) => T;
export type GeneratorFunctionType<T extends GeneratorType> = GeneratorFunctionMap[T] ;
export type GeneratorInputType<T extends GeneratorType> = GeneratorInputMap[T];
export type GeneratorStateFunctionSubType = GeneratorType.StateFunction | GeneratorType.VectorStateFunction | GeneratorType.VectorFunction;
export type GeneratorMatrixFunctionSubType = GeneratorType.Matrix | GeneratorType.SparseMatrix;
export type GeneratorMatrixType<T extends GeneratorMatrixFunctionSubType> = GeneratorMatrixTypeMap[T];
export type GeneratorMatrixInstanceType<T extends GeneratorMatrixFunctionSubType> = IBasicMatrix<GeneratorMatrixType<T>>;

type GeneratorFunctionMap = {
    [key in keyof GeneratorInputMap] : TransformFunction<GeneratorInputMap[key]>; 
}


