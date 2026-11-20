
// Display a welcome message in the browser console
console.log("Welcome to Daniel's Portfolio!");

// Select all navigation links
let links = document.querySelectorAll("nav a");

// Add a click event to navigation links
links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You selected: " + link.textContent);
    });
});
