"uese struct";

const team = [ "Bob", "Fred", "Jim"];

/*destructe array*/
let [Bob, Fred, Jim] = team;
// destructure the team array onto variables with the same names as the properties, but all lower case
console.log("expect Bob", Bob );
console.log("expect Jim", Jim);



let options = {
    title: "Menu",
    width: 100,
    height: 200
    };
    let {title, width, height} = options;
    console.log(title); // Menu
    console.log(width); // 100
    console.log(height); // 200
    