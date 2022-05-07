"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254},
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264},
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245}
];

function findTitles() {
    let titles = [];
    for (let book of library) {
        for (let key in book) {
            if (key === "title") {
                titles.push(book[key]);
            }
        }
    }
    return titles.sort();
}

function addBook(newTitle, newAuthor, newlibraryID){
    // return {
    //     title: newTitle,
    //     author: newAuthor,
    //     libraryID: newlibraryID
    // };
    const myBook ={
        title: newTitle,
        author: newAuthor,
        libraryID: newlibraryID
    };
    library.push(myBook);
}
//let newbook = addBook("JScript", "Tam",1002)
library.push(addBook("JScripts", "nnTam",1002));
console.log(findTitles());