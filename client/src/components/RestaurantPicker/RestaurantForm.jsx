import React, { useState } from "react";

export default function RestaurantForm(props) {
  const [filters, setFilters] = useState({
    location: "",
    foodType: "",
    price: "",
    maxDistance: "1600"
  });
    

  const onSubmitHandler = e => {
    e.preventDefault();
    props.setFilters(filters)
  }
  
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Restaurant Generator</h1>
      <form className="flex flex-col gap-5 mt-4 bg-base-300 rounded-xl p-6 w:80 sm:w-96" onSubmit={onSubmitHandler}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What zip code are you in?</span>
          </label>
          <input type="text" placeholder="Enter here" className="input input-bordered bg-base-100" 
          onChange={e => setFilters({...filters, location: e.target.value})} value={filters.location}/>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What kind of food do you want?</span>
          </label>
          <input type="text" placeholder="Enter here" className="input input-bordered bg-base-100" 
          onChange={e => setFilters({...filters, foodType: e.target.value})} value={filters.foodType}/>
        </div>
        <div>
          <label className="label">
            <span className="label-text">How much do you want to spend?</span>
          </label>
          <div className="form-control grid grid-cols-2 gap-2 bg-base-100 p-3 input input-bordered h-max">
            <label className="cursor-pointer flex items-center gap-3">
              <input type="radio" name="price" className="radio checked:bg-orange-500" 
              onChange={e => setFilters({...filters, price: "1"})}/>
              <span className="label-text">$</span>
            </label>
            <label className="cursor-pointer flex items-center gap-3">
              <input type="radio" name="price" className="radio checked:bg-orange-500" 
              onChange={e => setFilters({...filters, price: "2"})}/>
              <span className="label-text">$$</span>
            </label>
            <label className="cursor-pointer flex items-center gap-3">
              <input type="radio" name="price" className="radio checked:bg-orange-500" 
              onChange={e => setFilters({...filters, price: "3"})}/>
              <span className="label-text">$$$</span>
            </label>
            <label className="cursor-pointer flex items-center gap-3">
              <input type="radio" name="price" className="radio checked:bg-orange-500" 
              onChange={e => setFilters({...filters, price: "4"})}/>
              <span className="label-text">$$$$</span>
            </label>
          </div>
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">How far do you want to travel? </span>
          </label>
          <div className="input input-bordered p-3 h-max">
            <p className="text-center mb-3">Max Distance: {filters.maxDistance/1600} mi</p>
            <input type="range" min="1" max="25" className="range range-sm range-success" step="1" 
            onChange={e => setFilters({...filters, maxDistance: e.target.value * 1600})} value={filters.maxDistance/1600}/>
          </div>
        </div>
        <div className="flex justify-around">
          <input className="btn btn-accent btn-sm" type="submit" value="Generate"/>
        </div>
      </form>
      
    </div>
  );
}
