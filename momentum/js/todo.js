const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input")
// const toDoInput = toDoForm.querySelector("input");

function handleTodoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleTodoSubmit);

