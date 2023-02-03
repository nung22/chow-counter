import React from 'react';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

export default function UserList(props) {
  const { removeFromDOM, users } = props;

  return(
    <div className="">
      <h1 className='text-l font-semibold my-3'>We have quotes by:</h1>
      <table className="table w-96 text-center">
        <thead>
          <tr>
            <th>User</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
        {users.map( (user, i) => 
        <tr key={i} className="hover">
          <th>
            <Link to={`/chowcounter/users/${user._id}`} className="link link-hover">{user.name}</Link>
          </th>
          <td className='flex justify-center gap-3'>
            <Link to={`/chowcounter/users/${user._id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
            <DeleteButton userId={user._id} successCallback={() => removeFromDOM(user._id)}/>
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}