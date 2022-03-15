"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount; 



class Bank{

    constructor() {
        this._accounts = []; // the accounts
        this._accountNumber = 1;
    }

    addAccount() {
        this._accounts.push(new Account(this._accountNumber))
        this._accountNumber++;
    }

    addSavingsAccount(interest) {
        this._accounts.push(new SavingsAccount(this._accountNumber, interest));
        this._accountNumber++;
    }

    addCheckingAccount(overdraft) {
        this._accounts.push(new CheckingAccount(this._accountNumber, overdraft));
        this._accountNumber++;
    }

    closeAccount(accountNmuber) {
        const index = this._accounts.findIndex(item => item._number === accountNmuber);
        this._accounts.splice(index, 1);
    }

    accountReport() {
        let report = "";
        for (let element of this._accounts) {
            report += element.toString() + "\n"
        }
        return report;
    }

    endOfMonth() {
        let rpt = this._accounts.map(acc => acc.endOfMonth());
        return rpt.join("\n");
    }
}


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// exports.Bank = Bank;

