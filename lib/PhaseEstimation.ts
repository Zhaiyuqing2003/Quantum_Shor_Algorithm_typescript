import { GateSymbol } from "./QuantumGate/GateSymbol";
import { QuantumGate } from "./QuantumGate/QuantumGate";
import { QuantumWire } from "./QuantumWire";

export const phaseEstimationWire = (
    estimationWire : number,
    gateList : QuantumGate[]
) => {
    if (estimationWire < 1) {
        throw new Error("Estimation wire must be greater than 0.");
    }
    const gateLength = gateList[0].wireLength;
    const wireLength = gateLength + estimationWire;

    const shiftedGateList = gateList.map((gate) => gate.shiftBasis({
        shift: estimationWire,
        wireLength
    }))

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
            shiftedGateList.forEach((shiftedGate) => {
                wire.addGate(QuantumGate.toSinglyControlled(shiftedGate, i))
            })
        }
    }

    // add fourier
    wire.addGate(QuantumGate.fromBasis({
        type : GateSymbol.Fourier,
        startWire : 0,
        endWire : estimationWire,
        wireLength,
    }).toInverted())

    // no need to flip, the flip is already included in the circuit
    return wire;
}