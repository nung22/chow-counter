import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { foodId, successCallback } = props;
    
    const deleteFood = e => {
        axios.delete(`http://localhost:8000/api/foods/${foodId}`)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
      <button className="btn btn-outline btn-error btn-sm"onClick={e => deleteFood(foodId)}>
        Delete
      </button>
    )
}

