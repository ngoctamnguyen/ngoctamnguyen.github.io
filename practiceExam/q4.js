"use strict";

function ask1(question, yes, no) {
    question = prompt("do you agree ? ", yes, no);
     if (question === "yes"){
        showOk1();
    }
    else {
        showCancel1();
    }
    }
    const showOk1 = () => console.log("you agreed");
    const showCancel1 = () => console.log("you cancelled the execution");
    console.log(ask1("Do you agree?", showOk, showCancel));