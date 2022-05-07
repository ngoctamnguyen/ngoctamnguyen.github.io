"use strict";

const calculator = {
    setValues(numa, numb) {
        this.a = numa;
        this.b = numb;
      },
      sum() {
        return this.a + this.b;
      },
    
      mul() {
        return this.a * this.b;
      }
}; 
calculator.setValues(5,10);
console.log(calculator.mul());
console.log(calculator.sum());