import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Bestsellers from './pages/Bestsellers';
import Contact from './pages/Contact';
import SkinQuiz from './pages/SkinQuiz';

// Placeholder pages for navigation
const Shop = () => <div className="section container text-center"><h1>Shop All Products</h1><p>Coming Soon...</p></div>;
const About = () => <div className="section container text-center"><h1>About Lumina</h1><p>Coming Soon...</p></div>;
const Blog = () => <div className="section container text-center"><h1>The Journal</h1><p>Coming Soon...</p></div>;
const Product = () => <div className="section container text-center"><h1>Product Details</h1><p>Coming Soon...</p></div>;

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<SkinQuiz />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
