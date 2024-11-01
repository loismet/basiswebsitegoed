document.addEventListener("DOMContentLoaded", function () {
  const fotos = document.querySelectorAll(".photoGallery li");
  const meerKnop = document.querySelector(".showMoreButton");
  let zichtbaar = window.innerWidth >= 768 ? 6 : 4; // Start met 6 foto's op grote schermen, anders 4

  // Toon de eerste set foto's bij het laden van de pagina
  function toonFotos() {
    fotos.forEach((foto, index) => {
      foto.style.display = index < zichtbaar ? "block" : "none";
    });
    // Verberg de knop als alle foto's zichtbaar zijn
    meerKnop.style.display = zichtbaar >= fotos.length ? "none" : "block";
  }

  // Bij het klikken op de "Meer tonen" knop, 6 extra foto's laten zien
  meerKnop.addEventListener("click", () => {
    zichtbaar += 6; // Voeg 6 foto's toe
    toonFotos();
  });

  // Pas het aantal zichtbare foto's aan bij wijziging van schermgrootte
  window.addEventListener("resize", () => {
    zichtbaar = window.innerWidth >= 768 ? 6 : 4;
    toonFotos();
  });

  // Toon de initiële set foto's
  toonFotos();
});

// foto scrolbar 1
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://www.w3schools.com/jsref/met_element_scrollintoview.asp
// https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/
document.addEventListener("DOMContentLoaded", () => {
  const lijst = document.querySelector("#homepage section:nth-of-type(6) ul ");
  const items = Array.from(lijst.children);

  // Functie om de actieve afbeelding te updaten en ernaartoe te scrollen
  function updateActiveItem(nieuwIndex) {
    items.forEach((item, index) => {
      item.classList.toggle("active", index === nieuwIndex);
    });
    items[nieuwIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  lijst.addEventListener("click", (event) => {
    event.preventDefault(); 

    const klikPositieX = event.clientX - lijst.getBoundingClientRect().left;
    let huidigIndex = items.findIndex((item) =>
      item.classList.contains("active")
    );

    // Bereken het midden van elk item om te bepalen of er links of rechts is geklikt
    const grenzen = items.map((item, index) => {
      if (index < items.length - 1) {
        return (item.getBoundingClientRect().right + items[index + 1].getBoundingClientRect().left) / 2;
      }
      return null;
    });

    // Controleer of er links of rechts van de huidige afbeelding is geklikt
    if (klikPositieX > grenzen[huidigIndex] && huidigIndex < items.length - 1) {
      
      huidigIndex++;
    } else if (klikPositieX < grenzen[huidigIndex - 1] && huidigIndex > 0) {
      
      huidigIndex--;
    } else {
      
      return;
    }

   
    updateActiveItem(huidigIndex);
  });

  
  updateActiveItem(0);
});

// foto scrolbar 1
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://www.w3schools.com/jsref/met_element_scrollintoview.asp
// https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/
document.addEventListener("DOMContentLoaded", () => {
  const lijst = document.querySelector("#homepage section:nth-of-type(8) ul ");
  const items = Array.from(lijst.children);

  // Functie om de actieve afbeelding te updaten en ernaartoe te scrollen
  function updateActiveItem(nieuwIndex) {
    items.forEach((item, index) => {
      item.classList.toggle("active", index === nieuwIndex);
    });
    items[nieuwIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  lijst.addEventListener("click", (event) => {
    event.preventDefault(); 

    const klikPositieX = event.clientX - lijst.getBoundingClientRect().left;
    let huidigIndex = items.findIndex((item) =>
      item.classList.contains("active")
    );

    // Bereken het midden van elk item om te bepalen of er links of rechts is geklikt
    const grenzen = items.map((item, index) => {
      if (index < items.length - 1) {
        return (item.getBoundingClientRect().right + items[index + 1].getBoundingClientRect().left) / 2;
      }
      return null;
    });

    
    if (klikPositieX > grenzen[huidigIndex] && huidigIndex < items.length - 1) {
      
      huidigIndex++;
    } else if (klikPositieX < grenzen[huidigIndex - 1] && huidigIndex > 0) {
      
      huidigIndex--;
    } else {
      
      return;
    }

    updateActiveItem(huidigIndex);
  });

  updateActiveItem(0);
});

