

// Declare a global variable
var globalVariable = "Global variable";

// Declare a local variable 
function localVariable() {
    var localVariable = "Local variable";  
    console.log(localVariable);  
    console.log(globalVariable);  
}

localVariable();

// A function that multiply two numbers and log the process
function multiply(a, b) {
    console.log("Input values:", a, b); 
    let result = a * b; 
    console.log("Result:", result); 
    return result;
}

multiply(33, 33);

document.addEventListener("DOMContentLoaded", function() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d;
});

document.addEventListener("DOMContentLoaded",function (){
    if (new Date().getDate() === 10){
    document.getElementById("if").innerHTML = "Today's date is 10/01/25";
    }
});

let age = prompt("Enter your name:");

// Function to determine if a person is old enough to vote
function Age_Function() {
    let Age = document.getElementById("Age").value; 
    let vote; 

    if (Age >= 18) {
        vote = "You are old enough to vote!";
    } 
    else {
        vote = "You are not old enough to vote!";
    }

    document.getElementById("how_old_are_you?").innerHTML = vote; 
}

// Function to assign grades based on a score
function score_Function(){
    let score = document.getElementById("score").value; 
    let assign;

    score = Number(score);

    if (score >= 90 && score < 100) {
        assign = "Grade: A. Excellent work!";
    }
    else if
        (score >= 80 && score < 90) {
        assign = "Grade: B. Great Job!";
        
    }
    else if
        (score >= 70 && score < 80) {
        assign = "Grade: C. Good effort!";
        
    }
    else if
        (score >= 60 && score < 70) {
        assign = "Grade: D. Needs improvement!";
        
    }
    else {
        assign = "Fail. Try harder next time";
    }

    document.getElementById("enter_your_score").innerHTML = assign;
    
}

