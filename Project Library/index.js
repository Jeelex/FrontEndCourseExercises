"use strict";

const form = $("#form");
const bookTitle = $("#title");
const bookAuthor = $("#author");
const bookPages = $("#page-no");
const bookStatus = $("#checkbox-add-new-book");
const btnNewBook = $("#btn-new-book");
const btnAddBook = $("#btn-add-book");
const tableBody = $("#table-library > tbody");
const btnsRemoveBook = document.getElementsByClassName("btn-remove-book");
// const table = $("#table-library");
// const btnsRemoveBook = document.querySelectorAll(".btn-remove-book");

// helper function for document.querySelector()
function $(selector) {
	return document.querySelector(selector);
}

function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
	this.toggleStatus = function () {
		this.status = !this.status;
	};
	this.info = function () {
		if (!status) {
			return `${this.title} by ${this.author}, ${this.pages} pages, has not been read yet`;
		} else {
			return `${this.title} by ${this.author}, ${this.pages} pages, has been read`;
		}
	};
}
const newBook1 = new Book("Harry Potter", "J. K. Rowling", 395, true);
let myLibrary = [];
myLibrary.push(newBook1);

// adding new book to the Library array
function addBookToLibrary(array) {
	const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
	array.push(newBook);
}

// displaying form (modal)
btnNewBook.addEventListener("click", () => {
	form.classList.remove("display-none");
	form.classList.add("display-block");
});

// displaying book to list
form.addEventListener("submit", (e) => {
	e.preventDefault();
	addBookToLibrary(myLibrary);
	render(myLibrary, tableBody);
	clearForm();
});

// adding new book to the Dom
function render(array, parentDiv) {
	parentDiv.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		let row = `<tr data-book-title="${array[i].title}">
				<td>${array[i].title}</td>
				<td>${array[i].author}</td>
				<td>${array[i].pages}</td>
				<td>
					<button class="${array[i].status ? "btn-status btn-status-read" : "btn-status btn-status-unread"}">
						${array[i].status ? "Read" : "Unread"}
					</button>
				</td>
				<td><button class="btn-remove-book">REMOVE</button></td>
			</tr>`;

		parentDiv.insertAdjacentHTML("beforeend", row);
	}
}

// clearing form
function clearForm() {
	bookTitle.value = "";
	bookAuthor.value = "";
	bookPages.value = "";
	bookStatus.checked = "";
}

// removing book from Library and from the DOM
tableBody.addEventListener("click", (e) => {
	if (!e.target.classList.contains("btn-remove-book")) {
		return;
	}
	e.target.closest("tr").remove();

	let currentBookTitle = e.target.closest("tr").dataset.bookTitle;
	removeBookFromLibrary(myLibrary, currentBookTitle);
});

function removeBookFromLibrary(libraryArray, bookTitle) {
	if (libraryArray.length === 0) {
		return;
	}

	for (let book of libraryArray) {
		if (book.title === bookTitle) {
			let bookToRemoveIndex = libraryArray.indexOf(book);
			libraryArray.splice(bookToRemoveIndex, 1);
		}
	}
}

//TODO Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// status

// myLibrary[0].status = false
tableBody.addEventListener("click", (e) => {
	if (!e.target.classList.contains("btn-status")) {
		return;
	}
	// e.target.closest("tr").
	let currentBtn = e.target;
	console.log(currentBtn);
	let currentBookTitle = e.target.closest("tr").dataset.bookTitle;
	toggleBookStatus(myLibrary, currentBookTitle, currentBtn);
});

function toggleBookStatus(libraryArray, bookTitle, currentElement) {
	for (let book of libraryArray) {
		if (book.title === bookTitle) {
			console.log("book title: " + book.title);
			console.log("book status BEFORE: " + book.status);
			book.toggleStatus();
			
			currentElement.innerText = book.status ? "Read" : "Unread";
			currentElement.classList.remove(`${book.status ? "btn-status-unread" : "btn-status-read"}`);
			currentElement.classList.add(`${book.status ? "btn-status-read" : "btn-status-unread"}`);
			console.log("book status AFTER: " + book.status);
		}
	}
}
