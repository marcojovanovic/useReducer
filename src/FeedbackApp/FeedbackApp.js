import React from 'react';
import FeedbackForm from './FeedbackForm';



import FeedbackList from './FeedbackList';
import FeedbackStats from './FeedbackStats';
import Header from './Header';

import './main.css';

function FeedbackApp() {


  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </>
  );
}

export default FeedbackApp;
