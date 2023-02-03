import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../../components/DeleteButton';

export default function Detail() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id}`)
    .then(res => setUser(res.data))
    .catch(err => console.error(err));
  }, []);

  return(
    <div className='mt-24 text-lg flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-5 text-center'>{user.name} {user.brand.length > 0 && <span className=''>({user.brand})</span>}</h1>
      <div className='flex border-2 rounded-xl p-5 items-center bg-base-300' style={{width: '31rem'}}>
        <div className='text-center w-28'>
          <p className='font-semibold'>Calories</p>
          <p>{user.calories} kcal</p>
        </div>
        <div className='flex gap-4 border-x-2  px-6 py-3'>
          <div>
            <p className='font-semibold'>Total Fat</p>
            <p className='pl-4 font-semibold text-gray-500'>Sat. Fat</p>
            <p className='font-semibold'>Cholest.</p>
            <p className='font-semibold'>Sodium</p>
          </div>
          <div>
            <p>{user.totalFat}g</p>
            <p>{user.saturatedFat}g</p>
            <p>{user.cholesterol}mg</p>
            <p>{user.sodium}mg</p>
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
            <p>{user.carbohydrates}g</p>
            <p>{user.fiber}g</p>
            <p>{user.sugar}g</p>
            <p>{user.protein}g</p>
          </div>
        </div>
      </div>
      <div className='flex gap-4  mt-5'>
        <Link to={`/chowcounter/users/${id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
        <DeleteButton userId={user._id} successCallback={() => navigate('/')}/>
      </div>
    </div>
  )
}