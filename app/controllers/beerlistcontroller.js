class BeerListController {
	constructor($target, name, tagline, image_url, abv, food_pairing) {
		this.$target
    	this.name = name
    	this.tagline = tagline
    	this.image_url = image_url
    	this.abv = abv
    	this.food_pairing = food_pairing
    	this.attachListeners()
    	this.render()
  }

  render(){
  	BeerView

  }
}