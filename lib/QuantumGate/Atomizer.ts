import Hadamard from "./ElementaryGate/Hadamard";
import PauliX from "./ElementaryGate/PauliX";
import Phase from "./ElementaryGate/Phase";
import Rz from "./ElementaryGate/Rz";
import Flip from "./ExtendedGate/Flip";
import Fourier from "./ExtendedGate/Fourier";
import Swap from "./ExtendedGate/Swap";
import { GateSymbol } from "./GateSymbol";
import { GateEnum } from "./GateType";
import { GeneratorType } from "./Generator";
import { QuantumGate } from "./QuantumGate";
import { Controlled, Inverted, InvertedUncontrolledBasedOn, NotInverted, NotInvertedSinglyControlledBasedOn, NotInvertedUncontrolledBasedOn, SinglyControlled, Uncontrolled } from "./QuantumGateType";

export type AtomizeType = 
    typeof AtomizeStrategy.All |
    typeof AtomizeStrategy.Max |
    typeof AtomizeStrategy.Min |
    typeof AtomizeStrategy.None



export class AtomizeStrategy {
    private constructor() {};

    static All(gate : QuantumGate, generatorType : GeneratorType) : QuantumGate[] {
        if (gate.isElementaryGate()) {
            return [gate];
        }
        // non-elementary gate can be atomized
        const atomizedGateList = Atomizer.atomize(gate)

        if (atomizedGateList === null) {
            throw new Error(`Could not atomize gate ${gate.constructor.name}`);
        }

        // further atomize the list
        return atomizedGateList.map(g => this.All(g, generatorType)).flat();
    }
    static Max(gate : QuantumGate, generatorType : GeneratorType) : QuantumGate[] {
        if (gate.isElementaryGate()) {
            return [gate];
        }

        // try to atomize the gate
        const atomizedGateList = Atomizer.atomize(gate)

        if (atomizedGateList !== null) {
            // further atomize the list
            return atomizedGateList.map(g => this.Max(g, generatorType)).flat();
        }

        // cannot atomize the gate, try to get it
        if (gate.isGettable(generatorType)) {
            return [gate];
        }

        throw new Error(`Could neither atomize gate ${gate.constructor.name} with generator ${generatorType} nor get it`);
    }
    static Min(gate : QuantumGate, generatorType : GeneratorType) : QuantumGate[] {
        if (gate.isElementaryGate()) {
            return [gate];
        }

        // try to get it
        if (gate.isGettable(generatorType)) {
            return [gate];
        }
        // cannot directly get the gate, try to atomize it
        const atomizedGateList = Atomizer.atomize(gate)

        if (atomizedGateList === null) {
            throw new Error(`Could not atomize gate ${gate.constructor.name}`);
        }

        // further atomize the list
        return atomizedGateList.map(g => this.Min(g, generatorType)).flat();;
    }
    static None(gate : QuantumGate, generatorType : GeneratorType) : QuantumGate[] {
        if (gate.isGettable(generatorType)) {
            return [gate];
        } else {
            throw new Error(`Could not get gate ${gate.constructor.name} with generator ${generatorType}`);
        }
    }
}


class Atomizer {
    private constructor() {};

    // 1 depth atomization
    static atomize(gate : QuantumGate) : QuantumGate[] | null {
        if (gate.isNotInverted()) {
            if (gate.isUncontrolled()) {
                return this.atomizeNotInvertedUncontrolled(gate);
            } else if (gate.isSinglyControlled()) {
                return this.atomizeNotInvertedSinglyControlled(gate);
            } else {
                return null;
            }
        } else if (gate.isInverted()) {
            if (gate.isUncontrolled()) {
                return this.atomizeInvertedUncontrolled(gate);
            } else if (gate.isControlled()) {
                return this.atomizeInvertedControlled(gate);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    static atomizeNotInvertedUncontrolled(gate : QuantumGate & NotInverted & Uncontrolled) : QuantumGate[] | null {
        if (gate.isBasedOn(Hadamard)) {
            return this.NotInvertedUncontrolledHadamard(gate);
        } else if (gate.isBasedOn(PauliX)) {
            return this.NotInvertedUncontrolledPauliX(gate);
        } else if (gate.isBasedOn(Phase)) {
            return this.NotInvertedUncontrolledPhase(gate);
        } else if (gate.isBasedOn(Rz)) {
            return this.NotInvertedUncontrolledRz(gate);
        } else if (gate.isBasedOn(Flip)) {
            return this.NotInvertedUncontrolledFlip(gate);
        } else if (gate.isBasedOn(Fourier)) {
            return this.NotInvertedUncontrolledFourier(gate);
        } else if (gate.isBasedOn(Swap)) {
            return this.NotInvertedUncontrolledSwap(gate);
        } else {
            return null;
        }
    }
    static atomizeNotInvertedSinglyControlled(gate : QuantumGate & NotInverted & SinglyControlled) : QuantumGate[] | null {
        if (gate.isBasedOn(PauliX)) {
            return this.NotInvertedSinglyControlledPauliX(gate);
        } else if (gate.isBasedOn(Phase)) {
            return this.NotInvertedSinglyControlledPhase(gate);
        } else if (gate.isBasedOn(Rz)) {
            return this.NotInvertedSinglyControlledRz(gate);
        } else {
            return null;
        }
    }
    static atomizeInvertedUncontrolled(gate : QuantumGate & Inverted & Uncontrolled) : QuantumGate[] | null {
        if (gate.isBasedOn(Hadamard)) {
            return this.InvertedUncontrolledHadamard(gate);
        } else if (gate.isBasedOn(PauliX)) {
            return this.InvertedUncontrolledPauliX(gate);
        } else if (gate.isBasedOn(Phase)) {
            return this.InvertedUncontrolledPhase(gate);
        } else if (gate.isBasedOn(Rz)) {
            return this.InvertedUncontrolledRz(gate);
        } else if (gate.isBasedOn(Flip)) {
            return this.InvertedUncontrolledFlip(gate);
        } else if (gate.isBasedOn(Fourier)) {
            return this.InvertedUncontrolledFourier(gate);
        } else if (gate.isBasedOn(Swap)) {
            return this.InvertedUncontrolledSwap(gate);
        } else {
            return null;
        }
    }
    static atomizeInvertedControlled(gate : QuantumGate & Inverted & Controlled) : QuantumGate[] | null {
        // construct the uncontrolled version first
        const uncontrolledGate = this.atomizeInvertedUncontrolled(QuantumGate.toUncontrolled(gate));

        if (uncontrolledGate === null) {
            return null;
        }

        // then construct the controlled version
        return uncontrolledGate.map((uncontrolledGate) => {
            return QuantumGate.toControlled(uncontrolledGate, gate.controlWire);
        })
    }



    static NotInvertedUncontrolledHadamard = (gate : QuantumGate & NotInvertedUncontrolledBasedOn<GateEnum["Hadamard"]>) => [gate.clone()];
    static NotInvertedUncontrolledPhase = (gate : QuantumGate & NotInvertedUncontrolledBasedOn<GateEnum["Phase"]>) => [gate.clone()];
    static NotInvertedUncontrolledPauliX = (gate : QuantumGate & NotInvertedUncontrolledBasedOn<GateEnum["PauliX"]>) => {
        // H, P Pi, H
        return [
            QuantumGate.fromBasis({
                type: GateSymbol.Hadamard,
                wire: gate.basis.wire,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromBasis({
                type: GateSymbol.Phase,
                wire: gate.basis.wire,
                angle : Math.PI,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromBasis({
                type: GateSymbol.Hadamard,
                wire: gate.basis.wire,
                wireLength : gate.wireLength
            })
        ]
    }
    static NotInvertedUncontrolledRz = (gate : QuantumGate & NotInvertedUncontrolledBasedOn<GateEnum["Rz"]>) => {
        // PauliX Phase -theta/2 PauliX Phase theta/2
        return [
            QuantumGate.fromBasis({
                type: GateSymbol.PauliX,
                wire: gate.basis.wire,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromBasis({
                type: GateSymbol.Phase,
                wire: gate.basis.wire,
                angle : -gate.basis.angle / 2,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromBasis({
                type: GateSymbol.PauliX,
                wire: gate.basis.wire,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromBasis({
                type: GateSymbol.Phase,
                wire: gate.basis.wire,
                angle : gate.basis.angle / 2,
                wireLength : gate.wireLength
            })
        ]
    }
    static NotInvertedUncontrolledFlip = (gate : QuantumGate & NotInvertedUncontrolledBasedOn<GateEnum["Flip"]>) => {
        const [startWire, endWire] = gate.basis.wireRange;
        const middleWire = Math.floor((startWire + endWire) / 2);
        
        
        let returnArray : QuantumGate[] = [];
        
        for (let i = startWire; i < middleWire; i++) {
            returnArray.push(QuantumGate.fromBasis({
                type : GateSymbol.Swap,
                wireOne : i,
                wireTwo : endWire - 1 + startWire - i,
                wireLength : gate.wireLength
            }));
        }
        
        return returnArray;
    }
    static NotInvertedUncontrolledFourier = (gate : QuantumGate & NotInvertedUncontrolledBasedOn<GateEnum["Fourier"]>) => {
        let returnArray : QuantumGate[] = [];
        
        const basis = gate.basis;
        const startWire = basis.startWire;
        const wireLength = basis.wireLength;
        const endWire = basis.endWire;
        
        for (let i = endWire - 1; i >= startWire; i --) {
            for (let j = endWire - 1; j > 1; j --) {
                returnArray.push(QuantumGate.fromBasis({
                    type : GateSymbol.Phase,
                    wireLength,
                    wire : j,
                    angle : Math.PI / (2 ** (j - 1))
                }))
            }

            returnArray.push(QuantumGate.fromBasis({
                type : GateSymbol.Hadamard,
                wireLength,
                wire : i
            }))
        }
        
        returnArray.push(QuantumGate.fromBasis({
            type : GateSymbol.Flip,
            wireLength,
            startWire : startWire,
            endWire : endWire
        }))
    
        return returnArray;
    }
    static NotInvertedUncontrolledSwap = (gate : QuantumGate & NotInvertedUncontrolledBasedOn<GateEnum["Swap"]>) => {
        // C-NOT, C-NOT, C-NOT,
        return [
            QuantumGate.fromSingleControlled({
                type: GateSymbol.PauliX,
                wire: gate.basis.wireOne,
                controlWire: gate.basis.wireTwo,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromSingleControlled({
                type: GateSymbol.PauliX,
                wire: gate.basis.wireTwo,
                controlWire: gate.basis.wireOne,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromSingleControlled({
                type: GateSymbol.PauliX,
                wire: gate.basis.wireOne,
                controlWire: gate.basis.wireTwo,
                wireLength : gate.wireLength
            })
        ]
    }
    
    static NotInvertedSinglyControlledPauliX = (gate : QuantumGate & NotInvertedSinglyControlledBasedOn<GateEnum["PauliX"]>) => [gate.clone()];
    static NotInvertedSinglyControlledRz = (gate : QuantumGate & NotInvertedSinglyControlledBasedOn<GateEnum["Rz"]>) => {
        // C-PauliX Phase -theta/2 C-PauliX Phase theta/2
        return [
            QuantumGate.fromSingleControlled({
                type: GateSymbol.PauliX,
                wire: gate.basis.wire,
                controlWire: gate.controlWire[0],
                wireLength : gate.wireLength
            }),
            QuantumGate.fromBasis({
                type: GateSymbol.Phase,
                wire: gate.basis.wire,
                angle : -gate.basis.angle / 2,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromSingleControlled({
                type: GateSymbol.PauliX,
                wire: gate.basis.wire,
                controlWire: gate.controlWire[0],
                wireLength : gate.wireLength
            }),
            QuantumGate.fromBasis({
                type: GateSymbol.Phase,
                wire: gate.basis.wire,
                angle : gate.basis.angle / 2,
                wireLength : gate.wireLength
            })
        ]
    }
    static NotInvertedSinglyControlledPhase = (gate : QuantumGate & NotInvertedSinglyControlledBasedOn<GateEnum["Phase"]>) => {
        // Phase theta / 2 C-Rz
        return [
            QuantumGate.fromBasis({
                type: GateSymbol.Phase,
                wire: gate.controlWire[0],
                angle : gate.basis.angle / 2,
                wireLength : gate.wireLength
            }),
            QuantumGate.fromSingleControlled({
                type: GateSymbol.Rz,
                wire: gate.basis.wire,
                controlWire: gate.controlWire[0],
                angle : gate.basis.angle,
                wireLength : gate.wireLength
            })
        ]
    }



    static InvertedUncontrolledHadamard = (gate : QuantumGate & InvertedUncontrolledBasedOn<GateEnum["Hadamard"]>) => [gate.clone()];
    static InvertedUncontrolledPauliX = (gate : QuantumGate & InvertedUncontrolledBasedOn<GateEnum["PauliX"]>) => [gate.clone()];
    static InvertedUncontrolledPhase = (gate : QuantumGate & InvertedUncontrolledBasedOn<GateEnum["Phase"]>) => 
        [QuantumGate.fromBasis({
            type : GateSymbol.Phase,
            wire : gate.basis.wire,
            angle : -gate.basis.angle,
            wireLength : gate.wireLength
        })]
    static InvertedUncontrolledRz = (gate : QuantumGate & InvertedUncontrolledBasedOn<GateEnum["Rz"]>) =>
        [QuantumGate.fromBasis({
            type : GateSymbol.Rz,
            wire : gate.basis.wire,
            angle : -gate.basis.angle,
            wireLength : gate.wireLength
        })]
    static InvertedUncontrolledFlip = (gate : QuantumGate & InvertedUncontrolledBasedOn<GateEnum["Flip"]>) => [gate.clone()];
    static InvertedUncontrolledSwap = (gate : QuantumGate & InvertedUncontrolledBasedOn<GateEnum["Swap"]>) => [gate.clone()];
    static InvertedUncontrolledFourier = (gate : QuantumGate & InvertedUncontrolledBasedOn<GateEnum["Fourier"]>) => {
        return this.NotInvertedUncontrolledFourier(QuantumGate.fromBasis({
            type : GateSymbol.Fourier,
            wireLength : gate.wireLength,
            startWire : gate.basis.startWire,
            endWire : gate.basis.endWire
        })).reverse();
    }
}