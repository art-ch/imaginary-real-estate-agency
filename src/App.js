import './App.css';
import React from 'react';
import { ContextProvider } from './Context';
import HomePage from './HomePage';
import House from './House';

export const App = () => {
  return (
    <ContextProvider>
      <HomePage />
      {/* <House /> */}
    </ContextProvider>
  );
};
