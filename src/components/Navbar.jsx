import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cart } = useCart();

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/assets/logo.png" alt="Lumina Skin" />
                    <span className="brand-name">LUMINA</span>
                </Link>

                <div className="nav-links desktop-only">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/contact">Contact us</Link>
                </div>

                <div className="nav-actions">
                    {/* Mobile Toggle */}
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link to="/cart" className="cart-icon-btn">
                        <ShoppingBag size={24} />
                        {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
                    </Link>
                </div>

            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
