// Car data array
const carData = [
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    },
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    },
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    },
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    },
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    },
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    },
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    },
    {
        name: "BMW 230i xDrive",
        type: "COUPE",
        price: 40,
        image: "images/car-2.png",
        tag: "Free Cancellation"
    }
];

// Function to create car box element
const createCarBox = (car) => `
<div class="car-box">
    <img src="${car.image}" alt="" class="box-img" />
    <div class="title-price">
        <div class="title-data">
            <h2>${car.name}</h2>
            <p>${car.type}</p>
        </div>
        <h3 class="car-price">$${car.price} <span>/hour</span></h3>
    </div>
    <a href="#" class="book-btn">Book Car</a>
    <span class="tag">${car.tag}</span>
</div>
`;

const carContent = document.querySelector(".cars-content");

// Create car box and show in car content div
carData.forEach((car) => {
    const carBoxHtml = createCarBox(car);
    carContent.insertAdjacentHTML("beforeend", carBoxHtml);
});

// Initialize Swiper 

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".destination-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
     
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            510: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            750: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
});

// Menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open");
    menu.classList.toggle("move");
};

// Get the login form
var loginForm = document.getElementById("myForm");

// Open the form when clicking the login button
document.querySelector(".sign-up").addEventListener("click", function () {
    loginForm.style.display = "block";
});

// Close the form when clicking the close button
document.querySelector(".btn.cancel").addEventListener("click", function () {
    loginForm.style.display = "none";
});

// Close the form when clicking outside of it
window.addEventListener("click", function (event) {
    if (event.target === loginForm) {
        loginForm.style.display = "none";
    }
});


