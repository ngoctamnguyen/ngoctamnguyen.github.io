"use strict";

function camelize(str) {
    if (str == "") {
        return "";
    }
    let arr = str.split("-");
    let newString = "";
    arr.forEach((item,index) => {
        if (index == 0 &&  str[0] != "-") {
            console.log(index);
            newString += item[0].toLowerCase() + item.slice(1);
        }
        else {
            console.log(index);
            newString += item[0].toUpperCase() + item.slice(1)
        }
    });
    return newString;
}
console.log(camelize("-my-name-is-tam")); //myNameIsTam

