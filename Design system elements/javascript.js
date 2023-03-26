'use strict'

function search() {
    var searchQuery = document.getElementById("search").value;
    // Use the search to query a database or API for results presently not that activated because i don't have any data base
    // Display the results on the page
    document.getElementById("search-results").innerHTML = "<p>Search results for '" + searchQuery + "'</p>";
  }