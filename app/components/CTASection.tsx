'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function CTASection() {
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
        <section className="cta" id="contact">
            <div className="container">
                <div className="cta-inner fade-in">
                    <h2><b>Saatnya Bisnismu Tampil Lebih <br /> Profesional & Siap Closing!</b></h2>
                    <p>DiyonDev siap membantu kamu membangun website yang bukan cuma bagus, tapi juga cepat, responsif, dan siap promosi. Company profile, landing page, hingga toko online — semua kami buat sesuai kebutuhan bisnismu.</p>
                    <p className="cta-highlight">Konsultasi GRATIS & respon cepat via WhatsApp</p>
                    <p className="cta-action">Klik tombol di bawah untuk mulai sekarang.</p>
                    <div className="cta-buttons">
                        <Link
                            href="https://wa.me/6281234567890"
                            className="btn-white"
                            target="_blank"
                        >
                            Konsultasi Via WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
