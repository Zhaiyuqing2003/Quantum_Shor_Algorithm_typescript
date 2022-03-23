// @ts-ignore - no types for this library
import numbers from "numbers"
import { phaseEstimationWire } from "./PhaseEstimation";
import { AtomizeStrategy } from "./QuantumGate/Atomizer";
import { GateSymbol } from "./QuantumGate/GateSymbol";
import { GeneratorType } from "./QuantumGate/Generator";
import { QuantumGate } from "./QuantumGate/QuantumGate";
import QuantumVectorState from "./QuantumVectorState";

const shouldLog = true;
const Logger = {
    log: (...args : any[]) => {
        if (shouldLog) {
            console.log(...args);
        }
    }
}


const isInteger = (number: number) => {
    return Math.abs(number - Math.round(number)) < 1e-10;
}

const randomIntBetween = (min: number, max : number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gcd = (a: number, b: number) : number => (a === 0) ? b : gcd(b % a, a);

const getLowestFraction = (number : number, largestDenominator: number) =>{
    let eps = 1.0E-15;
    let h, h1, h2, k, k1, k2, a, x;

    x = number;
    a = Math.floor(x);
    h1 = 1;
    k1 = 0;
    h = a;
    k = 1;

    while (x-a > eps*k*k) {
        x = 1/(x-a);
        a = Math.floor(x);
        h2 = h1; h1 = h;
        k2 = k1; k1 = k;
        let tempH = h, tempK = k;
        h = h2 + a*h1;
        k = k2 + a*k1;
        if (k > largestDenominator) {
            h = tempH;
            k = tempK;
            break;
        }
    }

    return [h, k];
}


export const classical = (N : number) : number[] => {
    Logger.log(`Split ${N}`);

    if (numbers.prime.millerRabin(N)) {
        return [N];
    } else if (N % 2 === 0) {
        return [2, ...classical(N / 2)];
    } else {
        const KLimit = Math.floor(Math.log(N) / Math.log(3));

        for (let K = 2; K <= KLimit; K++) {
            if (isInteger(N ** (1 / K))) {
                const result = classical(N ** (1 / K));
                const finalResult = [];
                for (let i = 0; i < K; i++) {
                    finalResult.push(...result);
                }

                return finalResult;
            }
        }

        while (true) {
            const randomNumber = randomIntBetween(2, Math.floor(Math.sqrt(N)));
            const divisor = gcd(N, randomNumber);
    
            if (divisor !== 1) {
                // we already find the factor;
                return [...classical(divisor), ...classical(N / divisor)];
            } else {
                // we find a co-prime
                for (let r = 2; r < N; r++) {
                    if (randomNumber ** r % N === 1) {
                        // if r is odd
                        if (r % 2 === 1) {
                            break;
                        } 

                        Logger.log(`x = ${randomNumber}, r = ${r}`)

                        const first = (randomNumber ** (r/2) - 1) % N;
                        const second = (randomNumber ** (r/2) + 1) % N;


                        const factorOne = gcd(N, first);
                        const factorTwo = gcd(N, second);

                        const factorSmaller = Math.min(factorOne, factorTwo);
                        const factorBigger = Math.max(factorOne, factorTwo);

                        if (factorSmaller === 1 && factorBigger === N) {
                            break;
                        }

                        return [
                            ...classical(factorOne),
                            ...classical(factorTwo),
                        ]
                    }
                }
            }
        }
    }
}

export const quantum = (N : number) : number[] => {
    Logger.log(`Split ${N}`);

    if (numbers.prime.millerRabin(N)) {
        return [N];
    } else if (N % 2 === 0) {
        return [2, ...quantum(N / 2)];
    } else {
        const KLimit = Math.floor(Math.log(N) / Math.log(3));

        for (let K = 2; K <= KLimit; K++) {
            if (isInteger(N ** (1 / K))) {
                const result = quantum(N ** (1 / K));
                const finalResult = [];
                for (let i = 0; i < K; i++) {
                    finalResult.push(...result);
                }

                return finalResult;
            }
        }

        while (true) {
            const randomNumber = randomIntBetween(2, Math.floor(Math.sqrt(N)));
            const divisor = gcd(N, randomNumber);
    
            if (divisor !== 1) {
                // we already find the factor;
                return [...quantum(divisor), ...quantum(N / divisor)];
            } else {
                const n = Math.ceil(Math.log2(N));

                const phaseList : {
                    [key: number] : boolean
                } = {};
                const quantumWire = phaseEstimationWire(2 * n + 1, QuantumGate.fromBasis({
                    type : GateSymbol.Shor,
                    wireLength : n,
                    startWire : 0,
                    endWire : n,
                    x : randomNumber,
                    N : N
                }))

                // in real case, we couldn't measure state multiple times, but for speed of simulation, we can
                const state = QuantumVectorState.create(n + 2 * n + 1)
                // const finalState = quantumWire.execute(GeneratorType.StateFunction, AtomizeType.Minimum, state);
                const finalState = quantumWire.generate(AtomizeStrategy.Min, GeneratorType.VectorStateFunction).execute(state);


                while (true) {
                    if (Object.keys(phaseList).length >= n) {
                        break;
                    }

                    Logger.log("Start Finding Phase");

                    const measuredKey = finalState.measure();


                    // only the first 2 * n + 1 bits are mattered, use bit right shift to get rid of last n bits
                    const estimatedPhase = (measuredKey >> n) / (2 ** n);
                    
                    phaseList[estimatedPhase] = true;

                    if (estimatedPhase === 0) {
                        continue;
                    }

                    Logger.log(`Estimated Phase: ${estimatedPhase}`);

                    const [_s, r] = getLowestFraction(estimatedPhase, N);

                    Logger.log(`Attempted s/r : ${estimatedPhase}/${r}`);

                    if (randomNumber ** r % N === 1) {
                        // if r is odd
                        if (r % 2 === 1) {
                            break;
                        } 

                        Logger.log(`x = ${randomNumber}, r = ${r}`)

                        const first = (randomNumber ** (r/2) - 1) % N;
                        const second = (randomNumber ** (r/2) + 1) % N;

                        const factorOne = gcd(N, first);
                        const factorTwo = gcd(N, second);

                        const factorSmaller = Math.min(factorOne, factorTwo);
                        const factorBigger = Math.max(factorOne, factorTwo);

                        if (factorSmaller === 1 && factorBigger === N) {
                            break;
                        }

                        return [
                            ...quantum(factorOne),
                            ...quantum(factorTwo),
                        ]
                    }

                }
            }
        }
    }
}