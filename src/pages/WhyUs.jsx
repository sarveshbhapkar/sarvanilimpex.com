import React from 'react';
import { Award, ShieldCheck, Globe, Clock, BarChart3, TrendingUp } from 'lucide-react';

const WhyUs = () => {
    const advantages = [
        {
            icon: <Award className="text-gold" size={40} />,
            title: 'Quality Assurance',
            desc: 'Our products undergo multi-stage quality checks at source and before dispatch, meeting international purity and safety standards.'
        },
        {
            icon: <ShieldCheck className="text-gold" size={40} />,
            title: 'Compliance Driven',
            desc: 'We strictly adhere to global trade regulations and certifications, ensuring smooth documentation and customs clearance.'
        },
        {
            icon: <Clock className="text-gold" size={40} />,
            title: 'Just-In-Time Delivery',
            desc: 'Optimized logistics and warehouse management allow us to minimize transit times and meet strict project deadlines.'
        },
        {
            icon: <BarChart3 className="text-gold" size={40} />,
            title: 'Competitive Pricing',
            desc: 'By sourcing directly from producers and leveraging economies of scale, we offer the most competitive rates in the market.'
        },
        {
            icon: <Globe className="text-gold" size={40} />,
            title: 'Global Network',
            desc: 'Our well-established network of logistics partners spans all major continents, ensuring reliable door-to-door delivery.'
        },
        {
            icon: <TrendingUp className="text-gold" size={40} />,
            title: 'Scalable Solutions',
            desc: 'Whether you are a startup or a multinational corporation, we scale our supply capabilities to match your business growth.'
        }
    ];

    return (
        <div className="why-us-page">
            <section className="page-header section-padding">
                <div className="container">
                    <span className="text-gold">The Sarvanil Advantage</span>
                    <h1>Why Trade With Us?</h1>
                </div>
            </section>

            <section className="advantages section-padding">
                <div className="container">
                    <div className="features-grid">
                        {advantages.map((adv, index) => (
                            <div key={index} className="feature-item" style={{ textAlign: 'left', padding: '3rem' }}>
                                {adv.icon}
                                <h3 style={{ margin: '1.5rem 0 1rem', fontSize: '1.5rem' }}>{adv.title}</h3>
                                <p style={{ opacity: 0.7 }}>{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="process-flow section-padding gray-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Operational Workflow</h2>
                        <p className="section-subtitle">A structured approach to international trade for maximum efficiency.</p>
                    </div>
                    <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {['Requirement Analysis', 'Strategic Sourcing', 'Quality Inspection', 'Logistics Planning', 'Final Dispatch'].map((step, i) => (
                            <div key={i} className="process-step" style={{ textAlign: 'center' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', fontWeight: 'bold' }}>{i + 1}</div>
                                <h4>{step}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
