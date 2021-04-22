
let myLibrary = [];

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
	this.info = function () {
		if (!isRead) {
			return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
		} else {
			return `${this.title} by ${this.author}, ${this.pages} pages, has been read`;
		}
	};
}

const myBook = new Book("Harry Potter", "J. K. Rowling", 495, true);

console.log(myBook.info());


function addBookToLibrary() {
  // do stuff here
}