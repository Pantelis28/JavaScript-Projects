function countdown() {
    // Get the value entered by the user in the input field with ID 'seconds'
    // and assign it to the variable 'seconds'. This is the starting countdown time.
    var seconds = document.getElementById("seconds").value;
    // Get the element with ID 'timer', which is where the countdown will be displayed.
    var timer = document.getElementById("timer");
    // Define the function 'tick', which handles the countdown logic.
    function tick() {
        // Decrease the value of 'seconds' by 1.
        seconds = seconds - 1;

        // Update the inner HTML of the 'timer' element to display the current value of 'seconds'.
        timer.innerHTML = seconds;

        // Set a timer to call the 'tick' function again after 1000 milliseconds (1 second).
        var time = setTimeout(tick, 1000);

        // Check if the countdown has reached -1.
        if (seconds == -1) {
            // Display an alert to the user that the countdown has ended.
            alert("Time's up!");

            // Stop the timer from calling 'tick' again.
            clearTimeout(time);

            // Clear the content of the 'timer' element to reset the display.
            timer.innerHTML = "";
        }
    }

    // Call the 'tick' function to start the countdown.
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
