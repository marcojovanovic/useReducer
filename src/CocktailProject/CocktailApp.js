import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Navbar';
import ErrorPage from './ErrorPage';

import './main.css';
import Home from './Home';

function CocktailApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
       
      </Routes>
    </Router>
  );
}

export default CocktailApp;
