import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

export default function Detail() {
  const [food, setFood] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/foods/${id}`)
    .then(res => setFood(res.data))
    .catch(err => console.error(err));
  }, [id]);

  return(
    <div className='mt-24 text-lg text-gray-200 flex flex-col items-center'>
      <Link to={`/`} className='btn btn-sm btn-accent w-28 mb-16'>Home</Link>
      <h1 className='text-2xl font-bold mb-5 text-center'>{food.name} {food.brand.length > 0 && <span className='text-gray-500'>({food.brand})</span>}</h1>
      <div className='flex border-2 rounded-xl p-5 items-center bg-gray-800' style={{width: '31rem'}}>
        <div className='text-center w-28'>
          <p className='font-semibold'>Calories</p>
          <p>{food.calories} kcal</p>
        </div>
        <div className='flex gap-4 border-x-2  px-6 py-3'>
          <div>
            <p className='font-semibold'>Total Fat</p>
            <p className='pl-4 font-semibold text-gray-500'>Sat. Fat</p>
            <p className='font-semibold'>Cholest.</p>
            <p className='font-semibold'>Sodium</p>
          </div>
          <div>
            <p>{food.totalFat}g</p>
            <p>{food.saturatedFat}g</p>
            <p>{food.cholesterol}mg</p>
            <p>{food.sodium}mg</p>
          </div>
        </div>
        <div className='flex gap-4 pl-6'>
          <div>
            <p className='font-semibold'>Carbs</p>
            <p className='pl-4 font-semibold text-gray-500'>Fiber</p>
            <p className='pl-4 font-semibold text-gray-500'>Sugar</p>
            <p className='font-semibold'>Protein</p>
          </div>
          <div>
            <p>{food.carbohydrates}g</p>
            <p>{food.fiber}g</p>
            <p>{food.sugar}g</p>
            <p>{food.protein}g</p>
          </div>
        </div>
      </div>
      <div className='flex gap-4  mt-5'>
        <Link to={`/chowcounter/foods/${id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
        <DeleteButton foodId={food._id} successCallback={() => navigate('/')}/>
      </div>
    </div>
  )
}