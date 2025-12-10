import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Lumina Glow Serum',
        price: '$85.00',
        image: '/assets/serum.png',
        rating: 4.9,
        reviews: 128,
        description: 'Brightening vitamin C serum for radiant, even-toned skin'
    },
    {
        id: 2,
        name: 'Velvet Moisture Cream',
        price: '$65.00',
        image: '/assets/cream.png',
        rating: 4.8,
        reviews: 94,
        description: 'Luxurious hydrating cream with hyaluronic acid'
    },
    {
        id: 3,
        name: 'Purify Gel Cleanser',
        price: '$45.00',
        image: '/assets/cleanser.png',
        rating: 4.9,
        reviews: 210,
        description: 'Gentle daily cleanser that removes impurities without stripping'
    },
    {
        id: 4,
        name: 'Radiance Night Oil',
        price: '$95.00',
        image: '/assets/serum.png',
        rating: 4.7,
        reviews: 156,
        description: 'Nourishing overnight treatment for glowing skin'
    },
    {
        id: 5,
        name: 'Bright Eyes Cream',
        price: '$55.00',
        image: '/assets/cream.png',
        rating: 4.8,
        reviews: 89,
        description: 'Targeted treatment for dark circles and fine lines'
    },
    {
        id: 6,
        name: 'Exfoliating Toner',
        price: '$48.00',
        image: '/assets/cleanser.png',
        rating: 4.9,
        reviews: 178,
        description: 'Gentle AHA/BHA toner for smooth, refined skin texture'
    }
];

const Bestsellers = () => {
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
