import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => obj.price + sum, 0);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((obj) => obj !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
