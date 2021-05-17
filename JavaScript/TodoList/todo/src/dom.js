import Todo from "./todo-constructor.js";
import { addTodo, enableProjectBtns } from "./btns.js";
import { saveProjectToLocalStorage, reloadLocalStorage } from "./local-storage.js";
import { addProjectToArray, removeProjectFromArray } from "./arrays.js";
import { supermarket, myproject } from "./index.js";

export function changeProjectTitle(projectName) {
	const projectTitle = document.querySelector("#project-title");
	projectTitle.innerText = projectName;
}

// rendering new todo from project array to the Dom
export function render(array, parentDiv) {
	parentDiv.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		let priorityClass;
		switch(array[i].priority){
		case "High":
			priorityClass = "btn-outline-danger";
			break;
		case "Medium":
			priorityClass = "btn-outline-warning";
			break;
		case "Low":
			priorityClass = "btn-outline-dark";
		}

		let row = `
		<tr data-todo-title="${array[i].title}" data-todo-project="${array[i].project}">
    <td class="px-2">${array[i].title}</td>
    <td class="px-2">${array[i].description}</td>
    <td class="px-2">${array[i].dueDate}</td>
    <td class="px-2 text-center ${priorityClass}">${array[i].priority}</td>
    <td><button class="mx-1 btn btn-dark edit">Edit</button></td>
    <td><button class="mx-1 btn btn-danger delete">Delete</button></td>
    </tr>
		`;

		parentDiv.insertAdjacentHTML("beforeend", row);
	}
}