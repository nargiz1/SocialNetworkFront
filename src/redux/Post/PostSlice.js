import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  userPosts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setUserPosts(state, action) {
      state.userPosts = action.payload;
    },
  },
});

export const { setPosts, setUserPosts } = postSlice.actions;

export default postSlice.reducer;
