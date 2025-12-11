import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { bestsellers } from '../data/products';

import { useCart } from '../context/CartContext';

const Bestsellers = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleQuickAdd = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className="bestsellers-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Our Bestsellers</h1>
                    <p>Discover our most-loved products, trusted by thousands for radiant, healthy skin</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="product-grid">
                        {bestsellers.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    <span className="badge">Best Seller</span>
                                    <button
                                        className="quick-add"
                                        onClick={() => handleQuickAdd(product)}
                                    >
                                        Quick Add
                                    </button>
                                </div>
                                <div className="product-info">
                                    <Link to={`/product/${product.id}#reviews`} className="rating-link">
                                        <div className="rating">
                                            <Star size={14} fill="#C6A87C" className="text-gold" />
                                            <span>{product.rating} ({product.reviews})</span>
                                        </div>
                                    </Link>
                                    <Link to={`/product/${product.id}`}>
                                        <h3>{product.name}</h3>
                                    </Link>
                                    <p className="product-description">{product.description}</p>
                                    <p className="price">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section quiz-banner">
                <div className="container split-layout">
                    <div className="text-block">
                        <h2>Not sure what your skin needs?</h2>
                        <p>Take our 2-minute expert analysis quiz to find your perfect routine.</p>
                        <Link to="/quiz" className="btn btn-primary">Start Analysis</Link>
                    </div>
                    <div className="image-block glass-effect">
                        <div className="quiz-preview">
                            <span>Your Skin Type: <strong>Combination</strong></span>
                            <span>Recommended: <strong>The Glow Kit</strong></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bestsellers;
