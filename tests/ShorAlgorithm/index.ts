import { AtomizeStrategy } from "../../lib/QuantumGate/Atomizer";
import { GateSymbol } from "../../lib/QuantumGate/GateSymbol";
import { GeneratorType } from "../../lib/QuantumGate/Generator";
import { QuantumGate } from "../../lib/QuantumGate/QuantumGate";
import { QuantumWire } from "../../lib/QuantumWire";
import { classical, quantum } from "../../lib/ShorAlgorithm"


window.onload = () => {
    console.log(classical(15));
    console.log(classical(91));
    console.log(classical(1023));

    console.log(quantum(15));
}