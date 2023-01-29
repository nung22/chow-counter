import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FoodForm from "../components/FoodForm";

export default function Update() {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/foods/${id}`)
      .then((res) => {
        setFood(res.data);
        console.log(food)
        setLoaded(true);
      });
    }, [id]);
    
    const updateFood = food => {
      axios
      .put(`http://localhost:8000/api/foods/${id}`, food)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      });
    };

  return (
    <div>
      {errors.map((err, index) => 
      <p className="text-white bg-red-500 px-3 py-1 rounded-lg mb-2 text-xs" key={index}>{err}</p>
      )}
      {loaded && (
        <FoodForm
          submitName="Update Food"
          onSubmitProp={updateFood}
          initialName={food.name}
          initialBrand={food.brand}
          initialCalories={food.calories}
          initialTotalFat={food.totalFat}
          initialSaturatedFat={food.saturatedFat}
          initialCholesterol={food.cholesterol}
          initialSodium={food.sodium}
          initialCarbohydrates={food.carbohydrates}
          initialFiber={food.fiber}
          initialSugar={food.sugar}
          initialProtein={food.protein}
        />
      )}
    </div>
  );
};