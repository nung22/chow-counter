import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/CRUD/Detail';
import Update from './views/CRUD/Update';
import Error from './views/Error';
import Create from './views/CRUD/Create';
import RecipeNavigator from './components/RecipeNavigator'
import NavBar from './components/NavBar';
import RestaurantPicker from './views/RestaurantPicker';



function App() {
  const [theme, setTheme] = useState('dark');

  const themeChanged = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <div data-theme={theme} className='h-screen'>
      <NavBar onThemeChange={ themeChanged }/>
      <div className="py-24 flex justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/chowcounter/foods"/>}/>
          <Route element={<RecipeNavigator/>} path="/chowcounter/recipes" />
          <Route element={<RestaurantPicker/>} path="/chowcounter/restaurant-generator" />
          <Route element={<Main/>} path="/chowcounter/foods" />
          <Route element={<Create/>} path="/chowcounter/foods/new" />
          <Route element={<Detail/>} path="/chowcounter/foods/:id" />
          <Route element={<Update/>} path="/chowcounter/foods/:id/edit" />
          {/* <Route element={<Error/>} path="*" /> */}
        </Routes>
      </div>
    </div>
  );
}
export default App;

