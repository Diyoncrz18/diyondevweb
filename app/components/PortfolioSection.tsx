'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const portfolioItems = [
    {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        title: 'E-Commerce Fashion Store',
        description: 'Toko online fashion dengan fitur lengkap dan UX modern',
        tag: 'E-Commerce'
    },
    {
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop',
        title: 'Corporate Website',
        description: 'Company profile untuk perusahaan konstruksi',
        tag: 'Company Profile'
    },
    {
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
        title: 'SaaS Dashboard',
        description: 'Aplikasi web untuk manajemen bisnis',
        tag: 'Web App'
    },
    {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
        title: 'Restaurant Website',
        description: 'Landing page dengan sistem reservasi online',
        tag: 'Landing Page'
    }
];

export default function PortfolioSection() {
    const [currentPortfolio, setCurrentPortfolio] = useState(0);

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

    const nextPortfolio = () => {
        setCurrentPortfolio((prev) => (prev + 1) % portfolioItems.length);
    };

    const prevPortfolio = () => {
        setCurrentPortfolio((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    };

    const goToPortfolio = (index: number) => {
        setCurrentPortfolio(index);
    };

    const getCardStyle = (index: number) => {
        const offset = index - currentPortfolio;
        return {
            transform: `translateX(${offset * 30}px) translateZ(${-Math.abs(offset) * 100}px) rotateY(${offset * 5}deg)`,
            opacity: Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.3,
            zIndex: portfolioItems.length - Math.abs(offset)
        };
    };

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="fade-in">Portfolio Kami</h2>
                <div className="portfolio-stack fade-in">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="portfolio-card"
                            style={getCardStyle(index)}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={500}
                                style={{ objectFit: 'cover', width: '100%', height: '70%' }}
                            />
                            <div className="portfolio-card-info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <span className="tag">{item.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="portfolio-nav">
                    <button onClick={prevPortfolio}>← Sebelumnya</button>
                    <button onClick={nextPortfolio}>Selanjutnya →</button>
                </div>
                <div className="portfolio-dots">
                    {portfolioItems.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentPortfolio ? 'active' : ''}
                            onClick={() => goToPortfolio(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
