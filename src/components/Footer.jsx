import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    const whatsappNumber = "+919876543210"; // Placeholder, user will provide actual
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="logo">
                            <span className="logo-main">SARVANIL</span>
                            <span className="logo-sub">IMPEX</span>
                        </Link>
                        <p className="footer-desc">
                            Connecting Indian excellence to global markets. Trusted partners in multi-category trading and logistics solutions.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Product Categories</Link></li>
                            <li><Link to="/why-us">Why Choose Us</Link></li>
                            <li><Link to="/global">Global Presence</Link></li>
                            <li><Link to="/certifications">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="contact-info">
                            <li><MapPin size={18} className="text-gold" /> <span>Gujarat, India</span></li>
                            <li><Mail size={18} className="text-gold" /> <span>info@sarvanilimpex.com</span></li>
                            <li><Phone size={18} className="text-gold" /> <span>+91 98765 43210</span></li>
                        </ul>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                            <MessageCircle size={20} /> WhatsApp Us
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sarvanil Impex. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Trade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
