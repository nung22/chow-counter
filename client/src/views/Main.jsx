import React from "react";
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'


export default function Main() {

  return (
    <div className="">
      <div className="bg-orange-400 w-screen py-3 font-bold sm:flex sm:gap-2 sm:justify-center text-base sm:text-xl" style={{marginTop:"-2.5rem"}}>
        <h1 className="text-center  text-yellow-900">Can't decide what to cook or where to eat?</h1>
        <h1 className="text-center  text-green-800"> We've got you covered!</h1>
      </div>
      <div className="hero" style={{ height: "40rem", backgroundImage: `url(${hero1})` }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-gray-300 mb-5 sm:text-5xl text-4xl font-bold"><span className="text-blue-400">Savor the Flavors of Life</span> with <span className="text-orange-400">Chow Counter </span>-<span className="text-green-400"> Your Guide to Endless Culinary Adventures!</span></h1>
            <p className="text-gray-300 text-3xl font-thin mb-5"></p>
            <a href="#features" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
      <a name="features">
        <div id="features">
          <div className="hero h-96" style={{ height: "30rem", backgroundImage: `url(${hero2})` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <p className="text-gray-300 text-3xl font-semibold mb-5 sm:text-4xl"> <span className="text-yellow-400">Indulge in Culinary Exploration</span> with Our <span className="font-bold text-red-600">Recipe & Restaurant Generators</span> - Discover Your Next Great Meal!</p>
                <div className="flex justify-evenly">
                  <Link className="btn btn-accent" to={'/chowcounter/recipes'}>Find Recipe</Link>
                  <Link className="btn btn-secondary" to={'/chowcounter/restaurants'}>Find Restaurant</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero h-96" style={{ height: "20rem", backgroundImage: `url(${hero3})` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md flex flex-col items-center">
                <p className="text-gray-300 text-3xl font-semibold mb-5 sm:text-4xl"><span className="text-indigo-500">Empower Your Health Journey</span> with <span className="font-bold text-green-400">Accurate and Up-to-Date</span> Food Nutrition Information.</p>
                <Link className="btn btn-primary" to={'/chowcounter/food-search'}>Search Food</Link>
                <Link className="badge font-semibold p-3 mt-10" to={'/'}>Back to Top</Link>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
