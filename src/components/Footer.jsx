import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h3>LUMINA</h3>
                        <p>
                            Minimalist, luxury-grade skincare for glowing, healthy skin.
                            Celebrating melanin beauty with science-backed organic formulations.
                        </p>
                    </div>

                    {/* Shop */}
                    <div className="footer-col">
                        <h4>Shop</h4>
                        <ul>
                            <li><Link to="/shop">All Products</Link></li>
                            <li><Link to="/shop?cat=serums">Serums</Link></li>
                            <li><Link to="/shop?cat=moisturizers">Moisturizers</Link></li>
                            <li><Link to="/shop?cat=sets">Gift Sets</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/track-order">Track Order</Link></li>
                            <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-col newsletter">
                        <h4>Join the Glow</h4>
                        <p>Subscribe for 10% off your first order.</p>
                        <div className="input-group">
                            <input type="email" placeholder="Your email address" />
                            <button><ArrowRight size={20} /></button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Lumina Skin. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
