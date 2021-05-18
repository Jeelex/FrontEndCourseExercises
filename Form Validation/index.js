"use strict";

const form = document.querySelector("#form");
const fname = document.querySelector("#fname");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const validationText = document.querySelector("#validation-message");
const btn = document.querySelector("#btn");

form.addEventListener("input", (e) => {
	e.preventDefault();
	let txt = "";
	validationText.innerHTML = "";

	if (form.checkValidity()) {
		validationText.innerHTML = "Looks Good!";
	}

	if (e.target.id === "fname" && !fname.checkValidity()) {
		txt = fname.validationMessage;
		validationText.innerHTML = `Name: ${txt}`;
	}

	if (e.target.id === "surname" && !surname.checkValidity()) {
		txt = surname.validationMessage;
		validationText.innerHTML = `Surname: ${txt}`;
	}

	if (e.target.id === "email" && !email.checkValidity()) {
		txt = email.validationMessage;
		validationText.innerHTML = `Email: ${txt}`;
	}
});