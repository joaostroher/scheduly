import React from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import Register from './pages/Customer';

import Home from '~/pages/Home';

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/register" exact element={<Register />} />
    </BrowserRoutes>
  );
}
