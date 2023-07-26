import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User';
import themeReducer from './Theme'

export const store = configureStore({
    reducer: {
      user: userReducer,
      theme: themeReducer,
    }
  });
