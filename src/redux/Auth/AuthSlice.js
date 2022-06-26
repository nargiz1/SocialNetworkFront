import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  resetToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
        state.token = action.payload;
    },
    setReset(state, action) {
      state.resetToken = action.payload;
    }
  },
});

export const { setLogin, setReset } = authSlice.actions;

export default authSlice.reducer;