"use strict";
module.exports = {};

/**
 * @param {Amount} is the start money
 * @param {Rate} is the interest rate of 1 year
 * @param {Years} is the number of year
 * @returns {compoundInterest}  total compound interest
 */

 function compoundInterest(Amount, Rate, Years) {
    let compoundOfYear = Amount;
    for (let i = 1; i <= Years; i++) {
        compoundOfYear = compoundOfYear * ( 1+ Rate/100);
    }
    return compoundOfYear;
}