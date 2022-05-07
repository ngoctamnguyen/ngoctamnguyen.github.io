
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(function (sum, current) { return sum + current; }, 0);
let result2 = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
console.log(result2); // 15

let product = arr.reduce(function (sum, current) { return sum * current; }, 1);
console.log(product);


let result4 = arr.reduce(function (max, current) { return max > current ? max: current; }, -10000);
console.log(result4);
