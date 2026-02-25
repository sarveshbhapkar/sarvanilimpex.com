import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe2, ShieldCheck, Truck, Clock, Handshake } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070" alt="Global Trade Port" />
                </div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content animate-fade-up">
                        <span className="text-gold" style={{ fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                            Premier Global Trading House
                        </span>
                        <h1>Connecting Indian Excellence to Global Markets</h1>
                        <p>Trusted Import & Export Solutions Across Industries, bridging continents with quality and integrity.</p>
                        <div className="hero-btns">
                            <Link to="/products" className="btn-primary">Explore Products</Link>
                            <Link to="/contact" className="btn-outline">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Snapshot */}
            <section className="about-snapshot section-padding">
                <div className="container">
                    <div className="snapshot-grid">
                        <div className="snapshot-content">
                            <h2 className="section-title">Rooted in Heritage, <br />Focused on the Future</h2>
                            <p>
                                Sarvanil Impex is a leading multi-category global trading company based in India. We specialize in sourcing and delivering premium Agro Products, Spices, Textiles, and Industrial Goods to clients worldwide.
                            </p>
                            <p>
                                Our mission is to simplify international trade through compliance-driven processes, logistics efficiency, and transparent trade practices.
                            </p>
                            <Link to="/about" className="text-link">Learn More About Our Mission <ArrowRight size={16} /></Link>
                        </div>
                        <div className="snapshot-stats">
                            <div className="stat-card">
                                <h3>15+</h3>
                                <p>Countries Reached</p>
                            </div>
                            <div className="stat-card">
                                <h3>50+</h3>
                                <p>Product Categories</p>
                            </div>
                            <div className="stat-card">
                                <h3>100%</h3>
                                <p>Compliance Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories Overview */}
            <section className="product-categories section-padding gray-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Core Specializations</h2>
                        <p className="section-subtitle">Diverse portfolio, singular focus on quality.</p>
                    </div>
                    <div className="category-grid">
                        {[
                            { title: 'Agro Products', desc: 'Premium grains, pulses, and seeds sourced from the heart of India.' },
                            { title: 'Exotic Spices', desc: 'Authentic Indian spices known for their aroma, color, and purity.' },
                            { title: 'Textiles', desc: 'High-quality fibers and finished textiles for the global fashion industry.' },
                            { title: 'Industrial Supplies', desc: 'Reliable equipment and raw materials for manufacturing excellence.' },
                            { title: 'General Merchandise', desc: 'A wide array of consumer goods meeting international standards.' }
                        ].map((cat, index) => (
                            <div key={index} className="category-card">
                                <h3>{cat.title}</h3>
                                <p>{cat.desc}</p>
                                <Link to="/products" className="card-link">Explore <ArrowRight size={14} /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">The Sarvanil Advantage</h2>
                        <p className="section-subtitle">Why global partners trust us for their supply chain needs.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-item">
                            <ShieldCheck className="text-gold" size={40} />
                            <h3>Quality Assurance</h3>
                            <p>Rigorous quality checks and international certifications for every consignment.</p>
                        </div>
                        <div className="feature-item">
                            <Truck className="text-gold" size={40} />
                            <h3>Reliable Logistics</h3>
                            <p>Streamlined supply chain for timely delivery across all major global ports.</p>
                        </div>
                        <div className="feature-item">
                            <Globe2 className="text-gold" size={40} />
                            <h3>Transparent Trade</h3>
                            <p>Upright and ethical practices in every transaction, ensuring long-term trust.</p>
                        </div>
                        <div className="feature-item">
                            <Clock className="text-gold" size={40} />
                            <h3>Timely Delivery</h3>
                            <p>Committed to deadlines, ensuring your business never faces cargo delays.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding">
                <div className="container text-center">
                    <h2>Partner With Us Globally</h2>
                    <p>Ready to expand your business with a reliable Indian trading partner?</p>
                    <Link to="/contact" className="btn-primary">Become a Partner</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
