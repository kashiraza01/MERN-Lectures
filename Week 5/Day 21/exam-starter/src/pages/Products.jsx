// import { useEffect, useMemo, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchProducts,
//   selectAllProducts,
//   selectProductsStatus,
//   selectProductsError,
// } from '../store/productsSlice.js';
// import ProductCard from '../components/ProductCard.jsx';

/*
 * This page is intentionally a placeholder.
 *
 * TODO (Task 3): Fetch from `https://dummyjson.com/products` using useEffect.
 *                Track `items`, `loading`, and `error` in local state.
 *                Render loading / error / list states accordingly.
 *                Use <ProductCard product={p} /> to render each item.
 *
 * TODO (Task 4): Replace the local state above with Redux:
 *                  - dispatch(fetchProducts()) on mount
 *                  - read items/status/error via useSelector
 *
 * TODO (Task 7): Add a category <select> dropdown.
 *                Compute the filtered list with Array.filter wrapped in useMemo.
 *                Memoization deps: [items, selectedCategory].
 *                Add `console.log('recomputing filtered list')` inside the useMemo to verify it.
 */
export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <p className="muted">
        Coming soon. Complete <strong>Task 3</strong> (fetch with <code>useEffect</code>),
        then <strong>Task 4</strong> (move into Redux), then <strong>Task 7</strong> (category filter
        with <code>useMemo</code>).
      </p>
    </div>
  );
}
