import { IBasicMatrixStatic, Matrix, SparseMatrix } from "../../util/Matrix";
import { GeneratorMatrixFunctionSubType, GeneratorMatrixType, GeneratorType } from "./Generator";

export const GeneratorMatrixMap = {
    [GeneratorType.Matrix] : Matrix,
    [GeneratorType.SparseMatrix] : SparseMatrix,
}

export const GeneratorMatrixCtor = <T extends GeneratorMatrixFunctionSubType>(generatorType : T) : IBasicMatrixStatic<GeneratorMatrixType<T>> => {
    return GeneratorMatrixMap[generatorType];
}

export const isGeneratorMatrixFunctionSubType = (generatorType : GeneratorType) : generatorType is GeneratorMatrixFunctionSubType => {
    return generatorType === GeneratorType.Matrix || generatorType === GeneratorType.SparseMatrix;
}