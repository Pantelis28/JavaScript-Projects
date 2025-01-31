


// variable to keep track of whose turn it is
let activePlayer = 'X';

// array to store moves - use this to determine conditions
let selectedSquares = [];

// Function to place X or O in a square
function placeXOrO(squareNumber) {
    //checks if the square has been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // variable to hold the html element that was clicked
        let select = document.getElementById(squareNumber);
        // Determines the active player and places the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        
        select.style.backgroundSize = '70%';
        select.style.backgroundRepeat = 'no-repeat';
        select.style.backgroundPosition = 'center';

        //Adds the square number and the player to the array
        selectedSquares.push(squareNumber + activePlayer);
        // Calls the function to check for a win
        checkWinConditions();
        //Changes the active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        // function to play the placement sound
        playAudio('./media/place.mp3');
        // Checks if it is the computers turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () {
                computerTurn();
            }, 1000);
        }
        // Returning truw is needed for the computersTurn() function 
        return true;
    }

    return false;
}

// Function to play audio
function playAudio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// Function to disable clicks temporarily
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

//Picks a random number aquare for the computers turn
function computerTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)) {
            success = true;
        }
    }
}

// This function parses the selected array to determine if a player has won
// The drawline function is called if a win condition is met 
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    // checks for a tie - if no win conditions are met and 0 squares have been selected
    else if (selectedSquares.length >= 9) {
    // plays the tie sound
        playAudio('./media/tie.mp3');
    // resets the game after a tie 
        setTimeout(resetGame, 500);
    }
    
    // This function checks for each win condition 
    function arrayIncludes(squareA, squareB, squareC) {
        return selectedSquares.includes(squareA) &&
               selectedSquares.includes(squareB) &&
               selectedSquares.includes(squareC);
    }
}


function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

// function to draw the line across winning coordinates 
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    

    let x = coordX1,
        y = coordY1;
        

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 658, 658);
        c.beginPath();
        c.moveTo(coordX1, coordY1);
        c.lineTo(x, y);
        c.lineWidth = 20;
        c.strokeStyle = 'rgb(43, 255, 0)';
        c.stroke();
        if (x < coordX2) x += 10;
        if (y < coordY2) y += 10;
        if (x >= coordX2 && y >= coordY2) cancelAnimationFrame(animationLoop);
    }

    function clearCanvas() {
        const clearAnimation = requestAnimationFrame(clearCanvas);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(clearAnimation);
    }
    
    // plays the winning sound 
    disableClick();
    playAudio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(() => {
        clearCanvas();
        resetGame();
    }, 1000);
}

//Clears the board and the array to restart the game 
function resetGame(){
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';

    }

    selectedSquares = [];
}