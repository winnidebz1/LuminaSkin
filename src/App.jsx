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
import AllProducts from './pages/AllProducts';
import FAQs from './pages/FAQs';
import TrackOrder from './pages/TrackOrder';
import ShippingReturns from './pages/ShippingReturns';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';

// Placeholder pages for navigation
const Blog = () => <div className="section container text-center"><h1>The Journal</h1><p>Coming Soon...</p></div>;

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<SkinQuiz />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
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
