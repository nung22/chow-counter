import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodList from "../components/FoodList";
import { Link } from 'react-router-dom'


export default function Main() {
  const [foods, setFoods] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // function to compare food names & sort by alphabetical order
  const compareName = (a, b) => {
    return a.name < b.name
      ? -1
      : 1;
  }
  
  useEffect(() => {
    axios
    .get("http://localhost:8000/api/foods")
    .then((res) => {
      setFoods(res.data.sort(compareName));
      console.log(foods);
      setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [loaded]);

  const removeFromDOM = (foodId) => {
    setFoods(foods.filter((food) => food._id !== foodId));
  };

  return (
    <div className="flex flex-col items-center">
      {/* {loaded && (
      <>
        <div className="flex gap-5">
          <Link to={`/chowcounter/foods/new`} className='btn btn-sm btn-accent'>Add Food</Link>
        </div>
        <FoodList foods={foods} removeFromDOM={removeFromDOM} />
      </>
      )} */}
    </div>
  );
}
