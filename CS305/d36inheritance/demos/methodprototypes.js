let animal = {
    eats: true
  };
  
  // create a new object with animal as a prototype
  let rabbit = Object.create(animal);
  
  console.log(rabbit.eats); // true
  
console.log(Object.getPrototypeOf(rabbit) === animal); // true
  
  Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}