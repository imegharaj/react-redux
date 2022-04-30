import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { Provider } from 'react-redux';
import { configureStore } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);