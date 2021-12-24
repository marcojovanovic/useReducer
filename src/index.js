import React from 'react';
import ReactDOM from 'react-dom';
import { FeedProvider } from './FeedApp/context';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
   <FeedProvider>
      <App />
   </FeedProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


