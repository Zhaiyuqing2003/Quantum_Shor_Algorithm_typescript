import ComplexNumber from "./ComplexNumber";
import StaticImpl from "./StaticImpl";
import Vector from "./Vector";

export enum MatrixType {
    Dense, Sparse
}


export interface IBasicMatrix<T extends MatrixType> {
    rowCount : number;
    columnCount : number;
    get(row : number, column : number) : ComplexNumber;
    transpose() : IBasicMatrix<T>;
    matrixMultiply(other : IBasicMatrix<T>) : IBasicMatrix<T>;
    vectorMultiply(vector : Vector) : Vector;
    kroneckerProduct(other : IBasicMatrix<T>) : IBasicMatrix<T>;
}

export interface IBasicMatrixStatic<T extends MatrixType> {
    fromNumberArray(array : number[][]) : IBasicMatrix<T>;
    fromComplexArray(array : ComplexNumber[][]) : IBasicMatrix<T>;
    fromArray(array : (number | ComplexNumber)[][]) : IBasicMatrix<T>;
    // zeros(rowCount : number, columnCount : number) : IBasicMatrix<T>;
    // ones(rowCount : number, columnCount : number) : IBasicMatrix<T>;
    identity(size: number) : IBasicMatrix<T>;
    zeros(rowCount: number, columnCount : number) : IBasicMatrix<T>;
    concat(A : IBasicMatrix<T>, B : IBasicMatrix<T>, C : IBasicMatrix<T>, D : IBasicMatrix<T>) : IBasicMatrix<T>;
    interleave(A : IBasicMatrix<T>, B : IBasicMatrix<T>) : IBasicMatrix<T>;
}

@StaticImpl<IBasicMatrixStatic<MatrixType.Dense>>()
export class Matrix implements IBasicMatrix<MatrixType.Dense> {
    private _matrix : ComplexNumber[][];
    private constructor(matrix : ComplexNumber[][]) {
        this._matrix = matrix;
    }

    // ctor functions
    static fromNumberArray(array : number[][]) : Matrix {
        const result : ComplexNumber[][] = [];
        for (const row of array) {
            const rowArray : ComplexNumber[] = [];
            for (const element of row) {
                rowArray.push(ComplexNumber.fromReal(element));
            }
            result.push(rowArray);
        }
        return new Matrix(result);   
    }

    static fromComplexArray(array : ComplexNumber[][]) : Matrix {
        return new Matrix(array);
    }

    static fromArray(array : (number | ComplexNumber)[][]) : Matrix {
        const result : ComplexNumber[][] = [];
        for (const row of array) {
            const rowArray : ComplexNumber[] = [];
            for (const element of row) {
                typeof element === 'number' 
                    ? rowArray.push(ComplexNumber.fromReal(element)) 
                    : rowArray.push(element);
            }
            result.push(rowArray);
        }
        return new Matrix(result);
    }

    static identity(size : number) : Matrix {
        const result : ComplexNumber[][] = [];
        for (let i = 0; i < size; i++) {
            const row : ComplexNumber[] = [];
            for (let j = 0; j < size; j++) {
                row.push(i === j ? ComplexNumber.ONE : ComplexNumber.ZERO);
            }
            result.push(row);
        }
        return new Matrix(result);
    }

    static zeros(rowCount : number, columnCount : number) {
        const result : ComplexNumber[][] = [];
        for (let i = 0; i < rowCount; i++) {
            const rowArray : ComplexNumber[] = [];
            for (let j = 0; j < columnCount; j++) {
                rowArray.push(ComplexNumber.ZERO);
            }
            result.push(rowArray);
        }
        return new Matrix(result);
    }

    static concat(A : Matrix, B : Matrix, C : Matrix, D : Matrix) : Matrix {
        const result : ComplexNumber[][] = [];

        // check dimensions
        if (
            A.rowCount !== B.rowCount ||
            C.rowCount !== D.rowCount ||
            A.columnCount !== C.columnCount ||
            B.columnCount !== D.columnCount
        ) {
            throw new Error('Matrix dimensions do not match');
        }

        for (let i = 0; i < A.rowCount; i++) {
            const rowArray : ComplexNumber[] = [];
            for (let j = 0; j < A.columnCount; j++) {
                rowArray.push(A._matrix[i][j].clone());
            }
            for (let j = 0; j < B.columnCount; j++) {
                rowArray.push(B._matrix[i][j].clone());
            }
            result.push(rowArray);
        }

        for (let i = 0; i < C.rowCount; i++) {
            const rowArray : ComplexNumber[] = [];
            for (let j = 0; j < C.columnCount; j++) {
                rowArray.push(C._matrix[i][j].clone());
            }
            for (let j = 0; j < D.columnCount; j++) {
                rowArray.push(D._matrix[i][j].clone());
            }
            result.push(rowArray);
        }

        return new Matrix(result);
    }

    static interleave(A : Matrix, B : Matrix) : Matrix {
        const result : ComplexNumber[][] = [];

        // check dimensions
        if (
            A.rowCount !== B.rowCount || 
            A.columnCount !== B.columnCount ||
            A.columnCount !== A.rowCount ||
            B.columnCount !== B.rowCount
        ) {
            throw new Error('Matrix dimensions do not match');
        }

        for (let i = 0; i < A.rowCount; i++) {
            const rowAArray : ComplexNumber[] = [];
            for (let j = 0; j < A.columnCount; j++) {
                rowAArray.push(A._matrix[i][j].clone());
                rowAArray.push(ComplexNumber.ZERO);
            }
            result.push(rowAArray);

            const rowBArray : ComplexNumber[] = [];
            for (let j = 0; j < B.columnCount; j++) {
                rowBArray.push(ComplexNumber.ZERO);
                rowBArray.push(B._matrix[i][j].clone());
            }
            result.push(rowBArray);
        }

        return new Matrix(result);
    }

    // property access

    get rowCount() : number {
        return this._matrix.length;
    }

    get columnCount() : number {
        return this._matrix[0].length;
    }

    get rawArray() : ComplexNumber[][] {
        return this._matrix;
    }

    get(i: number, j: number) {
        return this._matrix[i][j];
    }

    transpose() {
        const result : ComplexNumber[][] = [];
        for (let i = 0; i < this.columnCount; i++) {
            const rowArray : ComplexNumber[] = [];
            for (let j = 0; j < this.rowCount; j++) {
                rowArray.push(this._matrix[j][i]);
            }
            result.push(rowArray);
        }
        return new Matrix(result);
    }

    matrixMultiply(other : Matrix) : Matrix {
        const result : ComplexNumber[][] = [];

        if (this.columnCount !== other.rowCount) {
            throw new Error('Matrix dimensions do not match');
        }

        for (let i = 0; i < this.rowCount; i++) {
            const rowArray : ComplexNumber[] = [];
            for (let j = 0; j < other.columnCount; j++) {
                let sum : ComplexNumber = ComplexNumber.ZERO;
                for (let k = 0; k < this.columnCount; k++) {
                    sum = sum.add(this._matrix[i][k].multiply(other._matrix[k][j]));
                }
                rowArray.push(sum);
            }
            result.push(rowArray);
        }

        return new Matrix(result);
    }

    vectorMultiply(vector : Vector) : Vector {
        if (this.columnCount !== vector.length) {
            throw new Error('Matrix dimensions do not match');
        }

        const result : ComplexNumber[] = [];
        for (let i = 0; i < this.rowCount; i++) {
            let sum : ComplexNumber = ComplexNumber.ZERO;
            for (let j = 0; j < this.columnCount; j++) {
                sum = sum.add(this._matrix[i][j].multiply(vector.get(j)));
            }
            result.push(sum);
        }
        return Vector.fromComplexArray(result);
    }

    kroneckerProduct(other : Matrix) : Matrix {
        const result : ComplexNumber[][] = [];
        for (let i = 0; i < this.rowCount; i++) {
            for (let j = 0; j < this.columnCount; j++) {
                // iterate over the other matrix
                for (let k = 0; k < other.rowCount; k++) {
                    for (let l = 0; l < other.columnCount; l++) {
                        if (result[i * other.rowCount + k] === undefined) {
                            result[i * other.rowCount + k] = [];
                        }
                        result[i * other.rowCount + k][j * other.columnCount + l] 
                            = this._matrix[i][j].multiply(other._matrix[k][l]);
                    }
                }
            }
        }
        return new Matrix(result);
    }

    toString() {
        let result : string = '';
        for (let i = 0; i < this.rowCount; i++) {
            for (let j = 0; j < this.columnCount; j++) {
                result += this._matrix[i][j].toString() + ' ';
            }
            result += ' \n ';
        }
        return result;
    }
}


// use csr format
@StaticImpl<IBasicMatrixStatic<MatrixType.Sparse>>()
export class SparseMatrix implements IBasicMatrix<MatrixType.Sparse> {
    private _rowCount : number;
    private _columnCount : number;
    private _value : ComplexNumber[];
    private _colIndexList : number[];
    private _rowPtrList : number[];


    private constructor(rowCount : number, columnCount: number, value : ComplexNumber[], colIndexList : number[], rowPtrList : number[]) {
        this._rowCount = rowCount;
        this._columnCount = columnCount;
        this._value = value;
        this._colIndexList = colIndexList;
        this._rowPtrList = rowPtrList;
    }

    static fromNumberArray(array : number[][] = [[]]) : SparseMatrix {
        const value : ComplexNumber[] = [];
        const colIndexList : number[] = [];
        const rowPtrList : number[] = [0];

        const rowCount = array.length;
        const columnCount = array[0].length;

        let elementCount = 0;
        for (const row of array) {
            for (const [colIndex, val] of row.entries()) {
                if (val !== 0) {
                    value.push(ComplexNumber.fromReal(val));
                    colIndexList.push(colIndex);
                    elementCount ++;
                }
            }
            rowPtrList.push(elementCount);
        }

        return new SparseMatrix(rowCount, columnCount, value, colIndexList, rowPtrList);
    }

    static fromComplexArray(array : ComplexNumber[][] = [[]]) : SparseMatrix {
        const value : ComplexNumber[] = [];
        const colIndexList : number[] = [];
        const rowPtrList : number[] = [0];

        const rowCount = array.length;
        const columnCount = array[0].length;

        let elementCount = 0;
        for (const row of array) {
            for (const [colIndex, val] of row.entries()) {
                if (!val.isZero()) {
                    value.push(val);
                    colIndexList.push(colIndex);
                    elementCount ++;
                }
            }
            rowPtrList.push(elementCount);
        }

        return new SparseMatrix(rowCount, columnCount, value, colIndexList, rowPtrList);
    }

    static fromArray(array : (number | ComplexNumber)[][] = [[]]) : SparseMatrix {
        const value : ComplexNumber[] = [];
        const colIndexList : number[] = [];
        const rowPtrList : number[] = [0];

        const rowCount = array.length;
        const columnCount = array[0].length;

        let elementCount = 0;
        for (const row of array) {
            for (const [colIndex, val] of row.entries()) {
                if (typeof val === 'number') {
                    if (val !== 0) {
                        value.push(ComplexNumber.fromReal(val));
                        colIndexList.push(colIndex);
                        elementCount ++;
                    } 
                } else {
                    if (!val.isZero()) {
                        value.push(val);
                        colIndexList.push(colIndex);
                        elementCount ++;
                    }
                }
            }
            rowPtrList.push(elementCount);
        }

        return new SparseMatrix(rowCount, columnCount, value, colIndexList, rowPtrList);
    }

    static fromDenseMatrix(matrix : Matrix) : SparseMatrix {
        return SparseMatrix.fromComplexArray(matrix.rawArray);
    }

    static identity(size : number) : SparseMatrix {
        const value : ComplexNumber[] = Array(size).fill(ComplexNumber.ONE);
        const colIndexList : number[] = Array(size).fill(0).map((_, i) => i);
        const rowPtrList : number[] = Array(size + 1).fill(0).map((_, i) => i);

        return new SparseMatrix(size, size, value, colIndexList, rowPtrList);
    }

    static zeros(rowCount : number, columnCount : number) : SparseMatrix {
        const value : ComplexNumber[] = [];
        const colIndexList : number[] = [];
        // no index, so all of them are 0
        const rowPtrList : number[] = Array(rowCount + 1).fill(0);

        return new SparseMatrix(rowCount, columnCount, value, colIndexList, rowPtrList);
    }

    static concat(A : SparseMatrix, B : SparseMatrix, C : SparseMatrix, D : SparseMatrix) {
        const value : ComplexNumber[] = [];
        const colIndexList : number[] = [];
        const rowPtrList : number[] = [0];

        // [A, B]
        // [C, D]

        // check dimensions
        if (
            A._rowCount !== B._rowCount ||
            C._rowCount !== D._rowCount ||
            A._columnCount !== C._columnCount ||
            B._columnCount !== D._columnCount
        ) {
            throw new Error('Matrices must have matching dimensions');
        }

        let elementCount = 0;
        for (let i = 0; i < A._rowCount; i++) {
            // row index is i
            // column index is [this._rowPtrList[i], this._rowPtrList[i + 1]]
            const rowAStart = A._rowPtrList[i];
            const rowAEnd = A._rowPtrList[i + 1];

            const rowBStart = B._rowPtrList[i];
            const rowBEnd = B._rowPtrList[i + 1];

            // iterate over the row of A
            for (let j = rowAStart; j < rowAEnd; j++) {
                value.push(A._value[j]);
                colIndexList.push(A._colIndexList[j]);
                elementCount ++;
            }

            // iterate over the row of B
            for (let j = rowBStart; j < rowBEnd; j++) {
                value.push(B._value[j]);
                // notice the offset is A._columnCount
                colIndexList.push(B._colIndexList[j] + A._columnCount);
                elementCount ++;
            }

            rowPtrList.push(elementCount);
        }

        for (let i = 0; i < C._rowCount; i++) {

            const rowCStart = C._rowPtrList[i];
            const rowCEnd = C._rowPtrList[i + 1];

            const rowDStart = D._rowPtrList[i];
            const rowDEnd = D._rowPtrList[i + 1];

            // iterate over the row of C
            for (let j = rowCStart; j < rowCEnd; j++) {
                value.push(C._value[j]);
                colIndexList.push(C._colIndexList[j]);
                elementCount ++;
            }

            // iterate over the row of D
            for (let j = rowDStart; j < rowDEnd; j++) {
                value.push(D._value[j]);
                // notice the offset is C._columnCount
                colIndexList.push(D._colIndexList[j] + C._columnCount);
                elementCount ++;
            }

            rowPtrList.push(elementCount);
        }

        return new SparseMatrix(
            A._rowCount + C._rowCount,
            A._columnCount + B._columnCount,
            value,
            colIndexList,
            rowPtrList
        );
    }

    static interleave(A : SparseMatrix, B : SparseMatrix) {
        // example:
        // A = [1, 0]
        //   = [0, 1]
        // B = [a, b]
        //   = [c, d]
        // result = [1, 0, 0, 0]
        //        = [0, a, 0, b]
        //        = [0, 0, 1, 0]
        //        = [0, c, 0, d]
        // A, B are square with same dimensions

        if (
            A._rowCount !== B._rowCount || 
            A._columnCount !== B._columnCount ||
            A._rowCount !== A._columnCount ||
            B._rowCount !== B._columnCount
        ) {
            throw new Error('Matrices must have matching dimensions');
        }

        const value : ComplexNumber[] = [];
        const colIndexList : number[] = [];
        const rowPtrList : number[] = [0];

        let elementCount = 0;

        for (let i = 0; i < A._rowCount; i++) {

            const rowAStart = A._rowPtrList[i];
            const rowAEnd = A._rowPtrList[i + 1];

            const rowBStart = B._rowPtrList[i];
            const rowBEnd = B._rowPtrList[i + 1];

            // iterate over the row of A
            for (let j = rowAStart; j < rowAEnd; j++) {
                value.push(A._value[j]);
                colIndexList.push(A._colIndexList[j] * 2);
                elementCount ++;
            }
            // push the row
            rowPtrList.push(elementCount);

            // iterate over the row of B
            for (let j = rowBStart; j < rowBEnd; j++) {
                value.push(B._value[j]);
                colIndexList.push(B._colIndexList[j] * 2 + 1);
                elementCount ++;
            }

            // push the row
            rowPtrList.push(elementCount);
        }

        return new SparseMatrix(
            A._rowCount * 2,
            A._columnCount * 2,
            value,
            colIndexList,
            rowPtrList
        );
    }

    get rowCount() : number {
        return this._rowCount;
    }

    get columnCount() : number {
        return this._columnCount;
    }

    get(i : number, j : number) {
        const rowPtr = this._rowPtrList[i];
        const rowEndPtr = this._rowPtrList[i + 1];
        for (let k = rowPtr; k < rowEndPtr; k++) {
            if (this._colIndexList[k] === j) {
                return this._value[k];
            }
        }
        return ComplexNumber.ZERO;
    }

    transpose() : SparseMatrix {
        // perform row-wise traversal of the matrix
        const newRowCount = this._columnCount;
        const newColumnCount = this._rowCount;
        const newValue : ComplexNumber[] = [];
        const newColIndexList : number[] = [];
        const newRowPtrList : number[] = [0];

        for (const columnIndex of this._colIndexList) {
            newRowPtrList[columnIndex] += 1;
        }
        
        // turn the new rowItemCount into cumulative sum
        for (let index of newRowPtrList.keys()) {
            newRowPtrList[index] += newRowPtrList[index - 1];
        }

        // this is used for indexing the new columnIndex
        const copiedNewRowPtrList = newRowPtrList.slice();
        
        for (let i = 0; i < this._rowCount; i++) {
            // row index is i
            // retrieve the column index of [this._rowItemCount[i], this._rowItemCount[i+1])
            const rowItemCountBefore = this._rowPtrList[i];
            const rowItemCountAfter = this._rowPtrList[i+1];

            for (let j = rowItemCountBefore; j < rowItemCountAfter; j++) {
                // column index is this._columnIndex[j]
                // the value is this._value[j]
                // after transpose, the column index is i.

                // put the index for 
                const currentColumnIndex = this._colIndexList[j];
                const currentValue = this._value[j];

                // find the index for the newColumnIndex and newValue
                const newListIndex = copiedNewRowPtrList[currentColumnIndex];

                // put the value into the new value
                newValue[newListIndex] = currentValue;
                // put the index into the new columnIndex
                newColIndexList[newListIndex] = i;

                // update the copiedNewRowItemCount
                copiedNewRowPtrList[currentColumnIndex] += 1;
            }
        }

        return new SparseMatrix(newRowCount, newColumnCount, newValue, newColIndexList, newRowPtrList);
    }

    matrixMultiply(other : SparseMatrix) : SparseMatrix {
        // check if the this._columnCount === other._rowCount
        if (this._columnCount !== other._rowCount) {
            throw new Error('The column count of the first matrix must be equal to the row count of the second matrix');
        }

        // transpose the second matrix
        const otherTranspose = other.transpose();

        const newRowCount = this._rowCount;
        const newColumnCount = otherTranspose._rowCount;
        const newValue : ComplexNumber[] = [];
        const newColIndexList : number[] = [];
        const newRowPtrList : number[] = [0];

        let elementCount = 0;

        // perform row-wise traversal of the this matrix
        for (let rowIndex = 0; rowIndex < this._rowCount; rowIndex ++) {


            // determine this row start and end, [start, end)
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];
            let listIndex = rowStart;


            // for each row, also perform row-wise traversal of the otherTranspose matrix
            for (let otherRowIndex = 0; otherRowIndex < otherTranspose._rowCount; otherRowIndex ++) {
                // const newRowIndex = rowIndex;
                const newColumnIndex = otherRowIndex;

                const otherRowStart = otherTranspose._rowPtrList[otherRowIndex];
                const otherRowEnd = otherTranspose._rowPtrList[otherRowIndex + 1];
                let otherListIndex = otherRowStart;

                // check the head element of both row
                let sum : ComplexNumber = ComplexNumber.ZERO;

                while (listIndex < rowEnd && otherListIndex < otherRowEnd) {
                    const currentColIndex = this._colIndexList[listIndex];
                    const otherCurrentColIndex = otherTranspose._colIndexList[otherListIndex];

                    if (currentColIndex === otherCurrentColIndex) {
                        // the current element is the same, we need to add the value

                        sum = sum.add(this._value[listIndex].multiply(otherTranspose._value[otherListIndex]));

                        // move to the next element
                        listIndex ++;
                        otherListIndex ++;
                    
                    } else if (currentColIndex < otherCurrentColIndex) {
                        // the current element is smaller, we need to move to the next element
                        listIndex ++;
                    } else { // currentColIndex > otherCurrentColIndex
                        // the other current element is larger, we need to move to the next element
                        otherListIndex ++;
                    }
                }

                if (!sum.isZero()) {
                    newValue.push(sum);
                    newColIndexList.push(newColumnIndex);
                    elementCount ++;
                }
            }

            newRowPtrList.push(elementCount);
        }

        return new SparseMatrix(newRowCount, newColumnCount, newValue, newColIndexList, newRowPtrList);
    }

    vectorMultiply(vector : Vector) : Vector {
        if (vector.length !== this._columnCount) {
            throw new Error('The vector length must be equal to the column count of the matrix');
        }

        const value : ComplexNumber[] = [];

        for (let rowIndex = 0; rowIndex < this._rowCount; rowIndex ++) {
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];

            let sum : ComplexNumber = ComplexNumber.ZERO;

            for (let i = rowStart; i < rowEnd; i ++) {
                const colIndex = this._colIndexList[i];
                const currentValue = this._value[i];

                sum = sum.add(currentValue.multiply(vector.get(colIndex)));
            }

            value.push(sum);
        }

        return Vector.fromComplexArray(value);
    }

    kroneckerProduct(other : SparseMatrix) : SparseMatrix {
        const newRowCount = this._rowCount * other._rowCount;
        const newColumnCount = this._columnCount * other._columnCount;
        const newValue : ComplexNumber[] = [];
        const newColIndexList : number[] = [];
        const newRowPtrList : number[] = [0];

        let elementCount = 0;

        for (let rowIndex = 0; rowIndex < this._rowCount; rowIndex ++) {
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];

            for (let otherRowIndex = 0; otherRowIndex < other._rowCount; otherRowIndex ++) {
                const otherRowStart = other._rowPtrList[otherRowIndex];
                const otherRowEnd = other._rowPtrList[otherRowIndex + 1];

                for (let listIndex = rowStart; listIndex < rowEnd; listIndex ++) {
                    const colIndex = this._colIndexList[listIndex];
                    const value = this._value[listIndex];

                    for (let otherListIndex = otherRowStart; otherListIndex < otherRowEnd; otherListIndex ++) {
                        const otherColIndex = other._colIndexList[otherListIndex];
                        const otherValue = other._value[otherListIndex];

                        const newColIndex = colIndex * other._columnCount + otherColIndex;

                        newValue.push(value.multiply(otherValue));
                        newColIndexList.push(newColIndex);

                        elementCount ++;
                    }
                }

                newRowPtrList.push(elementCount);
            }
        }

        return new SparseMatrix(newRowCount, newColumnCount, newValue, newColIndexList, newRowPtrList);
    }

    toDenseMatrix() : Matrix {
        const value : ComplexNumber[][] = [];

        for (let rowIndex = 0; rowIndex < this._rowCount; rowIndex ++) {
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];

            const row : ComplexNumber[] = Array(this._columnCount).fill(ComplexNumber.ZERO);

            for (let listIndex = rowStart; listIndex < rowEnd; listIndex ++) {
                const colIndex = this._colIndexList[listIndex];
                const currentValue = this._value[listIndex];

                row[colIndex] = currentValue;
            }

            value.push(row);
        }

        return Matrix.fromComplexArray(value);
    }

    toString() {
        let result : string = "";

        for (let rowIndex = 0; rowIndex < this._rowCount; rowIndex ++) {
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];

            const row : ComplexNumber[] = Array(this._columnCount).fill(ComplexNumber.ZERO);

            for (let listIndex = rowStart; listIndex < rowEnd; listIndex ++) {
                const colIndex = this._colIndexList[listIndex];
                const currentValue = this._value[listIndex];

                row[colIndex] = currentValue;
            }

            result += row.join(', ') + ' \n ';
        }

        return result;
    }
}

