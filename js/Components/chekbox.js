
    // Get references to all checkboxes
    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');
    const checkbox3 = document.getElementById('checkbox3');
  
    // Add event listeners to each checkbox
    checkbox1.addEventListener('change', function() {
      // If the current checkbox is checked, uncheck all others
      if (this.checked) {
        checkbox2.checked = false;
        checkbox3.checked = false;
      }
    });
  
    checkbox2.addEventListener('change', function() {
      // If the current checkbox is checked, uncheck all others
      if (this.checked) {
        checkbox1.checked = false;
        checkbox3.checked = false;
      }
    });
  
    checkbox3.addEventListener('change', function() {
      // If the current checkbox is checked, uncheck all others
      if (this.checked) {
        checkbox1.checked = false;
        checkbox2.checked = false;
      }
    });