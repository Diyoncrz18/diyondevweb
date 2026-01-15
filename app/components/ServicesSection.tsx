'use client';

import { useEffect } from 'react';

const services = [
    {
        title: 'Website Company Profile',
        description: 'Website profesional untuk menampilkan identitas bisnis Anda.',
    },
    {
        title: 'E-Commerce',
        description: 'Toko online lengkap dengan payment gateway.',
    },
    {
        title: 'Landing Page',
        description: 'Halaman promosi yang convert.',
    },
    {
        title: 'Custom Web',
        description: 'Sesuai kebutuhan spesifik Anda.',
    },
    {
        title: 'Web Application',
        description: 'Sistem dan aplikasi berbasis web.',
    },
    {
        title: 'Maintenance & Support',
        description: 'Pemeliharaan dan dukungan teknis 24/7.',
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

        document.querySelectorAll('.fade-in, .orbit-item').forEach(el => {
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

                <div className="orbit-wrapper">
                    {/* Lingkaran orbit */}
                    <div className="orbit-ring"></div>

                    {/* Lingkaran pusat */}
                    <div className="orbit-center">
                        <span>Layanan<br />Kami</span>
                    </div>

                    {/* Items melingkar */}
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`orbit-item orbit-item-${index + 1}`}
                            style={{ '--i': index } as React.CSSProperties}
                        >
                            <div className="orbit-dot"></div>
                            <div className="orbit-card">
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
