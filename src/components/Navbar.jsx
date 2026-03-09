"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import '../components.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="navbar" style={{ boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none' }}>
            <div className="container flex justify-between items-center navbar-content">
                <Link href="/" className="logo">
                    <Image
                        src="/nav-logo.png"
                        alt="Transformando Sonrisas"
                        width={340}
                        height={85}
                        style={{ objectFit: 'contain' }}
                        priority
                        unoptimized
                    />
                </Link>

                <nav className="desktop-nav">
                    <Link href="/tratamientos">Tratamientos</Link>
                    <Link href="/dentista">La Doctora</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contacto">Contacto</Link>
                </nav>

                <a href="https://wa.me/528182522667?text=Hola%20Dra.%20Carmen%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20o%20recibir%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">Agendar Cita</a>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <Link href="/tratamientos" onClick={() => setIsMobileMenuOpen(false)}>Tratamientos</Link>
                <Link href="/dentista" onClick={() => setIsMobileMenuOpen(false)}>La Doctora</Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
                <a href="https://wa.me/528182522667?text=Hola%20Dra.%20Carmen%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20o%20recibir%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }} onClick={() => setIsMobileMenuOpen(false)}>
                    Agendar Cita
                </a>
            </div>
        </header>
    );
}
