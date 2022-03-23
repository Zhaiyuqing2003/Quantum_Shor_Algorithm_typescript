import { GateSymbol } from "./QuantumGate/GateSymbol";
import { QuantumGate } from "./QuantumGate/QuantumGate";
import { QuantumWire } from "./QuantumWire";

export const phaseEstimationWire = (
    estimationWire : number,
    gate : QuantumGate
) => {
    if (estimationWire < 1) {
        throw new Error("Estimation wire must be greater than 0.");
    }
    const gateLength = gate.wireLength;
    const wireLength = gateLength + estimationWire;

    const shiftedGate = gate.shiftBasis({
        shift: estimationWire,
        wireLength
    })

    const wire = QuantumWire.create(wireLength);

    for (let i = 0; i < estimationWire; i++) {
        wire.addGate(QuantumGate.fromBasis({
            wireLength,
            type : GateSymbol.Hadamard,
            wire : i,
        }))
    }

    for (let i = estimationWire - 1; i >= 0; i --) {
        for (let _ = 0; _ < 2 ** (estimationWire - i - 1); _++) {
            wire.addGate(QuantumGate.toSinglyControlled(shiftedGate, i))
        }
    }

    // add fourier
    wire.addGate(QuantumGate.fromBasis({
        type : GateSymbol.Fourier,
        startWire : 0,
        endWire : gateLength,
        wireLength,
    }).toInverted())

    // no need to flip, the flip is already included in the circuit
    return wire;
}