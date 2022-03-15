"use strict";
function Person(name) {
    console.log('Person1 this: ', this); 
    this.name = name;
    console.log('Person2 this: ', this); ________________________
   }
   function Doctor(name, department) {
    console.log( this); ________________________
    Person.call(this, name, department);
    console.log(this); ________________________
    this.dept = department;
   }
   Doctor.prototype.report = function() {
    return "medical report"
   };
   function Surgeon(name, department) {
    console.log(this); ________________________
    Doctor.call(this, name, department);
    console.log(this); ________________________
   }
   Surgeon.prototype.operate = function() {
    return 'operation performed.'
   };
   Surgeon.prototype.__proto__ = Doctor.prototype;
   surg1 = new Surgeon("Fred", "Cardiology");
   console.log(surg1.dept); ________________________
   console.log(surg1.name); ________________________
   console.log(surg1.report()); ________________________
   console.log(surg1); ________________________
   console.log(surg1.__proto__); ________________________
   console.log(surg1.prototype); ________________________
   console.log(Surgeon.__proto__); ________________________
   console.log(Surgeon.prototype); ________________________
   console.log(Surgeon.prototype.__proto__); ________________________
   