import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import './configs/ReactotrongConfig';

import GlobalStyle from './styles/global';

import Routes from '~/routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
