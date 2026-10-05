// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});


// Learn More Button

const learnBtn = document.getElementById("learnBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

learnBtn.addEventListener("click", function () {

    welcomeMessage.classList.toggle("hidden");

    if (welcomeMessage.classList.contains("hidden")) {
        learnBtn.textContent = "Learn More";
    } else {
        learnBtn.textContent = "Hide Message";
    }
});


// Service Details Buttons

const detailButtons = document.querySelectorAll(".details-btn");
const serviceMessage = document.getElementById("serviceMessage");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const serviceName =
            this.parentElement.querySelector("h3").textContent;

        serviceMessage.textContent =
            "You selected: " + serviceName +
            ". Thank you for your interest!";

    });

});


// About Show More Button

const aboutBtn = document.getElementById("aboutBtn");
const aboutText = document.getElementById("aboutText");

aboutBtn.addEventListener("click", function () {

    aboutText.classList.toggle("hidden");

    if (aboutText.classList.contains("hidden")) {
        aboutBtn.textContent = "Show More";
    } else {
        aboutBtn.textContent = "Show Less";
    }

});


// Contact Form Validation

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");

    // Clear previous messages

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let isValid = true;

    // Name validation

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    // Message validation

    if (message === "") {
        messageError.textContent =
            "Please enter your message.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent =
            "Message must contain at least 10 characters.";
        isValid = false;
    }

    // Success message

    if (isValid) {

        formSuccess.textContent =
            "Thank you, " + name +
            "! Your message has been submitted successfully.";

        contactForm.reset();
    }

});