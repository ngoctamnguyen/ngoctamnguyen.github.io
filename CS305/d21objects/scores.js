"use strict";

/*  Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quiz answers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct 
 answers, e.g., [3,1,2,4] and returns an object that has properties with the names of each studentId and the value of the property will be their score on the quiz (one point for each correct answer)
 expect   { s101: 3, s102: 2, s103: 3 }
*/

const student1 = {
    studentId: "s101", 
    quizAnswers: [1,1,2,4]
};
const student2 = {
    studentId: "s102",
    quizAnswers: [2,1,2,2]
};
const student3 = {studentId: "s103", quizAnswers: [3,1,3,4]};

const quiz = [student1, student2, student3];

/**
 *@param {array} quiz array of student answer arrays
 *@param {array} correctAnswers array of the correct answers
 *@returns {array} array of scores for the student
 *need 2 loop to handle the array of arrays
 */
function gradQuiz(quizArr, correctAnswers) {
    const grades = [];

    for (const student of quizArr) {
        const studentScore = computeScore(student.quizAnswers, correctAnswers);
        grades.push(studentScore);
    }
    return grades;
}

/**
 *@param {array} studentAns array of a student answers
 *@param {array} correctAns array of the correct answers
 *@returns {number} number of correct answers
  */
 function computeScore(studentAns, correctAns) {
    let score = 0;
    for (let i=0; i< correctAns.length; i++) {
        if (studentAns[i] === correctAns[i]) {
            score = score + 1;
        }
    }
    return score;
}

console.log("expect 3", computeScore([1,2,3,1],[1,2,3,4]));
console.log("expect [3, 2, 3]", gradQuiz(quiz, [3,1,2,4]));
