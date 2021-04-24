const form = document.getElementById("form");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("page-no");
const bookStatus = document.getElementById("checkbox-add-new-book");
const btnAddBook = document.getElementById("btn-add-book");
const tableLibrary = document.getElementById("table-library");

// console.log(checkboxAddNewBook);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(e.target);
	// console.log(bookTitle.value);
	// console.log(bookAuthor.value);
	// console.log(bookPages.value);
	// console.log( bookStatus.checked);
	addBookToLibrary();
	render();
});

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
// const newBook2 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 595, false);
// const newBook3 = new Book("The Count of Monte Cristo", "Alexandre Dumas", 385, false);
// const newBook4 = new Book("Don Quixote", "	Miguel de Cervantes", 483, true);

// console.log(newBook1.info());
// console.log(newBook2.info());
// console.log(newBook3.info());
// console.log(newBook4.info());

let myLibrary = [];

function addBookToLibrary() {
	const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);

	myLibrary.push(newBook);
	return;
}
// addBookToLibrary(newBook);
// addBookToLibrary(newBook2);

// console.log(myLibrary);


function render() {
	// myLibrary.forEach(book => {
	let read = "No";

	if (bookStatus.checked){
			read = "Yes" ;
		}


		const html = ` 
			<tr>
			<td>${bookTitle.value}</td>
			<td>${bookAuthor.value}</td>
			<td>${bookPages.value}</td>
			<td>${read}</td>
			</tr>
		`

		tableLibrary.insertAdjacentHTML("beforeend", html);
		
	// })


}