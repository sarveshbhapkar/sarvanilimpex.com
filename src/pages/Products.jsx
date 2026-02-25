import React from 'react';

const Products = () => {
    const productCategories = [
        {
            id: 'agro',
            name: 'Agro Products',
            description: 'The finest selection of Indian grains, oilseeds, and pulses processed under strict quality control.',
            items: ['Basmati Rice', 'Durum Wheat', 'Yellow Corn', 'Soybean Meals']
        },
        {
            id: 'spices',
            name: 'Indian Spices',
            description: 'Aromatic and flavorful spices that bring the essence of India to global cuisines.',
            items: ['Turmeric Finger', 'Black Pepper', 'Cumin Seeds', 'Red Chilli Powder']
        },
        {
            id: 'textiles',
            name: 'Textiles & Fibers',
            description: 'Premium cotton yarns, raw silk, and finished textiles for diverse industrial applications.',
            items: ['Combed Cotton Yarn', 'Polyester Fiber', 'Organic Cotton Fabric', 'Industrial Linens']
        },
        {
            id: 'industrial',
            name: 'Industrial Supplies',
            description: 'Specialized industrial chemicals, equipment parts, and raw materials for global infrastructure.',
            items: ['Chemical Intermediates', 'Precision Parts', 'Safety Gear', 'Construction Materials']
        },
        {
            id: 'general',
            name: 'General Merchandise',
            description: 'Curated consumer goods ranging from household essentials to luxury merchandise.',
            items: ['Paper Products', 'Cleaning Essentials', 'Giftware', 'Packaging Materials']
        }
    ];

    return (
        <div className="products-page">
            <section className="page-header section-padding">
                <div className="container">
                    <span className="text-gold">International Standards</span>
                    <h1>Our Product Portfolio</h1>
                </div>
            </section>

            <section className="product-listing section-padding">
                <div className="container">
                    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                        {productCategories.map((cat) => (
                            <div key={cat.id} className="product-cat-block" style={{ borderBottom: '1px solid #eee', paddingBottom: '4rem' }}>
                                <div className="snapshot-grid">
                                    <div className="cat-description">
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cat.name}</h2>
                                        <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '2rem' }}>{cat.description}</p>
                                        <button className="btn-outline">View Specifications</button>
                                    </div>
                                    <div className="cat-items">
                                        <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Key Offerings</h4>
                                        <ul style={{ listStyle: 'none' }}>
                                            {cat.items.map((item, i) => (
                                                <li key={i} style={{ padding: '0.8rem 0', borderBottom: '1px solid #f4f4f4', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="custom-sourcing section-padding gray-bg">
                <div className="container text-center">
                    <h2 className="section-title">Bespoke Sourcing Solutions</h2>
                    <p className="section-subtitle">Looking for something specific? Our global procurement team can source custom merchandise and industrial goods tailored to your requirements.</p>
                    <button className="btn-primary">Inquire About Sourcing</button>
                </div>
            </section>
        </div>
    );
};

export default Products;
