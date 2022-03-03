function getMaxSubSum(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += +num;
    }
    return sum;
}
console.log("[1, 2, 3] use for... of... result is: " + getMaxSubSum([1, 2, 3]));

function getMaxSubSum1(arr) {
    let sum = 0;
    for (const num in arr) {
        sum += +num;
    }
    return sum;
}
console.log("[1, 2, 3] use for... in... result is: " + getMaxSubSum1([1, 2, 3]));