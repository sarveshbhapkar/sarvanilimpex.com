import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Why Choose Us', path: '/why-us' },
        { name: 'Global Presence', path: '/global' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <span className="logo-main">SARVANIL</span>
                    <span className="logo-sub">IMPEX</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="nav-item">
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-cta">Inquiry</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="nav-item-mobile"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="btn-cta-mobile"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
