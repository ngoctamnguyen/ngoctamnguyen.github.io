"use strict";


[1,5,16,3,108].forEach((item) => {
    console.log (`${item}`);
    });

    [1,5,16,3,108].forEach(logEvens);
    function logEvens(num){if (num%2 == 0) console.log(num);}

    function isEvens(num){if (num%2 == 0) {
        return true;}
        else {
            return false;
        }
    }

    console.log("=======new array===========");
    
    const numbers = [1,5, 18,2,77,108];

    const evens = numbers.filter(isEvens);
    console.log("evens is: ", evens);
    
    numbers.forEach((item) => {
        console.log (`${item}`);
        });
  
    console.log("evens is: ", numbers.filter(num => num%2 ===0));

    console.log("first even number is: ", numbers.find(num => num%2 === 0) );

    console.log("Index of first even number is: ", numbers.findIndex(num => num%2 === 0) );

