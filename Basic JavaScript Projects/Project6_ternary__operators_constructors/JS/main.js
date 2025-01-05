// Function to determine if a person is tall enough to ride a ride based on their height
function Ride_Function() {
    var Height, Can_ride;
    // Get the height value from the input field with id "Height" and convert it to an integer
    Height = parseInt(document.getElementById("Height").value);  
    
    // Using a ternary operator to check if the person is tall enough to ride
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    
    // Display the result in the HTML element with id "Ride"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Function to determine if a person is old enough to vote based on their age
function Age_Voter() {
    var Age, Can_vote;
    // Get the age value from the input field with id "Age" and convert it to an integer
    Age = parseInt(document.getElementById("Age").value);  
    
    // Using a ternary operator to check if the person is old enough to vote
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    
    // Display the result in the HTML element with id "Vote"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// Constructor function to create a new Vehicle object with Make, Model, Year, and Color
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;  
}

// Create three new Vehicle objects using the Vehicle constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display information about Erik's vehicle in the HTML element with id "Keywords_and_Constructors"
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

// Function to demonstrate reserved keywords in JavaScript
function reservedWordAssignment() {
    var myVar = "return";  // `return` is a reserved word, but can be used as a variable name
    // Display the value of `myVar` in the HTML element with id "reserved"
    document.getElementById("reserved").innerHTML = "The value of myVar is: " + myVar;
}

// Constructor function to create a new Book object with title, author, year, and genre
function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    // Method inside the Book object to display information about the book
    this.displayInfo = function() {
        return `"${this.title}" by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
    };
}

// Create two new Book objects using the Book constructor
var myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
var yourBook = new Book("1984", "George Orwell", 1949, "Dystopian");

// Function to display information about the books in the HTML element with id "bookInfo"
function showBookInfo() {
    document.getElementById("bookInfo").innerHTML = "My book: " + myBook.displayInfo() + "<br>" + 
        "Your book: " + yourBook.displayInfo();
}

// Function to demonstrate a nested function that counts a starting point
function count_Function() {
    // Call the count() function and update the "counting" element with its return value
    document.getElementById("counting").innerHTML = count();
    
    // The count() function that increments a starting point from 9
    function count() {
        var starting_point = 9;  // Initial value of the starting point
        function Plus_one() {starting_point += 1;}  // Inner function that increments starting_point
        Plus_one();  // Call Plus_one() to increment the starting point
        return starting_point;  // Return the updated starting point (which will be 10)
    }
}

// Function to demonstrate a simple outer and inner function pattern
function outerFunction() {
    // Display an alert when the outer function is called
    alert("You clicked the paragraph!");
    
    // Define an inner function inside the outer function
    function innerFunction() {
        // Change the content of the element with id "nested_function"
        document.getElementById("nested_function").innerHTML = "You clicked me! The inner function is called.";
    }
    
    // Call the inner function to update the paragraph
    innerFunction();
}
