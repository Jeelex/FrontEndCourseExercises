export default function Todo(details) {
	const { title, description, dueDate, priority } = details;
	this.title = title || "unknown";
	this.description = description || "unknown";
	this.dueDate = dueDate || "unknown";
	this.priority = priority || "unknown";
}

Todo.prototype.addToPage = function () {
	const el = document.createElement("tr");
	const table = document.getElementById("tasks");

	table.setAttribute("class", "mx-auto ");

	el.innerHTML = `
          <td class="text border-0">${this.title}</td>
          <td class="text border-0">${this.description}</td>
          <td class="text border-0">${this.dueDate}</td>
          <td class="text border-0">${this.priority}</td>
          <td class="text border-0"><button type="button" class="edit btn btn-info">Edit</button></td>
          <td class="text border-0"><button type="button" class="delete btn btn-danger">Delete</button></td>
        `;
	table.appendChild(el);

	return "addToPage used!";
};
