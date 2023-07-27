import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfCakes -= action.payload || 1;
    },
    reStocked: (state, action) => {
      state.noOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, reStocked } = cakeSlice.actions;
