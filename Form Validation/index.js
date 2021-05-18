"use strict";

const form = document.querySelector("#form");
const fname = document.querySelector("#fname");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
// const nameValidationText = document.querySelector("#name-validation-message");
// const surnameValidationText = document.querySelector("#surname-validation-message");
// const emailValidationText = document.querySelector("#email-validation-message");
const btn = document.querySelector("#btn");

form.addEventListener("input", (e) => {
	e.preventDefault();
	const validationText = document.querySelector("#validation-message");
	const inputValue = e.target.id;
	console.log(inputValue);
	// console.log(e.target.placeholder);
	console.log(e.target.id);
	// displayMessage(e.target.id, validationText);
	console.log(inputValue.checkValidity());
});

function displayMessage(input, validationText) {
	let txt = "";
	if (!input.checkValidity()) {
		txt = input.validationMessage;
		validationText.innerHTML = `${input}: ${txt}`;
		validationText.classList.add("validation-text-wrong");
	}
	// if (!fname.checkValidity()) {
	// 	txt = fname.validationMessage;
	// 	nameValidationText.innerHTML = `Name: ${txt}`;
	// 	nameValidationText.classList.add("validation-text-wrong");
	// }

	// if (!surname.checkValidity()) {
	// 	txt = surname.validationMessage;
	// 	surnameValidationText.innerHTML = `Surname: ${txt}`;
	// 	surnnameValidationText.classList.add("validation-text-wrong");
	// }

	// if (!email.checkValidity()) {
	// 	txt = email.validationMessage;
	// 	emailValidationText.innerHTML = `Email: ${txt}`;
	// 	emailValidationText.classList.add("validation-text-wrong");
	// }
}

// Think about how you would set up the different form elements and their accompanying validators.
//TODO What objects and functions will you need?
// A few minutes of thought can save you from wasting an hour of coding.
// The best thing you can do is whiteboard the entire solution before even touching the computer.

//TODO Add the JavaScript code that checks validation as the user progresses through the form. When a user leaves a form field it should automatically validate that field.

//TODO Test out all possible cases.
