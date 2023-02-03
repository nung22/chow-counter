import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserForm from "../../components/UserForm";

export default function Update() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(user)
        setLoaded(true);
      });
    }, [id]);
    
    const updateUser = user => {
      axios
      .put(`http://localhost:8000/api/users/${id}`, user)
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
      <Link to={`/`} className='btn btn-sm btn-accent w-28 mb-16'>Home</Link>
      {errors.map((err, index) => 
      <p className="text-white bg-red-500 px-3 py-1 rounded-lg mb-2 text-xs" key={index}>{err}</p>
      )}
      {loaded && (
        <UserForm
          submitName="Update User"
          onSubmitProp={updateUser}
          initialName={user.name}
          initialBrand={user.brand}
          initialCalories={user.calories}
          initialTotalFat={user.totalFat}
          initialSaturatedFat={user.saturatedFat}
          initialCholesterol={user.cholesterol}
          initialSodium={user.sodium}
          initialCarbohydrates={user.carbohydrates}
          initialFiber={user.fiber}
          initialSugar={user.sugar}
          initialProtein={user.protein}
        />
      )}
    </div>
  );
};