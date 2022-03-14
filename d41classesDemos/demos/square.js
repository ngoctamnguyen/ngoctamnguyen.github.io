"use strict";

/**
 * 
 * @returns {number} area of quare
 */
function area() { return this.side * this.side }

const square1 = {side: 5};
square1.__proto__ = {area: area}; //{area:area};
const square2 = {side: 5};
square2.__proto__ = {area: area}; //{area:area};

/**
 * 
 * @param {number} side of square
 * @returns {object} suqare (constructor function)
 */
function Square(side){
    this.side = side;
}

Square.prototype.area = area;

class Square2 {
    constructor(side) {
        /**
         * @param {number} side of square
         */
        this.side = side;
    }
    /**
     * 
     * @returns {number} aera of square
     */
    area() {return this.side * this.side;}
}

const square3 = {side:33}
square3.__proto__ = Square2;


console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);

const constSquare1 = new Square(7);
const constSquare2 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);

const classSquare = new Square2(10);
const classSquare2 = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);