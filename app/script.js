
var url = "https://api.punkapi.com/v2/beers"
// function searchRepositories

$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get(url, function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    let html = []
    response.forEach((entry) => {
      html.push(`<li>${entry.name}</li>`)
    })
    
    $("#list").append(html.join(""))
  });
})
