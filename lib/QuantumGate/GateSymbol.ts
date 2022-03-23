const Hadamard = Symbol.for('Hadamard');
const PauliX = Symbol.for('PauliX');
const Phase = Symbol.for('Phase');
const Rz = Symbol.for('Rz');

const Swap = Symbol.for('Swap');
const Flip = Symbol.for('Flip');
const Fourier = Symbol.for('Fourier');
const Shor = Symbol.for('Shor');

export const ElementaryGateSymbol = {
    Hadamard, PauliX, Phase, Rz,
} as const

export const ExtendedGateSymbol = {
    Swap, Flip, Fourier, Shor,
} as const

export const GateSymbol = {
    ...ElementaryGateSymbol,
    ...ExtendedGateSymbol,
} as const