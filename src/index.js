document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      form.reset();
    }
  });
});
