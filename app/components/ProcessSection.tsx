'use client';

import { useEffect } from 'react';

const processSteps = [
    {
        number: '01',
        title: 'Konsultasi',
        description: 'Kami mendengarkan kebutuhan dan goals bisnis Anda untuk memahami visi website yang ingin diwujudkan.'
    },
    {
        number: '02',
        title: 'Perencanaan',
        description: 'Membuat wireframe dan mockup desain untuk approval sebelum masuk tahap development.'
    },
    {
        number: '03',
        title: 'Development',
        description: 'Tim developer kami mengerjakan coding dengan teknologi terbaru dan best practices.'
    },
    {
        number: '04',
        title: 'Testing',
        description: 'Quality assurance menyeluruh untuk memastikan website bebas bug dan optimal.'
    },
    {
        number: '05',
        title: 'Launch',
        description: 'Deploy ke server produksi dan website Anda siap go-live!'
    }
];

export default function ProcessSection() {
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
        <section className="process" id="process">
            <div className="container">
                <h2 className="fade-in">Proses Kerja Kami</h2>
                <div className="zigzag-timeline">
                    {processSteps.map((step, index) => (
                        <div key={index} className="timeline-item fade-in" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                            <div className="timeline-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            <div className="timeline-number">{step.number}</div>
                            <div style={{ width: '45%' }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
