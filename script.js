// Function to move the "No" button when hovered over or clicked
function moveButton() {
    let button = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Function to navigate to the next page when "Yes" button is clicked
function nextPage() {
    window.location.href = "nextpage.html"; // Change to your actual next page URL
}

// Attach event listeners after the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("noButton").addEventListener("mouseover", moveButton);
    document.getElementById("noButton").addEventListener("click", moveButton);
    document.getElementById("yesButton").addEventListener("click", nextPage);
});
