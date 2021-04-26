"use strict";

function $(selector) {
	return document.querySelector(selector);
}

const form = $("#form");
const bookTitle = $("#title");
const bookAuthor = $("#author");
const bookPages = $("#page-no");
const bookStatus = $("#checkbox-add-new-book");
const btnNewBook = $("#btn-new-book");
const btnAddBook = $("#btn-add-book");
const tableBody = $("#table-library > tbody");
const table = $("#table-library");
// const tableRows = document.getElementsByTagName("tr");
// const btnsRemoveBook = document.querySelectorAll(".btn-remove-book");
const btnsRemoveBook = document.getElementsByClassName("btn-remove-book");

// console.log(btnsRemoveBook);

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
myLibrary.push(newBook1);

// adding new book to the Library array
function addBookToLibrary() {
	const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
	myLibrary.push(newBook);
	// render(myLibrary);
}

// displaying form (modal)
btnNewBook.addEventListener("click", () => {
	form.classList.remove("display-none");
	form.classList.add("display-block");
});

// displaying book to list
form.addEventListener("submit", (e) => {
	e.preventDefault();
	addBookToLibrary();
	render(myLibrary);
	clearForm();
});

// adding new book to the Dom
function render(array) {
	tableBody.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		let row = `<tr data-book-title="${array[i].title}">
				<td>${array[i].title}</td>
				<td>${array[i].author}</td>
				<td>${array[i].pages}</td>
				<td>${array[i].hasBeenRead ? "Yes" : "No"} </td>
				<td><button class="btn-remove-book">REMOVE</button></td>
			</tr>`;

		tableBody.insertAdjacentHTML("beforeend", row);
	}
}

// clearing form
function clearForm() {
	bookTitle.value = "";
	bookAuthor.value = "";
	bookPages.value = "";
	bookStatus.checked = "";
}

// removing book
tableBody.addEventListener("click", (e) => {
	if (!e.target.classList.contains("btn-remove-book")) {
		return;
	}
	e.target.closest("tr").remove();

	let book = e.target.closest("tr").dataset.bookTitle;
	removeBookFromLibrary(myLibrary, book);
});

function removeBookFromLibrary(libraryArray, bookToRemove) {
	if (libraryArray.length === 0) {
		return;
	}

	for (let book of libraryArray) {
		if (book.title === bookToRemove) {
			let bookToRemoveIndex = libraryArray.indexOf(book);
			libraryArray.splice(bookToRemoveIndex, 1);
		}
	}
}

// || libraryArray === null

// for (const bookItem of myLibrary) {
// 	for (const book in Object) {
// 		// if (book) {
// 			console.log(book);
// 			// const element = object[book];

// 		// }
// 	}
// }

// let value = el.getAttribute("data-state");

/* <button data-id="435432343">♡</button> */
