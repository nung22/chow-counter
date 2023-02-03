import React, { useState } from "react";

export default function RecipeForm(props) {
  const cuisines = ["african", "chinese", "japanese", "korean", "vietnamese", "thai", "indian", "british", "irish", 
    "french", "italian", "mexican", "spanish", "middle Eastern", "jewish", "american", "cajun", "southern", "greek", 
    "german", "nordic", "eastern European", "caribbean", "latin American"];
  const diets = ["pescetarian", "lacto Vegetarian", "ovo Vegetarian", "vegan", "paleo", "primal", "vegetarian"];
  const intolerances = ["dairy", "egg", "gluten", "peanut", "sesame", "seafood", "shellfish", "soy", "sulfite", "tree Nut", "wheat"];
  const types = ["main Course", "side Dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"]

  const [filters, setFilters] = useState({
    cuisine: "",
    diet: "",
    intolerance: "",
    type: "",
  });

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(filters);
    props.setTags(filters);
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Recipe Generator</h1>
      <form className="flex flex-col gap-5 mt-4 bg-base-300 rounded-xl p-6 w:80 sm:w-96" onSubmit={onSubmitHandler}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select a cuisine: <span className="font-semibold text-secondary">(optional)</span></span>
          </label>
          <select className="select select-bordered w-full max-w-xs" onChange={e => setFilters({...filters, cuisine: e.target.value})}>
            <option selected value="">None</option>
            {cuisines.map( (item, i) => 
              <option value={item} key={i}>{item[0].toUpperCase() + item.slice(1)}</option>
            )}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select a particular diet: <span className="font-semibold text-secondary">(optional)</span></span>
          </label>
          <select className="select select-bordered w-full max-w-xs" onChange={e => setFilters({...filters, diet: e.target.value})}>
            <option selected value="">None</option>
            {diets.map( (item, i) => 
              <option value={item} key={i}>{item[0].toUpperCase() + item.slice(1)}</option>
            )}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select an intolerance: <span className="font-semibold text-secondary">(optional)</span></span>
          </label>
          <select className="select select-bordered w-full max-w-xs" onChange={e => setFilters({...filters, intolerance: e.target.value})}>
            <option selected value="">None</option>
            {intolerances.map( (item, i) => 
              <option value={item} key={i}>{item[0].toUpperCase() + item.slice(1)}</option>
            )}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select a dish type: <span className="font-semibold text-secondary">(optional)</span></span>
          </label>
          <select className="select select-bordered w-full max-w-xs" onChange={e => setFilters({...filters, type: e.target.value})}>
            <option selected value="">None</option>
            {types.map( (item, i) => 
              <option value={item} key={i}>{item[0].toUpperCase() + item.slice(1)}</option>
            )}
          </select>
        </div>

        <div className="flex justify-around">
          <input className="btn btn-accent btn-sm" type="submit" value="Generate"/>
        </div>
      </form>
      
    </div>
  );
}
