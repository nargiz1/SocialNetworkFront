import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import postReducer from './Post/PostSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

export default store;



