// script.js
const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText) {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear the input field

  taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") { // Check if a button was clicked
    const listItem = event.target.parentNode; // Get the parent <li>
    taskList.removeChild(listItem); // Remove the task from the list
  }
});
