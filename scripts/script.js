// JavaScript Document
console.log("hi");

// HEADER/NAV
// Zorg ervoor dat het script geladen is zodra de DOM is klaar
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const header = document.querySelector("header");
  const logo = document.getElementById("logo");
  const body = document.body;

  // Voeg een click event toe aan de hamburgerknop
  toggleButton.addEventListener("click", () => {
    // Toggle de "open" class voor de animatie
    toggleButton.classList.toggle("open");

    // Toggle de "show" class om het menu te tonen of te verbergen
    menu.classList.toggle("show");

    header.classList.toggle("menu-open");

    body.classList.toggle("menu-open");
  });
});

//   More personal
