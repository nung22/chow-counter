import React from 'react';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

export default function FoodList(props) {
  const { removeFromDOM, foods } = props;

  return(
    <div className="overflow-x-auto">
      <h1 className='text-l font-semibold my-3'>We have quotes by:</h1>
      <table className="table w-96 text-center">
        <thead>
          <tr>
            <th>Food</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
        {foods.map( (food, i) => 
        <tr key={i} className="hover">
          <th>
            <Link to={`/foods/${food._id}`} className="link link-hover">{food.name}</Link>
          </th>
          <td className='flex justify-center gap-3'>
            <Link to={`/foods/${food._id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
            <DeleteButton foodId={food._id} successCallback={() => removeFromDOM(food._id)}/>
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}