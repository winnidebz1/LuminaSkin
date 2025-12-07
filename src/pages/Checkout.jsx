import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';

const Checkout = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        saveInfo: false
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            navigate('/order-confirmation', {
                state: {
                    orderNumber: `LUM${Date.now().toString().slice(-6)}`,
                    email: formData.email
                }
            });
        }, 2000);
    };

    // Mock cart data
    const cartItems = [
        { id: 1, name: 'Lumina Glow Serum', price: 85.00, quantity: 1 },
        { id: 2, name: 'Velvet Moisture Cream', price: 65.00, quantity: 1 }
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="checkout-page container section">
            <button className="back-btn" onClick={() => navigate('/cart')}>
                <ArrowLeft size={20} /> Back to Cart
            </button>

            <h1 className="page-title">Secure Checkout</h1>

            <div className="checkout-layout">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    {/* Contact Information */}
                    <div className="form-section">
                        <h2>Contact Information</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="form-section">
                        <h2>Shipping Address</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Street Address *</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="123 Main Street"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">City *</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State *</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zipCode">ZIP Code *</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Information */}
                    <div className="form-section">
                        <h2>
                            <CreditCard size={20} /> Payment Information
                        </h2>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number *</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                                placeholder="1234 5678 9012 3456"
                                maxLength="19"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cardName">Name on Card *</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="expiryDate">Expiry Date *</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    required
                                    placeholder="MM/YY"
                                    maxLength="5"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV *</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                    placeholder="123"
                                    maxLength="4"
                                />
                            </div>
                        </div>

                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="saveInfo"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleChange}
                            />
                            <label htmlFor="saveInfo">Save this information for next time</label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary submit-order-btn"
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <>Processing...</>
                        ) : (
                            <>
                                <Lock size={18} /> Complete Order - ${total.toFixed(2)}
                            </>
                        )}
                    </button>

                    <div className="security-notice">
                        <Lock size={16} />
                        <span>Your payment information is encrypted and secure</span>
                    </div>
                </form>

                {/* Order Summary Sidebar */}
                <div className="order-summary-sidebar">
                    <h3>Order Summary</h3>

                    <div className="summary-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <div className="item-info">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-qty">Qty: {item.quantity}</span>
                                </div>
                                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals">
                        <div className="summary-line">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping</span>
                            <span className="text-gold">FREE</span>
                        </div>
                        <div className="summary-line">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="accepted-payments">
                        <p>We Accept:</p>
                        <div className="payment-icons">
                            💳 Visa • Mastercard • Amex • PayPal
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
