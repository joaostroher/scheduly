import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import './configs/ReactotrongConfig';

import GlobalStyle from './styles/global';

import Routes from '~/routes';

function App() {
  return (
    <StyleSheetManager disableCSSOMInjection>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </StyleSheetManager>
  );
}

export default App;
