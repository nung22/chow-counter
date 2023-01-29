import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Error from './views/Error';
import Create from './views/Create';

function App() {
  return (
    <div className="App p-8 flex justify-center">
      <Routes>
        <Route path="/" element={<Navigate to="/foods"/>}/>
        <Route element={<Main/>} path="/foods" />
        <Route element={<Create/>} path="/foods/new" />
        <Route element={<Detail/>} path="/foods/:id" />
        <Route element={<Update/>} path="/foods/:id/edit" />
        <Route element={<Error/>} path="*" />
      </Routes>
    </div>
  );
}
export default App;

