"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {findTitles }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * @param {object} oject library 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for (let book of library) {
       titles.push(book.title);
    }

    return titles.sort();
}

/**
 * @param {object} oject library 
 * @return {object} array holding all authors as elements
 */
 function findAuthors() {
        let authors = [];
        for (let book of library) {
            authors.push(book.author);
         }
        return authors.sort();
}

/**
 * @param {object} oject library 
 * @return {object} array holding all libraryID as elements
 */
 function findIDs() {
    let  IDs = [];
    for (let book of library) {
        IDs.push(book.libraryID);
     }

    return IDs.sort();
}


/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
//function addBook1(){
    //const title = document.getElementById("title"); //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
    //const title = document.getElementById("author"); //retrieves the book title from the title textbox
    

//}

function addBook(newTitle, newAuthor, newlibraryID){
    return {
        title: newTitle,
        author: newAuthor,
        libraryID: newlibraryID
    };
}