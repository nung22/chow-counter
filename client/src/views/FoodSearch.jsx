import React,{ useState } from "react";
import axios from 'axios';
import noFoods from "../assets/no-foods.gif"


export default function FoodSearch() {
  const [ingredient, setIngredient] = useState("");
  const [foodInfo, setFoodInfo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const onSubmitHandler = e => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: "http://localhost:8000/externalApi/search-ingredient", 
      params: {
        ingredient: ingredient
      }
    }
    axios.request(options)
    .then(response => {
      if(response.data.parsed[0] === undefined) {
        setFoodInfo({});
        setNoResults(true);
      } else {
        console.log(response.data)
        setNoResults(false);
        const result = response.data.parsed[0].food;
        setFoodInfo(result);
        setLoaded(true);
      }
    })
    .catch(err => {
      console.error(err);
    })
  setIngredient("");
  e.target.reset();
  }

  return (
    <div className='flex flex-col gap-5 items-center sm:flex-row sm:items-start'>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-5 pr-14">Find a Food by Name</h1>
        <form className="sm:w-96" onSubmit={onSubmitHandler}>
          <div className="input-group">
            <input type="text" placeholder="Search..." className="input input-bordered text-xl"
            onChange={e => setIngredient(e.target.value)}/>
            <button className="btn btn-square" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </form>
      </div>
      <div className="w-72 sm:pt-12">
        {loaded && Object.keys(foodInfo).length !== 0 && 
          <div className="flex flex-col items-start gap-5 bg-base-300 rounded-2xl p-5">
            <h1 className="text-3xl font-bold text-accent mb-3">{foodInfo.label}</h1>
            <img className="rounded-lg border-2" width={250} height={350} src={foodInfo.image} alt={foodInfo.label} />
            <div className="flex font-semibold gap-3 bg-base-100 p-3 rounded-xl w-full">
              <div className="font-extrabold text-right">
                <p>Calories</p>
                <p>Protein</p>
                <p>Fat</p>
                <p>Carbs</p>
                <p>Fiber</p>
              </div>
              <div>
                <p>{foodInfo.nutrients.ENERC_KCAL} kcal</p>
                <p>{foodInfo.nutrients.PROCNT} grams</p>
                <p>{foodInfo.nutrients.FAT} grams</p>
                <p>{foodInfo.nutrients.CHOCDF} grams</p>
                <p>{foodInfo.nutrients.FIBTG} grams</p>
              </div>
            </div>

            <a href={`https://www.edamam.com/results/recipes/?search=${foodInfo.label}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg">View Recipes</a>
          </div>
        }
        {noResults &&
          <div className="bg-base-300 p-5 rounded-xl text-xl font-semibold">
            <img className="rounded-xl" src={noFoods} alt="No foods found." />
            <p className="p-5 bg-base-100 rounded-xl mt-5">It looks like there's no info for that food 😞 <br/><br/>Enter a different name and try again!</p>
          </div>
        }
      </div>
    </div>
  );
}
