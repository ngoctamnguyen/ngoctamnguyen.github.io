"use strict";

function UnitConvertion(mycheck, value) {
    this.isDegree = mycheck;
    this.convert = function () {
        if (this.isDegree = true) {
            return value*Math.PI/180;
        }
        else {
            return value*180/Math.PI;
        }
    }
}

const myDegree = new UnitConvertion(true,45);
console.log(myDegree.convert());

const myRadian = new UnitConvertion(false,1);
console.log(myRadian.convert());


