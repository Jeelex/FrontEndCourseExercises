// import Todo from "./todo-constructor.js";

// const addBtn = () => {
function addBtn(){
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
}

export default addBtn;