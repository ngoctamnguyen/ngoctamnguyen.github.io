"use strict";

// function printNumber () {
//     for (let i = 5; i < 20; i++) {
//         let interval = i * 1000;
//         let timerId = setInterval(() => console.log(i), interval);
//         setTimeout(() => { clearInterval(timerId);}, 10000);
//     }
// }
// printNumber();

function printNum() {
let time = 5;
let interval = setInterval(function() { 
   if (time <= 10) { 
      console.log(time);
      time++;
   }
   else { 
      clearInterval(interval);
   }
}, time * 1000);
}
printNum();