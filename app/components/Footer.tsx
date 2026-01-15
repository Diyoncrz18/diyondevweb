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
                            <Image src="/logo1.png" alt="DiyonDev Logo" width={180} height={60} style={{ objectFit: 'contain', height: 'auto' }} />
                        </Link>
                        <p>DiyonDev adalah jasa pembuatan website profesional yang siap membantu bisnis Anda tampil lebih profesional di dunia digital.</p>
                        <div className="footer-tagline">
                            <span>✓ Cepat</span>
                            <span>✓ Responsif</span>
                            <span>✓ SEO Friendly</span>
                        </div>
                    </div>
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
                    <div className="footer-column">
                        <h4>Layanan Kami</h4>
                        <ul>
                            <li><Link href="#pricing">Landing Page</Link></li>
                            <li><Link href="#pricing">Company Profile</Link></li>
                            <li><Link href="#pricing">Website Travel & Tour</Link></li>
                            <li><Link href="#pricing">Toko Online</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 DiyonDev. All rights reserved.</p>
                    <p className="footer-credit">Dibuat dengan ❤️ untuk membantu bisnis Anda berkembang</p>
                </div>
            </div>
        </footer>
    );
}
