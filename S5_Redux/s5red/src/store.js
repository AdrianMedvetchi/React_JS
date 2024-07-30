import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import the reducer from your slice

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;