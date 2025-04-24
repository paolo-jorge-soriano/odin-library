const myLibrary = [];
const bookShelf = document.querySelector(".book-shelf");
const modalContainer = document.querySelector(".modal-container");
const btnShowModal = document.getElementById("btn-show-modal");
const btnSubmit = document.getElementById("btn-submit");
const btnCancel = document.getElementById("btn-cancel");

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function getBookInfo() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const isRead = document.getElementById("isRead");

    let newBook = new Book(title.value, author.value, pages.value, isRead.checked);

    addBookToLibrary(newBook);

    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.checked = false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibraryBooks() {
    bookShelf.innerHTML = myLibrary.map((book) => 
        `<div class="book-card">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.isRead}</p>
        </div>`
    ).join("")
}

btnShowModal.addEventListener("click", () => {
    modalContainer.showModal();
});

btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainer.close();
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    getBookInfo();
    displayLibraryBooks();
    modalContainer.close();
});

// Dummy data
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let theFlash = new Book("The Flash", "DC Comics", 20, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theFlash);

displayLibraryBooks();

// Display current year in HTML footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerText = currentYear;