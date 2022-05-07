"use strict";

function birthday() {

    console.log(this);

    this.a = this.a + 1;

    console.log(this.a);
}

const 
birthday();
