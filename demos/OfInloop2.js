"uesr strict";

const player1 = {jersey: 8, stats: [{game: 1, points: 6}, {game: 2, points: 7} ]};
const player2 = {jersey: 12, stats: [{game: 1, points: 16}, {game: 2, points: 14} ]};
const player3 = {jersey: 6, stats: [{game: 1, points: 10}, {game: 2, points: 6} ]};
const teamStats = [player1, player2, player3];

// console.log(teamStats.stats);  //undefined
// console.log(teamStats.jersey); //undefined
// console.log(teamStats.stats.game); //undefined





function ofLoop(arr) {
    for (const element of arr) {
        console.log(element);
    }
}
//ofLoop(teamStats);
// {
//     jersey: 8,
//     stats: [ { game: 1, points: 6 }, { game: 2, points: 7 } ]
//   }
//   {
//     jersey: 12,
//     stats: [ { game: 1, points: 16 }, { game: 2, points: 14 } ]
//   }
//   {
//     jersey: 6,
//     stats: [ { game: 1, points: 10 }, { game: 2, points: 6 } ]


function inLoop(arr) {
    for (const element in arr) {
        console.log(element);
    }
}
//inLoop(teamStats); // 0, 1, 2

function ofLoop1(arr) {
    for (const element of arr) {
        console.log(element.stats);
    }
}
//ofLoop1(teamStats);
// [ { game: 1, points: 6 }, { game: 2, points: 7 } ]
// [ { game: 1, points: 16 }, { game: 2, points: 14 } ]
// [ { game: 1, points: 10 }, { game: 2, points: 6 } ]

function ofLoop2(arr) {
    for (const element of arr) {
        console.log(element.stats.game);
    }
}
//ofLoop2(teamStats);
// undefined
// undefined
// undefined

const myArr = teamStats.stats;
function ofLoop3(arr) {
    for (const element of arr) {
        for (const inElement of element[i]) {
            console.log(inElement.game);
        }
    }
}
//ofLoop3(teamStats);
//TypeError: element is not iterable

function ofLoop4(arr) {
    let myArr = [];
    for (const element of arr) {
        myArr.push(element.stats);
        console.log(myArr);
    }
}
//ofLoop4(teamStats);
// [ [ { game: 1, points: 6 }, { game: 2, points: 7 } ] ]
// [
//   [ { game: 1, points: 6 }, { game: 2, points: 7 } ],
//   [ { game: 1, points: 16 }, { game: 2, points: 14 } ]
// ]
// [
//   [ { game: 1, points: 6 }, { game: 2, points: 7 } ],
//   [ { game: 1, points: 16 }, { game: 2, points: 14 } ],
//   [ { game: 1, points: 10 }, { game: 2, points: 6 } ]

function ofLoop5(arr) {
    let myArr = [];
    for (const element of arr) {
        myArr.push(element.stats);
    }
    for (const games of myArr) {
        console.log(games.points);
    }
}
ofLoop5(teamStats);
undefined
undefined
undefined

function ofLoop6 (arr) {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j].points);
        }
    }
}
ofLoop6(teamStats);