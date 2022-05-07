"use strict";


/**
 * 
 * @returns {function} the incrementing function
 */
function makeCounter() {
    let count = 0;
    const innerFunc = function() {
        count += 1;
        return count;
    };
    return innerFunc;
}

const counter1 = makeCounter();
const counter2 = makeCounter();
counter1();
counter1();
counter2();
console.log(counter1());
console.log(counter2());