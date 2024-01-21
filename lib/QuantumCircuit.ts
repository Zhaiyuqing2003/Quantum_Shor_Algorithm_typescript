import Vector from "../util/Vector";
import { GateConstructorMap } from "./QuantumGate/GateConstructorMap";
import { GeneratorFunctionType, GeneratorInputType, GeneratorMatrixFunctionSubType, GeneratorMatrixInstanceType, GeneratorType } from "./QuantumGate/Generator";
import { GeneratorMatrixCtor, GeneratorMatrixMap, isGeneratorMatrixFunctionSubType } from "./QuantumGate/GeneratorMatrixMap";
import { QuantumGate } from "./QuantumGate/QuantumGate";


export class QuantumCircuit<T extends GeneratorType> {
    readonly generatorType : T;
    readonly matrixArray : GeneratorMatrixInstanceType<GeneratorMatrixFunctionSubType>[];
    readonly gateArray : QuantumGate[];
    readonly functionArray : GeneratorFunctionType<T>[];
    readonly wireLength : number;

    private constructor(
        gateArray : QuantumGate[], 
        functionArray : GeneratorFunctionType<T>[], 
        matrixArray  : GeneratorMatrixInstanceType<GeneratorMatrixFunctionSubType>[],
        wireLength : number, generatorType : T
    ) {
        this.gateArray = gateArray;
        this.functionArray = functionArray;
        this.matrixArray = matrixArray;
        this.wireLength = wireLength;
        this.generatorType = generatorType;
    }

    static create<T extends GeneratorType>(
        gateArray : QuantumGate[], 
        functionArray : GeneratorFunctionType<T>[], 
        matrixArray  : GeneratorMatrixInstanceType<GeneratorMatrixFunctionSubType>[],
        wireLength : number, generatorType : T
    ) : QuantumCircuit<T> {
        return new QuantumCircuit(gateArray, functionArray, matrixArray ,wireLength, generatorType);
    }

    execute(state : GeneratorInputType<T>) {
        // @ts-ignore
        return this.functionArray.reduce((state, fn, index) => {
            // @ts-ignore
            return fn(state);
            // console.log(this.gateArray[index]);
            // console.log(nextState);
            // // nextState.printStringColorfulSorted();
            // return nextState
        }, state);
    }

    executeMatrix(state : Vector) : Vector {
        const matrix = this.getMatrix();

        if (matrix === null) {
            throw new Error("Current Quantum Circuit Have No Matrix Description");
        }

        return matrix.vectorMultiply(state);
    }

    getMatrix() : GeneratorMatrixInstanceType<GeneratorMatrixFunctionSubType> | null {
        if (isGeneratorMatrixFunctionSubType(this.generatorType)) {
            return this.matrixArray.reduce((acc, matrix) => matrix.matrixMultiply(acc), GeneratorMatrixCtor(this.generatorType).identity(2 ** this.wireLength));
        } else {
            return null;
        }
    }

    toString() {
        return `QuantumCircuit(${this.wireLength})[\n${this.gateArray.map((gate) => '\t' + gate.toString()).join('\n')}\n]`;
    }

    
}

