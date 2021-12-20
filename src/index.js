import React from 'react';
import ReactDOM from 'react-dom';
import { FeedbackProvider } from './FeedbackApp/context';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
   <FeedbackProvider>
      <App />
   </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


