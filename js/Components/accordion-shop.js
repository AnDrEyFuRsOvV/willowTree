
  // Select all accordion elements and accordion content elements
  const accordions = document.querySelectorAll(".accordion");
  const accordionContents = document.querySelectorAll(".accordion-content");

  // Add event listener to each accordion element
  accordions.forEach((accordion, index) => {
    accordion.addEventListener("click", () => {
      // Toggle active and enable classes on accordion element
      accordion.classList.toggle("active");
      accordion.classList.toggle("enable");

      // Get the accordion content element and price box element within it
      const accordionContent = accordion.nextElementSibling;
      const boxContent = accordionContent.querySelector(".catalog__price-box");

      // If accordion is active and price box exists, show accordion content and expand price box
      if (accordion.classList.contains("active") && boxContent) {
        accordionContent.classList.add("active");
        boxContent.style.maxHeight = "1000px";
      } else {
        // Otherwise, hide accordion content and collapse price box
        accordionContent.classList.remove("active");
        if (boxContent) {
          boxContent.style.maxHeight = "0";
        }
      }
      
      // Add class "active" to accordion content element if accordion is active
      for (let i = 0; i < accordionContents.length; i++) {
        const content = accordionContents[i];
        if (accordion.parentNode === content.parentNode) {
          if (accordion.classList.contains("active")) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        }
      }
    });
  });
