const myLibrary = [];
const bookShelf = document.querySelector(".book-shelf");
const modalContainer = document.querySelector(".modal-container");
console.log(modalContainer);
const btnShowModal = document.getElementById("btn-show-modal");
console.log(btnShowModal);
const btnCancel = document.getElementById("btn-cancel");

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
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

btnShowModal.addEventListener("click", () => {
    alert("test");
    console.log("test");
    modalContainer.showModal();
});

btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainer.close();
});

// Dummy data
theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
theFlash = new Book("The Flash", "DC Comics", 20, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theFlash);

displayLibraryBooks();

// Display current year in HTML footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerText = currentYear;