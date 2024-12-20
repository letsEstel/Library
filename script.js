const myLibrary = [];

//Book generate function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () =>
    this.title +
    (this.author == "" ? "" : " by " + this.author) +
    ", " +
    (this.pages == "" ? "" : this.pages + " pages, ") +
    (this.read ? "read." : "not read yet.");
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//Generate book element and show them
const div = document.querySelector("div");
const display = () => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  myLibrary.forEach((book, index) => {
    const bookEle = document.createElement("div");
    bookEle.className = "bookEle";
    const booktext = document.createElement("div");
    booktext.textContent = book.info();
    booktext.className = "bookText";
    booktext.setAttribute("data-full-title", `${book.info()}`);
    div.appendChild(bookEle);
    bookEle.appendChild(booktext);
    const deleBtn = document.createElement("button");
    deleBtn.textContent = "Delete";
    deleBtn.className = "deleteButton";
    deleBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      display();
    });
    bookEle.appendChild(deleBtn);
    const readBtn = document.createElement("button");
    readBtn.textContent = "Read/Unread";
    readBtn.className = "readButton";
    readBtn.addEventListener("click", () => {
      book.read = !book.read;
      display();
    });
    bookEle.appendChild(readBtn);
  });
};

//A simple example
const book1 = new Book("I Ching", "KingWen", 200, false);
const book2 = new Book("Tao Te Ching", "Laozi", 197, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
display();

//How to add new books
const addNewBook = document.querySelector("#addNewBook");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("#closeButton");
addNewBook.addEventListener("click", () => {
  dialog.showModal();
});
closeButton.addEventListener("click", () => {
  dialog.close();
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Get values from the form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("number").value;
  const read = document.querySelector('input[name="read"]').checked; // Get the checkbox state
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  display();
  form.reset();
});
