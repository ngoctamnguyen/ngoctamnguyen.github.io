"use strict";

function Calculator() {
    this.setValues = function(numa, numb) {
       this.a = numa;
       this.b = numb;
    }
     this.sum = function() {
       return this.a + this.b;
     }
   
     this.mul = function() {
       return this.a * this.b;
     }
   }

let calculator = new Calculator();
calculator.setValues(5, 10);
console.log( calculator.sum() );
console.log(calculator.mul() );
