$(document).ready(function() {
    console.log( "ready!" );
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
          console.log( "ready!" );
    } else {
    	    console.log( "ready!" );
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

});