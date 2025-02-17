/*
var obj = {"name":"John", "age":30, "city":"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("todos").innerHTML = "<strong>Stringified JSON:</strong> " + myJSON;


    var jsonString = '{"name":"John", "age":30, "city":"New York"}';
    var parsedObj = JSON.parse(jsonString); 
    document.getElementById("todos").innerHTML += "<br><br><strong>Parsed JSON:</strong> " +
    parsedObj.name + ", " + parsedObj.age + " years old, from " + parsedObj.city; 

var obj = JSON.parse('{"firstName":"John", "LastName":"Doe"}');
document.getElementById("todos").innerHTML = obj.firstName;

*/

// Set the data as a key/value pair to be saved locally in your browser
//localStorage.setItem("Name", "John");
/* Then use the key "Name" to return the pair "John"
document.getElementById("todos").innerHTML = localStorage.getItem("Name");

var obj = JSON.parse('{"firstName":"John", "LastName":"Doe"}');
document.getElementById("todos").innerHTML = obj.firstName; 
*/

// Function to retrieve the todos from localStorage
function get_todos() {
    var todos = new Array; // Initialize an empty array
    var todos_str = localStorage.getItem('todo'); // Get the todos from localStorage
    if (todos_str !== null) { // If there are todos saved in localStorage
        todos = JSON.parse(todos_str); // Parse the JSON string into an array
    }
    return todos; // Return the array of todos
}

// Function to add a new task to the todo list
function add() {
    var task = document.getElementById('task').value.trim(); // Get the value from the input field and remove any extra spaces
    if (task === "") { // If the task input is empty
        alert("Please enter a task!"); // Alert the user to enter a task
        return false; // Exit the function
    }

    var todos = get_todos(); // Get the current todos
    todos.push(task); // Add the new task to the todos array
    localStorage.setItem('todo', JSON.stringify(todos)); // Save the updated todos array back to localStorage
    document.getElementById("task").value = ""; // Clear the input field
    show(); // Call the show function to update the displayed list
    return false; // Prevent the form from submitting
}

// Function to remove a task from the todo list
function remove() {
    var id = this.getAttribute('id'); // Get the id (index) of the task that was clicked
    var todos = get_todos(); // Get the current todos
    todos.splice(id, 1); // Remove the task from the todos array using the index
    localStorage.setItem('todo', JSON.stringify(todos)); // Save the updated todos array back to localStorage
    show(); // Call the show function to update the displayed list
}

// Function to display the todo list
function show() {
    var todos = get_todos(); // Get the current todos
    var html = "<ul>"; // Start an unordered list in HTML
    for (var i = 0; i < todos.length; i++) { // Loop through each todo in the array
        // Add each task to the list with a button to remove it
        html += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">X</button></li>';
    }
    html += '</ul>'; // Close the unordered list
    document.getElementById('todos').innerHTML = html; // Update the HTML of the 'todos' container

    // Add event listeners to each remove button to call the remove function when clicked
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove); // Attach the remove function to each button
    }
}

// Add an event listener to the 'add' button to call the add function when clicked
document.getElementById('add').addEventListener('click', add);

// Call the show function to display the todo list when the page loads
show();
