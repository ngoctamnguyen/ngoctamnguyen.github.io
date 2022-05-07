"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */

const calculator = {
    setValues() {
        this.a = 2;
        this.b = 3;
      },
      sum() {
        return this.a + this.b;
      },
    
      mul() {
        return this.a * this.b;
      }
}; 
// calculator.setValues();
// console.log(calculator.mul());
// console.log(calculator.sum());

//module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests