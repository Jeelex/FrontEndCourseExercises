"use strict";

const form = $("#form");
const bookTitle = $("#title");
// const bookTitleValue = bookTitle.value;
const bookAuthor = $("#author");
const bookPages = $("#pages");
const bookStatus = $("#status");
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

// Book Object constructor
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
// const newBook1 = new Book("Harry Potter", "J. K. Rowling", 395, true);
let myLibrary = [];
// myLibrary.push(newBook1);

// adding new book to the Library array
function addBookToLibrary(title, author, pages, status, array) {
	const newBook = new Book(title, author, pages, status);
	array.push(newBook);
}

// displaying form (modal)
btnNewBook.addEventListener("click", () => {
	form.classList.remove("display-none");
	form.classList.add("display-block");
});

// adding book in DOM list
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const targetTitle = e.target.title.value;
	const targetAuthor = e.target.author.value;
	const targetPages = e.target.pages.value;
	const targetStatus = e.target.status.checked;

	addBookToLibrary(targetTitle, targetAuthor, targetPages, targetStatus, myLibrary);
	render(myLibrary, tableBody);
	saveLibraryToLocalStorage("myLibrary", myLibrary);
	clearForm();
});

// rendering new book from myLibrary array to the Dom
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

// Changing the book status in the DOM and inside myLibrary
tableBody.addEventListener("click", (e) => {
	if (!e.target.classList.contains("btn-status")) {
		return;
	}
	let currentBtn = e.target;
	let currentBookTitle = e.target.closest("tr").dataset.bookTitle;
	toggleBookStatus(myLibrary, currentBookTitle, currentBtn);
	saveLibraryToLocalStorage("myLibrary", myLibrary);
});

function toggleBookStatus(libraryArray, bookTitle, currentElement) {
	for (let book of libraryArray) {
		if (book.title === bookTitle) {
			book.toggleStatus();
			currentElement.innerText = book.status ? "Read" : "Unread";
			currentElement.classList.remove(`${book.status ? "btn-status-unread" : "btn-status-read"}`);
			currentElement.classList.add(`${book.status ? "btn-status-read" : "btn-status-unread"}`);
		}
	}
}

// saving library to localStorage
function saveLibraryToLocalStorage(arrayName, array) {
	localStorage.setItem(arrayName, JSON.stringify(array));
}

// TODO and another function that looks for that array in localStorage when your app is first loaded. (make sure your app doesn’t crash if the array isn’t there!)
function reloadLocalStorage() {
	if (localStorage.length === 0) {
		const newBook1 = new Book("Harry Potter", "J. K. Rowling", 395, true);
		myLibrary.push(newBook1);
	} else {
		let arrayDestringified = JSON.parse(localStorage.getItem("myLibrary"));
		console.log("arrayDestringified", arrayDestringified);
		
		arrayDestringified.forEach((element) => {
			addBookToLibrary(element.title, element.author, element.pages, element.status, myLibrary);
		});
	}

}
reloadLocalStorage();
// reloadLocalStorage("myLibrary");

// addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus, myLibrary);

console.log("myLibrary", myLibrary);

render(myLibrary, tableBody);

//  Storage.getItem()
//  Storage.removeItem()
//  Storage.clear()
//  Storage.key()
//  Storage.setItem(key, value)

//  localStorage.setItem("objectName", objectStringified)

// JSON.stringify()
// JSON.parse()
