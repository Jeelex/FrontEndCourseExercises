"use strict";

const form = document.querySelector("#form");
const fname = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const validationField = document.querySelector("#validation-message");
const btn = document.querySelector("#btn");

fname.addEventListener("input", (e) => {
	e.preventDefault();
	displayMessage();
});

// ||
// 			!surname.checkValidity() ||
// 		  !email.checkValidity()

function displayMessage() {
	let txt = "";
	if (!fname.validity.rangeUnderflow) {
		console.log("too small");
		txt = fname.validationMessage;
		// validationField.innerHTML = "Value too small";
	} else {
		console.log("big enough");
		txt = fname.validationMessage;
	}
	validationField.innerHTML = txt;
}

// function myFunction() {
//   var inpObj = document.getElementById("id1");
//   if (!inpObj.checkValidity()) {
//     document.getElementById("demo").innerHTML = inpObj.validationMessage;
//   } else {
//     document.getElementById("demo").innerHTML = "Input OK";
//   }
// }

// Think about how you would set up the different form elements and their accompanying validators.
//TODO What objects and functions will you need?
// A few minutes of thought can save you from wasting an hour of coding.
// The best thing you can do is whiteboard the entire solution before even touching the computer.

//TODO Add the JavaScript code that checks validation as the user progresses through the form. When a user leaves a form field it should automatically validate that field.

//TODO Test out all possible cases.
