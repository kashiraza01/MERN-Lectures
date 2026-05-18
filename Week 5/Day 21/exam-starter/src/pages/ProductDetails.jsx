// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

/*
 * TODO (Task 5):
 *   - Read `id` from useParams().
 *   - Fetch `https://dummyjson.com/products/${id}` with useEffect.
 *   - Render: thumbnail, title, description, price, rating, and brand.
 *   - Handle loading and error states.
 *
 * Also remember to register this page as a route in src/App.jsx:
 *     <Route path="/products/:id" element={<ProductDetails />} />
 */
export default function ProductDetails() {
  return (
    <div>
      <h1>Product Details</h1>
      <p className="muted">Placeholder. Complete <strong>Task 5</strong> to make this work.</p>
    </div>
  );
}
