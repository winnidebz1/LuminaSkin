import React, { useState } from 'react';
import { Search, Package, MapPin, Clock } from 'lucide-react';

const TrackOrder = () => {
    const [orderNumber, setOrderNumber] = useState('');
    const [email, setEmail] = useState('');
    const [tracking, setTracking] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Simulate order tracking (in real app, this would call an API)
        if (orderNumber && email) {
            // Mock tracking data
            setTracking({
                orderNumber: orderNumber,
                status: 'In Transit',
                estimatedDelivery: 'December 14, 2025',
                trackingNumber: 'LUM' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                timeline: [
                    { status: 'Order Placed', date: 'Dec 8, 2025 2:30 PM', completed: true },
                    { status: 'Order Processed', date: 'Dec 8, 2025 4:15 PM', completed: true },
                    { status: 'Shipped', date: 'Dec 9, 2025 10:00 AM', completed: true },
                    { status: 'In Transit', date: 'Dec 10, 2025 8:45 AM', completed: true },
                    { status: 'Out for Delivery', date: 'Pending', completed: false },
                    { status: 'Delivered', date: 'Pending', completed: false }
                ]
            });
        } else {
            setError('Please enter both order number and email address');
        }
    };

    return (
        <div className="track-order-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Track Your Order</h1>
                    <p>Enter your order details below to track your shipment</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="track-order-content">
                        {!tracking ? (
                            <div className="tracking-form-wrapper">
                                <form onSubmit={handleSubmit} className="tracking-form">
                                    <div className="form-group">
                                        <label htmlFor="orderNumber">Order Number</label>
                                        <input
                                            type="text"
                                            id="orderNumber"
                                            value={orderNumber}
                                            onChange={(e) => setOrderNumber(e.target.value)}
                                            placeholder="e.g., LUM123456789"
                                            required
                                        />
                                        <small>Found in your order confirmation email</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                        <small>Email used when placing the order</small>
                                    </div>

                                    {error && <div className="error-message">{error}</div>}

                                    <button type="submit" className="btn btn-primary">
                                        <Search size={18} />
                                        Track Order
                                    </button>
                                </form>

                                <div className="tracking-help">
                                    <h3>Need Help?</h3>
                                    <p>If you're having trouble tracking your order, please contact our customer service team.</p>
                                    <a href="/contact" className="btn btn-outline">Contact Support</a>
                                </div>
                            </div>
                        ) : (
                            <div className="tracking-results">
                                <div className="tracking-header">
                                    <Package size={48} className="text-gold" />
                                    <h2>Order Status: {tracking.status}</h2>
                                    <p>Order #{tracking.orderNumber}</p>
                                </div>

                                <div className="tracking-info-grid">
                                    <div className="info-card">
                                        <Clock size={24} className="text-gold" />
                                        <div>
                                            <h4>Estimated Delivery</h4>
                                            <p>{tracking.estimatedDelivery}</p>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <MapPin size={24} className="text-gold" />
                                        <div>
                                            <h4>Tracking Number</h4>
                                            <p>{tracking.trackingNumber}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tracking-timeline">
                                    <h3>Shipment Timeline</h3>
                                    <div className="timeline">
                                        {tracking.timeline.map((item, index) => (
                                            <div key={index} className={`timeline-item ${item.completed ? 'completed' : ''}`}>
                                                <div className="timeline-marker"></div>
                                                <div className="timeline-content">
                                                    <h4>{item.status}</h4>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="tracking-actions">
                                    <button
                                        onClick={() => setTracking(null)}
                                        className="btn btn-outline"
                                    >
                                        Track Another Order
                                    </button>
                                    <a href="/contact" className="btn btn-primary">Contact Support</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrackOrder;
