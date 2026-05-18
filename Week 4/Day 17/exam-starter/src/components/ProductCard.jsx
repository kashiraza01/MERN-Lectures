// TODO (Task 5): import { Link } from 'react-router-dom';
// TODO (Task 6): import { useDispatch } from 'react-redux';
// TODO (Task 6): import { addToCart } from '../store/cartSlice.js';

/*
 * TODO (Task 5):
 *   - Import <Link> from 'react-router-dom' (line above) and wrap the product
 *     image/title in <Link to={`/products/${product.id}`}> so clicking opens
 *     the details page.
 *
 * TODO (Task 6):
 *   - Uncomment the useDispatch + addToCart imports above.
 *   - Dispatch `addToCart(product)` when the "Add to Cart" button is clicked.
 */
export default function ProductCard({ product }) {
  // const dispatch = useDispatch();

  function handleAdd() {
    // TODO (Task 6): dispatch(addToCart(product));
    console.log('TODO Task 6: dispatch addToCart for', product.id);
  }

  return (
    <div className="product-card">
      {/* TODO (Task 5): wrap the image + title in a <Link to={`/products/${product.id}`}> */}
      <img src={product.thumbnail} alt={product.title} />
      <div className="title">{product.title}</div>
      <div className="row between">
        <span className="price">${product.price}</span>
        <span className="muted" style={{ fontSize: '0.8rem' }}>{product.category}</span>
      </div>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
