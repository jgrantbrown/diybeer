
var url = "https://api.punkapi.com/v2/beers"
// function searchRepositories

$(document).ready(function(){
 
  $.get(url, function(response) {

    
   
    var data = response.map((entry) => {

    return (`<div class="beer" id="${entry.id}" data-name="${entry.name}" data-tagline="${entry.tagline}">
    			<img onmouseover="beerPopUp(this)" src=${entry.image_url} height=75% width=25%>
    		</div>
    		<div class="beer popup" id="${entry.id}" data-name="${entry.name}" data-tagline="${entry.tagline}">
    	 	<span class="popuptext" id="myPopup">
     			(${entry.name})
  	   			(${entry.tagline})
      		</span>
      		</div>`)
  
    })
       	$("#list").append(data)
       	
    })
 })

function beerPopUp(event) {
	// ("myPopup").classList.toggle("show")
	var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
			
}


  	
  // 	$(`[data-id='${event.target.dataset.id}']`).text(`name: ${event.target.dataset.name}`)
  // }))
  // .then(document.getElementById("list").addEventListener("mouseout", function(event) {
  // 	$(`[data-id='${event.target.dataset.id}']`).text(`${event.target.dataset.image_url}`)
  // }))
  // .attributes.2.nodeValue)

  // $(this).on("click", function(event) {
  // 	   			return (`<div class="popuptext" id="myPopup"><div>($(this)[0].attributes[2].value)
  // 	   				<br>($(this)[0].attributes[3].value)></div></div>`)
  // 			})



