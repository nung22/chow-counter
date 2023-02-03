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
      Authorization: 'Bearer 6_mHmn6zJcN_9d5MUL3yeme-og9vdv1xNHg9J5PL_qNWlYY_VzEr0UfYE5JhpJ5xT10rnmOKRf_t8CZ6w3JjmxfxYlzzoyicVq_YiAEfiOXpdTd0xDM9z3JSkevaY3Yx'
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
      'X-RapidAPI-Key': '8ac42f2888mshc734a537dcdd340p1d6cedjsn984f0a109b3e',
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
      'X-RapidAPI-Key': '8ac42f2888mshc734a537dcdd340p1d6cedjsn984f0a109b3e',
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
