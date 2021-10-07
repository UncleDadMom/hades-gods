import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import titlePhoto from "./CodexOfTheUnderworld.png"

ReactDOM.render(
    <BrowserRouter>
      <img src={titlePhoto} width="100%" alt="codex"/>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// Patrick Wu testing 
reportWebVitals();
