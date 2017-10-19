
$(document).ready(function() {
  // all custom jQuery will go here

  $(function(){
    $('.imgslider').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 1500,
      slidePosition: 100
    });
  });

  $('.imgslider .button1').click(function() {
    window.location = "info/info1.html";
  });
  
  $('.imgslider .button2').click(function() {
    window.location = "info/info2.html";
  });
    
  $('.imgslider .button3').click(function() {
    window.location = "info/info3.html";
  });
         
});

  // Validating Empty Field
  function check_empty() {
    if (document.getElementById('name').value == "" ||       document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } else {
      document.getElementById('form').submit();
      alert("Form Submitted Successfully...");
    }
  }
  //Function To Display Popup
  function div_show() {
    document.getElementById("abc").style.display = "block";
  }
  
  //Function to Hide Popup
  function div_hide(){
    document.getElementById('abc').style.display = "none";
  }
