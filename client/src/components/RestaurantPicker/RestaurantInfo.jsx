import React,{ useState, useEffect } from "react";
import axios from 'axios';
import noRestaurants from "./assets/no-restaurants-1.gif"


export default function RestaurantInfo(props) {
  const { filters, newSearch } = props;
  const [restaurant, setRestaurant] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: "http://localhost:8000/externalApi/random-restaurant", 
      params: {
        location: filters.location,
        foodType: filters.foodType.split(" ").join().toLowerCase(),
        price: filters.price,
        maxDistance: filters.maxDistance
      }
    }
    axios.request(options)
      .then(response => {
        if(response.data.businesses.length === 0) {
          setRestaurant({});
          setNoResults(true);
        } else {
          setNoResults(false);
          const randomNumber = Math.floor(Math.random() * response.data.businesses.length);
          const results = response.data.businesses;
          const result = results[randomNumber];
          setRestaurant(result);
          setLoaded(true);
        }
      })
      .catch(err => {
        console.error(err);
      })
    
  }, [newSearch]);

  return (
    <div className="w-80 sm:w-96 sm:pt-12">
      {loaded && Object.keys(restaurant).length !== 0 && 
        <div className="flex flex-col items-start gap-2 bg-base-300 rounded-2xl p-5">
          <h1 className="text-2xl font-bold text-accent">{restaurant.name}<br/><span className="text-base-content font-semibold text-xl">~{(restaurant.distance/1600).toPrecision(2)} miles away ({restaurant.price})</span></h1>
          <div className="flex gap-2 flex-wrap">
            {restaurant.categories.map( (category, i) =>
              <span key={i} className="badge badge-primary font-semibold p-2">{category.title}</span>
            )}
          </div>
          <img className="rounded-lg border-2 my-1" width={350} height={350} src={restaurant.image_url} alt={restaurant.name} />
          <p className="text-xl font-semibold">{restaurant.location.display_address[0]}<br/>{restaurant.location.display_address[1]}
          <br/>{restaurant.location.display_address[2]}</p>
          <p className="text-lg font-semibold text-accent">{restaurant.display_phone}</p>
          <div className="bg-base-100 p-2 rounded-lg my-1">
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-1" checked={restaurant.rating === 0.5}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-2" checked={restaurant.rating === 1}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-1" checked={restaurant.rating === 1.5}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-2" checked={restaurant.rating === 2}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-1" checked={restaurant.rating === 2.5}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-2" checked={restaurant.rating === 3}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-1" checked={restaurant.rating === 3.5}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-2" checked={restaurant.rating === 4}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-1" checked={restaurant.rating === 4.5}/>
              <input type="radio" name="rating-10" className="bg-red-500 mask mask-star-2 mask-half-2" checked={restaurant.rating === 5}/>
            </div>
            <p className="ml-4 font-semibold text-lg">{restaurant.review_count} Reviews</p>
          </div>
          <a href={restaurant.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-36 text-lg">View Page</a>
        </div>
      }
      {noResults &&
        <div className="bg-base-300 p-5 rounded-xl text-xl font-semibold">
          <img className="rounded-xl" src={noRestaurants} alt="No restaurants found." />
          <p className="p-5 bg-base-100 rounded-xl mt-5">It looks like no restaurants meet those conditions 😞 <br/><br/>Change your search parameters and try again!</p>
        </div>
      }
    </div>
  );
}
