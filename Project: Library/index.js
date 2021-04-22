let myLibrary = [];

function Book(title, author, pages, hasBeenRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;
	this.info = function () {
		if (!hasBeenRead) {
			return `${this.title} by ${this.author}, ${this.pages} pages, has not been read yet`;
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
