import React from 'react';
import { Route, Routes } from "react-router-dom";
import F1Timer from './pages/F1Timer';
import FIAPage from './pages/admin';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<F1Timer/>}/>
      <Route path='/EnP8HGX5TsQpH5MYyYA5fzSTjnonHBFH439sai9' element={<FIAPage/>}/>
    </Routes>
    </>
  );
}

export default App;
