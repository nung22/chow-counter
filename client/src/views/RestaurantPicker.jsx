import React, { useState } from 'react';
import RestaurantForm from '../components/RestaurantPicker/RestaurantForm';
import RestaurantInfo from '../components/RestaurantPicker/RestaurantInfo';

export default function RestaurantPicker () {
  const [restaurant, setRestaurant] = useState({});

  const restaurantSearched = (newRestaurant) => {
    setRestaurant(newRestaurant);
  }
  return(
    <div className='flex flex-col gap-5 items-center sm:flex-row sm:items-start'>
      <RestaurantForm onSearch={restaurantSearched}/>
      <RestaurantInfo restaurant={restaurant}/>
    </div>
  )
}
