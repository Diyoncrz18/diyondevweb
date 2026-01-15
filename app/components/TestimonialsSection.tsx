'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        quote: '"Website yang dibuat sangat profesional dan sesuai dengan ekspektasi kami. Tim sangat responsif dan helpful. Highly recommended!"',
        name: 'Budi Santoso',
        role: 'CEO, PT Maju Bersama',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        quote: '"Proses pengerjaan cepat dan hasilnya memuaskan. E-commerce kami jadi lebih profesional dan penjualan meningkat 40%!"',
        name: 'Siti Rahayu',
        role: 'Owner, Butik Cantik',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
        quote: '"Desainnya modern dan unik. Dashboard yang dibuat sangat user-friendly. Terima kasih WebCraft!"',
        name: 'Ahmad Wijaya',
        role: 'Manager, Tech Startup',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
        quote: '"Support after-sales yang luar biasa. Setiap ada masalah selalu dibantu dengan cepat. 5 stars!"',
        name: 'Diana Putri',
        role: 'Marketing, CV Sukses',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

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

    const showTestimonial = (index: number) => {
        setActiveIndex(index);
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <h2 className="fade-in">Apa Kata Klien Kami</h2>
                <div className="testimonial-container fade-in">
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p className="quote">{activeTestimonial.quote}</p>
                        <div className="author">
                            <Image
                                src={activeTestimonial.img}
                                alt={activeTestimonial.name}
                                width={60}
                                height={60}
                                style={{ borderRadius: '50%', objectFit: 'cover' }}
                            />
                            <div className="author-info">
                                <h4>{activeTestimonial.name}</h4>
                                <p>{activeTestimonial.role}</p>
                            </div>
                        </div>
                    </div>
                    <div className="avatar-bubbles">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`avatar-bubble ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => showTestimonial(index)}
                            >
                                <Image
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    width={60}
                                    height={60}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
