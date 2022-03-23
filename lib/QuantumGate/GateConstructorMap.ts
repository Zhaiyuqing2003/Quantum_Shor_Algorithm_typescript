import { GateSymbol } from "./GateSymbol";
import Hadamard from "./ElementaryGate/Hadamard";
import PauliX from "./ElementaryGate/PauliX";
import Phase from "./ElementaryGate/Phase";
import Rz from "./ElementaryGate/Rz";
import Swap from "./ExtendedGate/Swap";
import Flip from "./ExtendedGate/Flip";
import Fourier from "./ExtendedGate/Fourier";
import Shor from "./ExtendedGate/Shor";

const ElementaryGateConstructorMap = {
    [GateSymbol.Hadamard]: Hadamard,
    [GateSymbol.PauliX]: PauliX,
    [GateSymbol.Phase]: Phase,
    [GateSymbol.Rz]: Rz,
    [GateSymbol.Swap]: Swap,
} as const;

const ExtendedGateConstructorMap = {
    [GateSymbol.Flip]: Flip,
    [GateSymbol.Fourier]: Fourier,
    [GateSymbol.Shor]: Shor,
} as const;

export const GateConstructorMap = {
    ...ElementaryGateConstructorMap,
    ...ExtendedGateConstructorMap,
} as const;
