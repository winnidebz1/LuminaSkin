import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, X, ArrowRight, ShoppingBag } from 'lucide-react';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Lumina Glow Serum',
            price: 85.00,
            quantity: 1,
            image: '/assets/serum.png',
            subscription: 'onetime'
        },
        {
            id: 2,
            name: 'Velvet Moisture Cream',
            price: 65.00,
            quantity: 1,
            image: '/assets/cream.png',
            subscription: 'onetime'
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => {
        const itemPrice = item.subscription === 'sub' ? item.price * 0.9 : item.price;
        return sum + (itemPrice * item.quantity);
    }, 0);

    const shipping = subtotal > 100 ? 0 : 8.00;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="cart-page container section">
                <div className="empty-cart">
                    <ShoppingBag size={64} className="text-gold" />
                    <h2>Your bag is empty</h2>
                    <p>Discover our bestselling products and start your glow journey.</p>
                    <Link to="/shop" className="btn btn-primary">Shop Collection</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page container section">
            <h1 className="page-title">Shopping Bag</h1>

            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />

                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                {item.subscription === 'sub' && (
                                    <span className="subscription-badge">Subscribe & Save 10%</span>
                                )}
                                <p className="item-price">${item.subscription === 'sub' ? (item.price * 0.9).toFixed(2) : item.price.toFixed(2)}</p>
                            </div>

                            <div className="cart-item-actions">
                                <div className="quantity-selector">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="cart-item-total">
                                ${((item.subscription === 'sub' ? item.price * 0.9 : item.price) * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Order Summary</h3>

                    <div className="summary-line">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="summary-line">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>

                    <div className="summary-line">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>

                    {subtotal < 100 && (
                        <div className="free-shipping-notice">
                            Add ${(100 - subtotal).toFixed(2)} more for free shipping
                        </div>
                    )}

                    <div className="summary-total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <button
                        className="btn btn-primary checkout-btn"
                        onClick={() => navigate('/checkout')}
                    >
                        Proceed to Checkout <ArrowRight size={18} />
                    </button>

                    <Link to="/shop" className="continue-shopping">
                        Continue Shopping
                    </Link>

                    <div className="trust-badges">
                        <div className="trust-item">🔒 Secure Checkout</div>
                        <div className="trust-item">📦 Free Returns</div>
                        <div className="trust-item">✨ Cruelty-Free</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
