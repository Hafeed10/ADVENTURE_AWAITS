import React from 'react';
import Navbar from '../src/Componenets/Navbar'; 

import './App.css';
import Home from '../src/Componenets/pages/Home'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from '../src/Componenets/pages/Services';
import Products from '../src/Componenets/pages/Products';
import SignUp from '../src/Componenets/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
