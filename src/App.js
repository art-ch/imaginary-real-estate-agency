import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, House } from './components';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/houses/house/:id" element={<House />} />
    </Routes>
  </BrowserRouter>
);
