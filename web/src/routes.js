import React from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Register from './pages/Customer';
import Client from './pages/Client';
import Services from './pages/Services';
import Barber from './pages/Barber';


export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/client" exact element={<Client />} />
      <Route path="/services" exact element={<Services />} />
      <Route path="/barber" exact element={<Barber />} />
    </BrowserRoutes>
  );
}
