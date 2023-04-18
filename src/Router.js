import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login/Login"; // 컴포넌트 임포트 하기
import Main from "./pages/Main/Main";


const Router = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>


  );
};




export default Router;