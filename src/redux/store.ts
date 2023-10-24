import { configureStore } from '@reduxjs/toolkit';

import { characterSlice } from './characterSlice';

export const store = configureStore({
  reducer: {
    [characterSlice.name]: characterSlice.reducer
  },
  devTools: true
});
