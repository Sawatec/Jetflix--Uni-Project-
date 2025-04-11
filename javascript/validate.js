(function(){
  'use strict';

  window.addEventListener("DOMContentLoaded",init, false);

  function init(){
    var button = document.getElementById("send");

    button.addEventListener("click", function(evt){
      var inputs = document.querySelectorAll("body>form input");
      evt.preventDefault();

      for(var i = 0; i < inputs.length - 1; i++){
        var text = inputs[i].value;
        if(text == ""){
          inputs[i].style.border = "1px solid red";
          inputs[i].placeholder = "Bitte ausfüllen";
        } else {
          inputs[i].style.border = "none";
        }
      }
    }, false);
  }

})();
