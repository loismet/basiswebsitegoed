document.addEventListener("DOMContentLoaded", function () {
  const fotos = document.querySelectorAll(".photoGallery li");
  const meerKnop = document.querySelector(".showMoreButton");
  let aantalZichtbaar = 4; // Begin met 4 zichtbare foto's

  // Laat alleen de eerste 4 foto's zien bij het laden van de pagina
  fotos.forEach((foto, index) => {
    foto.style.display = index < aantalZichtbaar ? "block" : "none";
  });

  // Klik op de show more knop
  meerKnop.addEventListener("click", () => {
    aantalZichtbaar = Math.min(aantalZichtbaar + 4, fotos.length);

    fotos.forEach((foto, index) => {
      foto.style.display = index < aantalZichtbaar ? "block" : "none";
    });

    if (aantalZichtbaar === fotos.length) {
      meerKnop.disabled = true;
    }
  });
});

// foto scrolbar 1
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://www.w3schools.com/jsref/met_element_scrollintoview.asp
// https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#homepage section:nth-of-type(6) ul");
  const items = Array.from(list.children);

  list.addEventListener("click", (event) => {
    event.preventDefault(); // Voorkom standaard scrollgedrag

    const rect = list.getBoundingClientRect();
    const clickPositionX = event.clientX - rect.left;

    // Bereken het midden van elke afbeelding
    const boundaries = items.map((item, index) => {
      if (index < items.length - 1) {
        const itemRect = item.getBoundingClientRect();
        const nextItemRect = items[index + 1].getBoundingClientRect();
        return (itemRect.right + nextItemRect.left) / 2;
      }
      return null;
    });

    let currentIndex = items.findIndex((item) =>
      item.classList.contains("active")
    );

    // Bepaal of de klik zich in een tussenruimte bevindt tussen de huidige en volgende/voorgaande afbeelding
    if (
      clickPositionX > boundaries[currentIndex] &&
      currentIndex < items.length - 1
    ) {
      // Klik aan de rechterkant, ga naar de volgende foto
      currentIndex++;
    } else if (
      clickPositionX < boundaries[currentIndex - 1] &&
      currentIndex > 0
    ) {
      // Klik aan de linkerkant, ga naar de vorige foto
      currentIndex--;
    } else {
      // Doe niets als er buiten de tussenruimtes is geklikt
      return;
    }

    // Update de actieve afbeelding en scroll naar de geselecteerde afbeelding
    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });

    items[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  });

  // Zet de eerste afbeelding als actief bij het laden van de pagina
  items[0].classList.add("active");
});

// foto scrolbar 2
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://www.w3schools.com/jsref/met_element_scrollintoview.asp
// https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#homepage section:nth-of-type(8) ul");
  const items = Array.from(list.children);

  list.addEventListener("click", (event) => {
    event.preventDefault(); // Voorkom standaard scrollgedrag

    const rect = list.getBoundingClientRect();
    const clickPositionX = event.clientX - rect.left;

    // Bereken het midden van elke afbeelding
    const boundaries = items.map((item, index) => {
      if (index < items.length - 1) {
        const itemRect = item.getBoundingClientRect();
        const nextItemRect = items[index + 1].getBoundingClientRect();
        return (itemRect.right + nextItemRect.left) / 2;
      }
      return null;
    });

    let currentIndex = items.findIndex((item) =>
      item.classList.contains("active")
    );

    // Bepaal of de klik zich in een tussenruimte bevindt tussen de huidige en volgende/voorgaande afbeelding
    if (
      clickPositionX > boundaries[currentIndex] &&
      currentIndex < items.length - 1
    ) {
      // Klik aan de rechterkant, ga naar de volgende foto
      currentIndex++;
    } else if (
      clickPositionX < boundaries[currentIndex - 1] &&
      currentIndex > 0
    ) {
      // Klik aan de linkerkant, ga naar de vorige foto
      currentIndex--;
    } else {
      // Doe niets als er buiten de tussenruimtes is geklikt
      return;
    }

    // Update de actieve afbeelding en scroll naar de geselecteerde afbeelding
    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });

    items[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  });

  // Zet de eerste afbeelding als actief bij het laden van de pagina
  items[0].classList.add("active");
});

