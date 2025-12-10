import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/contact">Contact us</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
