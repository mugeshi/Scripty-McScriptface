document.addEventListener("DOMContentLoaded", function() {
  // Get references to DOM elements
  const taskInput = document.getElementById("taskInput"); // Input field for task
  const addTaskBtn = document.getElementById("addTaskBtn"); // Button to add task
  const prioritySelect = document.getElementById("prioritySelect"); // Dropdown for task priority
  const taskList = document.getElementById("taskList"); // Task list container

  // Event listener for the Add Task button
  addTaskBtn.addEventListener("click", function() {
    // Log message when Add Task button is clicked
    console.log("Add Task button clicked");

    // Get the task text and priority value from input fields
    const taskText = taskInput.value.trim(); // Trim removes leading and trailing whitespace
    const priorityValue = prioritySelect.value;

    // Check if the task input is not empty
    if (taskText !== "") {
      // Log message when a task is added to the list
      console.log("Task list item clicked");

      // Create a new list item element
      const li = document.createElement("li");
      
      // Set the text content of the list item to the task text
      li.textContent = taskText;
      
      // Add a class to the list item based on priority
      li.classList.add(priorityValue);
      
      // Append the list item to the task list
      taskList.appendChild(li);
      
      // Clear the task input field
      taskInput.value = "";
      
      // Log message with task details
      console.log("Task added:", taskText, "Priority:", priorityValue);
    } else {
      // Show an alert if the task input is empty
      alert("Please enter a task!");
    }
  });

  // Event listener for clicking on a task item in the list
  taskList.addEventListener("click", function(e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
      // Remove the clicked list item
      e.target.remove();
    }
  });
});
