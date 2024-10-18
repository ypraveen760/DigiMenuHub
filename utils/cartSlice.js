import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, payload) => {
      state.item.pop();
    },
    clearCart: (state, paylod) => {
      state.item.length = 0;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
