"use strict";

let animal = {
    eats: true
    };
    function Dog(name) {
    this.name = name;
    }
    Dog.prototype.__proto__ = animal;
    let snoopy = new Dog("Snoopy");
    console.log( snoopy.eats ); // true