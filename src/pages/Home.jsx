import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Lumina Glow Serum',
        price: '$85.00',
        image: '/assets/serum.png',
        rating: 4.9,
        reviews: 128
    },
    {
        id: 2,
        name: 'Velvet Moisture Cream',
        price: '$65.00',
        image: '/assets/cream.png',
        rating: 4.8,
        reviews: 94
    },
    {
        id: 3,
        name: 'Purify Gel Cleanser',
        price: '$45.00',
        image: '/assets/cleanser.png',
        rating: 4.9,
        reviews: 210
    }
];

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="/assets/hero.png" alt="Lumina Model" />
                </div>
                <div className="hero-content container">
                    <h1 className="animate-fade-in">Glow Starts With <br /><span className="text-gold">Healthy Skin.</span></h1>
                    <p className="animate-fade-in delay-1">Minimal ingredients. Maximum results. Clinically proven for melanin-rich skin.</p>
                    <div className="hero-buttons animate-fade-in delay-2">
                        <Link to="/bestsellers" className="btn btn-primary">Shop Bestsellers</Link>
                        <Link to="/quiz" className="btn btn-outline">Take Skin Quiz</Link>
                    </div>
                </div>
            </section>

            {/* Lumina Guarantee */}
            <section className="guarantee-section">
                <div className="container guarantee-grid">
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Dermatologist Tested</span>
                    </div>
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Cruelty-Free</span>
                    </div>
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Clean Ingredients</span>
                    </div>
                    <div className="guarantee-item">
                        <CheckCircle size={24} className="text-gold" />
                        <span>Results Driven</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
