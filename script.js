const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () =>
    this.title +
    " by " +
    this.author +
    ", " +
    this.pages +
    " pages, " +
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
    bookEle.textContent = book.info();
    div.appendChild(bookEle);
    const deleBtn = document.createElement("button");
    deleBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      display();
    });
    bookEle.appendChild(deleBtn);
  });
};

const book1 = new Book("King of rings", "bok", 200, false);

const book2 = new Book("King of rins", "bo00k", 200, false);
addBookToLibrary(book1);
display();
