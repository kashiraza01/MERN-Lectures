import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />

          {/* TODO (Task 5): add a route for "/products/:id" that renders <ProductDetails /> */}
          {/* TODO (Task 8): add a catch-all "*" route that renders <NotFound /> */}
        </Routes>
      </main>
    </div>
  );
}
