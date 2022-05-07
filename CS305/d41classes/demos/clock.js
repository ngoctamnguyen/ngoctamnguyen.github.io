"use strict";

class Clock {
    constructor({ template }) {  //constructor function
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {    //interface
      clearInterval(this.timer);   //closure
    }
  
    start() {   //interface
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
    
  }
  
  
  let clock = new Clock({template: 'h:m:s'});  //expression context
  clock.start();
  setTimeout(clock.stop.bind(clock),4000);
