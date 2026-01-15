'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const pricingPlans = [
    {
        name: 'Starter',
        price: 'Rp 1.5jt',
        unit: '/ proyek',
        features: [
            '1-3 Halaman',
            'Desain Responsif',
            '1x Revisi',
            'Hosting 1 Bulan',
            'Domain .com'
        ],
        popular: false
    },
    {
        name: 'Business',
        price: 'Rp 3.5jt',
        unit: '/ proyek',
        features: [
            '5-7 Halaman',
            'Desain Premium',
            '3x Revisi',
            'SEO Basic',
            'CMS Admin',
            'Hosting 3 Bulan'
        ],
        popular: true
    },
    {
        name: 'Professional',
        price: 'Rp 7.5jt',
        unit: '/ proyek',
        features: [
            'Unlimited Halaman',
            'Desain Custom',
            'Revisi Unlimited',
            'SEO Advanced',
            'Fitur Custom',
            'Support 6 Bulan'
        ],
        popular: false
    }
];

export default function PricingSection() {
    useEffect(() => {
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <h2 className="fade-in">Pilih Paket Terbaik</h2>
                <p className="pricing-subtitle fade-in">Investasi terbaik untuk bisnis digital Anda</p>
                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card fade-in ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && <span className="pricing-badge">⭐ Terpopuler</span>}
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price} <span>{plan.unit}</span></div>
                            <ul className="pricing-features">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                            <Link href="#contact" className="btn-primary">Pilih Paket</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
