import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import postReducer from './Post/PostSlice';
import followReducer from './Follow/FollowSlice';
import userReducer from './User/UserSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    follow: followReducer,
    user: userReducer,
  },
});

export default store;



