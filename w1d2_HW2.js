"use strict";

//const prompt = require("prompt-sync")();

//let initAmount = prompt("Please enter initial amount: ");
//let annualRate = prompt("Please enter annual interest rate (%): ");
//let numberOfYear = prompt("Please enter number of year: ");

function compoundInterest(Amount, Rate, Years) {
    let compoundOfYear = 0;
    for (let i = 1; i <= Years; i++) {
        compoundOfYear = Amount * (Rate/100);
    }
    return compoundOfYear;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
