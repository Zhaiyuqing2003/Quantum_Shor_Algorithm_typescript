export default class ComplexNumber {
    public real : number;
    public imaginary : number;

    private static _MINIMAL_ERROR : number = 1e-14;
    private static _FIX_DIGIT = 4;

    private constructor(real : number, imaginary : number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // ctor functions

    static fromCartesian(real : number, imaginary : number) : ComplexNumber {
        return new ComplexNumber(real, imaginary);
    }

    static fromReal(real : number) : ComplexNumber {
        return new ComplexNumber(real, 0);
    }

    static fromImaginary(imaginary : number) : ComplexNumber {
        return new ComplexNumber(0, imaginary);
    }

    static fromPolar(r : number, theta : number) : ComplexNumber {
        return new ComplexNumber(r * Math.cos(theta), r * Math.sin(theta));
    }

    // const value functions

    static get ONE() {
        return new ComplexNumber(1, 0);
    }

    static get ZERO() {
        return new ComplexNumber(0, 0);
    }

    // polar support

    get r() : number {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }

    get squaredR() : number {
        return this.real * this.real + this.imaginary * this.imaginary;
    }

    get theta() : number {
        return Math.atan2(this.imaginary, this.real);
    }

    set r(r : number) {
        const ratio = r / this.r;
        this.real *= ratio;
        this.imaginary *= ratio;
    }

    set theta(theta : number) {
        const r = this.r;
        this.real = r * Math.cos(theta);
        this.imaginary = r * Math.sin(theta);
    }

    // operation boilerplate

    add(other : ComplexNumber) : ComplexNumber {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }

    addReal(real : number) : ComplexNumber {
        return new ComplexNumber(this.real + real, this.imaginary);
    }

    addImaginary(imaginary : number) : ComplexNumber {
        return new ComplexNumber(this.real, this.imaginary + imaginary);
    }

    increment(other : ComplexNumber) : void {
        this.real += other.real;
        this.imaginary += other.imaginary;
    }

    incrementReal(real : number) : void {
        this.real += real;
    }

    incrementImaginary(imaginary : number) : void {
        this.imaginary += imaginary;
    }

    subtract(other : ComplexNumber) : ComplexNumber {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }

    subtractReal(real : number) : ComplexNumber {
        return new ComplexNumber(this.real - real, this.imaginary);
    }

    subtractImaginary(imaginary : number) : ComplexNumber {
        return new ComplexNumber(this.real, this.imaginary - imaginary);
    }

    decrement(other : ComplexNumber) : void {
        this.real -= other.real;
        this.imaginary -= other.imaginary;
    }

    decrementReal(real : number) : void {
        this.real -= real;
    }

    decrementImaginary(imaginary : number) : void {
        this.imaginary -= imaginary;
    }

    multiply(other : ComplexNumber) : ComplexNumber {
        return new ComplexNumber(
            this.real * other.real - this.imaginary * other.imaginary, 
            this.real * other.imaginary + this.imaginary * other.real
        );
    }

    multiplyReal(real : number) : ComplexNumber {
        return new ComplexNumber(this.real * real, this.imaginary * real);
    }

    multiplyImaginary(imaginary : number) : ComplexNumber {
        return new ComplexNumber(-this.imaginary * imaginary, this.real * imaginary);
    }

    scale(other : ComplexNumber) {
        const this_real = this.real;
        const this_imaginary = this.imaginary;

        this.real = this_real * other.real - this_imaginary * other.imaginary;
        this.imaginary = this_real * other.imaginary + this_imaginary * other.real;
    }

    scaleReal(real : number) {
        this.real *= real;
        this.imaginary *= real;
    }

    scaleImaginary(imaginary : number) {
        const this_real = this.real;
        const this_imaginary = this.imaginary;

        this.real = -this_imaginary * imaginary;
        this.imaginary = this_real * imaginary;
    }

    divide(other : ComplexNumber) : ComplexNumber {
        return new ComplexNumber(
            (this.real * other.real + this.imaginary * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary),
            (this.imaginary * other.real - this.real * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary)
        );
    }

    divideReal(real : number) : ComplexNumber {
        return new ComplexNumber(
            (this.real * real) / (real * real),
            (this.imaginary * real) / (real * real)
        );
    }

    divideImaginary(imaginary : number) : ComplexNumber {
        return new ComplexNumber(
            (this.imaginary * imaginary) / (imaginary * imaginary),
            (-this.real * imaginary) / (imaginary * imaginary)
        );
    }

    // cloning

    clone() {
        return new ComplexNumber(this.real, this.imaginary);
    }

    // equal test

    equals(other : ComplexNumber) : boolean {
        return Math.abs(this.real - other.real) < ComplexNumber._MINIMAL_ERROR && 
            Math.abs(this.imaginary - other.imaginary) < ComplexNumber._MINIMAL_ERROR;
    }

    equalsReal(real : number) : boolean {
        return Math.abs(this.real - real) < ComplexNumber._MINIMAL_ERROR;
    }

    equalsImaginary(imaginary : number) : boolean {
        return Math.abs(this.imaginary - imaginary) < ComplexNumber._MINIMAL_ERROR;
    }

    isZero() : boolean {
        return Math.abs(this.real) < ComplexNumber._MINIMAL_ERROR && 
            Math.abs(this.imaginary) < ComplexNumber._MINIMAL_ERROR;
    }

    isOne() : boolean {
        return Math.abs(this.real - 1) < ComplexNumber._MINIMAL_ERROR && 
            Math.abs(this.imaginary) < ComplexNumber._MINIMAL_ERROR;
    }

    // to string
    toString(precision: number = ComplexNumber._FIX_DIGIT) : string {

        // check real and imaginary part after rounding
        const isRealZero = Math.abs(this.real) < Math.pow(10, -precision);
        const isImaginaryZero = Math.abs(this.imaginary) < Math.pow(10, -precision);

        if (isRealZero && isImaginaryZero) {
            return '0';
        } else if (isRealZero) {
            return `${this.imaginary.toFixed(precision)}i`;
        } else if (isImaginaryZero) {
            return this.real.toFixed(precision);
        } else {
            return `${this.real.toFixed(precision)}${this.imaginary >= 0 ? ' + ' : ' - '}${Math.abs(this.imaginary).toFixed(precision)}i`;
        }
    }

    toStringIntelligent(precision: number = ComplexNumber._FIX_DIGIT) : string {
        const real = Math.round(this.real * Math.pow(10, precision)) / Math.pow(10, precision);
        const imaginary = Math.round(this.imaginary * Math.pow(10, precision)) / Math.pow(10, precision);
        
        if (real === 0 && imaginary === 0) {
            return '0';
        } else if (real === 0) {
            return `${imaginary}i`;
        } else if (imaginary === 0) {
            return `${real}`;
        } else {
            return `${real}${imaginary >= 0 ? ' + ' : ' - '}${imaginary}i`;
        }
    }

    toStringPolar(precision: number = ComplexNumber._FIX_DIGIT) : string {

        // check real and imaginary part after rounding
        const r = this.r;
        const theta = this.theta;

        const isRZero = Math.abs(r) < Math.pow(10, -precision);

        if (isRZero) {
            return '0';
        }

        const isThetaZero = Math.abs(theta) < Math.pow(10, -precision);

        if (isThetaZero) {
            return `${r.toFixed(precision)}`;
        } else {
            return `${r.toFixed(precision)}e^i${theta >= 0 ? ' + ' : ' - '}${Math.abs(theta).toFixed(precision)}i`;
        }
    }

    toStringPolarIntelligent(precision: number = ComplexNumber._FIX_DIGIT) : string {
            
        // check real and imaginary part after rounding
        const r = Math.round(this.r * Math.pow(10, precision)) / Math.pow(10, precision);
        const theta = Math.round(this.theta * Math.pow(10, precision)) / Math.pow(10, precision);

        if (r === 0) {
            return '0';
        }

        if (theta === 0) {
            return `${r.toFixed(precision)}`;
        } else {
            return `${r.toFixed(precision)}e^i${theta >= 0 ? ' + ' : ' - '}${Math.abs(theta).toFixed(precision)}i`;
        }
    }
}