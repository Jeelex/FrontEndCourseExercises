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

const newBook1 = new Book("Harry Potter", "J. K. Rowling", 395, true);
const newBook2 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 595, false);
const newBook3 = new Book("The Count of Monte Cristo", "Alexandre Dumas", 385, false);
const newBook4 = new Book("Don Quixote", "	Miguel de Cervantes", 483, true);

console.log(newBook1.info());
console.log(newBook2.info());
console.log(newBook3.info());
console.log(newBook4.info());


let myLibrary = [];

function addBookToLibrary(selectedBook) {
  //TODO function must take user’s input and store the new book objects into an array.
  
  return myLibrary.push(selectedBook);
}
addBookToLibrary(newBook1);
addBookToLibrary(newBook2);

  console.log(myLibrary);