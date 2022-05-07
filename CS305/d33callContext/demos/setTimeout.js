//"use strist";


const me = {
    first: 'tina',
    last: 'Xing',
    getFullname: function() {
        console.log('this is: ', this);
        console.log(this.first + ' ' + this.last);
    }
}
me.getFullname();
console.log("me is :", me );
console.log("me.gefullmane is: ", me.getFullname);
setTimeout(me.getFullname.bind(me ), 1000);
