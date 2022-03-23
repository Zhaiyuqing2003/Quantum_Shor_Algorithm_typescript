import Vector from "../util/Vector";
import ComplexNumber from "../util/ComplexNumber";
import { toBinaryString, toDecimal } from "../util/StringHelper";

export enum PrintType {
    Integer, Binary
}

export default class QuantumState {
    private _map : Map<string, ComplexNumber>;
    readonly bitLength : number;

    private constructor(map : Map<string, ComplexNumber>, bitLength : number) {
        this._map = map;
        this.bitLength = bitLength;
    }

    // ctor functions
    static fromVector(vector : Vector, bitLength : number) {
        const map : Map<string, ComplexNumber> = new Map();

        for (const [index, value] of vector.entries()) {
            if (!value.isZero()) {
                // express index into binary form, put that into an array
                map.set(toBinaryString(index, bitLength), value);
            }
        }

        return new QuantumState(map, bitLength);
    }

    // static fromMap(map : Map<string, ComplexNumber>, bitLength : number) : QuantumState {
    //     return new QuantumState(map, bitLength);
    // }

    static create(bitLength : number) : QuantumState {
        return new QuantumState(new Map(), bitLength);
    }

    static zero(bitLength : number) : QuantumState {
        const newState = QuantumState.create(bitLength);
        newState.increment(toBinaryString(0, bitLength), ComplexNumber.ONE);

        return newState;
    }

    static unique(bitLength : number, string : string) : QuantumState {
        const newState = QuantumState.create(bitLength);
        newState.increment(string, ComplexNumber.ONE);
        return newState;
    }

    toVector() : Vector {
        const result : ComplexNumber[] = Array(2 ** this.bitLength).fill(ComplexNumber.ZERO);

        for (const [index, value] of this._map.entries()) {
            result[toDecimal(index)] = value;
        }

        return Vector.fromComplexArray(result);
    }

    // iterator
    entries() {
        return this._map.entries();
    }

    keys() {
        return this._map.keys();
    }

    values() {
        return this._map.values();
    }

    transform(
        callbackFn: (value: ComplexNumber, key : string, map: Map<string, ComplexNumber>, newState: QuantumState) => void,
        bitLength : number = this.bitLength
    ) {
        const newState = QuantumState.create(bitLength);

        for (const [key, value] of this._map) {
            callbackFn(value, key, this._map, newState);
        }

        return newState;
    }

    split(predicate : (value: ComplexNumber, key: string, map: Map<string, ComplexNumber>) => boolean) : [QuantumState, QuantumState] {
        const acceptedState = QuantumState.create(this.bitLength);
        const rejectedState = QuantumState.create(this.bitLength);

        for (const [key, value] of this._map) {
            if (predicate(value, key, this._map)) 
                acceptedState.increment(key, value.clone());
            else 
                rejectedState.increment(key, value.clone());
        }

        return [acceptedState, rejectedState];
    }

    combine(other : QuantumState) : QuantumState {
        const newState = QuantumState.create(this.bitLength);

        for (const [key, value] of this._map) {
            newState.increment(key, value.clone());
        }

        for (const [key, value] of other._map) {
            newState.increment(key, value.clone());
        }

        return newState;
    }

    isFitLength(wireLength : number) : boolean {
        return this.bitLength === wireLength;
    }

    // state manipulation

    /**
     * 
     * @param index, index.length = bitLength, must be a binary string
     * @returns Complex Number
     */
    get(index : string) : ComplexNumber {
        return this._map.get(index) ?? ComplexNumber.ZERO;
    }
    
    /**
     * 
     * @param index, index.length = bitLength, must be a binary string
     * @returns Complex Number
     */
    set(index : string, value : ComplexNumber) : void {
        if (value.isZero()) {
            this._map.delete(index);
        } else {
            this._map.set(index, value);
        }
    }

    /**
     * 
     * @param index, index.length = bitLength, must be a binary string
     * @returns Complex Number
     */
    increment(index: string, value : ComplexNumber) : void {
        this.set(index, this.get(index).add(value))
    }

    // measure
    measure() {
        let probabilityList : [string, number][] = [];
        
        for (const [key, value] of this._map) {
            probabilityList.push([key, value.squaredR]);
        }
        
        // check if it's normalized
        let sum = probabilityList.reduce((acc, [_, value]) => acc + value, 0);
        
        if (Math.abs(sum - 1) > 0.00001) {
            throw new Error('Probability list is not normalized');
        }

        
        // pick a random number
        const randomNumber = Math.random();
        let currentValue = 0;
        
        for (const [key, value] of probabilityList) {
            currentValue += value;
            if (randomNumber < currentValue) {
                return key;
            }
        }

        throw new Error("IMPOSSIBLE TO REACH HERE")
    }

    // string functions

    toString(type : PrintType = PrintType.Integer) {
        let logString = "";
        
        for (const [key, value] of this._map) {
            logString += (type === PrintType.Binary) 
                ? (` ${value.toString()} |${key}>`)
                : (` ${value.toString()} |${toDecimal(key)}>`);
        }
        
        return logString;        
    }
    
    toStringSorted(type : PrintType = PrintType.Integer) {
        let logString = "";

        if (type === PrintType.Binary) {
            const data = [...this._map.entries()].map<[string, ComplexNumber]>(([key, value]) => [key, value]);
            data.sort();

            for (const [key, value] of data) {
                logString += (` ${value.toString()} |${key}>`)
            }
        } else {
            const data = [...this._map.entries()].map<[number, ComplexNumber]>(([key, value]) => [toDecimal(key), value]);
            data.sort((a, b) => a[0] - b[0]);
            
            for (const [key, value] of data) {
                logString += (` ${value.toString()} |${key}>`);
            }
        }
        return logString;
    }
    
    toStringColorful(type : PrintType = PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map(
            (_, i) => i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        );
        let logString = "";
        
        for (const [key, value] of this._map) {
            logString += (type === PrintType.Binary) 
                ? (`%c ${value.toString()} %c|${key}>`)
                : (`%c ${value.toString()} %c|${toDecimal(key)}>`);
        }

        return [logString, colorCSSList];
    }

    toStringColorfulSorted(type : PrintType = PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map(
            (_, i) => i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        );
        let logString = "";

        if (type === PrintType.Binary) {
            const data = [...this._map.entries()].map<[string, ComplexNumber]>(([key, value]) => [key, value]);
            data.sort();

            for (const [key, value] of data) {
                logString += (`%c ${value.toString()} %c|${key}>`)
            }
        } else {
            const data = [...this._map.entries()].map<[number, ComplexNumber]>(([key, value]) => [toDecimal(key), value]);
            data.sort((a, b) => a[0] - b[0]);
            
            for (const [key, value] of data) {
                logString += (`%c ${value.toString()} %c|${key}>`);
            }
        }

        return [logString, colorCSSList];
    }

    printStringColorful(type : PrintType = PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorful(type);
        console.log(logString, ...colorCSSList);
    }

    printStringColorfulSorted(type : PrintType = PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorfulSorted(type);
        console.log(logString, ...colorCSSList);
    }
} 


