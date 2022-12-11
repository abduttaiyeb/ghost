// DOM elements
const beloved = document.getElementById("beloved");
const user = document.getElementById("user");

// Prompt user for info
const belovedName = prompt("Who are you?");
const userName = prompt("Enter any password bitch");

// Render info to elements
beloved.textContent = belovedName;
user.textContent = userName;
