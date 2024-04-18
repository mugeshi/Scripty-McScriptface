document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const prioritySelect = document.getElementById("prioritySelect");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    console.log("Add Task button clicked");
    const taskText = taskInput.value.trim();
    const priorityValue = prioritySelect.value;
    if (taskText !== "") {
        console.log("Task list item clicked");
      const li = document.createElement("li");
      li.textContent = taskText;
      li.classList.add(priorityValue);
      taskList.appendChild(li);
      taskInput.value = "";
      console.log("Task added:", taskText, "Priority:", priorityValue);
    } else {
      alert("Please enter a task!");
    }
    
  });

  taskList.addEventListener("click", function(e) {
   
    if (e.target.tagName === "LI") {
      e.target.remove();
    }
  });
});
