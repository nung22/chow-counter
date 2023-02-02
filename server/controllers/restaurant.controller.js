const axios = require("axios");

const getRandomRestaurant = (req, res) => {
  const location = req.query.location;
  const foodType = req.query.foodType;
  const price = req.query.price;
  const maxDistance = req.query.maxDistance;

  // console.log(location, foodType, price, maxDistance)
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
      // console.log(response.data)
      res.json(response.data);
    })
    .catch(err => {
      console.error(err);
  })
};

module.exports = {
  getRandomRestaurant
};
