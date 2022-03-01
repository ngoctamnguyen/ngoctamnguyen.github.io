"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254},
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264},
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245}
];

function findTitles() {
    let titles = [];
    for (let book of library) {
       titles.push(book.title);
    }
    return titles.sort();
}

function addBook(newTitle, newAuthor, newlibraryID){
    return {
        title: newTitle,
        author: newAuthor,
        libraryID: newlibraryID
    };
}
let newbook = addBook("javascript", "Tam",1002)
library.push(newbook);
console.log(findTitles());