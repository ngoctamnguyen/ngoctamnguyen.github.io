"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. 
 */
// const assert = require("assert");  //always need this with node
// const myExports = require("./funcTests.js");  //with node need the name of your file with your functions here
// const myMap = myExports.myMap;  //do this for all of the functions used in the Mocha tests
// const myFilter = myExports.myFilter;
// const myReduce = myExports.myReduce;



describe("Test map filter reduce", function () {
    let testArray = null;
    beforeEach(function() {
        // runs before each test in this block
        testArray = [1, 2, 3];
    });
    afterEach(function() {
        // runs after each test in this block
        assert.deepEqual(testArray, [1, 2, 3]);  //all functions in this block should be pure
    });
    it("test reduce with max", function () {
        function max(acc, number) {return (acc>number) ? acc : max;}
        assert.strictEqual(myReduce([1, 2, 3, 4], max, 0), 4);
    });
    it("test reduce with min", function () {
        function max(acc, number) {return (acc<number) ? acc : number;}
        assert.strictEqual(myReduce([1, 2, 3, 4], max, 1000), 1);
    });


});