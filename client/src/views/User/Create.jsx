import axios from "axios";
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../../components/UserForm";

export default function Create() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]); 

  const createUser = user => {
    axios
      .post(`http://localhost:8000/api/users/new`, user)
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
      <UserForm
        submitName="Add User"
        onSubmitProp={createUser}
        initialName=""
        initialBrand=""
        initialCalories=""
        initialTotalFat=""
        initialSaturatedFat=""
        initialCholesterol=""
        initialSodium=""
        initialCarbohydrates=""
        initialFiber=""
        initialSugar=""
        initialProtein=""
      />
    </div>
  );
};