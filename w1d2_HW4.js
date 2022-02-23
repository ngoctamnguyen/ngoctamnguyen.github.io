"use strict";

function sumDigits(num) {
    let sumResult = 0;
    let digit = 0;
    while (num != 0) {
        digit = num % 10;
        sumResult += digit;
        num = (num-digit)/10;
    }
    return sumResult;
}

function multiDigits(num) {
    if (num === 0) {
        return 0;
    }
    let multiResult = 1;
    let digit = 0;
    while (num != 0) {
        digit = num % 10;
        multiResult *= digit;
        num = (num-digit)/10;
    }
    return multiResult;
}

console.log("Expect 10: ", sumDigits(1234) );
console.log("Expect 24: ", multiDigits(1234) );
console.log("Expect 3: ", sumDigits(102) );
console.log("Expect 0: ", multiDigits(102) );
console.log("Expect 8: ", sumDigits(0) );
console.log("Expect 8: ", multiDigits(111011) );