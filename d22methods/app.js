"use strict";

const { calculator } = require("./calculator");

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 

 * @returns {Accumulator} constructor function
 */
function Accumulator(currents, increments) {
        this.current = currents,
        this.increment = increments,

        this.currentValue = function () {
                return this.current;
            }
        this.increment = function () {
           this.current = this.current + 10;
        }
        this.report = function () {
            return this.current;
        }
    }

let Tam = new Accumulator(5,10);
console.log(Tam.report());
Tam.increment();
console.log(Tam.report());



//implement this


/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {
     this.setValue = function(x,y) {
        this.a = x;
        this.b = y;
     }
      this.sum = function() {
        return this.a + this.b;
      }
    
      this.mul = function() {
        return this.a * this.b;
      }
    }
 
    let zen = new Calculator();
    zen.setValue(2,8);
    console.log(zen.mul());