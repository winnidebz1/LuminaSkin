import React from 'react';
import { Heart, Shield, Sun, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <h1>Our Philosophy</h1>
                    <p>Celebrated skincare for melanin-rich beauty, rooted in science and nature.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>More Than Just Skincare</h2>
                            <p>
                                Lumina Skin was born from a simple yet powerful realization: the skincare industry was leaving out a vast community of beauty. For too long, melanin-rich skin has been treated as an afterthought in formulation labs.
                            </p>
                            <p>
                                We believe that glowing, healthy skin is a birthright, not a luxury reserved for a few. Our mission is to decolonize the beauty aisle by creating science-backed, clinical-grade formulations specifically designed for the unique structural needs of melanin-rich skin.
                            </p>
                            <p>
                                From hyperpigmentation safe-guards to moisture-retention technology, every drop of Lumina is crafted to honor, protect, and illuminate your natural radiance.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="/assets/hero.png" alt="Lumina Founder" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-blush">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Core Values</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="icon-wrapper">
                                <Sun size={32} />
                            </div>
                            <h3>Melanin-First</h3>
                            <p>We don't just "include" darker skin tones; we formulate <em>for</em> them first. Our products are tested on Fitzpatrick skin types IV-VI to ensure safety and efficacy.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-wrapper">
                                <Shield size={32} />
                            </div>
                            <h3>Clean & Clinical</h3>
                            <p>We ban over 1,300 toxic ingredients. Our formulas are free from parabens, sulfates, and synthetic fragrances, focusing instead on high-performance clinical actives.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-wrapper">
                                <Heart size={32} />
                            </div>
                            <h3>Transparency</h3>
                            <p>We believe you have the right to know exactly what you're putting on your skin. We disclose our ingredient percentages and sourcing practices openly.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-wrapper">
                                <Users size={32} />
                            </div>
                            <h3>Community</h3>
                            <p>We are building a sanctuary for wellness and beauty. Lumina is more than a brand; it's a celebration of us, by us, for us.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact/Founder Quote */}
            <section className="section">
                <div className="container">
                    <div className="quote-container">
                        <blockquote>
                            "I created Lumina because I was tired of mixing three different products just to get enough hydration without the white cast. I wanted skincare that felt like a love letter to my skin."
                        </blockquote>
                        <cite>- Founder, Lumina Skin</cite>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
