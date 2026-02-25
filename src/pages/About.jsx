import React from 'react';
import { Target, Eye, Shield, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            {/* Sub-Hero / Header */}
            <section className="page-header section-padding">
                <div className="container">
                    <span className="text-gold">Established Excellence</span>
                    <h1>Our Legacy in Global Trade</h1>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision section-padding">
                <div className="container">
                    <div className="snapshot-grid">
                        <div className="mission-text">
                            <h2 className="section-title">Bridging Markets with Integrity</h2>
                            <p>Sarvanil Impex was founded with a clear vision: to showcase the rich diversity of Indian products to the global stage while maintaining the highest standards of trade compliance and logistics efficiency.</p>
                            <p>With years of experience in the import-export landscape, we have built a robust network of suppliers and logistics partners that ensure our clients receive the best, on time, every time.</p>
                        </div>
                        <div className="vision-cards">
                            <div className="stat-card">
                                <Target className="text-gold" size={32} />
                                <h3 style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Our Mission</h3>
                                <p style={{ opacity: 0.7 }}>To be the most reliable link in the global supply chain, driven by transparency and quality.</p>
                            </div>
                            <div className="stat-card" style={{ marginTop: '2rem' }}>
                                <Eye className="text-gold" size={32} />
                                <h3 style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Our Vision</h3>
                                <p style={{ opacity: 0.7 }}>To redefine international trading standards through innovation and sustainable practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="core-values section-padding gray-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Core Values</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-item">
                            <Shield className="text-gold" size={32} />
                            <h3>Integrity</h3>
                            <p>We believe in honest trade practices and building long-term relationships based on trust.</p>
                        </div>
                        <div className="feature-item">
                            <Target className="text-gold" size={32} />
                            <h3>Precision</h3>
                            <p>From sourcing to documentation, every step is handled with unmatched corporate precision.</p>
                        </div>
                        <div className="feature-item">
                            <Users className="text-gold" size={32} />
                            <h3>Customer Focus</h3>
                            <p>Your business growth is our priority. We tailor solutions to meet specific international needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
