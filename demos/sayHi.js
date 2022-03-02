// "use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHowdy() {
     let output = "Hello, my name is " + this.name + 
     ". I am" + this.age + ". My job is " + this.job + ".";
     console.log(output);

  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHowdy;
  Intern.sayHi = sayHowdy;
  
  Manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'
