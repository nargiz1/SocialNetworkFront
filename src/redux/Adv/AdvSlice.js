import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adv: {},
  advIndex: 0
};

export const advSlice = createSlice({
  name: "adv",
  initialState,
  reducers: {
    setAdvs (state, action) {
      state.adv = action.payload;
    },
    setAdvIndex (state, action){
      state.advIndex = action.payload;
    }
  
  },
});

export const { setAdvs, setAdvIndex } = advSlice.actions;

export default advSlice.reducer;
