'use client';

import { useEffect } from 'react';

const features = [
    {
        number: '01',
        title: 'Narasi Bisnis yang Memikat',
        subtitle: 'Free Copywriting',
        description: 'Kami tidak hanya mendesain, tapi juga bercerita. Dapatkan copywriting profesional gratis yang dirancang khusus untuk membangun citra bisnis dan meyakinkan calon pelanggan Anda.'
    },
    {
        number: '02',
        title: 'Standar Performa Tinggi',
        subtitle: 'High Performance',
        description: 'Website Anda dibangun dengan fondasi teknologi terkini: desain responsif, loading cepat, dan struktur yang ramah SEO agar mudah ditemukan di Google.'
    },
    {
        number: '03',
        title: 'Solusi Digital Terintegrasi',
        subtitle: 'All-in-One Solution',
        description: 'Kami menangani seluruh aspek teknis—mulai dari riset, desain, instalasi domain, hingga peluncuran. Anda cukup fokus pada pengembangan bisnis.'
    },
    {
        number: '04',
        title: 'Layanan Purna Jual Prioritas',
        subtitle: 'Priority Support',
        description: 'Hubungan kami tidak berakhir saat website selesai. Tim kami siap memberikan dukungan teknis dan pendampingan kapan pun Anda menemui kendala.'
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
                {/* Header */}
                <div className="why-us-header fade-in">
                    <h2>Mengapa Memilih Kami?</h2>
                    <p>Kombinasi keahlian teknis dan pemahaman bisnis untuk hasil terbaik</p>
                </div>

                {/* Feature Cards - Horizontal */}
                <div className="feature-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card fade-in">
                            <div className="feature-line"></div>
                            <div className="feature-number">{feature.number}</div>
                            <div className="feature-content">
                                <span className="feature-subtitle">{feature.subtitle}</span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}





