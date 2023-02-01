import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Error from './views/Error';
import Create from './views/Create';
import RecipeNavigator from './components/RecipeNavigator'
import RandomRestaurant from './components/RandomRestaurant';
import NavBar from './components/NavBar';



function App() {
  const [theme, setTheme] = useState('dark');

  const themeChanged = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <div data-theme={theme} className='h-screen min-h-max'>
      <NavBar onThemeChange={ themeChanged }/>
      <div className="py-24 flex justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/chowcounter/foods"/>}/>
          <Route element={<RecipeNavigator/>} path="/chowcounter/recipes" />
          <Route element={<RandomRestaurant/>} path="/chowcounter/restaurant-generator" />
          <Route element={<Main/>} path="/chowcounter/foods" />
          <Route element={<Create/>} path="/chowcounter/foods/new" />
          <Route element={<Detail/>} path="/chowcounter/foods/:id" />
          <Route element={<Update/>} path="/chowcounter/foods/:id/edit" />
          <Route element={<Error/>} path="*" />
        </Routes>
      </div>
    </div>
  );
}
export default App;

