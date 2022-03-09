"use strict";
function cat(abc) {
    if (!abc) {
        abc = console.log("abs");
        return abc;
    }
    const xyz = console.log("xyz");
    return xyz;
}
console.log(cat());
