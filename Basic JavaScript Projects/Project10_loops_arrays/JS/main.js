// Counting to 10 while loop
function count_to_ten(){
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}

// .lenght property
var text = "Hello, World!";
var lenght = text.length;

document.getElementById("demo").innerHTML = lenght;

// for loop array
var instruments = ["Guitar", "Drums", "Bass", "Violin", "Trumpet", "flute"];
var content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

//Function with an array
function array_Function(){
    let car_Picture = [];
    car_Picture[0] = "Ferrari";
    car_Picture[1] = "Porsche";
    car_Picture[2] = "Mustang";
    car_Picture[3] = "McLaren";
    document.getElementById("Array").innerHTML = "In this picture, the car is " + 
    car_Picture[3] + ".";
}

// function with const
function constant_Function() {
   
    const cellphone = {
        brand: "Apple.inc",
        model: "Iphone",
        color: "White",
        edition: "16",
        OS: "IOS18"
    };

 
    cellphone.color = "Black";

   
    cellphone.price = "$999";

   
    document.getElementById("Constant").innerHTML = 
        "The cellphone was created by " + cellphone.brand + 
        " and it's a " + cellphone.model + " " + cellphone.edition + 
        ". The color is now " + cellphone.color + 
        " and it's priced at " + cellphone.price + ".";
}

// Function with let
function myFunction(){
    let name = "Pantelis";
    return "Hello " + name;
    }
document.getElementById("return").innerText = myFunction();  

// Creating an Object with let keyword
let person = {
    name: "Pantelis",
    age: "24",
    ethnicity: "Greece",
    interest: "Information Technology",
    description: function() {
        return "Hello, my name is " + this.name + 
               ", I'm " + this.age + " from " + this.ethnicity + 
               " and I'm interested in " + this.interest + " as a career. ";
    }
};

document.getElementById("let_object").innerHTML = person.description();

// stops counting when i = 5
let loop_break = ""; 
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    loop_break += "The number is " + i + "<br>"; 
}
document.getElementById("break").innerHTML = loop_break; 

// skips i = 3
let loop_continue = "";
for( let i = 0; i < 10; i++) {
    if ( i === 3) { continue; }
    loop_continue += "The number is" + i + "<br>";
}

document.getElementById("continue").innerHTML = loop_continue;
