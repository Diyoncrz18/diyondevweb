'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <Link href="#" className="logo">
                <Image src="/logo1.png" alt="DiyonWeb Logo" width={120} height={40} priority />
            </Link>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                <li><Link href="#hero" onClick={closeMenu}>Beranda</Link></li>
                <li><Link href="#services" onClick={closeMenu}>Layanan</Link></li>
                <li><Link href="#portfolio" onClick={closeMenu}>Portfolio</Link></li>
                <li><Link href="#process" onClick={closeMenu}>Proses</Link></li>
                <li><Link href="#pricing" onClick={closeMenu}>Harga</Link></li>
                <li><Link href="#contact" onClick={closeMenu}>Kontak</Link></li>
            </ul>
            <Link href="https://wa.me/6281344155598?text=Halo%20DiyonDev%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis." className="nav-cta" target="_blank">Konsultasi Gratis</Link>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}
