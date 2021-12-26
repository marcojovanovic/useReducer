import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';

function GitHubApp() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
      </div>
     
      <main className="container mx-auto px-3 pb-12">
       
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/user/:login" element={<User />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default GitHubApp;
