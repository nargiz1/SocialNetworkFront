import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followers: [],
  following:[]
};

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    setFollowers(state, action) {
      state.followers = action.payload;
    },
    setFollowing(state, action) {
      state.following = action.payload;
    }
  }
});

export const { setFollowers,setFollowing } = followSlice.actions;

export default followSlice.reducer;
