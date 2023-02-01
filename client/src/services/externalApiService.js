/*
Separation of concerns:
Components only need to be concerned with receiving and rendering data,
they don't need to be concerned with how to make API calls.

This service file is concerned only with how to make API calls to our API
and only returns the data.

Combining a service file with the react-query package's useQuery hook is
ideal for larger projects.
*/

import axios from 'axios'

const getNutrition = async (ingredient) => {
  const options = {
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
    params: {ingr: ingredient},
    headers: {
      'X-RapidAPI-Key': '8ac42f2888mshc734a537dcdd340p1d6cedjsn984f0a109b3e',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };
  
  axios.get(options)
    .then(function (res) {
      console.log(res.data);
      return res.data;
    })
    .catch(function (err) {
      console.error(err);
  });
}


export {
  getNutrition
};