import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Mail, Package, ArrowRight } from 'lucide-react';

const OrderConfirmation = () => {
    const location = useLocation();
    const { orderNumber = 'LUM123456', email = 'customer@example.com' } = location.state || {};

    const orderDetails = {
        orderNumber,
        email,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        items: [
            { id: 1, name: 'Lumina Glow Serum', price: 85.00, quantity: 1, image: '/assets/serum.png' },
            { id: 2, name: 'Velvet Moisture Cream', price: 65.00, quantity: 1, image: '/assets/cream.png' }
        ],
        subtotal: 150.00,
        shipping: 0,
        tax: 12.00,
        total: 162.00
    };

    return (
        <div className="order-confirmation-page container section">
            <div className="confirmation-header">
                <div className="success-icon">
                    <CheckCircle size={64} className="text-gold" />
                </div>
                <h1>Thank You For Your Order!</h1>
                <p className="confirmation-message">
                    Your order has been confirmed and will be shipped soon.
                </p>
            </div>

            <div className="order-info-cards">
                <div className="info-card">
                    <Mail size={24} className="text-gold" />
                    <h3>Order Confirmation Sent</h3>
                    <p>We've sent a confirmation email to:</p>
                    <strong>{orderDetails.email}</strong>
                </div>

                <div className="info-card">
                    <Package size={24} className="text-gold" />
                    <h3>Estimated Delivery</h3>
                    <p>Your order will arrive by:</p>
                    <strong>{orderDetails.estimatedDelivery}</strong>
                </div>
            </div>

            <div className="order-details-section">
                <div className="order-summary-box">
                    <div className="order-header">
                        <h2>Order Details</h2>
                        <div className="order-meta">
                            <span className="order-number">Order #{orderDetails.orderNumber}</span>
                            <span className="order-date">{orderDetails.date}</span>
                        </div>
                    </div>

                    <div className="ordered-items">
                        {orderDetails.items.map(item => (
                            <div key={item.id} className="ordered-item">
                                <img src={item.image} alt={item.name} className="item-thumbnail" />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p className="item-quantity">Quantity: {item.quantity}</p>
                                </div>
                                <div className="item-price">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="order-totals">
                        <div className="total-line">
                            <span>Subtotal</span>
                            <span>${orderDetails.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-line">
                            <span>Shipping</span>
                            <span className="text-gold">FREE</span>
                        </div>
                        <div className="total-line">
                            <span>Tax</span>
                            <span>${orderDetails.tax.toFixed(2)}</span>
                        </div>
                        <div className="total-line grand-total">
                            <span>Total Paid</span>
                            <span>${orderDetails.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="next-steps">
                    <h3>What's Next?</h3>
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h4>Order Processing</h4>
                            <p>We're preparing your items with care</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h4>Shipping Notification</h4>
                            <p>You'll receive tracking info via email</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h4>Delivery</h4>
                            <p>Your glow arrives at your doorstep</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="confirmation-actions">
                <Link to="/shop" className="btn btn-primary">
                    Continue Shopping <ArrowRight size={18} />
                </Link>
                <Link to="/" className="btn btn-outline">
                    Back to Home
                </Link>
            </div>

            <div className="customer-support">
                <h3>Need Help?</h3>
                <p>Our customer care team is here for you</p>
                <div className="support-options">
                    <a href="mailto:support@luminaskin.com" className="support-link">
                        📧 support@luminaskin.com
                    </a>
                    <span className="support-divider">|</span>
                    <a href="tel:1-800-LUMINA" className="support-link">
                        📞 1-800-LUMINA
                    </a>
                </div>
            </div>

            <div className="loyalty-banner">
                <h3>✨ Join Lumina Rewards</h3>
                <p>Earn points on every purchase and unlock exclusive perks</p>
                <Link to="/account/signup" className="btn btn-outline">
                    Create Account
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmation;
