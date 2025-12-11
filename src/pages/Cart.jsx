import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const navigate = useNavigate();

    const total = getCartTotal();

    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <section className="section text-center">
                    <div className="container">
                        <h1>Your Cart is Empty</h1>
                        <p className="empty-cart-msg">Looks like you haven't added anything to your cart yet.</p>
                        <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Your Cart</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cart-grid">
                        {/* Cart Items */}
                        <div className="cart-items">
                            <div className="cart-header">
                                <span>Product</span>
                                <span>Quantity</span>
                                <span>Total</span>
                            </div>

                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-info">
                                        <div className="item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p className="item-price">{item.price}</p>
                                        </div>
                                    </div>

                                    <div className="item-quantity">
                                        <div className="quantity-controls">
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
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    <div className="item-total">
                                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="cart-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <button
                                className="btn btn-full"
                                onClick={() => navigate('/checkout')}
                            >
                                Proceed to Checkout
                            </button>

                            <Link to="/shop" className="continue-shopping">
                                <ArrowLeft size={16} />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
