import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartTotalQuantity:0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, quantity, title } = action.payload;
      const existingItems = state.items.find((item) => item.id === id);

      if (existingItems) {
        existingItems.quantity += quantity;
      } else {
        state.items.push({ id, name, quantity, price, title });
      }

      state.totalAmount += quantity * price;
    },

    remove: (state, action) => {
      const idToRemove = action.payload;

      const itemToRemove = state.items.find((item) => item.id === idToRemove);

      if (itemToRemove) {
        state.totalAmount -= itemToRemove.quantity * itemToRemove.price;
        state.items = state.items.filter(item => item.id !== idToRemove);
      }
    },

    updateQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      
      if (itemToUpdate) {
        const oldQuantity = itemToUpdate.quantity;
        const difference = newQuantity - oldQuantity;
        itemToUpdate.quantity = newQuantity;
        state.totalAmount += difference * itemToUpdate.price;
      }
    },

    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToIncrease = state.items.find(item => item.id === id);
      
      if (itemToIncrease) {
        itemToIncrease.quantity++;
        state.totalAmount += itemToIncrease.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(item => item.id === id);
      
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
        state.totalAmount -= itemToDecrease.price;
      }
    },
  },
});

export const { addToCart, remove, updateQuantity, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;