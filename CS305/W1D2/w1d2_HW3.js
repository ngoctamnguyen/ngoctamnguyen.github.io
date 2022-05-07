"use strict";

function calcDownpayment(costOfHouse){
    let downPayment;
    if (costOfHouse < 50000) {
        downPayment = 0.05 * costOfHouse;
    } else if (costOfHouse >= 50000 && costOfHouse < 100000) {
        downPayment = 2500 + 0.1*(costOfHouse - 50000);
    } else if ( costOfHouse >= 100000 && costOfHouse < 200000) {
        downPayment = 7500 + 0.15*(costOfHouse - 100000);
    } else {
        downPayment = 20000 + 0.1*(costOfHouse - 200000);
    }
    return downPayment;
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

