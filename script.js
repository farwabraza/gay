document.addEventListener("DOMContentLoaded", function () {
    // Move 'No' button when hovered or clicked
    function moveButton() {
        let button = document.getElementById("noButton");
        let x = Math.random() * (window.innerWidth - button.offsetWidth);
        let y = Math.random() * (window.innerHeight - button.offsetHeight);

        button.style.position = "absolute";
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }

    // Redirect to yes.html when clicking 'Yes' button
    function nextPage() {
        console.log("Redirecting to yes.html..."); // Debugging message
        window.location.href = "yes.html"; // Ensure yes.html exists
    }

    // Attach event listeners
    let noButton = document.getElementById("noButton");
    let yesButton = document.getElementById("yesButton");

    if (noButton) {
        noButton.addEventListener("mouseover", moveButton);
        noButton.addEventListener("click", moveButton);
    }

    if (yesButton) {
        yesButton.addEventListener("click", nextPage);
    } else {
        console.error("Yes button not found!");
    }
});
