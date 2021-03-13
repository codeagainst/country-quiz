import React from 'react';
import ReactDOM from 'react-dom';

import StateProvider from './state/index'
import App from './App';

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);