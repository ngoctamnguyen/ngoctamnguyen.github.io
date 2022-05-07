

let array= [{name:"ram",age:29}, {name:"syam",age:40}, {name:"ganga",age:19}];

function getAverageAge(arr) {
    arr.reduce(function(prev,user) => {return prev + user.age;},0);
}
console.log( getAverageAge(array));