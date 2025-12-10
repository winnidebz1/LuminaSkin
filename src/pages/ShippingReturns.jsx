import React from 'react';
import { Package, RefreshCw, AlertCircle, Mail } from 'lucide-react';

const ShippingReturns = () => {
    return (
        <div className="shipping-returns-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Shipping & Returns</h1>
                    <p>Everything you need to know about our shipping and return policies</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="policy-content">
                        {/* Shipping Information */}
                        <div className="policy-section">
                            <div className="section-icon">
                                <Package size={40} className="text-gold" />
                            </div>
                            <h2>Shipping Information</h2>

                            <div className="policy-subsection">
                                <h3>Domestic Shipping (United States)</h3>
                                <div className="shipping-options">
                                    <div className="shipping-option">
                                        <h4>Standard Shipping (3-5 Business Days)</h4>
                                        <p><strong>$5.95</strong> - FREE on orders over $75</p>
                                        <p>Available for all US addresses including Alaska and Hawaii</p>
                                    </div>
                                    <div className="shipping-option">
                                        <h4>Express Shipping (1-2 Business Days)</h4>
                                        <p><strong>$15.95</strong></p>
                                        <p>Orders placed before 2 PM EST ship same day</p>
                                    </div>
                                    <div className="shipping-option">
                                        <h4>Overnight Shipping (Next Day)</h4>
                                        <p><strong>$25.95</strong></p>
                                        <p>Orders placed before 12 PM EST arrive next business day</p>
                                    </div>
                                </div>
                            </div>

                            <div className="policy-subsection">
                                <h3>International Shipping</h3>
                                <p>We ship to most countries worldwide. Shipping times and costs vary by location:</p>
                                <ul>
                                    <li><strong>Canada:</strong> 5-7 business days, starting at $12.95</li>
                                    <li><strong>Europe:</strong> 7-10 business days, starting at $18.95</li>
                                    <li><strong>Asia & Australia:</strong> 10-14 business days, starting at $22.95</li>
                                    <li><strong>Other International:</strong> 10-21 business days, starting at $25.95</li>
                                </ul>
                                <p className="note"><strong>Note:</strong> International customers are responsible for any customs fees, duties, or taxes imposed by their country.</p>
                            </div>

                            <div className="policy-subsection">
                                <h3>Order Processing</h3>
                                <p>Orders are typically processed within 1-2 business days (Monday-Friday, excluding holidays). You'll receive a shipping confirmation email with tracking information once your order ships.</p>
                            </div>
                        </div>

                        {/* Returns & Exchanges */}
                        <div className="policy-section">
                            <div className="section-icon">
                                <RefreshCw size={40} className="text-gold" />
                            </div>
                            <h2>Returns & Exchanges</h2>

                            <div className="policy-subsection">
                                <h3>30-Day Satisfaction Guarantee</h3>
                                <p>We want you to love your Lumina products! If you're not completely satisfied, we offer a 30-day return policy from the date of delivery.</p>
                            </div>

                            <div className="policy-subsection">
                                <h3>Return Eligibility</h3>
                                <ul>
                                    <li><strong>Unopened Products:</strong> Full refund to original payment method</li>
                                    <li><strong>Opened Products:</strong> Store credit for future purchases</li>
                                    <li><strong>Damaged or Defective Items:</strong> Full refund or replacement, no questions asked</li>
                                </ul>
                                <p className="note"><strong>Note:</strong> Items must be returned in their original packaging. We cannot accept returns of products that have been significantly used or altered.</p>
                            </div>

                            <div className="policy-subsection">
                                <h3>How to Return an Item</h3>
                                <ol className="return-steps">
                                    <li>
                                        <strong>Contact Us</strong>
                                        <p>Email returns@luminaskin.com with your order number and reason for return, or fill out our online return form.</p>
                                    </li>
                                    <li>
                                        <strong>Receive Return Label</strong>
                                        <p>We'll email you a prepaid return shipping label within 24 hours.</p>
                                    </li>
                                    <li>
                                        <strong>Pack & Ship</strong>
                                        <p>Securely pack your items with the original packaging and attach the return label. Drop off at any USPS location.</p>
                                    </li>
                                    <li>
                                        <strong>Receive Refund</strong>
                                        <p>Once we receive your return, we'll process your refund within 5-7 business days.</p>
                                    </li>
                                </ol>
                            </div>

                            <div className="policy-subsection">
                                <h3>Exchanges</h3>
                                <p>Want to exchange for a different product? Contact our customer service team and we'll help you find the perfect replacement. We'll cover return shipping for exchanges.</p>
                            </div>
                        </div>

                        {/* Damaged or Missing Items */}
                        <div className="policy-section">
                            <div className="section-icon">
                                <AlertCircle size={40} className="text-gold" />
                            </div>
                            <h2>Damaged or Missing Items</h2>

                            <div className="policy-subsection">
                                <p>We take great care in packaging your order, but sometimes things happen during shipping. If your order arrives damaged or items are missing:</p>
                                <ul>
                                    <li>Contact us within 48 hours of delivery</li>
                                    <li>Provide photos of the damaged packaging and products</li>
                                    <li>Include your order number</li>
                                </ul>
                                <p>We'll send a replacement or issue a full refund immediately - no need to return the damaged items.</p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="policy-section contact-section">
                            <div className="section-icon">
                                <Mail size={40} className="text-gold" />
                            </div>
                            <h2>Questions?</h2>
                            <p>Our customer service team is here to help with any shipping or return questions.</p>
                            <div className="contact-options">
                                <div className="contact-method">
                                    <h4>Email</h4>
                                    <p>support@luminaskin.com</p>
                                    <p className="response-time">Response within 24 hours</p>
                                </div>
                                <div className="contact-method">
                                    <h4>Phone</h4>
                                    <p>+1 (555) 123-4567</p>
                                    <p className="response-time">Mon-Fri, 9 AM - 6 PM EST</p>
                                </div>
                            </div>
                            <a href="/contact" className="btn btn-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShippingReturns;
