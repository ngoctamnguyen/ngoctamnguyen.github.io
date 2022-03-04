"use strict";

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

function sumPoints(arr) {
    let sum = 0;
    for (const player of players) {
        for (let i = 0; i< player.points.length; i++) {
            sum += player.points[i];
        }
    }
    return sum;
}
console.log("expect 10: ", sumPoints(players));

function findProps(arr) {
    let newArr = [];
    for (const elem in arr) {
        newArr.push(elem);
    }
    return newArr;
}

console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));

arr.forEach(function(item, index, array) {
    // ... do something with item
    });