import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/CRUD/Detail';
import Update from './views/CRUD/Update';
import Create from './views/CRUD/Create';
import RecipePicker from './views/RecipePicker'
import NavBar from './components/NavBar';
import RestaurantPicker from './views/RestaurantPicker';
import FoodSearch from './views/FoodSearch';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeChanged = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <div data-theme={theme} className='h-screen'>
      <NavBar onThemeChange={ themeChanged }/>
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/chowcounter/foods"/>}/>
          <Route element={<RecipePicker/>} path="/chowcounter/recipes" />
          <Route element={<RestaurantPicker/>} path="/chowcounter/restaurants" />
          <Route element={<FoodSearch/>} path="/chowcounter/food-search" />
          <Route element={<Main/>} path="/chowcounter/foods" />
          <Route element={<Create/>} path="/chowcounter/foods/new" />
          <Route element={<Detail/>} path="/chowcounter/foods/:id" />
          <Route element={<Update/>} path="/chowcounter/foods/:id/edit" />
          <Route element={<Navigate to="/"/>} path="*" />
        </Routes>
      </div>
    </div>
  );
}
export default App;

