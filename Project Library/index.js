"use strict";

let myLibrary = [];
const form = document.querySelector("#form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");
const btnNewBook = document.querySelector("#btn-new-book");
const btnAddBook = document.querySelector("#btn-add-book");
const tableBody = document.querySelector("#table-library > tbody");

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


// adding new book to the Library array
function addBookToLibrary(title, author, pages, status, array) {
	const newBook = new Book(title, author, pages, status);
	array.push(newBook);
}

// displaying form (modal)
btnNewBook.addEventListener("click", () => {
	// form.classList.remove("hide");
	displayElement(form);
	form.classList.add("display-block");
	hideElement(btnNewBook);
});




// adding book in DOM list
const getFormInfo = (e) => {
	e.preventDefault();
	const targetTitle = e.target.title.value;
	const targetAuthor = e.target.author.value;
	const targetPages = e.target.pages.value;
	const targetStatus = e.target.status.checked;

	addBookToLibrary(targetTitle, targetAuthor, targetPages, targetStatus, myLibrary);
	render(myLibrary, tableBody);
	saveLibraryToLocalStorage("myLibrary", myLibrary);
	clearForm();
	hideElement(form);
	displayElement(btnNewBook);
};
form.addEventListener("submit", getFormInfo);


// rendering new book from myLibrary array to the Dom
function render(array, parentDiv) {
	parentDiv.innerHTML = "";
	for (let i = 0; i < array.length; i++) {
		let row = `<tr data-book-title="${array[i].title}">
				<td>${array[i].title}</td>
				<td>${array[i].author}</td>
				<td>${array[i].pages}</td>
				<td>
					<button class="${array[i].status ? "btn-status btn-success" : "btn-status btn-warning"} btn">
						${array[i].status ? "Read!" : "Unread"}
					</button>
				</td>
				<td><button class="btn btn-danger btn-remove-book">REMOVE</button></td>
			</tr>`;

		parentDiv.insertAdjacentHTML("beforeend", row);
	}
}

// hiding element from the page
function hideElement(element){
	element.classList.add("hide");
}
hideElement(form);

// displaying element to the page
function displayElement(element){
	element.classList.remove("hide");
	form.classList.add("display-block");
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
	saveLibraryToLocalStorage("myLibrary", myLibrary);
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
			currentElement.classList.remove(`${book.status ? "btn-warning" : "btn-success"}`);
			currentElement.classList.add(`${book.status ? "btn-success" : "btn-warning"}`);
		}
	}
}

// saving library to localStorage
function saveLibraryToLocalStorage(arrayName, array) {
	localStorage.setItem(arrayName, JSON.stringify(array));
}

// reload localStorage
function reloadLocalStorage() {
	if (localStorage.length === 0 || localStorage.myLibrary === "[]") {
		addBookToLibrary("Harry Potter", "J. K. Rowling", 395, true, myLibrary);
	} else {
		let arrayDestringified = JSON.parse(localStorage.getItem("myLibrary"));		
		arrayDestringified.forEach((element) => {
			addBookToLibrary(element.title, element.author, element.pages, element.status, myLibrary);
		});
	}
}
reloadLocalStorage();
render(myLibrary, tableBody);