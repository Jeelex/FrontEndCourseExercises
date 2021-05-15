"use strict";

import sayHello from "./say-hello.js";
import Todo from "./todo-constructor.js";
import sayMaria from "./test.js";

sayHello();
sayMaria();

const btnSubmit = document.getElementById("submit-btn");

// console.log("nTodo:", nTodo);
// console.log(nTodo.addToPage());

// const form = document.querySelector("form");
// 	btnSubmit.addEventListener("click", addToPage);

btnSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	const title = document.getElementById("title").value;
	const description = document.getElementById("description").value;
	const dueDate = document.getElementById("dueDate").value;
	const priority = document.getElementById("priority").value;

	// console.log(title, description, dueDate, priority);

	const newTodoCreated = new Todo({
		title: `${title}`,
		description: `${description}`,
		dueDate: `${dueDate}`,
		priority: `${priority}`,
	});
	newTodoCreated.addToPage();
	// console.log(newTodoCreated);
});

// DO WE NEED AN ARRAY to store the todo objects?
// TODO Modules (=> bundler ? Webpack : Parcel )
// TODO Edit btn
// TODO Delete btn

// TODO Users should be able to create new projects and choose which project their todos go into.

// TODO When a user first opens the app, there should be some sort of 'default' project to which all of their todos are put.

// testing
