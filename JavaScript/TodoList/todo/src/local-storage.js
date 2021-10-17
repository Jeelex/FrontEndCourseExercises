import Todo from "./todo-constructor.js";
import { addProjectToArray } from "./arrays.js";
import { changeProjectTitle, render } from "./dom.js";
import utils from "./utils.js";

// saving library to localStorage
export function saveProjectToLocalStorage(projectName, array) {
	return localStorage.setItem(projectName, JSON.stringify(array));
}

// reload localStorage
export function reloadLocalStorage() {
	const table = document.getElementById("tasks");

	if (localStorage.length === 0 || (localStorage["My Project"] === "[]" && localStorage["Supermarket"] === "[]")) {
		const defaultTodo = new Todo({
			project: "My Project",
			title: "Buy Mouse Pad",
			description: "Logitech",
			dueDate: "2021-08-10",
			priority: "Medium",
		});
		addProjectToArray(defaultTodo, utils.myproject);
		render(utils.myproject, table);
		changeProjectTitle(defaultTodo.project);
		saveProjectToLocalStorage("My Project", utils.myproject);
	} else {
		let myProjectDestringified = JSON.parse(localStorage.getItem("My Project"));
		let supermarketDestringified = JSON.parse(localStorage.getItem("Supermarket"));

		const myArraysDistringified = [myProjectDestringified, supermarketDestringified];

		myArraysDistringified.forEach((array) => {
			array.forEach((element) => {
				const previousTodos = new Todo({
					project: element.project,
					title: element.title,
					description: element.description,
					dueDate: element.dueDate,
					priority: element.priority,
				});

				if (previousTodos.project === "My Project") {
					addProjectToArray(previousTodos, utils.myproject);
					render(utils.myproject, table);
					changeProjectTitle(element.project);
				} else {
					addProjectToArray(previousTodos, utils.supermarket);
				}
			});
		});
	}
}
