// // Export the function
// export default function accordionsFunction() {
  
//   // Select all accordion elements and accordion content elements
//   const accordions = document.querySelectorAll(".accordion.enable");
//   const accordionContents = document.querySelectorAll(".accordion-content");

//   // Add event listener to each accordion element
//   accordions.forEach((accordion, index) => {
//     accordion.addEventListener("click", () => {
//       // Toggle active and enable classes on accordion element
//       accordion.classList.toggle("active");
//       accordion.classList.toggle("enable");

//       // Get the accordion content element and price box element within it
//       const accordionContent = accordion.nextElementSibling;
//       const boxContent = accordionContent.querySelector(".catalog__price-box");

//       // If accordion is active and price box exists, show accordion content and expand price box
//       if (accordion.classList.contains("active") && boxContent) {
//         accordionContent.classList.add("active");
//         boxContent.style.maxHeight = "1000px";
//       } else {
//         // Otherwise, hide accordion content and collapse price box
//         accordionContent.classList.remove("active");
//         if (boxContent) {
//           boxContent.style.maxHeight = null;
//         }
//       }
      
//       // Toggle active class on accordion content element if accordion is active
//       accordionContent.classList.toggle("active", accordion.classList.contains("active"));
//     });
//   });
// }