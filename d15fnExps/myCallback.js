"use strict";

/*
Write a function, myCallback( func, arg). myCallback will call func
with the given arg and then log the return value to the console.
➢Test myCallback by calling it with a function that takes a number and returns the cube of the
argument. First write it as "cube" a normal named function declaration, then as an anonymous
function expression.
*/

/**
 * @param {function} func is any function
 * @param {Object} arg is anything
 * @returns {Undefined}  
 */

function myCallback(func, arg) {
     console.log("return val is: ", func(arg));
}

/**
 * @param {Number} num is any number
 * @returns {Number}  cube of num
 */

function cube(num) {
    return num * num * num;
}

myCallback(cube, 10);
myCallback(function(num) {return num * num *num})
