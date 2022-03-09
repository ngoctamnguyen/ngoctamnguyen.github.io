"uesr strict";

const player1 = {jersey: 8, stats: [{game: 1, points: 6}, {game: 2, points: 7} ]};
const player2 = {jersey: 12, stats: [{game: 1, points: 16}, {game: 2, points: 14} ]};
const player3 = {jersey: 6, stats: [{game: 1, points: 10}, {game: 2, points: 6} ]};
const teamStats = [player1, player2, player3];

function team10(arr) {
    return arr.filter(item => item.jersey >8);
}
console.log(team10(teamStats));

function jerseyNum(arr) {
    return arr.map(item => item.jersey);
}
console.log(jerseyNum(teamStats));