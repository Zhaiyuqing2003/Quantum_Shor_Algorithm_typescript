import StaticImpl from "../../../util/StaticImpl";
import QuantumState from "../../QuantumState";
import { Gate, GateConstructor, GateMaybeGettable } from "../GateInterface";
import { TransformFunction, GeneratorType, GeneratorFunctionType } from "../Generator";
import { replaceCharBetween, toBinaryString, toDecimal } from "../../../util/StringHelper";
import { requireLengthMatched, requireWireInBound, requireWireIsSmallerThan } from "../GateHelper";
import { GateEnum, GateConstructorParameter, GateParameterTransformFunction } from "../GateType";
import { MatrixType, IBasicMatrixStatic, IBasicMatrix } from "../../../util/Matrix";
import QuantumVectorState from "../../QuantumVectorState";
import Vector from "../../../util/Vector";

@StaticImpl<GateConstructor<GateEnum["Shor"]>>()
export default class Shor implements GateMaybeGettable<GateEnum["Shor"]> {
    readonly wireLength: number;
    readonly startWire : number;
    readonly endWire : number;
    readonly x : number;
    readonly N : number;

    get wireRange() : [number, number] {
        return [this.startWire, this.endWire];
    }
    
    constructor({ wireLength, startWire, endWire, x, N } : GateConstructorParameter<GateEnum["Shor"]>) {
        this.wireLength = wireLength;
        this.startWire = startWire;
        this.endWire = endWire;
        this.x = x;
        this.N = N;
    }

    static create = ({ wireLength, startWire, endWire, x, N } : GateConstructorParameter<GateEnum["Shor"]>) => {
        requireWireInBound(wireLength, startWire);
        requireWireInBound(wireLength, endWire - 1);
        requireWireIsSmallerThan(startWire, endWire);

        if (x < 0 || x >= N) {
            throw new Error(`x must be in range [0, ${N}).`);
        }

        if (Math.ceil(Math.log2(N)) != endWire - startWire) {
            throw new Error(`The number of wires must be equal to the number of bits in N.`);
        }

        return new Shor({ wireLength, startWire, endWire, x, N });
    }

    shift({ shift, wireLength }: { shift: number; wireLength: number; }) {
        return Shor.create({
            wireLength,
            startWire: this.startWire + shift,
            endWire: this.endWire + shift,
            x : this.x,
            N : this.N
        })
    }

    clone() {
        return new Shor(this);
    }

    transform(callbackFn: GateParameterTransformFunction<GateEnum["Shor"]>) {
        return Shor.create(callbackFn(this));
    }

    getBaseMatrix() {
        return null;
    }

    getStringStateFunction() {
        return (quantumState : QuantumState) => {
            requireLengthMatched(quantumState, this.wireLength);

            return quantumState.transform((value, key, _, newState) => {
                const y = toDecimal(key.slice(this.startWire, this.endWire));
                const newY = (y >= this.N) ? y : (y * this.x) % this.N;

                newState.increment(
                    replaceCharBetween(
                        key, 
                        this.startWire, this.endWire, 
                        toBinaryString(newY, this.endWire - this.startWire)
                    ),
                    value.clone()
                )
            });
        }
    }

    getNumberStateFunction() {
        return <T extends Vector | QuantumVectorState>(state : T) => {
            requireLengthMatched(state, this.wireLength);

            return state.transform((value, key, _, newState) => {
                // slice the bits from startWire to endWire
                const y = (key >> (this.wireLength - this.endWire)) & ((1 << (this.endWire - this.startWire)) - 1);
                const newY = (y >= this.N) ? y : (y * this.x) % this.N;

                newState.increment(
                    // ((150 >> (8 - 3) << (6 - 3) | 7) << (8 - 6)) | (150 & (1 << (8 - 6) - 1)),
                    ((key >> (this.wireLength - this.startWire) << (this.endWire - this.startWire) | newY) << (this.wireLength - this.endWire)) | 
                        (key & ((1 << (this.wireLength - this.endWire)) - 1)),
                    value.clone()
                )
            }) as T;
        }
    }

    isValidControlWire(controlWire : number) : boolean {
        return controlWire < this.startWire || controlWire >= this.endWire;
    }

    // atomize(type: AtomizeType): QuantumGate[] {
    //     if (type === AtomizeType.All) {
    //         throw new Error("Shor gate atomize is not supported.");
    //     }

    //     return [QuantumGate.wrap(this)];
    // }

    isGettable<G extends GeneratorType>(generatorType: G): boolean {
        switch (generatorType) {
            case GeneratorType.StateFunction:
                return true;
            default:
                return false;
        }
    }
}