const myLibrary = [];
const bookShelf = document.querySelector(".book-shelf");

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}

function displayLibraryBooks() {
    bookShelf.innerHTML += myLibrary.map((book) => 
        `<div class="book-card">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.isRead}</p>
        </div>`
    ).join("")
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
theFlash = new Book("The Flash", "DC Comics", 20, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theFlash);

displayLibraryBooks();

// Display current year in HTML footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerText = currentYear;