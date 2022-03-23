import ComplexNumber from "../util/ComplexNumber";
import { PrintType } from "./QuantumState";
import { toBinaryString } from "../util/StringHelper";

export default class QuantumVectorState {
    private _map : Map<number, Readonly<ComplexNumber>>;
    readonly bitLength : number; 

    private constructor(map : Map<number, ComplexNumber>, bitLength : number) {
        this._map = map;
        this.bitLength = bitLength;
    }

    static create(bitLength : number) : QuantumVectorState {
        return new QuantumVectorState(new Map(), bitLength);
    }

    static zero(bitLength : number) : QuantumVectorState {
        const newState = QuantumVectorState.create(bitLength);
        newState.increment(0, ComplexNumber.ONE);

        return newState;
    }

    static unique(bitLength : number, index : number) : QuantumVectorState {
        const newState = QuantumVectorState.create(bitLength);
        newState.increment(index, ComplexNumber.ONE);

        return newState;
    }

    isFitLength(length : number) : boolean {
        return this.bitLength === length;
    }

    get(index : number) : Readonly<ComplexNumber> {
        return this._map.get(index) ?? ComplexNumber.ZERO;
    }

    set(index : number, value : Readonly<ComplexNumber>) : void {
        // console.log("called")
        if (value.isZero()) {
            this._map.delete(index);
        } else {
            this._map.set(index, value);
        }
    }

    increment(index : number, value : Readonly<ComplexNumber>) : void {
        this.set(index, this.get(index).add(value));
    }

    entries() : IterableIterator<[number, ComplexNumber]> {
        return this._map.entries();
    }

    transform(callbackFn : (value: ComplexNumber, index: number, map : Map<number, ComplexNumber>, newState : QuantumVectorState) => void) : QuantumVectorState {
        const newState = QuantumVectorState.create(this.bitLength);

        for (const [index, value] of this._map) {
            callbackFn(value, index, this._map, newState);
        }

        return newState;
    }

    split(predicate : (value: ComplexNumber, key: number, map: Map<number, ComplexNumber>) => boolean) : [QuantumVectorState, QuantumVectorState] {
        const acceptedState = QuantumVectorState.create(this.bitLength);
        const rejectedState = QuantumVectorState.create(this.bitLength);

        for (const [key, value] of this._map) {
            if (predicate(value, key, this._map)) 
                acceptedState.increment(key, value.clone());
            else 
                rejectedState.increment(key, value.clone());
        }

        return [acceptedState, rejectedState];
    }

    combine(other : QuantumVectorState) : QuantumVectorState {
        const newState = QuantumVectorState.create(this.bitLength);

        for (const [key, value] of this._map) {
            newState.increment(key, value.clone());
        }

        for (const [key, value] of other._map) {
            newState.increment(key, value.clone());
        }

        return newState;
    }


    // measure
    measure() {
        let probabilityList : [number, number][] = [];

        for (const [index, value] of this._map) {
            probabilityList.push([index, value.squaredR]);
        }

        // check if it's normalized
        let sum = probabilityList.reduce((acc, [_, value]) => acc + value, 0);

        if (Math.abs(sum - 1) > 0.00001) {
            throw new Error('Probability list is not normalized');
        }

        // pick a random number
        const randomNumber = Math.random();
        let currentValue = 0;

        for (const [index, value] of probabilityList) {
            currentValue += value;
            if (randomNumber < currentValue) {
                return index;
            }
        }

        throw new Error('SHOULD NEVER HAPPEN');
    }

    // string functions

    toString(type : PrintType = PrintType.Integer) {
        let logString = "";
        
        for (const [key, value] of this._map) {
            logString += (type === PrintType.Binary) 
                ? (`${value.toString()} |${toBinaryString(key, this.bitLength)}> \n`)
                : (`${value.toString()} |${key}> \n`);
        }
        
        return logString;        
    }

    toDataSorted(type : PrintType = PrintType.Integer) {
        const data =  [...this._map.entries()].map(([index, value]) => [
            type === PrintType.Binary ? toBinaryString(index, this.bitLength) : index,
            value
        ]) as [string | number, ComplexNumber][]

        data.sort((a, b) => {
            return a[0] < b[0] ? -1 : 1;
        })

        return data;
    }
    
    toStringSorted(type : PrintType = PrintType.Integer) {
        let logString = "";


        const data = [...this._map.entries()].map(([index, value]) => [
            type === PrintType.Binary ? toBinaryString(index, this.bitLength) : index,
            value
        ]) as [string | number, ComplexNumber][]


        data.sort((a, b) => {
            return a[0] < b[0] ? -1 : 1;
        })

        for (const [index, value] of data) {
            logString += `${value.toString()} |${index}> \n`;
        }

        return logString;
    }
    
    toStringColorful(type : PrintType = PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map(
            (_, i) => i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        ) as string[];
        colorCSSList.push("color : black");

        let logString = "";
        
        for (const [key, value] of this._map) {
            logString += (type === PrintType.Binary) 
                ? (`%c ${value.toString()} %c |${toBinaryString(key, this.bitLength)}> \n`)
                : (`%c ${value.toString()} %c |${key}> \n`);
        }

        logString += "%c";

        return [logString, colorCSSList];
    }

    toStringColorfulSorted(type : PrintType = PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map(
            (_, i) => i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        ) as string[];
        colorCSSList.push("color : black");

        let logString = ""


        const data = [...this._map.entries()].map(([index, value]) => [
            type === PrintType.Binary ? toBinaryString(index, this.bitLength) : index,
            value
        ]) as [string | number, ComplexNumber][]


        data.sort((a, b) => {
            return a[0] < b[0] ? -1 : 1;
        })

        for (const [index, value] of data) {
            logString += `%c ${value.toString()} %c |${index}> \n`;
        }

        return [logString, colorCSSList];
    }

    printStringColorful(type : PrintType = PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorful(type);
        console.log(logString, ...colorCSSList.slice(0, -1));
    }

    printStringColorfulSorted(type : PrintType = PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorfulSorted(type);
        console.log(logString, ...colorCSSList.slice(0, -1));
    }
}