'use client';

import Link from 'next/link';
import Image from 'next/image';

// Social Media Icons as SVG components
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export default function Footer() {
    const socialLinks = [
        { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/diyoncrz_' },
        { name: 'TikTok', icon: <TikTokIcon />, url: 'https://www.tiktok.com/@diyoncrz?is_from_webapp=1&sender_device=pc' },
        { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/Diyoncrz18' },
        { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/dion-kobi-b1186b312/' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link href="#" className="logo">
                            <Image src="/logo1.png" alt="DiyonDev Logo" width={180} height={60} style={{ objectFit: 'contain', height: 'auto' }} />
                        </Link>
                        <p>DiyonDev adalah jasa pembuatan website profesional yang siap membantu bisnis Anda tampil lebih profesional di dunia digital.</p>
                        <div className="footer-tagline">
                            <span>✓ Cepat</span>
                            <span>✓ Responsif</span>
                            <span>✓ SEO Friendly</span>
                        </div>
                    </div>

                    {/* Navigation and Services - Side by Side Centered */}
                    <div className="footer-nav-wrapper">
                        {/* Navigation Section */}
                        <div className="footer-column">
                            <h4>Navigasi</h4>
                            <ul>
                                <li><Link href="#hero">Beranda</Link></li>
                                <li><Link href="#services">Layanan</Link></li>
                                <li><Link href="#why-us">Mengapa Kami</Link></li>
                                <li><Link href="#process">Proses Kerja</Link></li>
                                <li><Link href="#portfolio">Portfolio</Link></li>
                                <li><Link href="#pricing">Harga</Link></li>
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div className="footer-column">
                            <h4>Layanan Kami</h4>
                            <ul>
                                <li><Link href="#pricing">Landing Page</Link></li>
                                <li><Link href="#pricing">Company Profile</Link></li>
                                <li><Link href="#pricing">Website Travel &amp; Tour</Link></li>
                                <li><Link href="#pricing">Toko Online</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-column">
                        <h4>Ikuti Kami</h4>
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <p className="footer-social-text">Dapatkan update terbaru dan tips seputar pembuatan website</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>© 2026 DiyonDev. All rights reserved.</p>
                        <p className="footer-credit">Dibuat dengan ❤️ untuk membantu bisnis Anda berkembang</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
