import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartslice";

const store = configureStore({
  reducer: {
    cart: cart,
  },
});

export default store;
