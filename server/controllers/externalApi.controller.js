const axios = require("axios");

const getRandomRestaurant = (req, res) => {
  const location = req.query.location;
  const foodType = req.query.foodType;
  const price = req.query.price;
  const maxDistance = req.query.maxDistance;
  const options = {
    method: 'GET',
    url: `https://api.yelp.com/v3/businesses/search?location=${location}
    &term=restaurant&radius=${maxDistance}&categories=${foodType}&price=${price}
    &sort_by=best_match&limit=20`, 
    headers: {
      accept: 'application/json',
      Authorization: process.env.YELP_API_KEY
    }
  }
  axios.request(options)
    .then (response => {
      return res.json(response.data);
    })
    .catch(err => {
      return res.status(400).json(err);
  })
};

const getRandomRecipe = (req,res) => {
  const tags = req.query.tags;
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {number: '1', tags: tags},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  axios.request(options)
  .then(response => {
    return res.json(response.data);
  })
  .catch(err => {
    return res.status(400).json(err);
  });
}

const getFoodInfo = (req,res) => {
  const ingredient = req.query.ingredient;
  const options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
    params: {ingr: ingredient},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };
  axios.request(options)
  .then(response => {
    return res.json(response.data);
  })
  .catch(err => {
    return res.status(400).json(err);
  });
}

module.exports = {
  getRandomRestaurant,
  getRandomRecipe,
  getFoodInfo
};
