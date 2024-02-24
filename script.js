// script.js

// Load content into the main-content section based on the clicked link
function loadContent(pa) {
   const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           document.getElementById("main-content").innerHTML = this.responseText;
        }
   };
    xhttp.open("GET", page, true);
    xhttp.send();
}

// Welcome message on page load
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to CCMU Website!");
});
