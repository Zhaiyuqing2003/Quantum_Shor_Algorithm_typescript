import { QuantumCircuit } from "./QuantumCircuit";
import { AtomizeStrategy, AtomizeType } from "./QuantumGate/Atomizer";
import { GeneratorFunctionType, GeneratorMatrixFunctionSubType, GeneratorMatrixInstanceType, GeneratorMatrixType, GeneratorType } from "./QuantumGate/Generator";
import { GeneratorMatrixMap, isGeneratorMatrixFunctionSubType } from "./QuantumGate/GeneratorMatrixMap";
import { QuantumGate } from "./QuantumGate/QuantumGate";

export class QuantumWire {
    readonly wireLength : number;
    readonly gateArray : QuantumGate[];

    private constructor(wireLength : number) {
        this.wireLength = wireLength;
        this.gateArray = [];
    }

    static create(wireLength : number) : QuantumWire {
        return new QuantumWire(wireLength);
    }

    addGate(gate : QuantumGate) {
        this.gateArray.push(gate);
    }

    generate<T extends GeneratorType>(atomizeStrategy : AtomizeType , generatorType : T) : QuantumCircuit<T> {
        const gateArray = this.gateArray.map((gate) => atomizeStrategy(gate, generatorType)).flat();

        // this gateArray are guaranteed to get the function in generatorType
        const functionArray = gateArray.map((gate) => gate.get(generatorType) as GeneratorFunctionType<T>);


        const matrixArray = isGeneratorMatrixFunctionSubType(generatorType) 
            ? gateArray.map((gate) => gate.getMatrix(generatorType) as GeneratorMatrixInstanceType<typeof generatorType>)
            : [];


        return QuantumCircuit.create<T>(
            gateArray, functionArray, 
            matrixArray, 
            this.wireLength, generatorType
        );
    }

    toString() {
        return `QuantumWire[\n${this.gateArray.map((gate) => '\t' + gate.toString()).join('\n')}\n]`;
    }
}