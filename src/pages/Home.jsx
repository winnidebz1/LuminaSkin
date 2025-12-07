import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Lumina Glow Serum',
        price: '$85.00',
        image: '/assets/serum.png',
        rating: 4.9,
        reviews: 128
    },
    {
        id: 2,
        name: 'Velvet Moisture Cream',
        price: '$65.00',
        image: '/assets/cream.png',
        rating: 4.8,
        reviews: 94
    },
    {
        id: 3,
        name: 'Purify Gel Cleanser',
        price: '$45.00',
        image: '/assets/cleanser.png',
        rating: 4.9,
        reviews: 210
    }
];

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="/assets/hero.png" alt="Lumina Model" />
                </div>
                <div className="hero-content container">
                    <h1 className="animate-fade-in">Glow Starts With <br /><span className="text-gold">Healthy Skin.</span></h1>
                    <p className="animate-fade-in delay-1">Minimal ingredients. Maximum results. Clinically proven for melanin-rich skin.</p>
                    <div className="hero-buttons animate-fade-in delay-2">
                        <Link to="/shop" className="btn btn-primary">Shop Bestsellers</Link>
                        <Link to="/quiz" className="btn btn-outline">Take Skin Quiz</Link>
                    </div>
                </div>
            </section>

            {/* Lumina Guarantee */}
            <section className="guarantee-section">
                <div className="container guarantee-grid">
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Dermatologist Tested</span>
                    </div>
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Cruelty-Free</span>
                    </div>
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Clean Ingredients</span>
                    </div>
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Results Driven</span>
                    </div>
                </div>
            </section>

            {/* Bestsellers */}
            <section className="section bestsellers">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Bestsellers</h2>
                        <Link to="/shop" className="view-all">View All <ArrowRight size={16} /></Link>
                    </div>

                    <div className="product-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    <span className="badge">Best Seller</span>
                                    <button className="quick-add">Quick Add</button>
                                </div>
                                <div className="product-info">
                                    <div className="rating">
                                        <Star size={14} fill="#C6A87C" className="text-gold" />
                                        <span>{product.rating} ({product.reviews})</span>
                                    </div>
                                    < Link to={`/product/${product.id}`}>
                                        <h3>{product.name}</h3>
                                    </Link>
                                    <p className="price">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skin Quiz Banner */}
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

            {/* Testimonial / Before After (Mock) */}
            <section className="section testimonials bg-blush">
                <div className="container">
                    <h2>Real Results</h2>
                    <div className="testimonial-slider">
                        <div className="testimonial-card">
                            <p>"The best investment I've made for my skin. My hyperpigmentation faded in 3 weeks."</p>
                            <div className="author">- Amara K.</div>
                        </div>
                        <div className="testimonial-card">
                            <p>"I love that it's clean and actually works. The serum is liquid gold."</p>
                            <div className="author">- Sarah J.</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
