'use client';

import { useEffect } from 'react';

const features = [
    {
        icon: '📱',
        title: 'Responsif',
        description: 'Tampil sempurna di semua device'
    },
    {
        icon: '🔍',
        title: 'SEO Friendly',
        description: 'Optimasi mesin pencari'
    },
    {
        icon: '⚡',
        title: 'Super Cepat',
        description: 'Loading time optimal'
    },
    {
        icon: '🔒',
        title: 'Keamanan',
        description: 'SSL & proteksi terjamin'
    },
    {
        icon: '🎧',
        title: 'Support 24/7',
        description: 'Bantuan kapan saja'
    },
    {
        icon: '✏️',
        title: 'Revisi Gratis',
        description: 'Sampai Anda puas'
    }
];

export default function WhyUsSection() {
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
        <section className="why-us" id="why-us">
            <div className="container">
                <div className="orbital-container">
                    <div className="orbital-ring ring-1"></div>
                    <div className="orbital-ring ring-2"></div>
                    <div className="orbital-center fade-in">
                        <h2>Mengapa Memilih Kami?</h2>
                        <p>Kombinasi keahlian teknis dan pemahaman bisnis untuk hasil terbaik</p>
                    </div>
                    {features.map((feature, index) => (
                        <div key={index} className="orbital-item fade-in">
                            <div className="icon">{feature.icon}</div>
                            <div className="text">
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
