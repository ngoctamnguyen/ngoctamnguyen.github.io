"use strict";
module.exports = {computeSalesCommission};

/**
 * @param {saleried} is the sale man is saleried?
 * @param {saleAmaount} the sales amount of the sale man
 * @returns {number}  commission
 */

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
