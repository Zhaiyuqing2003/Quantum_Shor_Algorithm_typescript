import { GateConstructorMap } from "./GateConstructorMap";
import { Gate, GateConstructor, GateGettable } from "./GateInterface";
import { GeneratorType, GeneratorFunctionType, GeneratorMatrixFunctionSubType } from "./Generator";
import { GateConstructorParameter, GateEnumValue, GateParameterTransformFunction } from "./GateType";

import { 
    AtomicGate, 
    BasedOn, 
    BasisGettable, 
    Controlled, 
    Gettable, 
    Inverted, 
    NotInverted, 
    NotInvertedSinglyControlledBasedOn, 
    NotInvertedUncontrolledBasedOn, 
    SinglyControlled, 
    Uncontrolled 
} from "./QuantumGateType";

import Hadamard from "./ElementaryGate/Hadamard";
import PauliX from "./ElementaryGate/PauliX";
import Phase from "./ElementaryGate/Phase";

import Vector from "../../util/Vector";
import QuantumState from "../QuantumState";
import QuantumVectorState from "../QuantumVectorState";
import { everyChar } from "../../util/StringHelper";
import { GeneratorMatrixCtor } from "./GeneratorMatrixMap";
import { requireLengthMatched } from "./GateHelper";


export type FactoryUncontrolledGateParameter<T extends GateEnumValue> = GateConstructorParameter<T> & {
    type : T
}

export type FactorySingleControlledGateParameter<T extends GateEnumValue> = FactoryUncontrolledGateParameter<T> & {
    controlWire : number
}

export type FactoryControlledGateParameter<T extends GateEnumValue> = GateConstructorParameter<T> & {
    isInverse : boolean,
    controlWire : Set<number>,
}


export class QuantumGate {
    readonly basis : Gate<GateEnumValue>;
    readonly wireLength : number;
    readonly isInverse : boolean;
    readonly controlWire : Set<number>;

    constructor(gate : Gate<GateEnumValue>, controlWire : Set<number>, isInverse : boolean) {
        this.basis = gate;
        this.wireLength = gate.wireLength;
        this.controlWire = controlWire;
        this.isInverse = isInverse;
    }

    static create<T extends GateEnumValue>(gate : Gate<T>, controlWire : Set<number> = new Set(), isInverse : boolean = false) {
        controlWire.forEach((wire) => {
            if (!gate.isValidControlWire(wire)) {
                throw new Error(`Control wire [${wire}] is invalid.`);
            }
        })

        return new QuantumGate(gate, new Set(controlWire), isInverse);
    }

    static getBasisGate<T extends GateEnumValue>(gateType : T, parameter : GateConstructorParameter<T>) {
        return GateConstructorMap[gateType].create(parameter as unknown as GateConstructorParameter<any>)
    }

    static fromBasis<T extends GateEnumValue>({ type, ...parameter } : FactoryUncontrolledGateParameter<T>) 
    : QuantumGate & NotInvertedUncontrolledBasedOn<T> {
        return QuantumGate.create<T>(
            QuantumGate.getBasisGate<T>(type, parameter as unknown as GateConstructorParameter<T>) as unknown as Gate<T>
        ) as unknown as QuantumGate & NotInvertedUncontrolledBasedOn<T>;
    }

    static fromSingleControlled<T extends GateEnumValue>({ type, controlWire, ...parameter } : FactorySingleControlledGateParameter<T>) 
    : QuantumGate & NotInvertedSinglyControlledBasedOn<T> {
        return QuantumGate.create<T>(
            QuantumGate.getBasisGate<T>(type, parameter as unknown as GateConstructorParameter<T>) as unknown as Gate<T>, 
            new Set<number>().add(controlWire),
        ) as unknown as QuantumGate & NotInvertedSinglyControlledBasedOn<T>;
    }

    static toUncontrolled<T extends QuantumGate>(gate : T & Controlled) : T & Uncontrolled {
        return QuantumGate.create(gate.basis.clone(), new Set(), gate.isInverse) as unknown as T & Uncontrolled;
    }

    static toControlled<T extends QuantumGate>(gate : (T & Uncontrolled) | T, controlWire : Set<number>) : T & Controlled {
        const newSet = new Set(controlWire);

        // add controlWire to the original set
        controlWire.forEach(newSet.add, newSet)

        return QuantumGate.create(
            gate.basis.clone(), 
            newSet, 
            gate.isInverse
        ) as unknown as T & Controlled;
    }

    static toSinglyControlled<T extends QuantumGate>(gate : (T & Uncontrolled) | T, controlWire : number) : T & SinglyControlled {
        return QuantumGate.create(gate.basis.clone(), new Set(gate.controlWire).add(controlWire), gate.isInverse) as unknown as T & SinglyControlled;
    }

    transformBasis(callbackFn : GateParameterTransformFunction<GateEnumValue>) {
        return QuantumGate.create(this.basis.transform(callbackFn), this.controlWire, this.isInverse);
    }

    shiftBasis(parameter : { shift : number, wireLength : number }) {
        return QuantumGate.create(this.basis.shift(parameter), this.controlWire, this.isInverse);
    }

    toString() {
        return `${this.isInverse ? "Inv-" : ""}${this.basis.toString()}${this.controlWire.size > 0 ? ` Control(${Array.from(this.controlWire).join(",")})` : ""}`;
    }

    clone() {
        return new QuantumGate(this.basis.clone(), new Set(this.controlWire), this.isInverse);
    }

    toInverted() {
        return new QuantumGate(this.basis.clone(), new Set(this.controlWire), !this.isInverse);
    }

    // getters

    isGettable<T extends GeneratorType>(generatorType : T) : this is Gettable {
        return (this.isNotInverted()) && (this.isBasisGettable(generatorType));
    }

    isBasisGettable<T extends GeneratorType>(generatorType : T) : this is BasisGettable {
        return this.basis.isGettable(generatorType);
    }

    get<T extends GeneratorType>(generatorType : T) : GeneratorFunctionType<T> | null {
        if (!this.isGettable(generatorType)) {
            return null;
        }
                
        switch (generatorType) {
            case GeneratorType.Matrix:
            case GeneratorType.SparseMatrix:
                return this.getMatrixFunction(generatorType) as GeneratorFunctionType<T>;
            case GeneratorType.StateFunction:
                return this.getStringStateFunction() as GeneratorFunctionType<T>;
            case GeneratorType.VectorStateFunction:
            case GeneratorType.VectorFunction:
                return this.getVectorStateFunction() as GeneratorFunctionType<T>;
            default:
                return null;
        }
    }
    
    getMatrix<T extends GeneratorMatrixFunctionSubType>(generatorType : T) {
        if (!this.isGettable(generatorType)) {
            return null;
        }

        const basis : GateGettable<GateEnumValue> = this.basis;

        const wireLength = basis.wireLength;
        const [startGateWire, endGateWire] = basis.wireRange;

        const MatrixCtor = GeneratorMatrixCtor(generatorType);
        
        let matrix = basis.getBaseMatrix<T>(generatorType);

        let emptyWireCount = 0;

        for (let wire = startGateWire - 1; wire >= 0; wire--) {
            // check if the gate controls the control wire that is equal to the current wire
            if (!this.controlWire.has(wire)) {
                emptyWireCount++
            } else {
                if (emptyWireCount !== 0) {
                    // apply the tensor product I^(emptyWireCount) kron matrix
                    matrix = MatrixCtor.identity(2 ** emptyWireCount).kroneckerProduct(matrix);
                    emptyWireCount = 0;
                }

                // the top control wire matrix look like
                // [I, 0]
                // [0, matrix]
                matrix = MatrixCtor.concat(
                    MatrixCtor.identity(matrix.rowCount), MatrixCtor.zeros(matrix.rowCount, matrix.rowCount),
                    MatrixCtor.zeros(matrix.rowCount, matrix.rowCount), matrix
                )
            }
        }

        if (emptyWireCount !== 0) {
            // apply the tensor product I^(emptyWireCount) kron matrix
            matrix = MatrixCtor.identity(2 ** emptyWireCount).kroneckerProduct(matrix);
            emptyWireCount = 0;
        }
        
        for (let wire = endGateWire; wire < wireLength; wire++) {
            // check if the gate controls the control wire that is equal to the current wire
            if (!this.controlWire.has(wire)) {
                emptyWireCount++
            } else {
                if (emptyWireCount !== 0) {
                    // apply the tensor product I^(emptyWireCount) kron matrix
                    matrix = matrix.kroneckerProduct(MatrixCtor.identity(2 ** emptyWireCount));
                    emptyWireCount = 0;
                }

                // do an interleave
                matrix = MatrixCtor.interleave(MatrixCtor.identity(matrix.rowCount), matrix);
            }
        }
        
        if (emptyWireCount !== 0) {
            // apply the tensor product I^(emptyWireCount) kron matrix
            matrix = matrix.kroneckerProduct(MatrixCtor.identity(2 ** emptyWireCount));
            emptyWireCount = 0;
        }

        return matrix;
    }

    getMatrixFunction<T extends GeneratorMatrixFunctionSubType>(generatorType : T) {
        if (!this.isGettable(generatorType)) {
            return null;
        }

        // always work, since possible case to return null is already returned
        const matrix = this.getMatrix(generatorType)!;
        return (vector : Vector) => {
            requireLengthMatched(vector, this.wireLength);

            return matrix.vectorMultiply(vector);
        }
    }


    getStringStateFunction() {
        if (!this.isGettable(GeneratorType.StateFunction)) {
            return null;
        }

        const basis : GateGettable<GateEnumValue> = this.basis;

        return (state : QuantumState) => {
            requireLengthMatched(state, this.wireLength);

            if (this.isUncontrolled()) {
                return basis.getStringStateFunction()(state);
            }

            const [acceptedState, rejectedState] = state.split((_, key) => 
                everyChar(key, (char, index) => !this.controlWire.has(index) || char === "1")
            )

            return basis.getStringStateFunction()(acceptedState).combine(rejectedState);
        }
    }

    getVectorStateFunction() {
        if (!this.isGettable(GeneratorType.StateFunction)) {
            return null;
        }

        const basis : GateGettable<GateEnumValue> = this.basis
        const checkerNumber = [...this.controlWire].reduce((acc, wire) => acc + 2 ** (this.wireLength - wire - 1), 0)
        
        
        return <T extends Vector | QuantumVectorState>(state : T) => {
            requireLengthMatched(state, this.wireLength);

            const [acceptedState, rejectedState] = state.split((_, key) => 
                (key & checkerNumber) === checkerNumber
            ) as [T, T]

            return basis.getNumberStateFunction()(acceptedState as QuantumVectorState & Vector)
                        .combine(rejectedState as QuantumVectorState & Vector) as T;
        }
    }


    // Discriminator

        
    isElementaryGate() : this is AtomicGate {
        return this.isNotInvertedUncontrolledBasedOn(Hadamard) ||
            this.isNotInvertedUncontrolledBasedOn(Phase) ||
            this.isNotInvertedSinglyControlledBasedOn(PauliX);
    }

    isInverted() : this is Inverted {
        return this.isInverse;
    }

    isNotInverted() : this is NotInverted {
        return !this.isInverse;
    }

    isControlled() : this is Controlled {
        return this.controlWire.size > 0;
    }

    isUncontrolled() : this is Uncontrolled {
        return this.controlWire.size === 0;
    }

    isSinglyControlled() : this is SinglyControlled {
        return this.controlWire.size === 1;
    }

    isBasedOn<T extends GateEnumValue>(basisCtor : GateConstructor<T>) : this is BasedOn<T> {
        return this.basis instanceof basisCtor;
    }

    isNotInvertedUncontrolledBasedOn<T extends GateEnumValue>(basisCtor : GateConstructor<T>) : this is NotInvertedUncontrolledBasedOn<T> {
        return this.isNotInverted() && this.isUncontrolled() && this.isBasedOn(basisCtor);    
    }
    
    isNotInvertedSinglyControlledBasedOn<T extends GateEnumValue>(basisCtor : GateConstructor<T>) : this is NotInvertedSinglyControlledBasedOn<T> {
        return this.isNotInverted() && this.isSinglyControlled() && this.isBasedOn(basisCtor);
    }

}