
function Item(id,name,price,discount,freeShipping) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.freeShipping = freeShipping;

    this.getFinnalPrice = function() {
        let finalPrice = (this.price > 500 ) ? 500-(this.discount/100*500) : this.price;
        return (this.freeShipping == true ) ? finalPrice + 3 : finalPrice;
    }
}
const item1 = new Item(1,'cell phone',500,10);
const item2 = new Item(2,'book',50,0,true);
const item3 = new Item(3,'table',500,1);
const item4 = new Item(4,'adapter',40,2,true);
let shoppingCart = [item1,item2,item3,item4];

function getCheckoutPrice(arr) {
    let checkoutPrice = 0;
    for ( const checkItem of arr) {
        checkoutPrice += checkItem.getFinnalPrice();
    }
    return checkoutPrice;
}
console.log(getCheckoutPrice(shoppingCart));

function getItemsPricedOver100(arr) {
    arr.forEach(element => (element.price >100) ? console.log(element) : "");
}
getItemsPricedOver100(shoppingCart);


function findCheapestItem(arr) {
    let min = 1000;
    let checkId = 0;
    let result = {};
    for (const checkItem of arr) {
        if (checkItem.price < min ) { 
            result =  {name: checkItem.name, price: checkItem.price};
            min = checkItem.price;
        } 
    }
    return result;
}
console.log(findCheapestItem(shoppingCart));

// function findCheapest(arr) {
//     let result = {};
//     return arr.reduce((min,current) => {(current.price < min) ? (result.name = current.name, result.price = current.price),10000 );

// }

//return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//console.log(findCheapest(arr));
