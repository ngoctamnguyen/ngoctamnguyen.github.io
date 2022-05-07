"use strict";   


function reOrder(string,separated) {
    let myString = string.split(separated);
    myString.sort();
    return myString.join(" ");
}
let myWords = "Tam-Loves-Exam"
alert(reOrder(myWords,"-")); //Exam Loves Tam