import React from 'react';
import { FileCheck, ShieldAlert, BadgeCheck, Scale } from 'lucide-react';

const Certifications = () => {
    const complianceItems = [
        {
            title: 'IEC (Import Export Code)',
            authority: 'Directorate General of Foreign Trade, India',
            desc: 'Mandatory government registration for carrying out commercial import-export operations.'
        },
        {
            title: 'ISO 9001:2015',
            authority: 'Quality Management Systems',
            desc: 'International standard for quality management ensuring consistent product excellence.'
        },
        {
            title: 'APEDA Registration',
            authority: 'Agricultural and Processed Food Products Export Development Authority',
            desc: 'Essential for exporting Indian agro products with guaranteed source-tracking.'
        },
        {
            title: 'GST Compliance',
            authority: 'Government of India',
            desc: 'Full compliance with Indian taxation and trade documentation standards.'
        }
    ];

    return (
        <div className="certifications-page">
            <section className="page-header section-padding">
                <div className="container">
                    <span className="text-gold">Trust & Compliance</span>
                    <h1>Our Certifications</h1>
                </div>
            </section>

            <section className="certifications-list section-padding">
                <div className="container">
                    <div className="snapshot-grid">
                        <div className="cert-intro">
                            <h2 className="section-title">Committed to International Standards</h2>
                            <p>At Sarvanil Impex, we believe that compliance is the foundation of trust. We adhere to all national and international trade regulations to ensure that our partners face zero legal or logistical friction.</p>
                            <div style={{ marginTop: '3rem', padding: '2rem', borderLeft: '4px solid var(--accent)', background: '#f9f9f9' }}>
                                <p style={{ fontStyle: 'italic', opacity: 0.8 }}>"Quality is not an act, it is a habit. Our documentation and compliance processes are designed to reflect this philosophy."</p>
                            </div>
                        </div>
                        <div className="cert-cards" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                            {complianceItems.map((item, i) => (
                                <div key={i} className="stat-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                    <BadgeCheck className="text-gold" size={32} />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.authority}</p>
                                        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="legal-info section-padding gray-bg">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item" style={{ background: 'white' }}>
                            <Scale size={32} className="text-gold" />
                            <h3>Trade Law Adherence</h3>
                            <p>Strict observance of the Foreign Trade Policy of India and destination country regulations.</p>
                        </div>
                        <div className="feature-item" style={{ background: 'white' }}>
                            <ShieldAlert size={32} className="text-gold" />
                            <h3>Secure Documentation</h3>
                            <p>Encrypted handling of trade documents, letters of credit, and commercial invoices.</p>
                        </div>
                        <div className="feature-item" style={{ background: 'white' }}>
                            <FileCheck size={32} className="text-gold" />
                            <h3>Custom clearance</h3>
                            <p>Experience with major custom ports ensuring minimal cargo detention or inspection delays.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;
