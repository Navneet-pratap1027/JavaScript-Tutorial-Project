// Jab pura HTML load ho jaye tabhi ye code chale
document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Local storage se tasks le rahe hain ya empty array se start kar rahe hain
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Har saved task ko screen par dikhate hain
  tasks.forEach((task) => renderTask(task));

  // Add button pe click karne pe naya task create hota hai
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim(); // User ke input se whitespace hata rahe hain
    if (taskText === "") return; // Agar input khaali hai to kuch na kare

    // Naya task object banate hain
    const newTask = {
      id: Date.now(), // Unique ID banane ke liye current time ka use
      text: taskText,
      completed: false,
    };

    tasks.push(newTask); 
    saveTasks();          // Local storage me save kar rahe hain
    renderTask(newTask);  // Task ko UI me dikhate hain
    todoInput.value = ""; // Input box ko clear kar dete hain
    console.log(tasks);   // Debug ke liye console me show karte hain
  });

  // Ek function jo task ko list me dikhata hai
  function renderTask(task) {
    const li = document.createElement("li"); 
    li.setAttribute("data-id", task.id);     // Task ID ko attribute me rakhte hain

    if (task.completed) li.classList.add("completed"); // Agar task complete hai to class add karein

    // List item ke andar task text aur delete button dikhate hain
    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;

    // Jab list item pe click ho to task complete/incomplete toggle ho jaye
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return; // Agar button pe click hua to ignore karein
      task.completed = !task.completed; // Status toggle karein
      li.classList.toggle("completed"); // Class update karein
      saveTasks(); 
    });

    // Delete button pe click karne se task remove ho jaye
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // Click bubbling rok de (warna toggle bhi hota)
      tasks = tasks.filter((t) => t.id !== task.id); // Task ko list se hata de
      li.remove(); 
      saveTasks(); 
    });

    todoList.appendChild(li); // Final me list item ko ul me add karein
  }

  // Local storage me tasks save karne ka function
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

});
