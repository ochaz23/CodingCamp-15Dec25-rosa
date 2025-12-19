// Call welcomeMessage function to prompt user 
welcomeMessage();

function welcomeMessage() {
    // Prompt the user to enter their name
    const userInput = prompt('Please enter your name:');

    // Get the welcome-speech DOM element
    const welcomeSpeech = document.getElementById('welcome-speech');

    // Check if userInput is null or empty
    if (userInput === null || userInput.trim() === '') {
        // Render default welcome message if no name is provided
        welcomeSpeech.innerHTML = 'Welcome, Guest!';
    } else {
        // Render personalized welcome message
        welcomeSpeech.innerHTML = 'Welcome, ' + userInput + '!';
    }
}

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Get input elements from the DOM
    const inputNama = document.getElementById('nama');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');

    let isValid = true;

    // Function to remove any existing error messages and reset styles
    const clearError = (el) => {
        const existingError = el.parentNode.querySelector('small');
        if (existingError) existingError.remove();
        el.classList.remove('border-red-500'); // Remove the red border highlight from the input field
    };

    // Function to display error message and highlight the input
    const showError = (el, message) => {
        clearError(el);
        const errorMsg = document.createElement('small');
        errorMsg.className = "text-red-500 text-xs mt-1 block"; // Styling Tailwind
        errorMsg.innerText = message;
        el.parentNode.appendChild(errorMsg);
        el.classList.add('border-red-500'); // Add a red border to the input field to visually signal the error
    };

    // Name Validation (Minimum 3 characters)
    clearError(inputNama);
    if (inputNama.value.trim().length < 3) {
        showError(inputNama, "Name must be at least 3 characters long.");
        isValid = false;
    }

    // Email Validation (Format check using Regex)
    clearError(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
        showError(inputEmail, "Please enter a valid email address.");
        isValid = false;
    }

    // Message Validation (Minimum 10 characters)
    clearError(inputMessage);
    if (inputMessage.value.trim().length < 10) {
        showError(inputMessage, "Message is too short (minimum 10 characters).");
        isValid = false;
    }

    // --- FINAL CHECK ---
    if (!isValid) {
        event.preventDefault(); // Stop the form from submitting if validation fails
    } else {
        alert("Thank you! Your message has been sent.");
    }
});