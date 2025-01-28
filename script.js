const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add a new task to the list
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText) {
    const newTask = document.createElement("li");

    // Create a span for the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Completed";
    deleteButton.className = "delete-btn";

    // Append the task text and delete button to the task
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
  }
});

// Delete a task when its delete button is clicked
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const listItem = event.target.parentNode; // Get the parent <li>
    taskList.removeChild(listItem); // Remove the task from the list
  }
});
