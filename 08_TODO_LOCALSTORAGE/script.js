document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const progressText = document.getElementById("progress-text");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));
  updateProgress();

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
    updateProgress();
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    // Checkbox create karo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    // Task text span
    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Checkbox change event - toggle complete
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      if (task.completed) {
        span.classList.add("completed");
      } else {
        span.classList.remove("completed");
      }
      saveTasks();
      updateProgress();
    });

    // Delete button event
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
      updateProgress();
    });

    // Clear existing content & append new elements
    li.innerHTML = "";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    progressText.textContent = `You have completed ${completed} out of ${total} tasks.`;

    // Optional: Jab sab complete ho jaye to alag message dikhao
    if (total > 0 && completed === total) {
      progressText.textContent = "🎉 Great job! All tasks completed.";
    }
  }
});
