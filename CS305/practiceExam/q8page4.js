"use strict";

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }
function compareString(a, b) {
         a = "" + a;
         b = "" + b;
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
        }
function compareStringDescending(a, b) {
        // a = "" + a;
        // b = "" + b;
        if (a.length > b.length) return -1;
        if (a.length == b.length) return 0;
        if (a.length < b.length) return 1;
        }

    let arr = [ 2, 1, 15, 20, 3 ];

    let arr1 =  ["Bilbo", "Gandalf", "Nazgulwwwwww"];
    
    arr.sort(compareNumeric);
    console.log(arr); 
    arr.sort(compareString);
    console.log(arr); 
    arr1.sort(compareStringDescending);
    console.log(arr1);
