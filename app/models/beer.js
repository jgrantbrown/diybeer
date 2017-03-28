class Beer {
	constructor(name, tagline, image_url, abv, food_pairing) {
    this.name = name
    this.tagline = tagline
    this.image_url = image_url
    this.abv = abv
    this.food_pairing = food_pairing
  }

  static find(id){
    return $.getJSON(`"https://api.punkapi.com/v2/beers/${id}`).
                then((beer) => {
                  new Beer(beer.name, beer.tagline, beer.image_url, beer.abv, beer.food_pairing)
                })
  }
}
