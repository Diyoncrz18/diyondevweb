'use client';

import { useEffect } from 'react';
import Image from 'next/image';

// Portfolio images from public/portfolio folder
const portfolioImages = [
    '/portfolio/1.png',
    '/portfolio/2.png',
    '/portfolio/3.png',
    '/portfolio/4.png',
    '/portfolio/5.png',
];

export default function PortfolioSection() {
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

    // Duplicate images for infinite scroll effect
    const duplicatedImages = [...portfolioImages, ...portfolioImages];

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="fade-in">Project Showcase</h2>
                <p className="portfolio-subtitle fade-in">Lihat hasil karya terbaik yang telah kami kerjakan</p>
            </div>

            {/* Marquee Container - Full Width */}
            <div className="portfolio-marquee">
                <div className="portfolio-track animate-marquee">
                    {duplicatedImages.map((image, index) => (
                        <div key={index} className="portfolio-item">
                            <Image
                                src={image}
                                alt={`Portfolio ${(index % portfolioImages.length) + 1}`}
                                width={400}
                                height={280}
                                className="portfolio-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
