
var url = "https://api.punkapi.com/v2/beers"
// function searchRepositories

$(document).ready(function(){
 
  $.get(url, function(response) {

    
   
    var data = response.map((entry) => {
    return (`<div class="beer" id="${entry.id}" data-name="${entry.name}" data-tagline="${entry.tagline}">
      <img src=${entry.image_url} height=75% width=25%></div>`)

  
    })
       	$("#list").append(data)
    
  	   	var attr = $("div.beer").each(function(e){
  	   		$(this).on("mouseover", function(event) {
  	   			console.log($(this)[0].attributes[2].value)
  	   			console.log($(this)[0].attributes[3].value)
  			})

  	   		$("div.beer").append(attr)
  	   	
  			
  		})
  	})
 })
  	
  // 	$(`[data-id='${event.target.dataset.id}']`).text(`name: ${event.target.dataset.name}`)
  // }))
  // .then(document.getElementById("list").addEventListener("mouseout", function(event) {
  // 	$(`[data-id='${event.target.dataset.id}']`).text(`${event.target.dataset.image_url}`)
  // }))
  // .attributes.2.nodeValue)



