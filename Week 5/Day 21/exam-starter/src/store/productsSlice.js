import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

/*
 * TODO (Task 4): Implement an async thunk named `fetchProducts` using `createAsyncThunk`.
 *
 *   - It should call:  https://dummyjson.com/products
 *   - It should return the `products` array from the response JSON.
 *   - Use try/catch and rejectWithValue for proper error handling.
 *
 * Then handle the three thunk states in `extraReducers` below:
 *   - pending   -> status = 'loading',   error = null
 *   - fulfilled -> status = 'succeeded', items = action.payload
 *   - rejected  -> status = 'failed',    error = action.payload || action.error.message
 *
 * Finally, export the thunk so `Products.jsx` can dispatch it.
 */

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  // TODO (Task 4): Convert this to an arrow function `(builder) => { ... }` and add
  //   builder.addCase(fetchProducts.pending,   ...)
  //   builder.addCase(fetchProducts.fulfilled, ...)
  //   builder.addCase(fetchProducts.rejected,  ...)
  extraReducers: () => {},
});

export const selectAllProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

export default productsSlice.reducer;
