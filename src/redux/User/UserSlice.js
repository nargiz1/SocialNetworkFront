import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  users:[]
  
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
  
  },
});

export const { setCurrentUser,setUsers } = userSlice.actions;

export default userSlice.reducer;