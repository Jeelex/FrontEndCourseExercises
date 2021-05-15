function Todo(details) {
	const { title, description, dueDate, priority } = details;
	this.title = title || "unknown";
	this.description = description || "unknown";
	this.dueDate = dueDate || "unknown";
	this.priority = priority || "unknown";
}

Todo.prototype.addToPage = function () {
	const el = document.createElement("tr");
	const table = document.getElementById("tasks");
	el.innerHTML = `
          <td>${this.title}</td>
          <td>${this.description}</td>
          <td>${this.dueDate}</td>
          <td>${this.priority}</td>
          <td><button class="edit">Edit</button></td>
          <td><button class="delete">Delete</button></td>
        `;
	table.appendChild(el);

	// const btnSubmit = document.getElementById("submit-btn");
	// btnSubmit.addEventListener("click", addToPage);

	return "addToPage used!";
};


export default Todo;
