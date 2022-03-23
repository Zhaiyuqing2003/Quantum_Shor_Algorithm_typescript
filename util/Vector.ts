import ComplexNumber from './ComplexNumber';

export default class Vector {
    private _array : ComplexNumber[] = [];

    private constructor(array : ComplexNumber[]) {
        this._array = array;
    }

    // ctor functions

    static fromNumberArray(array : number[]) : Vector {
        const result : ComplexNumber[] = [];
        for (const element of array) {
            result.push(ComplexNumber.fromReal(element));
        }
        return new Vector(result);
    }

    static fromComplexArray(array : ComplexNumber[]) : Vector {
        return new Vector(array);
    }

    static fromArray(array : (number | ComplexNumber)[]) : Vector {
        const result : ComplexNumber[] = [];
        for (const element of array) {
            typeof element === 'number' 
                ? result.push(ComplexNumber.fromReal(element)) 
                : result.push(element);
        }
        return new Vector(result);
    }

    static zeros(length : number) {
        const result : ComplexNumber[] = [];
        for (let i = 0; i < length; i++) {
            result.push(ComplexNumber.ZERO);
        }
        return new Vector(result);
    }

    static ones(length : number) {
        const result : ComplexNumber[] = [];
        for (let i = 0; i < length; i++) {
            result.push(ComplexNumber.ONE);
        }
    }

    static basis(length : number, index : number) {
        const result : ComplexNumber[] = [];
        for (let i = 0; i < length; i++) {
            result.push(i === index ? ComplexNumber.ONE : ComplexNumber.ZERO);
        }
        return new Vector(result);
    }

    // property access

    get length() : number {
        return this._array.length;
    }

    get(index : number) : ComplexNumber {
        return this._array[index] ?? ComplexNumber.ZERO;
    }

    set(index : number, value : ComplexNumber) {
        this._array[index] = value;
    }

    increment(index : number, value : ComplexNumber) {
        this._array[index] = (this._array[index] ?? ComplexNumber.ZERO).add(value);
    }

    isFitLength(wireLength : number) {
        return this._array.length === (1 << wireLength);
    }

    // iterator

    [Symbol.iterator]() {
        return this._array[Symbol.iterator]();
    }

    keys() {
        return this._array.keys();
    }

    entries() {
        return this._array.entries();
    }

    transform(
        callbackFn: (value: ComplexNumber, index : number, array : ComplexNumber[], newVector : Vector) => void,
        length : number = this.length
    ) {
        const result = Vector.zeros(length);

        for (const [index, value] of this._array.entries()) {
            callbackFn(value, index, this._array, result);
        }

        return result;
    }

    split(predicate : (value: ComplexNumber, key: number, array: ComplexNumber[]) => boolean) : [Vector, Vector] {
        const acceptedState = Vector.zeros(this.length);
        const rejectedState = Vector.zeros(this.length);

        for (const [key, value] of this._array.entries()) {
            if (predicate(value, key, this._array))
                acceptedState.increment(key, value.clone());
            else 
                rejectedState.increment(key, value.clone());
        }

        return [acceptedState, rejectedState];
    }

    combine = this.add;

    // operation

    add(other : Vector) : Vector {
        const result : ComplexNumber[] = [];

        for (const [key, value] of this._array.entries()) {
            result.push(value.add(other._array[key]));
        }

        return new Vector(result);
    }

    increase(other : Vector) {
        for (const [key, value] of this._array.entries()) {
            value.add(other._array[key]);
        }
        return this;
    }

    multiplyReal(scalar: number) : Vector {
        const result : ComplexNumber[] = [];

        for (const element of this._array) {
            result.push(element.multiplyReal(scalar));
        }

        return new Vector(result);
    }

    multiplyComplex(scalar: ComplexNumber) : Vector {
        const result : ComplexNumber[] = [];

        for (const element of this._array) {
            result.push(element.multiply(scalar));
        }

        return new Vector(result);
    }

    scaleReal(scalar : number) {
        for (const element of this._array) {
            element.scaleReal(scalar);
        }
        return this;
    }

    scalarComplex(scalar : ComplexNumber) {
        for (const element of this._array) {
            element.scale(scalar);
        }
        return this;
    }

    clone() : Vector {
        const result : ComplexNumber[] = [];
        for (const element of this._array) {
            result.push(element.clone());
        }

        return new Vector(result);
    }

    // stringify

    toString() : string {
        return "[ " + this._array.map(field => field.toString()).join(", ") + " ]"
    }
}