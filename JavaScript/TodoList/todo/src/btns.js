import Todo from "./todo-constructor.js";
import { addProjectToArray } from "./arrays.js";
import { changeProjectTitle, render } from "./dom.js";
import { saveProjectToLocalStorage } from "./local-storage.js";
import utils from "./utils.js";

const btnSubmit = document.getElementById("submit-btn");

btnSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	createNewTodo(addTodo);
});

export function addTodo(newTodoCreated) {
	const table = document.getElementById("tasks");
	
	if (newTodoCreated.project.toLowerCase() === "supermarket") {
		addProjectToArray(newTodoCreated, utils.supermarket);
		render(utils.supermarket, table);
		changeProjectTitle("Supermarket");
		saveProjectToLocalStorage("Supermarket", utils.supermarket);
	} else {
		addProjectToArray(newTodoCreated, utils.myproject);
		render(utils.myproject, table);
		changeProjectTitle("My Project");
		saveProjectToLocalStorage("My Project", utils.myproject);
	}
}

function createNewTodo(callback) {
	const project = document.getElementById("project").value;
	const title = document.getElementById("title").value;
	const description = document.getElementById("description").value;
	const dueDate = document.getElementById("dueDate").value;
	const priority = document.getElementById("priority").value;

	return callback(
		new Todo({
			project: `${project}`,
			title: `${title}`,
			description: `${description}`,
			dueDate: `${dueDate}`,
			priority: `${priority}`,
		})
	);
}

// ProjectBtns event listeners
export function enableProjectBtns() {
	const myProjectBtns = document.querySelector(".project-btns");

	myProjectBtns.addEventListener("click", (e) => {
		const table = document.getElementById("tasks");

		if (e.target.textContent.toLowerCase().replace(/\s/g, "") === "supermarket") {
			render(utils.supermarket, table);
			changeProjectTitle("Supermarket");
		} else {
			render(utils.myproject, table);
			changeProjectTitle("My Project");
		}
	});
}
