// Convert string to number and add it to myNum
var myStr = "42";
var myNum = 42;
var myResult = myNum + Number(myStr);

// Output the data type and results
document.write("The data type of myStr is: " + typeof myStr + "<br>");
document.write("The data value of myResult is: " + myResult + "<br>");

// Implicit coercion example
var implicit = myNum + myStr; 
document.write("Result with implicit coercion: " + implicit + "<br>");

// Infinity examples
document.write("Positive Infinity (2E310): " + 2E310 + "<br>");
document.write("Negative Infinity (-2E310): " + -2E310 + "<br>");

function my_Function() {
    document.getElementById("test").innerHTML = 0 / 0; // NaN
}

function my_Function1() {
    document.getElementById("test1").innerHTML = isNaN("This is a string"); // true
}

function my_Function2() {
    document.getElementById("test2").innerHTML = isNaN("007"); // false
}

// Call the functions
my_Function();
my_Function1();
my_Function2();

// Large and small numbers
let largeNumber = 3E333; // Infinity
let smallNumber = -3E333; // -Infinity

document.getElementById("positive-infinity").textContent = "Positive Infinity: " + largeNumber;
document.getElementById("negative-infinity").textContent = "Negative Infinity: " + smallNumber;

// Greater than example
function greaterThan(){
let x = 33;
let y = 15;

document.getElementById("greater-than").textContent = x > y;
}

function lesserThan(){
    let x = 15;
    let y = 33;
    
document.getElementById("lesser-than").textContent = x < y;


}





