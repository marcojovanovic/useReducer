import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Navbar';
import ErrorPage from './ErrorPage';

import './main.css';
import Home from './Home';
import SingleCoktail from './SingleCoktail';

function CocktailApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail/:id' element={<SingleCoktail />} />
        <Route path='*' element={<ErrorPage />} />
       
      </Routes>
    </Router>
  );
}

export default CocktailApp;
