import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followers: []
};

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    setFollowers(state, action) {
      state.followers = action.payload;
    }
  }
});

export const { setFollowers } = followSlice.actions;

export default followSlice.reducer;
