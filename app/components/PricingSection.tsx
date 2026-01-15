'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Categories for tabs
const categories = [
    { id: 'landing', name: 'Landing Page' },
    { id: 'company', name: 'Company Profile' },
    { id: 'travel', name: 'Travel & Tour' },
    { id: 'toko', name: 'Toko Online' },
];

// Pricing data per category
const pricingData: Record<string, PricingPlan[]> = {
    landing: [
        {
            name: 'Starter',
            price: 'Rp 1.200.000',
            features: [
                'Free Domain (.com)',
                'Shared Hosting (6 Bulan)',
                'Desain Responsif (Mobile & Desktop)',
                '1 Halaman Landing Page',
                '1 Email Bisnis',
                '1 GB Disk Storage',
                'Free SSL',
                '1x Revisi Gratis',
                'Garansi Maintenance 15 Hari',
            ],
            description: 'Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page elegan.',
            popular: false,
        },
        {
            name: 'Growth',
            price: 'Rp 2.200.000',
            features: [
                'Semua fitur Starter',
                'Hosting 1 Tahun',
                'Desain Visual Lebih Kompleks',
                'Direct WhatsApp Chat',
                '2 Email Bisnis',
                '10 GB Disk Storage',
                '3x Revisi Gratis',
                'SEO On-Page Basic',
                'Garansi Maintenance 1 Bulan',
            ],
            description: 'Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.',
            popular: true,
        },
        {
            name: 'Ultimate',
            price: 'Rp 3.000.000',
            features: [
                'Semua fitur Growth',
                'Up to 2 Halaman Tambahan',
                'Request Fitur Khusus',
                'Desain Interaktif (Animated Scroll)',
                'Speed Optimization',
                '5x Revisi Gratis',
                'Garansi Maintenance 1,5 Bulan',
            ],
            description: 'Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.',
            popular: false,
        },
    ],
    company: [
        {
            name: 'Starter',
            price: 'Rp 2.000.000',
            originalPrice: 'Rp 2.500.000',
            features: [
                'Free Domain (.com)',
                'Shared Hosting (6 Bulan)',
                'Desain Responsif (Mobile & Desktop)',
                '3 Halaman Utama',
                '1 Email Bisnis',
                '2 GB Disk Storage',
                '2x Revisi Gratis',
                'Free SSL',
                'Form Kontak ke WhatsApp',
                'Garansi Maintenance 15 Hari',
            ],
            description: 'Untuk bisnis yang baru go digital dan butuh online presence yang rapi.',
            popular: false,
        },
        {
            name: 'Growth',
            price: 'Rp 3.200.000',
            originalPrice: 'Rp 4.000.000',
            features: [
                'Semua fitur Starter',
                'Hosting 1 Tahun',
                '5–6 Halaman',
                '2 Email Bisnis',
                'Desain Premium dan Clean',
                '10 GB Disk Storage',
                'Galeri Foto / Testimoni',
                'SEO On-Page Dasar',
                'Garansi Maintenance 1 Bulan',
            ],
            description: 'Untuk bisnis yang ingin tampil lebih profesional dan dipercaya oleh calon klien.',
            popular: true,
        },
        {
            name: 'Executive',
            price: 'Rp 5.200.000',
            originalPrice: 'Rp 6.500.000',
            features: [
                'Semua fitur Growth',
                '8–10 Halaman',
                'Request Fitur Tambahan',
                'Integrasi Instagram/YouTube',
                'Speed Optimization',
                'Desain Interaktif (Parallax)',
                '3 Email Bisnis',
                '5x Revisi Gratis',
                'Garansi Maintenance 1,5 Bulan',
            ],
            description: 'Untuk perusahaan yang ingin tampil profesional dengan fitur lengkap.',
            popular: false,
        },
    ],
    travel: [
        {
            name: 'Starter',
            price: 'Rp 2.000.000',
            originalPrice: 'Rp 2.500.000',
            features: [
                'Free Domain (.com)',
                'Shared Hosting (6 Bulan)',
                'Desain Responsif',
                '1 Halaman Landing Page',
                'CTA Booking via WhatsApp',
                'Section Detail Tour Packages',
                '2 GB Disk Storage',
                '2x Revisi Gratis',
                'Garansi Maintenance 15 Hari',
            ],
            description: 'Landing page simpel tapi powerful untuk penawaran paket tour.',
            popular: false,
        },
        {
            name: 'Growth',
            price: 'Rp 4.000.000',
            originalPrice: 'Rp 5.000.000',
            features: [
                'Semua fitur Starter',
                'Hosting 1 Tahun',
                '5–7 Halaman Utama',
                'Page Individual per Paket',
                'Fitur Search/Filter Paket',
                'Galeri Foto Tiap Paket',
                'SEO On-Page Basic',
                '10 GB Disk Storage',
                '3x Revisi Gratis',
                'Garansi Maintenance 1 Bulan',
            ],
            description: 'Website lengkap seperti travel agent profesional.',
            popular: true,
        },
        {
            name: 'Ultimate',
            price: 'Rp 9.600.000',
            originalPrice: 'Rp 12.000.000',
            features: [
                'Semua fitur Growth',
                'Integrasi Payment Gateway',
                'Form Booking Otomatis',
                'Email Notifikasi Otomatis',
                'Kalender Jadwal Ketersediaan',
                'Desain Interaktif',
                'Speed Optimization',
                '5x Revisi Gratis',
                'Garansi Maintenance 1,5 Bulan',
            ],
            description: 'Website profesional + fitur pembayaran langsung untuk travel skala nasional.',
            popular: false,
        },
    ],
    toko: [
        {
            name: 'Starter',
            price: 'Rp 2.000.000',
            originalPrice: 'Rp 2.500.000',
            features: [
                'Free Domain (.com)',
                'Shared Hosting (6 Bulan)',
                'Desain Responsif',
                '1 Halaman Landing Page',
                'Gambar Produk + Harga',
                'Tombol Beli → WhatsApp',
                'Section Testimoni/FAQ/Promo',
                '2x Revisi Gratis',
                'Garansi Maintenance 15 Hari',
            ],
            description: 'Cocok untuk brand baru yang butuh halaman jualan simpel.',
            popular: false,
        },
        {
            name: 'Growth',
            price: 'Rp 4.800.000',
            originalPrice: 'Rp 6.000.000',
            features: [
                'Semua fitur Starter',
                'Hosting 1 Tahun',
                '5–7 Halaman',
                'Katalog Produk (20–100 produk)',
                'Fitur Search/Filter Produk',
                'Keranjang → Checkout WhatsApp',
                'SEO On-Page Basic',
                '10 GB Disk Storage',
                '3x Revisi Gratis',
                'Garansi Maintenance 1 Bulan',
            ],
            description: 'Toko online profesional dengan katalog dan pemesanan via WhatsApp.',
            popular: true,
        },
        {
            name: 'Ultimate',
            price: 'Rp 9.600.000',
            originalPrice: 'Rp 12.000.000',
            features: [
                'Semua fitur Growth',
                'Sistem Keranjang Otomatis',
                'Integrasi Payment Gateway',
                'Dashboard Admin Lengkap',
                'Checkout + Email Notifikasi',
                'Ongkir Otomatis',
                'Speed Optimization',
                '5x Revisi Gratis',
                'Garansi Maintenance 1,5 Bulan',
            ],
            description: 'Toko online full fitur dengan cart system & pembayaran otomatis.',
            popular: false,
        },
    ],
};

interface PricingPlan {
    name: string;
    price: string;
    originalPrice?: string;
    features: string[];
    description: string;
    popular: boolean;
}

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState('landing');

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

    const currentPlans = pricingData[activeTab] || [];

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                {/* Header */}
                <h2 className="fade-in">Pilih Paket Terbaik</h2>
                <p className="pricing-subtitle fade-in">Investasi terbaik untuk bisnis digital Anda</p>

                {/* Category Tabs */}
                <div className="pricing-tabs fade-in">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`pricing-tab ${activeTab === cat.id ? 'active' : ''}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Pricing Cards */}
                <div className="pricing-grid">
                    {currentPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card fade-in ${plan.popular ? 'popular' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && <span className="pricing-badge">Terpopuler</span>}

                            {/* Plan Name */}
                            <h3>{plan.name}</h3>

                            {/* Price */}
                            {plan.originalPrice && (
                                <p className="pricing-original-price">{plan.originalPrice}</p>
                            )}
                            <div className="price">{plan.price}</div>

                            {/* Features */}
                            <ul className="pricing-features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>{feature}</li>
                                ))}
                            </ul>

                            {/* Description */}
                            <p className="pricing-description">{plan.description}</p>

                            {/* CTA Button */}
                            <Link href="#contact" className="btn-primary">
                                Order Sekarang
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
