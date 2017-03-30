class Beer {
	constructor(id, name, tagline, image_url, abv, food_pairing) {
		this.id = id
    	this.name = name
    	this.tagline = tagline
    	this.image_url = image_url
    	this.abv = abv
    	this.food_pairing = food_pairing
    	store.push(this)
  }
}