var store = []
var url = "https://api.punkapi.com/v2/beers"
// function searchRepositories

$(document).ready(function(){
 
  $.get(url, function(response) {
    
      var data = response.map((entry) => {

        var beer = new Beer(entry.id, entry.name, entry.tagline, entry.image_url, entry.abv, entry.food_pairing)


    return (`<div class="beer" id="${beer.id}" data-name="${beer.name}" data-tagline="${beer.tagline}" data-abv="${beer.abv}" data-food_pairing="${beer.food_pairing}">
    			 <div class="imgbox"><img onmouseover="beerPopUp(event)" onmouseout="beerPopUp(event)" onclick="renderInfo(event)" src=${beer.image_url} height=200px width=78px>
    	        <div class="beer popup" id="${beer.id}" data-name="${beer.name}" data-tagline="${beer.tagline}">
     			      Name: ${beer.name}
  	   			    "${beer.tagline}""
      		    </div>
              <div class="extras" id="${beer.id}" data-abv="${beer.abv}" data-food_pairing="${beer.food_pairing}">
                ABV: ${beer.abv} <br>
                Food Pairing: ${beer.food_pairing}
              </div>
              </div> 
             </div>`)
  
    })
       	$("#list").append(data)
       	
    })
 })

function beerPopUp(event) {
 
	var popup = $(event.target).closest("div").children().eq(1)

  popup.toggleClass("show");
			
}

function renderInfo(event) {

  var extras = $(event.target).closest("div").children().eq(2)
  document.getElementById("#info").innerHTML=(extras.toggleClass("show"))
}


//animate css




