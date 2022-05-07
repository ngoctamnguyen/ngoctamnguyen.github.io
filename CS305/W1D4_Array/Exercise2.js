"use strict";

/*Write a function that accepts a two-dimensional array of numbers and returns the
sum of all the elements in the array.
*/


let matrixs = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(matrixs);

function sumElements(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {     //loop for rows
        for (let j = 0; j < matrix[i].length; j++) {    //loop for column
            sum = sum + matrix[i][j];
            }
        }
    return sum;
}


console.log("Expect sum : ", sumElements(matrixs));
