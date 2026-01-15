'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="#" className="logo">
                            <Image src="/logo1.png" alt="DiyonWeb Logo" width={120} height={40} />
                        </Link>
                        <p>Kami adalah tim profesional yang berdedikasi untuk menciptakan website berkualitas tinggi yang membantu bisnis Anda berkembang di era digital.</p>
                        <div className="social-links">
                            <Link href="#" aria-label="Instagram">📷</Link>
                            <Link href="#" aria-label="Facebook">👍</Link>
                            <Link href="#" aria-label="LinkedIn">💼</Link>
                            <Link href="#" aria-label="Twitter">🐦</Link>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Navigasi</h4>
                        <ul>
                            <li><Link href="#hero">Beranda</Link></li>
                            <li><Link href="#services">Layanan</Link></li>
                            <li><Link href="#portfolio">Portfolio</Link></li>
                            <li><Link href="#pricing">Harga</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Layanan</h4>
                        <ul>
                            <li><Link href="#">Company Profile</Link></li>
                            <li><Link href="#">E-Commerce</Link></li>
                            <li><Link href="#">Landing Page</Link></li>
                            <li><Link href="#">Web App</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Kontak</h4>
                        <ul>
                            <li><Link href="mailto:hello@webcraft.id">📧 hello@webcraft.id</Link></li>
                            <li><Link href="tel:+6281234567890">📱 +62 812-3456-7890</Link></li>
                            <li><Link href="#">📍 Jakarta, Indonesia</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 WebCraft Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
