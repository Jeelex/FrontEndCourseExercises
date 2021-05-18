import { saveProjectToLocalStorage } from "./local-storage.js";
import utils from "./utils.js";

// adding new projects to the projects array
export function addProjectToArray(todo, array) {
	array.push(todo);
}

// removing project from Array and from the DOM
export function removeProjectFromArray() {
	const table = document.getElementById("tasks");

	table.addEventListener("click", (e) => {
		if (!e.target.classList.contains("delete")) {
			return;
		}
		e.target.closest("tr").remove();

		let currentTodoProject = e.target.closest("tr").dataset.todoProject;
		let currentTodoTitle = e.target.closest("tr").dataset.todoTitle;

		if (currentTodoProject === "Supermarket") {
			removeTodoFromProject(utils.supermarket, currentTodoProject, currentTodoTitle);
			saveProjectToLocalStorage("Supermarket", utils.supermarket);
		} else {
			removeTodoFromProject(utils.myproject, currentTodoProject, currentTodoTitle);
			saveProjectToLocalStorage("My Project", utils.myproject);
		}
	});
}

function removeTodoFromProject(projectName, TodoProject, TodoTitle) {
	if (projectName.length === 0) {
		return;
	}
	for (let todo of projectName) {
		if (todo.project === TodoProject && todo.title === TodoTitle) {
			let todoToRemoveIndex = projectName.indexOf(todo);
			projectName.splice(todoToRemoveIndex, 1);
		}
	}
}
