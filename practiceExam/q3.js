"use strict";

const prompt = require("prompt-sync")();

function ask(question, yes, no) {
    question = prompt(question,yes, no);
    if (question ==="yes"){
        showOk();
    }
    else{
        showCancel();
    }
}
function showOk() {
 console.log ( "You agreed." );
}
function showCancel() {
 console.log ( "You canceled the execution." );
}
ask("Do you agree?", showOk, showCancel);



