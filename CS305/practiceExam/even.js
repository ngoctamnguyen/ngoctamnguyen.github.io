const numbers = [1, 5, 18, 2, 77, 108];

const firstEven = numbers.find(function(n){

    return n%2 ===0;

});

console.log(firstEven);



const evenNumbers=numbers.filter(a => a%2===0);

console.log(evenNumbers);



const indexOfFirstEven = numbers.findIndex(function(n){

    return n%2 ===0;

})

console.log(indexOfFirstEven);