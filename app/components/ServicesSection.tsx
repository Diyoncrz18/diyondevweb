'use client';

import { useEffect } from 'react';

const services = [
    {
        icon: '🏢',
        title: 'Website Company Profile',
        description: 'Website profesional untuk menampilkan identitas bisnis Anda. Desain elegan, konten terstruktur, dan SEO-friendly untuk meningkatkan kredibilitas perusahaan.',
        size: 'large'
    },
    {
        icon: '🛒',
        title: 'E-Commerce',
        description: 'Toko online lengkap dengan payment gateway.',
        size: 'normal'
    },
    {
        icon: '📄',
        title: 'Landing Page',
        description: 'Halaman promosi yang convert.',
        size: 'normal'
    },
    {
        icon: '⚙️',
        title: 'Custom Web',
        description: 'Sesuai kebutuhan spesifik Anda.',
        size: 'normal'
    },
    {
        icon: '💻',
        title: 'Web Application',
        description: 'Sistem dan aplikasi berbasis web dengan fitur kompleks, dashboard, dan integrasi API.',
        size: 'wide'
    },
    {
        icon: '🛠️',
        title: 'Maintenance & Support',
        description: 'Layanan pemeliharaan berkala, update konten, backup, dan dukungan teknis 24/7.',
        size: 'wide'
    }
];

export default function ServicesSection() {
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
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-title-vertical fade-in">Layanan Kami</span>
                    <div className="section-intro fade-in">
                        <h2>Solusi Website untuk Semua Kebutuhan</h2>
                        <p>Dari ide hingga peluncuran, kami menyediakan layanan lengkap untuk membangun kehadiran digital yang powerful.</p>
                    </div>
                </div>
                <div className="bento-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bento-item fade-in ${service.size === 'large' ? 'large' : ''} ${service.size === 'wide' ? 'wide' : ''}`}
                        >
                            <div className="bento-icon">{service.icon}</div>
                            <div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
