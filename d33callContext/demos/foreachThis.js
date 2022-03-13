"use strict";
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList:  function() {
    this.students.forEach(
      //function(student){console.log(this.title + ": " + student);}  //error – ‘this’ is undefined (or window)
      //student => console.log(this.title + ": " + student)    //works as expected – ‘this’ comes from lexical environment, showList method
      function(student){console.log(this.title + ": " + student);}.bind(this)
    );
  }
};
group.showList();

let customer = {
    welcome: "Welcome ",
    student: ["John", "Tam", "Jack", "Jill"],
    showlist: function() {
        this.student.forEach(
            //function(student) {console.log(this.welcome + student);}.bind(this)
            function(student) {console.log(this.welcome + student);}.bind(this)
        );
    }
};
customer.showlist();
