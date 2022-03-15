const form = document.getElementById("todo-form");
const input = document.getElementById("new-task");
const listEl = document.getElementById("task-container");
const completedTasks = document.getElementById("completed-task-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;
  const taskEl = document.createElement("div");
  const taskContent = document.createTextNode(task);
  const taskInput = document.createElement("input");
  const newLi = document.createElement("li");

  if (task === "") {
    alert("Please enter task");
    return;
  } else {
    taskEl.classList.add("task");
    newLi.classList.add("task-item");
    taskEl.appendChild(newLi);
    newLi.appendChild(taskInput);
    taskInput.setAttribute("type", "checkbox");
    taskInput.setAttribute("id", "checkbox");
    newLi.appendChild(taskContent);

    listEl.appendChild(taskEl);
  }

  taskInput.addEventListener("change", (e) => {
    const completedEl = document.createElement("div");
    completedEl.classList.add("completed-wrapper");

    completedTasks.appendChild(completedEl);
    completedEl.appendChild(newLi);
    newLi.style.textDecoration = "line-through";
  });
});
