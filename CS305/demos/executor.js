"use strict";

const assert = require("assert");

function executor(foo, x, y) {
    return foo(x,y);
}
function add(x,y) {
    return x+y;
}

function mult(x,y) {
    return x*y;
}

describe("executor", function(){
    it ("tests add", function(){
    assert.strictEqual(executor(add, 5, 10), 15);
    });
    it("tests mult", function(){
    assert.strictEqual(executor(mult, 5, 10), 50);
    });
    });

// console.log(executor(add,5,10));  //15
// console.log(executor(mult,5,10));  //50