"uesr strict";

const player1 = {jersey: 8, stats: [{game: 1, points: 6}, {game: 2, points: 7} ]};
const player2 = {jersey: 12, stats: [{game: 1, points: 16}, {game: 2, points: 14} ]};
const player3 = {jersey: 6, stats: [{game: 1, points: 10}, {game: 2, points: 6} ]};
const teamStats = [player1, player2, player3];

function team10(arr) {
    return arr.filter(item => (item.jersey) > 10);
}
console.log(team10(teamStats));
//[ { jersey: 12, stats: [ [Object], [Object] ] } ]

function jerseyNum(arr) {
    return arr.map(item => item.jersey);
}
console.log(jerseyNum(teamStats));
//[ 8, 12, 6 ]

function sumPoint(arr) {
    const player3Total = player3.stats.reduce((sum,statpoint) => sum + statpoint, 0);
    console.log(player3Total);
}
sumPoint(teamStats);
//0[object Object][object Object]


function findHighScores(teamstataArr) {
    const highscores = [];
    for (const player of teamstataArr) {
        const stats = player.stats;
        const highscore = stats.reduce((max,current) => Math.max(max, current.points),0);
        highscores.push({jersey: player.jersey, high: highscore});
    }
    return highscores
}
//console.log(findHighScores(teamStats));
// [
//     { jersey: 8, high: 7 },
//     { jersey: 12, high: 16 },
//     { jersey: 6, high: 10 }
//   ]

function orderHighScores(teamstataArr) {
    const highscores = findHighScores(teamstataArr);
    highscores.sort(highScoreComperator);
    return highscores;
}
function highScoreComperator(playerA, playerB) {
    return playerB.high - playerA.high;
}
//console.log(orderHighScores(teamStats));
// [
//     { jersey: 12, high: 16 },
//     { jersey: 6, high: 10 },
//     { jersey: 8, high: 7 }
//   ]