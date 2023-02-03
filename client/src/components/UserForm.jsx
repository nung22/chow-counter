import React, { useState } from "react";

export default function UserForm(props) {
  //import form values & methods via props
  const { 
    initialName,
    initialBrand,
    initialCalories,
    initialTotalFat,
    initialSaturatedFat,
    initialCholesterol,
    initialSodium,
    initialCarbohydrates,
    initialFiber,
    initialSugar,
    initialProtein,
    onSubmitProp,
    submitName
  } = props;

  //keep track of what is being typed via useState hook
  const [user, setUser] = useState({
    name: initialName,
    brand: initialBrand,
    calories: initialCalories,
    totalFat: initialTotalFat,
    saturatedFat: initialSaturatedFat,
    cholesterol: initialCholesterol,
    sodium: initialSodium,
    carbohydrates: initialCarbohydrates,
    fiber: initialFiber,
    sugar: initialSugar,
    protein: initialProtein
  });

  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    onSubmitProp(user);
  };
  // onChange to update title, price, and description

  return (
  <form className="flex flex-col gap-5 mt-4 bg-base-300 rounded-xl p-6" onSubmit={onSubmitHandler}>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered bg-base-200" style={{width:'25rem'}} 
      onChange={e => setUser({...user, name: e.target.value})} value={user.name}/>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Brand</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered bg-base-200" style={{width:'25rem'}} 
      onChange={e => setUser({...user, brand: e.target.value})} value={user.brand}/>
    </div>
    <div className="grid grid-cols-3 gap-2">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Calories (kcal)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs" 
        onChange={e => setUser({...user, calories: e.target.value})} value={user.calories}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Total Fat (g)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, totalFat: e.target.value})} value={user.totalFat}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Saturated Fat (g)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, saturatedFat: e.target.value})} value={user.saturatedFat}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Cholesterol (mg)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, cholesterol: e.target.value})} value={user.cholesterol}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Sodium (mg)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, sodium: e.target.value})} value={user.sodium}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Carbohydrates (g)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, carbohydrates: e.target.value})} value={user.carbohydrates}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Fiber (g)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, fiber: e.target.value})} value={user.fiber}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Sugar (g)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, sugar: e.target.value})} value={user.sugar}/>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Protein (g)</span>
        </label>
        <input type="text" placeholder="" className="input input-bordered bg-base-200 w-32 max-w-xs"
        onChange={e => setUser({...user, protein: e.target.value})} value={user.protein}/>
      </div>
    </div>
    <div className="flex justify-center">
      <input className="btn btn-accent btn-sm" type="submit" value={submitName}/>
    </div>
  </form>
  )
}
