import { AtomizeStrategy } from "../lib/QuantumGate/Atomizer";
import { GateSymbol } from "../lib/QuantumGate/GateSymbol";
import { GeneratorType } from "../lib/QuantumGate/Generator";
import { QuantumGate } from "../lib/QuantumGate/QuantumGate";
import QuantumState from "../lib/QuantumState";
import QuantumVectorState from "../lib/QuantumVectorState";
import { QuantumWire } from "../lib/QuantumWire";
import Vector from "../util/Vector";

export function wireValidator() {
    const wire = QuantumWire.create(2);


    // wire.addGate(QuantumGate.fromBasis({
    //     type : GateSymbol.Hadamard,
    //     wire : 0,
    //     wireLength : 2
    // }))

    // wire.addGate(QuantumGate.fromBasis({
    //     type : GateSymbol.Hadamard,
    //     wire : 1,
    //     wireLength : 2
    // }))

    // wire.addGate(QuantumGate.fromBasis({
    //     type : GateSymbol.Phase,
    //     wire : 0,
    //     angle : Math.PI,
    //     wireLength : 2
    // }))

    // wire.addGate(QuantumGate.fromBasis({
    //     type : GateSymbol.Phase,
    //     wire : 1,
    //     angle : Math.PI,
    //     wireLength : 2
    // }))

    wire.addGate(QuantumGate.fromSingleControlled({
        type : GateSymbol.PauliX,
        controlWire : 0,
        wire : 1,
        wireLength : 2
    }))



    const circuitOne = wire.generate(AtomizeStrategy.Min, GeneratorType.Matrix);
    const circuitTwo = wire.generate(AtomizeStrategy.Min, GeneratorType.SparseMatrix);
    const circuitThree = wire.generate(AtomizeStrategy.Min, GeneratorType.StateFunction);
    const circuitFour = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorFunction);
    const circuitFive = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction);

    console.log(circuitOne.execute(Vector.fromArray([0, 0, 1, 0])));
    console.log(circuitTwo.execute(Vector.fromArray([0, 1, 0, 0])));

    console.log(circuitThree.execute(QuantumState.unique(2, "10")));
    console.log(circuitFour.execute(Vector.fromArray([0, 0, 1, 0])));
    console.log(circuitFive.execute(QuantumVectorState.unique(2, 2)));
}