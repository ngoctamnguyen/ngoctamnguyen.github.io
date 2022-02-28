"use strict";


//const assert = require("assert");  //always need this with node
//const imports = require("./fnExps.js");  //with node need the name of your file with your functions here
//const double = imports.double;  //do this for all of the functions used in the Mocha tests
//const myMap = imports.myMap;
//const times100 = imports.times100;


/* the following comment is needed when you run in the browser environment */
/* global assert double times100 myMap  */

/* 1.	Write a function, double, that takes a number and returns 2 times the number..  */
describe("Doubles the number ", function () {
    it("Tests double of 10", function () {
        assert.strictEqual(double(10), 20);
    });
    it("Tests double of 0", function () {
        assert.strictEqual(double(0), 0);
    });
    it("Tests double of -10", function () {
        assert.strictEqual(double(-10), -20);
    });
});

/*  2.	Write a function times100 that takes a number and returns 100 times the number. */
describe("100 times of the number", function () {
    it("Tests times 100 of number 10", function () {
        assert.strictEqual(times100(10), 1000);
    });
    it("Tests times 100 of number 0", function () {
        assert.strictEqual(times100(0), 0);
    });
    it("Tests times 100 of negative number -10", function () {
        assert.strictEqual(times100(-10), -1000);
    });
});

    /* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array. */
    describe("myMap", function () {
        const testArray = [-10, 0, 10, 20];
        it("tests myMap on double", function () {
            assert.deepStrictEqual(myMap(testArray, double), [-20, 0, 20, 40]);
        });
        it("tests myMap on times100", function () {
            assert.deepStrictEqual(myMap(testArray, times100), [-1000, 0, 1000, 2000]);
        });
    });

    /* 4.	Demonstrate your myMap function with an anonymous function that triples the input value.  Write this as an anonymous function expression.  
    Then write it using an arrow expression. */
    describe("myMap", function () {
        const testArray = [-10, 0, 10, 20];
        it("tests myMap on triples anonymous function", function () {
            assert.deepStrictEqual(myMap(testArray,  function(arr) {return 3*arr;}), [-30, 0, 30, 60]);
        }); 
        it("tests myMap on triples arrow function", function () {
            assert.deepStrictEqual(myMap(testArray, num => 3*num), [-30, 0, 30, 60]);
        });
    });