const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    // this.info = function() {
    // 	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    // };
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}

function displayLibraryBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
theFlash = new Book("The Flash", "DC Comics", 20, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theFlash);

displayLibraryBooks();

// Display current year in HTML footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerText = currentYear;