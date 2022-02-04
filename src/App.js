import './App.css';
import React, { useState, useEffect } from 'react';
import { ContextProvider } from './Context';
import HomePage from './HomePage';

export const App = () => {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
};
