export const toBinaryString = (number : number, bitLength : number) : string => {
    let result = "";
    while(number >= 1){
        result = number % 2 + result;
        number >>= 1;
    }
    return result.padStart(bitLength, '0');
}

export const toBinaryList = (string: string) : string[] => {
    return string.split('');
}

export const toDecimal = (binaryString : string) : number => {
    let result = 0;
    for (let i = 0; i < binaryString.length; i++) {
        const number = binaryString[i] === '1' ? 1 : 0;
        result += number * (2 ** (binaryString.length - i - 1));
    }
    return result;
}

// char helper function

export const replaceCharAt = (string : string, index : number, replacement : string) : string => {
    const array = string.split('');
    array[index] = replacement;
    return array.join('');
}

export const swapCharAt = (string : string, indexOne : number, indexTwo : number) : string => {
    const array = string.split('');
    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
    return array.join('');
}

export const replaceCharBetween = (string: string, start : number, end : number, replacement : string) : string => {
    if (replacement.length !== end - start) {
        throw new Error('Replacement string must be the same length as the range');
    }

    const array = string.split('');
    array.splice(start, end - start, replacement);
    return array.join('');
}

export const reverseString = (char : string) : string => {
    return char.split("").reverse().join("");
}

export const everyChar = (string : string, predicate : (char : string, index : number) => boolean) : boolean => {
    return string.split('').every(predicate);
}