import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../store/cartSlice.js';
import { selectCartItems } from '../store/cartSlice.js';

/*
 * TODO (Task 6):
 *   - Uncomment the dispatch + action imports above.
 *   - Render each cart item with: thumbnail, title, quantity, price, and a "Remove" button.
 *   - Add a single "Clear Cart" button at the bottom.
 *   - Compute and display a subtotal using Array.reduce.
 *
 * Until Task 6 is finished, cart items list will simply be empty.
 */
export default function Cart() {
  const items = useSelector(selectCartItems);

  if (items.length === 0) {
    return (
      <div>
        <h1>Cart</h1>
        <p className="muted">Your cart is empty. Complete <strong>Task 6</strong> to wire it up.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="card">
            <strong>{item.title}</strong>
            {' — qty: '}
            {item.quantity}
            {' — $'}
            {item.price}
            {/* TODO (Task 6): add a Remove button that dispatches removeFromCart(item.id) */}
          </li>
        ))}
      </ul>
      {/* TODO (Task 6): Clear Cart button + subtotal line */}
    </div>
  );
}
