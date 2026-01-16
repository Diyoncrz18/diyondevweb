'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateCounters = () => {
            const counters = document.querySelectorAll('.stat-card .number');
            counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute('data-count') || '0');
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + '+';
                    }
                }, 30);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>
            <div className="container">
                <div className="hero-content hero-centered">
                    <div className="hero-text fade-in">
                        <h1 className="hero-headline">
                            <span className="line gradient-text">Jasa Pembuatan Website Profesional & Responsif</span>
                        </h1>
                        <p className="hero-description">
                            Bangun citra bisnis yang lebih profesional dengan website eksklusif dan performa tinggi.
                            Desain modern, responsif, SEO-ready, dan siap bersaing di era digital.
                        </p>
                        <div className="hero-buttons">
                            <Link href="https://wa.me/6281344155598?text=Halo%20DiyonDev%2C%20saya%20tertarik%20untuk%20membuat%20website." className="btn-primary" target="_blank">Konsultasi Sekarang</Link>
                            <Link href="#portfolio" className="btn-secondary">Lihat Portfolio</Link>
                        </div>
                        <div className="hero-stats" ref={statsRef}>
                            <div className="stat-card">
                                <div className="number" data-count="39">0</div>
                                <div className="label">Proyek Selesai</div>
                            </div>
                            <div className="stat-card">
                                <div className="number" data-count="99">0</div>
                                <div className="label">% Kepuasan</div>
                            </div>
                            <div className="stat-card">
                                <div className="number" data-count="24">0</div>
                                <div className="label">Jam Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
