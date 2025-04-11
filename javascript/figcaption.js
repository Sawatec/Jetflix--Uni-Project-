(function(){
  'use strict';

  window.addEventListener("DOMContentLoaded", init, false);

  function init(){
    toggleFigcaption();
  }

  function toggleFigcaption(){
    var images = document.querySelectorAll("#inputs img");
    console.log(images.length);

    for(var i = 0; i < images.length; i++){
      images[i].addEventListener("mouseover",function(evt){
        var parent = evt.target.parentElement;
        var caption = parent.children[1];
        caption.style.opacity = "1";
        }, false);

        images[i].addEventListener("mouseout",function(evt){
          var parent = evt.target.parentElement;
          var caption = parent.children[1];
          caption.style.opacity = "0";
          }, false);
    }

  }

})();
