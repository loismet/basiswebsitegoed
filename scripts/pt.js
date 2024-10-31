 // foto scrolbar 3
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://www.w3schools.com/jsref/met_element_scrollintoview.asp 
// https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/

 document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector("#pt-page section:nth-of-type(5) ul");
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
  
      let currentIndex = items.findIndex((item) => item.classList.contains("active"));
  
      if (clickPositionX > boundaries[currentIndex] && currentIndex < items.length - 1) {
        currentIndex++;
      } else if (clickPositionX < boundaries[currentIndex - 1] && currentIndex > 0) {
        currentIndex--;
      } else {
        return;
      }
  
      // Update de actieve afbeelding en scroll naar de geselecteerde afbeelding
      items.forEach((item, index) => {
        item.classList.toggle("active", index === currentIndex);
      });
  
      items[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  
    // Zet de eerste afbeelding als actief bij het laden van de pagina
    items[0].classList.add("active");
  });