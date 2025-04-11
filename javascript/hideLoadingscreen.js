(function(){
  'use strict';

  window.addEventListener("load", init, false);

  function init(){
    setTimeout(hide, 500);
  }

  function hide(){
      var screen = document.getElementById("loading-screen");
      screen.style.display = "none";
  }

})();
