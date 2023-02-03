import React, { useState } from 'react';
import stockPhoto from '../assets/squirtle-squad.jpg'
import logo from '../assets/chow-counter-logo.png'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className="navbar py-4 mb-10 font-semibold text-lg bg-base-300 sm:px-10 lg:px-36">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-base-300 rounded-box w-52">
            <li><Link to={`/chowcounter/restaurants`}>Restaurant Picker</Link></li>
            <li><Link to={`/chowcounter/recipes`}>Recipe Picker</Link></li>
            {/* <li><Link>Cocktail Picker</Link></li> */}
            <li><Link to={'/chowcounter/food-search'} >Search Foods</Link></li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-link h-14 normal-case font-bold text-2xl" style={{margin:"-1.7rem"}}>
          <img src={logo} className="sm:w-64 w-48" alt="Chow Counter" />
        </Link>
      </div>
      <div className='navbar-end'>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <Link id='link-1' 
              onMouseOver={() => document.getElementById('link-1').classList.add("text-orange-500")} 
              onMouseOut={() => document.getElementById('link-1').classList.remove("text-orange-500")} 
              >
                Pickers
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </Link>
              <ul className="bg-base-300 text-base">
                <li><Link to={`/chowcounter/restaurants`}>Restaurants</Link></li>
                <li><Link to={`/chowcounter/recipes`}>Recipes</Link></li>
                {/* <li><Link>Cocktails</Link></li> */}
              </ul>
            </li>
            <li><Link id='link-2'
            onMouseOver={() => document.getElementById('link-2').classList.add("text-orange-500")} 
            onMouseOut={() => document.getElementById('link-2').classList.remove("text-orange-500")} 
            to={'/chowcounter/food-search'} >Search Foods</Link></li>
          </ul>
        </div>
        <div className="flex gap-2 sm:gap-5 items-center mx-3">
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={stockPhoto} alt="stock profile"/>
              </div>
            </label>
            <ul tabIndex={0} className="mt-5 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52">
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link>Settings</Link></li>
              <li><Link>Logout</Link></li>
            </ul>
          </div> */}
          <input type="checkbox" className="toggle toggle-sm toggle-warning" checked={isLightMode}
          onClick={() => {
            isLightMode
              ? setIsLightMode(false)
              : setIsLightMode(true);
            props.onThemeChange();
          }} />
        </div>
      </div>
    </div>
  )
}

export default NavBar;