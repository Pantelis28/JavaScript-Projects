// Addition function
function myFunction(){
    let multiplication_operator = 5 + 5;
    document.getElementById("Math").innerHTML = + multiplication_operator;
}


// Subtraction function
function subtration_Function() {
    let Subtraction = 15 - 7; 
    document.getElementById("result_subtraction").innerHTML = + Subtraction; 
}

// Multiple assignment function 
function multipleOperator(){
    let multiple = (5 + 5) * 6 / 2 - 2;
    document.getElementById("result_multiple").innerHTML = + multiple; 

}

// Multiple assignment function 
function modulus_Operator(){
    let modulus = 25 % 6;
    document.getElementById("result_modulus").innerHTML = + modulus; 

}
function negation_Operator(){
    let x = 10;
    document.getElementById("result_negation").innerHTML = -x;
    
}

// increment and decrement
var x = 5;
var y = 5;
x--;
y++;
// document.write(x);
// document.write(y);

// Random

 window.alert("Random number between 0 and 1: " + Math.random());
 window.alert("Random number between 0 and 100: " + Math.random()* 100);

// Use the Math.pow() method to calculate 3 raised to the power of 4
function calculateMath(){


let base = 3;
let exponent = 4;
let result = Math.pow(base, exponent);

document.getElementById("math.result").innerHTML = 
     + result;
}