import React from 'react';
import { Globe2, MapPin, Ship, Plane } from 'lucide-react';

const GlobalPresence = () => {
    return (
        <div className="global-presence-page">
            <section className="page-header section-padding">
                <div className="container">
                    <span className="text-gold">Worldwide Reach</span>
                    <h1>Our Global Footprint</h1>
                </div>
            </section>

            <section className="map-section section-padding">
                <div className="container">
                    <div className="snapshot-grid">
                        <div className="map-info">
                            <h2 className="section-title">Connecting Continents</h2>
                            <p>Sarvanil Impex operates at the intersection of global supply and demand. Our export operations reach over 15 countries across Asia, Europe, Africa, and the Americas.</p>
                            <div className="regions-list" style={{ marginTop: '2.5rem' }}>
                                {[
                                    { region: 'Asia-Pacific', countries: 'Singapore, UAE, Vietnam, Malaysia' },
                                    { region: 'Europe', countries: 'Germany, Netherlands, UK' },
                                    { region: 'Americas', countries: 'USA, Canada, Brazil' },
                                    { region: 'Africa', countries: 'South Africa, Nigeria' }
                                ].map((item, i) => (
                                    <div key={i} style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} className="text-gold" /> {item.region}</h4>
                                        <p style={{ opacity: 0.6, fontSize: '0.9rem', marginLeft: '1.5rem' }}>{item.countries}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="map-visual" style={{ background: '#f8f8f8', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Globe2 size={120} className="text-gold" style={{ opacity: 0.2 }} />
                                <p style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.5 }}>Interative Map Visualization <br />coming soon in v2.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="logistics section-padding gray-bg">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item" style={{ background: 'white' }}>
                            <Ship size={32} className="text-gold" />
                            <h3>Ocean Freight</h3>
                            <p>Strategic partnerships with major liners for full-container (FCL) and part-container (LCL) shipments.</p>
                        </div>
                        <div className="feature-item" style={{ background: 'white' }}>
                            <Plane size={32} className="text-gold" />
                            <h3>Air Cargo</h3>
                            <p>Express delivery solutions for high-value and time-sensitive merchandise.</p>
                        </div>
                        <div className="feature-item" style={{ background: 'white' }}>
                            <MapPin size={32} className="text-gold" />
                            <h3>Transshipment Hubs</h3>
                            <p>Efficient handling through major transshipment hubs in Singapore and Dubai.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlobalPresence;
