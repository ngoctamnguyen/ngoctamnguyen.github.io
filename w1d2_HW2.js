"use strict";

function compoundInterest(Amount, Rate, Years) {
    let compoundOfYear = Amount;
    for (let i = 1; i <= Years; i++) {
        compoundOfYear = compoundOfYear * ( 1+ Rate/100);
    }
    return compoundOfYear;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
