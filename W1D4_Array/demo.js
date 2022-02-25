"use strict";

function generateArray(numOfArr, numOfElement) {
    let newArr = [];
    let count = 1;
    for (let i = 0; i < numOfArr; i++) {
        newArr[i] = [];
        for ( let j = 0; j < numOfElement; j ++) {
            newArr[i][j] = count;
            count += 1;
        }
    }
    return newArr;
}
console.log(generateArray(3,3));
console.log(generateArray(2,3));
console.log(generateArray(2,1));
