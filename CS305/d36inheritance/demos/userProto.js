"use strict";

/**
 * 
 * @param {*} firstname is
 * @param {*} lastname is
 * @param {*} birthDate is
 */
function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
    }

    /********way 1: F.prototype = parent pbject for all new objects*******/
    User.prototype = {
        getFullName: getFullName,
        getAge: getAge
    }

    /******way 2nd******/
    // User.prototype.getFullName = getFullName;
    // User.prototype.getAge = getAge;
    
    let user1 = new User('John', 'Smith', new Date('2000-10-01'));
    let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
    function getFullName() { return this.firstname + ' ' + this.lastname;}
    function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}
    
    //complete the code so that the above functions reside in a single object and are inherited by all User
    //objects that are created using User as a constructor function.


    console.log(user1.getFullName()); //John Smith
    console.log(user1.getAge()); //21
    