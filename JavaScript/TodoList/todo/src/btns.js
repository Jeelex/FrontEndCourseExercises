import Todo from "./todo-constructor.js";

export function addBtn(){
  const btnSubmit = document.getElementById("submit-btn");

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    const newTodoCreated = new Todo({
      title: `${title}`,
      description: `${description}`,
      dueDate: `${dueDate}`,
      priority: `${priority}`,
    });
    newTodoCreated.addToPage();
  });
  
  return "btnSubmit clicked!"
}

// TODO Edit btn
// TODO Delete btn
export const editAndDeleteBtns = () => {
	const tableBody = document.querySelector("#tasks");
	tableBody.addEventListener("click", (e) => {
		if (e.target.classList.contains("edit")) {
			editItem();
		}
		if (e.target.classList.contains("delete")) {
			removeItem();
		}
		function editItem() {
			console.log("edit clicked!");
		}
		function removeItem() {
			console.log("delete clicked!");
			e.target.closest("tr").remove();
		}
	});
};
