import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { clear } from '@testing-library/user-event/dist/clear';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);