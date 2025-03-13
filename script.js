function moveButton() {
    let button = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Move button when hovered or clicked
document.getElementById("noButton").addEventListener("mouseover", moveButton);
document.getElementById("noButton").addEventListener("click", moveButton);
