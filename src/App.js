import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import House from './components/House';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/houses/house/:id" element={<House />} />
      </Routes>
    </BrowserRouter>
  );
};
