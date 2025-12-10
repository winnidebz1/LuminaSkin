import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqCategories = [
        {
            category: 'Orders & Shipping',
            questions: [
                {
                    question: 'How long does shipping take?',
                    answer: 'Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available at checkout. International shipping times vary by location, typically 7-14 business days.'
                },
                {
                    question: 'Do you offer free shipping?',
                    answer: 'Yes! We offer free standard shipping on all orders over $75 within the US. International orders qualify for free shipping over $150.'
                },
                {
                    question: 'Can I track my order?',
                    answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can also track your order by visiting our Track Order page and entering your order number.'
                },
                {
                    question: 'Do you ship internationally?',
                    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. International customers are responsible for any customs fees or import duties.'
                }
            ]
        },
        {
            category: 'Products & Ingredients',
            questions: [
                {
                    question: 'Are your products suitable for sensitive skin?',
                    answer: 'Yes! All our products are formulated to be gentle and suitable for sensitive skin. We avoid harsh ingredients, fragrances, and common irritants. However, we always recommend patch testing new products, especially if you have very sensitive skin.'
                },
                {
                    question: 'Are your products cruelty-free and vegan?',
                    answer: 'All Lumina products are 100% cruelty-free - we never test on animals. Most of our products are vegan, with a few exceptions that contain ethically sourced honey or beeswax. Each product page clearly indicates if it\'s vegan.'
                },
                {
                    question: 'What makes your products different for melanin-rich skin?',
                    answer: 'Our formulations are specifically designed to address concerns common in melanin-rich skin, such as hyperpigmentation, uneven tone, and post-inflammatory marks. We use ingredients proven effective for darker skin tones and avoid those that may cause irritation or worsen hyperpigmentation.'
                },
                {
                    question: 'Can I use multiple products together?',
                    answer: 'Yes! Our products are designed to work beautifully together. We recommend starting with cleanser, then toner, serum, eye cream, and moisturizer. Always use SPF as your final step in the morning. If you\'re new to active ingredients, introduce products gradually.'
                },
                {
                    question: 'How long until I see results?',
                    answer: 'Results vary by product and concern. Most customers notice improved hydration within days. For concerns like hyperpigmentation and fine lines, expect to see visible improvements in 3-4 weeks with consistent use. We recommend using products for at least 8 weeks for optimal results.'
                }
            ]
        },
        {
            category: 'Returns & Exchanges',
            questions: [
                {
                    question: 'What is your return policy?',
                    answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your purchase, you can return unopened products within 30 days of delivery for a full refund. Opened products can be returned for store credit.'
                },
                {
                    question: 'How do I initiate a return?',
                    answer: 'To start a return, visit our Shipping & Returns page and fill out the return form, or email us at returns@luminaskin.com with your order number. We\'ll send you a prepaid return label and instructions.'
                },
                {
                    question: 'Can I exchange a product?',
                    answer: 'Yes! If you\'d like to exchange a product for a different one, please contact our customer service team. We\'ll arrange the exchange and cover return shipping for you.'
                },
                {
                    question: 'When will I receive my refund?',
                    answer: 'Refunds are processed within 5-7 business days of receiving your return. The refund will be issued to your original payment method. Please allow an additional 3-5 business days for the refund to appear in your account.'
                }
            ]
        },
        {
            category: 'Account & Ordering',
            questions: [
                {
                    question: 'Do I need an account to place an order?',
                    answer: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save your favorite products, and checkout faster on future purchases.'
                },
                {
                    question: 'How can I change or cancel my order?',
                    answer: 'Orders can be modified or cancelled within 2 hours of placement. After that, orders are processed and shipped quickly. Please contact us immediately at support@luminaskin.com if you need to make changes.'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.'
                },
                {
                    question: 'Is my payment information secure?',
                    answer: 'Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your complete credit card details on our servers.'
                }
            ]
        },
        {
            category: 'Skin Quiz & Recommendations',
            questions: [
                {
                    question: 'How accurate is the skin quiz?',
                    answer: 'Our skin quiz is developed by dermatologists and skincare experts. While it provides personalized recommendations based on your answers, everyone\'s skin is unique. We recommend starting with recommended products and adjusting based on your skin\'s response.'
                },
                {
                    question: 'Can I retake the quiz?',
                    answer: 'Yes! Your skin\'s needs can change with seasons, age, and lifestyle. We recommend retaking the quiz every 3-6 months or whenever you notice changes in your skin.'
                },
                {
                    question: 'Do I have to buy the recommended products?',
                    answer: 'Not at all! The quiz recommendations are suggestions based on your skin type and concerns. Feel free to explore our full collection and choose products that interest you.'
                }
            ]
        }
    ];

    const toggleQuestion = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faqs-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about our products, shipping, and more</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="faq-content">
                        {faqCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="faq-category">
                                <h2 className="faq-category-title">{category.category}</h2>
                                <div className="faq-list">
                                    {category.questions.map((faq, questionIndex) => {
                                        const index = `${categoryIndex}-${questionIndex}`;
                                        const isOpen = openIndex === index;

                                        return (
                                            <div key={questionIndex} className="faq-item">
                                                <button
                                                    className="faq-question"
                                                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </button>
                                                {isOpen && (
                                                    <div className="faq-answer">
                                                        <p>{faq.answer}</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="faq-contact">
                        <h3>Still have questions?</h3>
                        <p>Our customer service team is here to help!</p>
                        <div className="contact-options">
                            <a href="/contact" className="btn btn-primary">Contact Us</a>
                            <a href="mailto:support@luminaskin.com" className="btn btn-outline">Email Support</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
