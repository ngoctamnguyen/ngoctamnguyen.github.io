"use strict";

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.
*/
const assert = require("assert");  //always need this with node
const myExports = require("./arrays.js");  //with node need the name of your file with your functions here
const maxOfThree = myExports.maxOfThree;  //do this for all of the functions used in the Mocha tests
const sum = myExports.sum;
const multiply = myExports.multiply;
const findLongestWord = myExports.findLongestWord;


/* global assert maxOfThree sum multiply findLongestWord reverseArray reverseArrayInPlace scoreExams generateArray */

/* 1.	1.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.  */
describe("maxOfThree", function () {
    it("tests 1 2 3", function () {
        assert.strictEqual(maxOfThree(1, 2, 3), 3);
    });
    it("tests 1 3 2", function () {
        assert.strictEqual(maxOfThree(10, 30, 20), 30);
    });
    it("tests 2 1 3", function () {
        assert.strictEqual(maxOfThree(2, 1, 3), 3);
    });
    it("tests 2 3 1", function () {
        assert.strictEqual(maxOfThree(22, 33, 11), 33);
    });
    it("tests 3 2 1", function () {
        assert.strictEqual(maxOfThree(3, 2, 1), 3);
    });
    it("tests 3 1 2", function () {
        assert.strictEqual(maxOfThree(333, 111, 222), 333);
    });
    it("tests -1 -2 -3", function () {
        assert.strictEqual(maxOfThree(-1, -2, -3), -1);
    });
    it("tests -1 -2 -2", function () {
        assert.strictEqual(maxOfThree(-1, -2, -2), -1);
    });
    it("tests 5 5 -1", function () {
        assert.strictEqual(maxOfThree(5, 5, -1), 5);
    });
    it("tests -2 0 -2", function () {
        assert.strictEqual(maxOfThree(-2, 0, -2), 0);
    });
    it("tests 6 6 6", function () {
        assert.strictEqual(maxOfThree(6, 6, 6), 6);
    });
});

/*
2.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
 and multiply([1,2,3,4]) should return 24. 
 */
 describe("sum and multiply", function () {
    it("tests sum of 1 2 3 and 1 2 3 4", function () {
        assert.strictEqual(sum([1, 2, 3]), 6);
        assert.strictEqual(sum([1, 2, 3, 4]), 10);
    });
    it("tests multiply 3 2 10 and 1 2 3 4", function () {
        assert.strictEqual(multiply([3, 2, 10]), 60);
        assert.strictEqual(multiply([1, 2, 3, 4]), 24);
    });
});

/*
3.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. 
*/
describe("findLongestWord", function () {
    it("tests longest", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a", "test", "longest"]), 7);
    });
    it("tests longest with spaces", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]), 18);
    });
    it("tests longest with equal length words", function () {
        assert.strictEqual(findLongestWord(["is", "is", "is", "is", "is"]), 2);
    });
    it("tests longest with some words equal length", function () {
        assert.strictEqual(findLongestWord(["this", "is", "this", "is", "is"]), 4);
    });
});
