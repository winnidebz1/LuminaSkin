import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src="/assets/logo.png" alt="Lumina Skin" />
                    <span className="brand-name">LUMINA</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">Philosophy</Link>
                    <Link to="/quiz">Skin Quiz</Link>
                    <Link to="/blog">Journal</Link>
                </div>

                {/* Icons */}
                <div className="nav-icons desktop-only">
                    <button><Search size={22} /></button>
                    <button><User size={22} /></button>
                    <Link to="/cart" className="cart-btn">
                        <ShoppingBag size={22} />
                        <span className="cart-badge">2</span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop Collection</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>Our Philosophy</Link>
                <Link to="/quiz" onClick={() => setMobileMenuOpen(false)}>Skin Analysis</Link>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>The Journal</Link>
            </div>
        </nav>
    );
};

export default Navbar;
