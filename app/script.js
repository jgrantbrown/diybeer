
var url = "https://api.punkapi.com/v2/beers"
// function searchRepositories

$(document).ready(function(){
 
  $.get(url, function(response) {
    //make beer
    //make beer into divs

    
   
    var data = response.map((entry) => {

    return (`<div class="beer" id="${entry.id}" data-name="${entry.name}" data-tagline="${entry.tagline}">
    			 <img onmouseover="beerPopUp(event)" src=${entry.image_url} height=75% width=25%>
    	        <div class="beer popup" id="${entry.id}" data-name="${entry.name}" data-tagline="${entry.tagline}">
     			      (${entry.name})
  	   			    (${entry.tagline})
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




