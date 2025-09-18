// ==========================================================
// Part 1 & 2: Event Handling and Interactive Elements
// ==========================================================

// --- Light/Dark Mode Toggle ---
// Get the toggle button and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Add a click event listener to the toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Change the icon based on the current theme
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});


// --- Collapsible FAQ Section ---
// Get all the FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each button and add a click event listener
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Get the parent element and the answer div
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');

        // Toggle the 'open' class on the answer to show/hide it
        answer.classList.toggle('open');
    });
});


// ==========================================================
// Part 3: Form Validation
// ==========================================================

// Get the form and all relevant input fields
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Get the error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const successFeedback = document.getElementById('success-feedback');

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate the form
const validateForm = (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Reset all error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    successFeedback.textContent = '';

    // Create a flag to track if the form is valid
    let isFormValid = true;

    // --- Name Validation ---
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isFormValid = false;
    }

    // --- Email Validation ---
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isFormValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isFormValid = false;
    }

    // --- Password Validation ---
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isFormValid = false;
    }

    // --- Confirm Password Validation ---
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isFormValid = false;
    }

    // If all validations pass, show success message
    if (isFormValid) {
        successFeedback.textContent = 'Registration successful!';
        form.reset(); // Clear the form fields
    }
};

// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', validateForm);