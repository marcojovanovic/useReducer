import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AlertProvider } from './GitHub/context/AlertContext';
import { GitHubProvider } from './GitHub/context/GithubContext';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GitHubProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </GitHubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
