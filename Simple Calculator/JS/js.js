window.onload = function() {
    // Select the calculator screen and the container holding the calculator keys
    const screen = document.querySelector('.calculator-screen');
    const keys = document.querySelector('.calculator-keys');
    
    // Variables to store current input, previous input, and the selected operator
    let currentInput = '0';  // Initialize with '0' as default display
    let previousInput = '';  // Stores the previous number before operator is pressed
    let operator = '';       // Stores the current operator ('+', '-', '*', '/')
    
    // Event listener to handle button clicks
    keys.addEventListener('click', (event) => {
        // Get the button clicked by the user
        const button = event.target;
        
        // Ignore clicks that don't target buttons
        if (!button.matches('button')) return;

        const value = button.value;  // Get the value of the clicked button
        
        // If AC is pressed, reset everything
        if (value === 'all-clear') {
            currentInput = '0';      // Reset the display to '0'
            previousInput = '';      // Clear the previous input
            operator = '';           // Clear the current operator
            screen.value = currentInput;  // Update the screen with '0'
        } 
        // If '=' (equal sign) is pressed, perform the calculation
        else if (value === '=') {
            // Perform operation only if there's an operator and previous input
            if (operator && previousInput !== '') {
                // Call the 'operate' function to compute the result
                currentInput = operate(previousInput, currentInput, operator);
                screen.value = currentInput;  // Display the result
                previousInput = '';           // Clear previous input
                operator = '';                // Clear operator
            }
        } 
        // If any operator is pressed ('+', '-', '*', '/')
        else if (['+', '-', '*', '/'].includes(value)) {
            // If there's already an operator and previous input is not empty,
            // perform the operation with the previous value and update the screen.
            if (operator && previousInput !== '') {
                currentInput = operate(previousInput, currentInput, operator);
                screen.value = currentInput;
                previousInput = currentInput;  // Store the current result for next operation
            }
            operator = value;  // Store the current operator
            previousInput = currentInput;  // Store the current value before operator
            currentInput = '0';  // Reset current input to '0' for the next number
        } 
        // If a number or decimal point is clicked
        else {
            // If the current input is '0' or '0.', replace it with the clicked value
            if (currentInput === '0' || currentInput === '0.') {
                currentInput = value;
            } 
            // Otherwise, append the clicked value to the current input
            else {
                currentInput += value;
            }
            screen.value = currentInput;  // Update the screen with the current input
        }
    });

    // Function to perform the calculation based on the operator
    function operate(num1, num2, operator) {
        num1 = parseFloat(num1);  // Convert num1 to a float
        num2 = parseFloat(num2);  // Convert num2 to a float
        
        // Switch case to handle different operators
        switch (operator) {
            case '+':
                return num1 + num2;  // Addition
            case '-':
                return num1 - num2;  // Subtraction
            case '*':
                return num1 * num2;  // Multiplication
            case '/':
                // Handle division by zero
                if (num2 === 0) return 'Error';  // Return 'Error' if dividing by zero
                return num1 / num2;  // Division
            default:
                return num2;  // Return the second number if no valid operator
        }
    }
};
