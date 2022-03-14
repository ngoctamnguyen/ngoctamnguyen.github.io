"use stict";

// function makeCounter(counter) {
//     let count = 0;
//     if (counter > 3) {
//         return "Warning: increment was by value greater than 3";
//     } else {
//         if ( counter === undefined ) {
//             return count = count + 1;
//         } else {
//             return count + counter;
//         }
//     }

// }


// Model Short Answer:
function makeCounter() {
    let count = 0;
    return function(increment) {
        if (increment === undefined) {
            return count = count + 1;
        } else {
            count = count + increment;
        }
            if (increment > 3) {
            return "warning increment was by value greater than 3 ";
        } else {
            return count;
        }
    }
}
const counter = makeCounter();
console.log(counter());
console.log(counter(2));
console.log(counter(10));
