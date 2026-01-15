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
                    <h2>Siap Memulai Proyek Website Anda?</h2>
                    <p>Konsultasikan kebutuhan Anda sekarang dan dapatkan penawaran terbaik!</p>
                    <div className="cta-buttons">
                        <Link
                            href="https://wa.me/6281234567890"
                            className="btn-white"
                            target="_blank"
                        >
                            💬 Chat WhatsApp
                        </Link>
                        <Link
                            href="mailto:hello@webcraft.id"
                            className="btn-outline"
                        >
                            ✉️ Email Kami
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
