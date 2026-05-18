import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

/*
 * TODO (Task 6): Implement the cart reducers below.
 *
 *   addToCart(state, action):
 *     - action.payload is a product object: { id, title, price, thumbnail, ... }
 *     - If an item with the same id already exists in state.items, increment its `quantity`.
 *     - Otherwise, push the product into state.items with quantity = 1.
 *
 *   removeFromCart(state, action):
 *     - action.payload is the product id.
 *     - Remove the item with that id from state.items entirely.
 *
 *   clearCart(state):
 *     - Empty state.items.
 *
 * Then export the three action creators below so components can dispatch them.
 *
 * Also implement `selectTotalQuantity` so it returns the sum of all `quantity` fields.
 */

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // TODO (Task 6): addToCart: (state, action) => { ... }
    // TODO (Task 6): removeFromCart: (state, action) => { ... }
    // TODO (Task 6): clearCart: (state) => { ... }
  },
});

// TODO (Task 6): export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

// TODO (Task 6): replace the line below with a real total computed from state.cart.items
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + (item.quantity || 0), 0);

export default cartSlice.reducer;
