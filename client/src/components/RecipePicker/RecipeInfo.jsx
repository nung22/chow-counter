import React,{ useState, useEffect } from "react";
import axios from 'axios';
import noRecipes from "./assets/no-recipes.gif"


export default function RecipeInfo(props) {
  const { tags, newSearch } = props;
  const [recipe, setRecipe] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [noResults, setNoResults] = useState(true);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: "http://localhost:8000/externalApi/random-recipe", 
  //     params: {
  //       tags: tags.join(",")
  //     }
  //   }
  //   axios.request(options)
  //     .then(response => {
  //       if(response.data.recipes.length === 0) {
  //         setRecipe({});
  //         setNoResults(true);
  //       } else {
  //         console.log(response.data)
  //         setNoResults(false);
  //         const result = response.data.recipes[0];
  //         setRecipe(result);
  //         setLoaded(true);
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
    
  // // }, [newSearch]);
  // }, []);

  return (
    <div className="w-80 sm:w-96 sm:pt-12">
      {loaded && Object.keys(recipe).length !== 0 && 
        <div className="flex flex-col items-start gap-2 bg-base-300 rounded-2xl p-5">
          <h1 className="text-3xl font-bold text-accent mb-3">{recipe.title}</h1>
          <div className="flex gap-2 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {recipe.cuisines !== undefined && recipe.cuisines.map( cuisine =>
                <span className="badge badge-success font-semibold p-2">{cuisine}</span>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {recipe.dishTypes!== undefined && recipe.dishTypes.map( dishType =>
                <span className="badge badge-info font-semibold p-2">{dishType}</span>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {recipe.diets !== undefined && recipe.diets.map( diet =>
                <span className="badge badge-warning font-semibold p-2">{diet}</span>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {recipe.occasions !== undefined && recipe.occasions.map( occasion =>
                <span className="badge badge-error font-semibold p-2">{occasion}</span>
              )}
            </div>
          </div>
          <img className="rounded-lg border-2 my-1" width={350} height={350} src={recipe.image} alt={recipe.title} />
          <p className="font-semibold"><span className="font-bold text-secondary">Ready in:</span> {recipe.readyInMinutes} minutes</p>
          <p className="font-semibold"><span className="font-bold text-secondary">Yield:</span> {recipe.readyInMinutes} minutes</p>
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg">View Full Recipe</a>
        </div>
      }
      {noResults &&
        <div className="bg-base-300 p-5 rounded-xl text-xl font-semibold">
          <img className="rounded-xl" src={noRecipes} alt="No recipes found." />
          <p className="p-5 bg-base-100 rounded-xl mt-5">It looks like no recipes meet those conditions 😞 <br/><br/>Change your search parameters and try again!</p>
        </div>
      }
    </div>
  );
}
