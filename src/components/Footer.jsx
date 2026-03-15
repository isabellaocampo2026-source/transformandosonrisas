import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <footer id="contacto" className="footer">
                <div className="container footer-grid">
                    <div className="footer-col">
                        <Link href="/" className="logo" style={{ marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>
                            <div style={{
                                backgroundColor: 'white',
                                padding: '12px 20px',
                                borderRadius: 'var(--radius-md)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    src="/nav-logo.png"
                                    alt="Transformando Sonrisas"
                                    width={180}
                                    height={45}
                                    style={{ objectFit: 'contain' }}
                                    unoptimized
                                />
                            </div>
                        </Link>
                        <p style={{ color: '#cbd5e1', marginBottom: 'var(--spacing-lg)' }}>
                            Cuidando sonrisas en San Pedro Garza García con tecnología de vanguardia y trato humano.
                        </p>
                        <div className="social-links flex gap-md">
                            <a href="https://www.facebook.com/ConsultorioDraCarmenCarrilloViejo" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><Facebook size={24} /></a>
                            <a href="mailto:carmencarrillo.consultorio@gmail.com" className="social-icon" aria-label="Email"><Mail size={24} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Enlaces Rápidos</h4>
                        <ul className="footer-links">
                            <li><Link href="/tratamientos">Tratamientos</Link></li>
                            <li><Link href="/dentista">Conoce a la Especialista</Link></li>
                            <li><Link href="/info">Información Dental</Link></li>
                            <li><Link href="/preguntas-al-dentista">Preguntas Frecuentes</Link></li>
                            <li><Link href="/blog">Blog y Actualidad</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Contáctanos</h4>
                        <ul className="contact-info">
                            <li>
                                <Phone size={20} />
                                <a href="tel:8182522667">(81) 8252 2667</a>
                            </li>
                            <li>
                                <Mail size={20} />
                                <a href="mailto:carmencarrillo.consultorio@gmail.com" style={{ overflowWrap: 'break-word', wordBreak: 'break-all' }}>carmencarrillo.consultorio@gmail.com</a>
                            </li>
                            <li>
                                <MapPin size={20} />
                                <span>Río San Lorenzo 609, Fuentes del Valle<br />66224 San Pedro Garza García, N.L.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col" style={{ borderTop: '1px solid #334155', paddingTop: 'var(--spacing-lg)', gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
                        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>&copy; 2026 Transformando Sonrisas, Copyright.</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontSize: '0.75rem', marginRight: '4px', letterSpacing: '0.1em' }}>ACEPTAMOS</span>
                            <img src="/visa.svg" alt="Visa" style={{ height: '22px', width: 'auto', borderRadius: '4px' }} />
                            <img src="/mastercard.svg" alt="MasterCard" style={{ height: '26px', width: 'auto', borderRadius: '4px' }} />
                            <img src="/amex.svg" alt="American Express" style={{ height: '22px', width: 'auto', borderRadius: '4px' }} />
                        </div>
                    </div>
                </div>
            </footer>

            <a href="https://wa.me/5218182522667?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20la%20Dra.%20Carmen%20Carrillo." target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
            </a>
        </>
    );
}
