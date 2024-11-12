// File: scripts/welcomeAlert.js

// Function to display a welcome message when the page loads
function displayWelcomeMessage() {
    alert("We Welcome pets of all ages, sizes, and skills!");
}

// Function to set the current date in the footer
function setCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    if (dateElement) {
        // Format the date as a readable string and set it as the content of the footer element
        dateElement.textContent = new Date().toDateString();
    }
}

// Call the setCurrentDate function immediately to ensure the date is updated on load
window.onload = function() {
    displayWelcomeMessage();
    setCurrentDate();
};
