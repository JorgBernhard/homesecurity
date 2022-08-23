import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Pages/Main/Main';
import Header from './Pages/Header/Header';
import Empresa from './Pages/Empresa/Empresa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Empresa />

  </React.StrictMode>
);

