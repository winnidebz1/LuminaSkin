import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Heart, Share2, Plus, Minus } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const product = getProductById(id);

    if (!product) {
        return <div className="section text-center"><h1>Product not found</h1></div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        navigate('/cart');
    };

    // Fake reviews data
    const reviews = [
        {
            id: 1,
            author: "Sarah J.",
            rating: 5,
            date: "2 days ago",
            title: "Absolutely in love!",
            content: "This product has completely transformed my skin. I've been using it for about 3 weeks and the difference is night and day. My dark spots are fading and my skin feels so hydrated."
        },
        {
            id: 2,
            author: "Michelle K.",
            rating: 4,
            date: "1 week ago",
            title: "Great for sensitive skin",
            content: "I have super sensitive skin and usually react to everything. This was gentle yet effective. The texture is lovely and it absorbs quickly."
        },
        {
            id: 3,
            author: "Amara D.",
            rating: 5,
            date: "2 weeks ago",
            title: " Worth every penny",
            content: "The best investment I've made for my skincare routine. It gives me such a nice glow without looking greasy. Highly recommend!"
        }
    ];

    return (
        <div className="product-details-page">
            <section className="section top-section">
                <div className="container">
                    <div className="product-details-grid">
                        {/* Product Image */}
                        <div className="product-gallery">
                            <div className="main-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="product-info-col">
                            <div className="product-header">
                                <h1 className="product-title">{product.name}</h1>
                                <div className="product-meta">
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "#C6A87C" : "none"} className={i < Math.floor(product.rating) ? "text-gold" : "text-gray"} />
                                        ))}
                                        <span className="review-count">({product.reviews} reviews)</span>
                                    </div>
                                    <div className="price">{product.price}</div>
                                </div>
                            </div>

                            <p className="product-short-desc">{product.description}</p>

                            <div className="pain-point-box">
                                <p><strong>Why you need this:</strong> {product.painPoint}</p>
                            </div>

                            <div className="actions-wrapper">
                                <div className="quantity-selector">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
                                </div>
                                <button className="btn btn-full add-to-cart-btn" onClick={handleAddToCart}>
                                    Add to Cart - {product.price}
                                </button>
                                <button className="wishlist-btn"><Heart size={20} /></button>
                            </div>

                            <div className="trust-badges">
                                <div className="badge-item">
                                    <Truck size={20} />
                                    <span>Free Shipping over $75</span>
                                </div>
                                <div className="badge-item">
                                    <ShieldCheck size={20} />
                                    <span>30-Day Guarantee</span>
                                </div>
                            </div>

                            <div className="product-tabs">
                                <div className="tab-headers">
                                    <button
                                        className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('description')}
                                    >
                                        Description
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('ingredients')}
                                    >
                                        Ingredients
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'how-to' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('how-to')}
                                    >
                                        How to Use
                                    </button>
                                </div>
                                <div className="tab-content">
                                    {activeTab === 'description' && (
                                        <div className="tab-pane fade-in">
                                            <h3>Benefits</h3>
                                            <ul className="benefits-list">
                                                {product.benefits.map((benefit, index) => (
                                                    <li key={index}>{benefit}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {activeTab === 'ingredients' && (
                                        <div className="tab-pane fade-in">
                                            <p>{product.ingredients}</p>
                                        </div>
                                    )}
                                    {activeTab === 'how-to' && (
                                        <div className="tab-pane fade-in">
                                            <p>{product.howToUse}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="section bg-blush reviews-section">
                <div className="container">
                    <h2 className="section-title text-center">Customer Reviews</h2>
                    <div className="reviews-grid">
                        {reviews.map(review => (
                            <div key={review.id} className="review-card">
                                <div className="review-header">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill={i < review.rating ? "#C6A87C" : "none"} className={i < review.rating ? "text-gold" : "text-gray"} />
                                        ))}
                                    </div>
                                    <span className="review-date">{review.date}</span>
                                </div>
                                <h4 className="review-title">{review.title}</h4>
                                <p className="review-content">{review.content}</p>
                                <div className="review-author">
                                    <div className="author-avatar">{review.author.charAt(0)}</div>
                                    <span>{review.author}</span>
                                    <span className="verified-badge">Verified Buyer</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
