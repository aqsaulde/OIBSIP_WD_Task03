const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("#taskList");

form.addEventListener("submit", addTask);

//Adding task function
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskInput.value}
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  const deleteBtn = li.querySelector(".delete");
  deleteBtn.addEventListener("click", deleteTask);

  const completeBtn = li.querySelector(".complete");
  completeBtn.addEventListener("click", markAsComplete);
}

//Delete Button Function
function deleteTask(e) {
  const li = e.target.parentElement;
  taskList.removeChild(li);
}

// Complete Button Function
function markAsComplete(e) {
  const li = e.target.parentElement;
  li.classList.toggle("completed");
}
