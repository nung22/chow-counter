import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


export default function RecipeNavigator() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [random, setRandom] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onSearch = e => {
    if(random) setIngredients([]);
    e.preventDefault();
    let url;
    random === true ? url = "random.php" : url = `search.php?s=${searchQuery}`;
    console.log(url)
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/${url}`)
    .then( res => {
      setRecipe(res.data.meals[0]);
      for(let i = 1; i <= 20; i++ ) {
        if(res.data.meals[0][`strIngredient${i}`].length === 0){
          break;
        }
        ingredients.push(res.data.meals[0][`strMeasure${i}`] + " " + res.data.meals[0][`strIngredient${i}`]);
      }
      console.log(res.data.meals[0]);
      setIngredientList(ingredients);
      setRandom(false);
      setLoaded(true);
    })
    .catch( err => {
      console.log(err);
    }) 
    setIngredients([]);
    setSearchQuery("");
    e.target.reset();
  } 

  return (
    <div style={{width: "50rem"}} className="flex flex-col items-center">
      <div className="flex gap-10">
        <form className="form-control" onSubmit={onSearch}>
          <div className="input-group">
            <input type="text" placeholder="Search..." className="input input-bordered text-xl"
            onChange={e => setSearchQuery(e.target.value)} value={searchQuery}/>
            <button className="btn btn-square" type="submit" onClick={() => setIngredients([])}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </form>
        <button onMouseOver={() => setRandom(true)} onMouseOut={ () => setRandom(false)} 
        onClick={onSearch} className="btn btn-secondary rounded-3xl">Random Recipe</button>
      </div>

      {loaded &&
      <div className="flex flex-col items-start text-lg mt-16 gap-6 bg-base-300 p-10 rounded-2xl">
        <h1 className="text-4xl font-bold">{recipe.strMeal}</h1>
        <img className="rounded-2xl" width={300} src={`${recipe.strMealThumb}`} alt=""/>

        <h3 className="font-semibold text-2xl underline">Ingredients</h3>
        <ul className="grid grid-cols-3 gap-x-8 px-4 text-base">
          {ingredientList.map( (ingredient, i) => 
          <li className="list-disc" key={i}>{ingredient}</li>
          )}
        </ul>

        <h3 className="font-semibold text-2xl underline">Instructions</h3>
        <ol className="flex flex-col gap-4">
          {recipe.strInstructions.split(". ").map( (step, i) =>
            <li key={i}><strong>{i+1}.</strong> 
              <span className="ml-2">{step}
              {step[step.length - 1] !== "." && step[step.length - 1] !== "!" && "."}
              </span>
            </li>
          )
          }
        </ol>
      </div>
      }
    </div>
  );
}
