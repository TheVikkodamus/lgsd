if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

const taskInput = document.getElementById("new-task");
const reminderInput = document.getElementById("reminder-time");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add a new task with a reminder
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value;
  const reminderTime = new Date(reminderInput.value); // Get the reminder time

  if (taskText) {
    const newTask = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Completed";
    deleteButton.className = "delete-btn";

    // Append task and delete button
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear input fields
    taskInput.value = "";
    reminderInput.value = "";

    // If a reminder time is set, schedule a notification
    if (reminderTime && reminderTime > new Date()) {
      const timeDifference = reminderTime.getTime() - new Date().getTime();

      setTimeout(() => {
        alert(`Reminder: ${taskText}`);
      }, timeDifference);
    }
  }
});

// Delete a task
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const listItem = event.target.parentNode; // Get the parent <li>
    taskList.removeChild(listItem); // Remove the task from the list
  }
});
