(function(){
  'use static';

  window.addEventListener("DOMContentLoaded", init, false);

  function init(){
    var menuButton = document.querySelector('body>button');

    menuButton.addEventListener("click", function(){
      var navbar = document.querySelector('body>nav');
      var fader = document.getElementById('fader');

      var element = document.querySelector('body>nav'),
          style = window.getComputedStyle(element),
          left = style.getPropertyValue('left');

      if(left == "0px"){
        navbar.style.left = "-50vw";
        fader.style.display = "none";
      } else {
        navbar.style.left = "0px";
        fader.style.display = "block";
      }

    },false)
  }

})();
