// Function to get the receipt and calculate the size cost
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var selectedSize = "";
    var sizeArray = document.getElementsByClassName("size");

    // Loop through size options
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Calculate size total
    if (selectedSize === "Personal Pizza....$1.99") {
        sizeTotal = 1.99;
    } else if (selectedSize === "Small Pizza....$3.99") {
        sizeTotal = 3.99;
    } else if (selectedSize === "Medium Pizza....$5.99") {
        sizeTotal = 5.99;
    } else if (selectedSize === "Large Pizza....$9.99") {
        sizeTotal = 9.99;
    } else if (selectedSize === "Extra Large Pizza....$12.99") {
        sizeTotal = 12.99;
    } else if (selectedSize === "Party Size Pizza....$16.99") {
        sizeTotal = 16.99;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    getTopping(runningTotal, text1); // Move to topping calculation
}

// Function to calculate the cost of selected toppings and update the receipt
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    console.log("Total toppings found: " + toppingArray.length); 

    // Loop through the topping options to find the selected toppings
    for (var j = 0; j < toppingArray.length; j++) {
        console.log("Checking topping: " + toppingArray[j].value); 
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping: " + toppingArray[j].value); 
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    

    // Charge $1.50 for each topping, whether 1 or more are selected
    var toppingCount = selectedTopping.length;
    toppingTotal = toppingCount * 1.50; 

    runningTotal = runningTotal + toppingTotal;
    console.log("Total selected toppings: " + toppingCount);
    console.log("Topping cost: $" + toppingTotal);
    console.log("Receipt text: " + text1);
    console.log("Total price: $" + runningTotal);
    
    runningTotal = runningTotal.toFixed(2);

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>$" + runningTotal;
}

