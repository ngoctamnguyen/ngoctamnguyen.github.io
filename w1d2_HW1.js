"use strict";

function computeSalesCommission(isSalaried, salesAmount) {
    let commission = 0;
    if (isSalaried) {
        if (salesAmount >= 500) {
            commission = 0.01 * 500 + 0.02 * (salesAmount-500);
        } else {
            commission = 0.01 * salesAmount;
        }
    } else {
        if (salesAmount >= 500) {
            commission = 0.02 * 500 + 0.03 * (salesAmount-500);
        } else {
            commission = 0.02 * salesAmount;
        }
    }
    return commission;
}

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
