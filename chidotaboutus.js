window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;
    document.getElementById('size').innerHTML
    = "width :" + myWidth + "px"
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }}

  
