"use strict";

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item,index) => {return index +":" + item.length});

console.log('expect 0:5,1:7,2:6 : ', lengths.join());
