import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Checkout = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // Form States
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    });

    const total = getCartTotal();
    const shipping = total > 75 ? 0 : 5.95;
    const finalTotal = total + shipping;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            // Process payment logic here
            clearCart();
            navigate('/order-confirmation');
        }
    };

    if (cart.length === 0) {
        return <div className="section text-center"><h1>Your cart is empty</h1></div>;
    }

    return (
        <div className="checkout-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Checkout</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="checkout-grid">
                        {/* Checkout Form */}
                        <div className="checkout-form">
                            <div className="steps-indicator">
                                <div className={`step ${step >= 1 ? 'active' : ''}`}>
                                    <div className="step-number">1</div>
                                    <span>Shipping</span>
                                </div>
                                <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                                <div className={`step ${step >= 2 ? 'active' : ''}`}>
                                    <div className="step-number">2</div>
                                    <span>Payment</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {step === 1 ? (
                                    <div className="form-step">
                                        <h2>Contact & Shipping</h2>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>ZIP Code</label>
                                                <input
                                                    type="text"
                                                    name="zip"
                                                    value={formData.zip}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-full">
                                            Continue to Payment
                                        </button>
                                    </div>
                                ) : (
                                    <div className="form-step">
                                        <h2>Payment Method</h2>
                                        <div className="payment-options">
                                            <div className="payment-option selected">
                                                <CreditCard size={24} />
                                                <span>Credit Card</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Card Number</label>
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                placeholder="0000 0000 0000 0000"
                                                value={formData.cardNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Expiration Date</label>
                                                <input
                                                    type="text"
                                                    name="expDate"
                                                    placeholder="MM/YY"
                                                    value={formData.expDate}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>CVV</label>
                                                <input
                                                    type="text"
                                                    name="cvv"
                                                    placeholder="123"
                                                    value={formData.cvv}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Name on Card</label>
                                            <input
                                                type="text"
                                                name="cardName"
                                                value={formData.cardName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="secure-badge">
                                            <ShieldCheck size={18} />
                                            <span>Payments are secure and encrypted.</span>
                                        </div>

                                        <div className="checkout-actions">
                                            <button
                                                type="button"
                                                className="btn btn-outline"
                                                onClick={() => setStep(1)}
                                            >
                                                Back to Shipping
                                            </button>
                                            <button type="submit" className="btn btn-full">
                                                Pay ${finalTotal.toFixed(2)}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Order Summary Side */}
                        <div className="checkout-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-items">
                                {cart.map(item => (
                                    <div key={item.id} className="summary-item">
                                        <div className="summary-img">
                                            <img src={item.image} alt={item.name} />
                                            <span className="qty-badge">{item.quantity}</span>
                                        </div>
                                        <div className="summary-info">
                                            <h4>{item.name}</h4>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-costs">
                                <div className="cost-row">
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="cost-row">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                </div>
                                <div className="cost-row total">
                                    <span>Total</span>
                                    <span>${finalTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;
