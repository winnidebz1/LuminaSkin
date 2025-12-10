import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter } from 'lucide-react';
import { products, productsByCategory } from '../data/products';

const AllProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Serums', 'Moisturizers', 'Cleansers', 'Toners', 'Eye Care'];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="all-products-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Shop All Products</h1>
                    <p>Discover our complete collection of clean, effective skincare for melanin-rich skin</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <div className="category-filter">
                        <div className="filter-header">
                            <Filter size={20} />
                            <span>Filter by Category</span>
                        </div>
                        <div className="category-buttons">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products by Category */}
                    {selectedCategory === 'All' ? (
                        // Show all products grouped by category
                        Object.keys(productsByCategory).map(category => (
                            <div key={category} className="category-section">
                                <h2 className="category-title">{category}</h2>
                                <div className="product-grid">
                                    {productsByCategory[category].map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        // Show filtered products
                        <div className="product-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

// Product Card Component
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.bestseller && <span className="badge">Best Seller</span>}
                <button className="quick-add">Quick Add</button>
            </div>
            <div className="product-info">
                <div className="rating">
                    <Star size={14} fill="#C6A87C" className="text-gold" />
                    <span>{product.rating} ({product.reviews})</span>
                </div>
                <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                </Link>
                <p className="product-description">{product.description}</p>
                <p className="price">{product.price}</p>
            </div>
        </div>
    );
};

export default AllProducts;
