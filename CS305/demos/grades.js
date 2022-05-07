"use strict";

let A1 = [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] ;
let A2 = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

//arr.sort(function(a, b) { return a - b; });
function answerComparator(ans1, ans2) {
    
    ans1.sort((a,b) => {return a.qid - a.qid;});
    console.log(ans1);
    // let sum = 0;
    // for ( let i = 0; i < sortedAns1.length; i ++) {
    //     if (sortedAns1.qid === ans2.qid) {
    //         sum += 1;
    //     }
    // }
    // this.students.score = sum;
    return ans1;
}

console.log(answerComparator(A1,A2));