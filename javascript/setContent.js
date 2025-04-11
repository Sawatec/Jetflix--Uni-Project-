(function(){
  'use strict';

  window.addEventListener("load", init, false);

  function init(){
    var inputs = document.getElementById("inputs");
    var sections = inputs.children;

    setMovies();

  }

  function setMovies(){
    var str = JSON.stringify(test);

    var data = JSON.parse(str);
    console.log(data[0].name);

    var inputs = document.getElementById("inputs");
    var section = inputs.children[0];
    var img = section.querySelectorAll("article>figure>img");

    for(var i = 0; i < img.length; i++){

    }
  }

})();
