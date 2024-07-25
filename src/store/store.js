import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import mediaReducer from './mediaSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    media: mediaReducer,
  },
});

export default store;
