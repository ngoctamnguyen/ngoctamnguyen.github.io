"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { makeBank }; //add all of your function names here that you need for the node mocha tests


/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.  
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object. 
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.  
Modify your solution for the bank problem from yesterday to use a constructor function instead of an object factory
*/

/**
 * 
 * @returns {MakeBank} constructor function
 */
function MakeBank() {
    this.bank = { transactionsDB: [], };
    this.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

    this.getBalance = function(id) {
        const customer = this.transactionsDB.find(customer => customer.customerId === id);   //access to a row
        let balance = 0;
        for (const trans of customer.customerTransactions) { balance += trans; }  //balance of one row
        return balance;
    };
    this.bankBalance =  function () {
        let total = 0;
        for (const trans of this.transactionsDB) {   //access to all rows
            total += this.getBalance(trans.customerId); //sum to total balance of each row
        }
        return total;
    };
}
// const bank = { transactionsDB: [], };
// bank.transactionsDB = [
//     { customerId: 1, customerTransactions: [10, 50, -40] },
//     { customerId: 2, customerTransactions: [10, 10, -10] },
//     { customerId: 3, customerTransactions: [5, -5, 55] }];

// bank.getBalance = function (id) {
//     const customer = bank.transactionsDB.find(customer => customer.customerId === id);
//     let balance = 0;
//     for (const trans of customer.customerTransactions) { balance += trans; }
//     return balance;
// };

// bank.bankBalance = function () {
//     let total = 0;
//     for (const trans of this.transactionsDB) {
//         total += this.getBalance(trans.customerId);
//     }
//     return total;
// };


