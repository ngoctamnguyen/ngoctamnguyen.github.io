"use strict";

function compareNumeric(a, b) {
    a = "" + a;
    b = "" + b;

    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }

    function compareNumericDes(a, b) {
        //-1 means a comes defore b -- semantics of the sort comparator function
        //1 means a comes after b
        a = "" + a; //or a = string (a); convert a to string
        b = "" + b;
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;
        }


    let arr = [ 2, 1, 15, 20, 3 ];
    arr.sort(compareNumeric);
    console.log(arr); // [1, 2, 15]

    arr.sort(compareNumericDes);
    console.log(arr);
