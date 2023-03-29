'use strict'

// function search() {
//     var searchQuery = document.getElementById("search").value;
//     // Use the search to query a database or API for results presently not that activated because i don't have any data base
//     // Display the results on the page
//     document.getElementById("search-results").innerHTML = "<p>Search results for '" + searchQuery + "'</p>";
//   }

var acc = document.getElementsByClassName("comp-accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }