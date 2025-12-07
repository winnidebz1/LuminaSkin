import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Share2, Check } from 'lucide-react';

const Product = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('benefits');
    const [subscription, setSubscription] = useState('onetime');

    // PID logic would fetch data, here we mock 'Lumina Glow Serum'
    const product = {
        name: "Lumina Glow Serum",
        price: 85,
        description: "A potent, water-light serum that visibly brightens, hydrates, and smooths skin texture. Formulated with Vitamin C, Hyaluronic Acid, and African Marula Oil.",
        reviews: 128,
        rating: 4.9,
        images: ["/assets/serum.png", "/assets/hero.png"] // Mock images
    };

    return (
        <div className="product-page container section">
            <div className="product-layout">
                <div className="product-gallery">
                    <img src={product.images[0]} alt={product.name} className="main-image" />
                    <div className="thumbnail-list">
                        {product.images.map((img, i) => (
                            <img key={i} src={img} alt="" className="thumbnail" />
                        ))}
                    </div>
                </div>

                <div className="product-details">
                    <div className="breadcrumbs">Home / Shop / Serums</div>
                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-meta">
                        <div className="rating">
                            <div className="stars flex text-gold">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C6A87C" />)}
                            </div>
                            <span className="review-count">({product.reviews} Reviews)</span>
                        </div>
                        <span className="price">${product.price}.00</span>
                    </div>

                    <p className="description">{product.description}</p>

                    <div className="purchase-options">
                        <div
                            className={`option-card ${subscription === 'onetime' ? 'active' : ''}`}
                            onClick={() => setSubscription('onetime')}
                        >
                            <div className="radio-circle">{subscription === 'onetime' && <div className="dot" />}</div>
                            <div>
                                <span className="option-title">One-Time Purchase</span>
                                <span className="option-price">${product.price}.00</span>
                            </div>
                        </div>
                        <div
                            className={`option-card ${subscription === 'sub' ? 'active' : ''}`}
                            onClick={() => setSubscription('sub')}
                        >
                            <div className="radio-circle">{subscription === 'sub' && <div className="dot" />}</div>
                            <div>
                                <span className="option-title">Subscribe & Save 10%</span>
                                <span className="option-price">${(product.price * 0.9).toFixed(2)}</span>
                                <span className="badge-save">Most Popular</span>
                            </div>
                        </div>
                    </div>

                    <div className="actions">
                        <div className="quantity-selector">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
                        </div>
                        <button className="btn btn-primary add-to-cart">Add to Bag - ${subscription === 'sub' ? (product.price * 0.9 * quantity).toFixed(2) : (product.price * quantity).toFixed(2)}</button>
                        <button className="wishlist-btn"><Heart size={20} /></button>
                    </div>

                    <div className="tabs-section">
                        <div className="tab-headers">
                            <button className={activeTab === 'benefits' ? 'active' : ''} onClick={() => setActiveTab('benefits')}>Benefits</button>
                            <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
                            <button className={activeTab === 'usage' ? 'active' : ''} onClick={() => setActiveTab('usage')}>How to Use</button>
                        </div>
                        <div className="tab-content">
                            {activeTab === 'benefits' && (
                                <ul className="benefit-list">
                                    <li><Check size={16} className="text-gold" /> Brightens dullness instantly</li>
                                    <li><Check size={16} className="text-gold" /> Deeply hydrates 24h</li>
                                    <li><Check size={16} className="text-gold" /> Fades dark spots over time</li>
                                </ul>
                            )}
                            {activeTab === 'ingredients' && <p>Water, Vitamin C (15%), Marula Oil, ...</p>}
                            {activeTab === 'usage' && <p>Apply 2-3 drops to clean skin morning and night.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
