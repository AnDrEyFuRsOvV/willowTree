
    // Set the value of the selected city to the hidden input field
    $('select#cities').on('change', function() {
        $('input[name="city"]').val(this.value);
    });



  
  // When an element with class "my-adres__btn" is clicked
  $('.my-adres__btn').click(function(event){
      
    // Set the value of four text input elements to an empty string
    document.getElementById("textInput").value = "";
    document.getElementById("textInput-2").value = "";
    document.getElementById("textInput-3").value = "";
    document.getElementById("textInput-4").value = "";
});