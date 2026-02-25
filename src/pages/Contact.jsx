import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        product: 'Agro Products',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. Our team will contact you shortly.');
        setFormData({ name: '', email: '', company: '', product: 'Agro Products', message: '' });
    };

    return (
        <div className="contact-page">
            <section className="page-header section-padding">
                <div className="container">
                    <span className="text-gold">Get In Touch</span>
                    <h1>Contact Our Trading Desk</h1>
                </div>
            </section>

            <section className="contact-main section-padding">
                <div className="container">
                    <div className="snapshot-grid" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                        <div className="contact-details">
                            <h2 className="section-title">Partner With Us</h2>
                            <p style={{ marginBottom: '3rem' }}>We are always looking for new global partners. Reach out to discuss trade opportunities or request product samples.</p>

                            <div className="contact-info-list">
                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <div style={{ color: 'var(--accent)' }}><MapPin /></div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.5 }}>Headquarters</h4>
                                        <p>Sarvanil Impex, Corporate House, <br />Ahmedabad, Gujarat, India - 380015</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <div style={{ color: 'var(--accent)' }}><Mail /></div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.5 }}>Email Address</h4>
                                        <p>trade@sarvanilimpex.com <br />sales@sarvanilimpex.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <div style={{ color: 'var(--accent)' }}><Phone /></div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.5 }}>Phone Support</h4>
                                        <p>+91 98765 43210 <br />+91 79 1234 5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container" style={{ background: 'white', padding: '4rem', boxShadow: '0 20px 60px rgba(0,0,0,0.05)', borderRadius: '4px' }}>
                            <h3 style={{ marginBottom: '2rem' }}>Global Trade Inquiry</h3>
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #eee', outline: 'none' }}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #eee', outline: 'none' }}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Company Name</label>
                                        <input
                                            type="text"
                                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #eee', outline: 'none' }}
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Product Category</label>
                                        <select
                                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #eee', outline: 'none', background: 'white' }}
                                            value={formData.product}
                                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                        >
                                            <option>Agro Products</option>
                                            <option>Exotic Spices</option>
                                            <option>Textiles</option>
                                            <option>Industrial Supplies</option>
                                            <option>General Merchandise</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Message / Specific Requirements</label>
                                    <textarea
                                        rows="4"
                                        required
                                        style={{ width: '100%', padding: '0.8rem', border: '1px solid #eee', outline: 'none', resize: 'none' }}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                    Send Inquiry <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
