"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr,a,b) {
    let newArr = [];
    arr.forEach(item => {if (item >= a && item <= b) newArr.push(item);});
    return newArr;
}

 
  function filterRangeInPlace(arr, a, b) {
    arr.forEach((item,index) => {(item < a || item > b) ? arr.splice(index,1) : console.log(item)})
  }
 

  function Calculator() {
      this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
      };
      this.calculate = function(str) {
            let split = str.split(' '),
          a = +split[0],
          op = split[1],
          b = +split[2];
           if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
        }
        return this.methods[op](a, b);
      };
      this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
    }

  function unique(arr) {
    let newArr = [];
    arr.forEach(item => newArr.includes(item) ? "": newArr.push(item));
    return newArr;
  }


  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }