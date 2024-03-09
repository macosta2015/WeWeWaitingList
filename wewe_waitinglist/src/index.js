import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewWidget from './components/helmet';
import googleForm from './components/googleForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NewWidget/>
  </React.StrictMode>
);

