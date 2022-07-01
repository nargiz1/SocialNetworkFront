import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import postReducer from './Post/PostSlice';
import followReducer from './Follow/FollowSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    follow: followReducer,
  },
});

export default store;



