import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../store/cartSlice.js';

/*
 * TODO (Task 8):
 *   - Replace each <Link> below with a <NavLink>.
 *   - Use NavLink's `className` callback to add an "active" class when the link is active:
 *       className={({ isActive }) => isActive ? 'active' : ''}
 *   - The "active" class is already styled in src/index.css.
 */
export default function Navbar() {
  const totalQty = useSelector(selectTotalQuantity);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="navbar-brand">Exam Store</span>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">
            Cart
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
