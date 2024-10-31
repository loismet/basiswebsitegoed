// JavaScript Document
console.log("hi");

// HEADER/NAV
// menu toggle https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

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

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const darkModeToggle = document.getElementById("dark-mode-toggle"); // Dark mode knop
  const body = document.body;

  // Controleer of dark mode al eerder is ingesteld
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  // Toggle dark mode wanneer de knop wordt ingedrukt
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Sla de voorkeur van de gebruiker op in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
