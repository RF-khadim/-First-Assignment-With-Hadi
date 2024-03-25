import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [{ title: "Arif" }],
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },

    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
