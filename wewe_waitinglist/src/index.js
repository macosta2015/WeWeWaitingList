import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewWidget2 from './components/helmet2';
import NewWidget from './components/helmet';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <NewWidget2 />
    <NewWidget />

  </React.StrictMode>,
  document.getElementById('root')
);
