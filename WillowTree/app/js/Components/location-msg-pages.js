
// This function runs when the document is ready
$(document).ready(function(){
    
  // When an element with class "info" is clicked
  $('.info').click(function(event){
      
      // Toggle the "active" class on both the "info" element and the "location__info-inner" element
      $('.info, .location__info-inner, .location__info').toggleClass('active');
      
      // Get the image element with ID "info-img"
      let el = document.getElementById('info-img');
      
      // Get all elements with class "info"
      let a = document.getElementsByClassName("info");
      
      // Get all elements with classes "info" and "active"
      let b = document.getElementsByClassName("info active");
      
      // Check if there is only one element with class "info" and no elements with classes "info" and "active"
      if(a.length === 1 && b.length === 0){
          
          // If the source of the image contains the string "close.svg", change it to "info-img.svg"
          if (el.src.indexOf("images/close.svg") > 0){
              el.src = "../images/info-img.svg";
          } else {
              // Otherwise, set the source to "info-img.svg"
              el = "../images/info-img.svg";
          }
      } else {
          // If there is more than one element with class "info" or at least one element with classes "info" and "active"
          
          // If the source of the image contains the string "info-img.svg", change it to "close.svg"
          if (el.src.indexOf("images/info-img.svg") > 0){
              el.src = "../images/close.svg";
          } else {
              // Otherwise, set the source to "info-img.svg"
              el = "../images/info-img.svg";
          }
      }
  }); 
});

// Get the first element with class "info"
let elementClass = document.querySelector('.info');

// Get the first element with class "location__info-inner"
let elementClassTwo = document.querySelector('.location__info-inner');
let elementClassTw = document.querySelector('.location__info');
// The code below sets a delay of 300 milliseconds and executes the function inside setTimeout after that delay.
setTimeout(function(element) {
  // Adds the 'active' class to the elementClass and elementClassTwo variables.
  elementClass.classList.add('active');
  elementClassTwo.classList.add('active');
  elementClassTw.classList.add('active');
  // Retrieves the element with the ID 'info-img' and assigns it to the el variable.
  let el = document.getElementById('info-img');

  // Retrieves all elements with the class name 'info' and assigns them to the variable a.
  let a = document.getElementsByClassName("info");

  // Retrieves all elements with the class name 'info active' and assigns them to the variable b.
  let b = document.getElementsByClassName("info active");

  // Checks if there is only one element with class name 'info' and no elements with class name 'info active'.
  if(a.length === 1 && b.length === 0){
    // If the 'info-img' source contains 'images/close.svg', changes it to 'images/info-img.svg'.
    if (el.src.indexOf("images/close.svg")>0){
      el.src = "../images/info-img.svg";
    // Otherwise, sets the 'info-img' source to 'images/info-img.svg'.
    }else{
      el="images/info-img.svg";
    }
  // If there is more than one 'info' element or at least one 'info active' element.
  }else{
    // If the 'info-img' source contains 'images/info-img.svg', changes it to 'images/close.svg'.
    if (el.src.indexOf("images/info-img.svg")>0){
      el.src = "../images/close.svg";
    // Otherwise, sets the 'info-img' source to 'images/info-img.svg'.
    }else{
      el="images/info-img.svg";
    }
  }
}, 300);

// The code below sets a delay of 1500 milliseconds and executes the function inside setTimeout after that delay.
setTimeout(function(element) {
  // Removes the 'active' class from the elementClass and elementClassTwo variables.
  elementClass.classList.remove('active');
  elementClassTwo.classList.remove('active');
  elementClassTw.classList.remove('active');
  // Retrieves the element with the ID 'info-img' and assigns it to the el variable.
  let el = document.getElementById('info-img');
  
  // Retrieves all elements with the class name 'info' and assigns them to the variable a.
  let a = document.getElementsByClassName("info");
  
  // Retrieves all elements with the class name 'info active' and assigns them to the variable b.
  let b = document.getElementsByClassName("info active");
  
  // Checks if there is only one element with class name 'info' and no elements with class name 'info active'.
  if (a.length === 1 && b.length === 0) {
    // If the 'info-img' source contains 'images/close.svg', changes it to 'images/info-img.svg'.
    if (el.src.indexOf("images/close.svg") > 0) {
      el.src = "../images/info-img.svg";
      // Otherwise, sets the 'info-img' source to 'images/info-img.svg'.
    } else {
      el = "../images/info-img.svg";
    }
  // If there is more than one 'info' element or at least one 'info active' element.
  } else {
    // If the 'info-img' source contains 'images/info-img.svg', changes it to 'images/close.svg'.
    if (el.src.indexOf("images/info-img.svg") > 0) {
      el.src = "../images/close.svg";
      // Otherwise, sets the 'info-img' source to 'images/info-img.svg'.
    } else {
      el = "../images/info-img.svg";
    }
  }
}, 1500);

  
 //  Change image source on click event.
 //  @param {string} id - ID of the image element.
 function chg(id) {
  var el = document.getElementById('info-img');
  if (el.src.indexOf("images/info-img.svg") > 0) {
    el.src = "../images/info-close.svg"
  } else {
    el.src = "../images/info-img.svg"
  }
}



























