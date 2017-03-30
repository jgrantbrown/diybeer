
var url = "https://api.punkapi.com/v2/beers"
// function searchRepositories

$(document).ready(function(){
 
  $.get(url, function(response) {
    
      var data = response.map((entry) => {

        var beer = new Beer(entry.id, entry.name, entry.tagline, entry.image_url, entry.abv, entry.food_pairing)


    return (`<div class="beer" id="${beer.id}" data-name="${beer.name}" data-tagline="${beer.tagline}">
    			 <img onmouseover="beerPopUp(event)" onmouseout="beerPopUp(event)" src=${beer.image_url} height=75% width=25%>
    	        <div class="beer popup" id="${beer.id}" data-name="${beer.name}" data-tagline="${beer.tagline}">
     			      (${beer.name})
  	   			    (${beer.tagline})
      		    </div>
             </div>`)
  
    })
       	$("#list").append(data)
       	
    })
 })

function beerPopUp(event) {
 
	var popup = $(event.target).closest("div").children().eq(1)
  // debugger
  popup.toggleClass("show");
			
}




