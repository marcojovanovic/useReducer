import React from 'react';
import FeedForm from './FeedForm';
import FeedList from './FeedList';
import Header from './Header';

import './main.css';

function FeedApp() {
  return (
    <div>
      <Header />

      <div className="container">
        <FeedForm />
        <FeedList />
      </div>
    </div>
  );
}

export default FeedApp;
