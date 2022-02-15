import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, House } from './components';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/houses/house/:id" element={<House />} />
    </Routes>
  </BrowserRouter>
);

export default App