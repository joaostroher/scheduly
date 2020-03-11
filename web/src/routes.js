import React from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import Home from '~/pages/Home';

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
    </BrowserRoutes>
  );
}
