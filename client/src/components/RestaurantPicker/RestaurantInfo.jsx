import React from "react";
import { useNavigate } from 'react-router-dom'

export default function RestaurantInfo(props) {
  const { restaurant } = props;
  const navigate = useNavigate();
  
  return (
    <div className="w-96 sm:pt-12">
      {Object.keys(restaurant).length !== 0 && 
        <div className="flex flex-col items-start gap-2 bg-base-300 rounded-2xl p-5">
          <h1 className="text-2xl font-bold text-accent">{restaurant.name} <span className="text-base-content">({restaurant.price})</span></h1>
          <img className="rounded-lg border-2 my-1" width={350} src={restaurant.image_url} alt={restaurant.name} />
          <p className="text-xl font-semibold">{restaurant.location.display_address[0]}<br/>{restaurant.location.display_address[1]}<br/>{restaurant.location.display_address[2]}</p>
          <p className="text-lg font-semibold text-success">{restaurant.display_phone}</p>
          <div>
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
    </div>
  );
}
