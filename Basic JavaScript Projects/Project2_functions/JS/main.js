function myFunction() {
    // Define the messages to be displayed
    var firstMessage = "Welcome to my function project!";
    var secondMessage = "This is a project2_functions assignment.";

    // Update the content of the paragraph with ID "message"
    document.getElementById("message").textContent = firstMessage + " " + secondMessage;

    // Define the operator assignment message
    var myOperator = "This is the operator assignment";

    // Append the operator assignment message to the paragraph with ID "operator"
    var element = document.getElementById("operator");
    element.innerHTML += " " + myOperator;
}
