import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducer: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, reomve } = cartSlice.actions;
export default cartSlice.reducer;
