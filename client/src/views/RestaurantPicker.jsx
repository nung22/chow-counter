import React, { useState } from 'react';
import RestaurantForm from '../components/RestaurantPicker/RestaurantForm';
import RestaurantInfo from '../components/RestaurantPicker/RestaurantInfo';

export default function RestaurantPicker () {
  const [filters, setFilters] = useState({
    location: "",
    foodType: "",
    price: "",
    maxDistance: "1600"
  });
  const [randomNum, setRandomNum] = useState(0);

  const filtersChanged = (newFilters) => {
    setFilters(newFilters);
    setRandomNum(Math.floor(Math.random() * 100));
  }
  return(
    <div className='flex flex-col gap-5 items-center sm:flex-row sm:items-start'>
      <RestaurantForm setFilters={filtersChanged}/>
      <RestaurantInfo filters={filters} newSearch={randomNum}/>
    </div>
  )
}
