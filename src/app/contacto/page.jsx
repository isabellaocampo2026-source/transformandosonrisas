import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const metadata = {
    title: 'Contacto y Citas | Transformando Sonrisas',
    description: 'Agenda tu cita dental en San Pedro Garza García, N.L. Estamos ubicados en Río San Lorenzo 609, Fuentes del Valle. ¡Contáctanos por teléfono o en línea!',
};

export default function Contact() {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h1 className="hero-title" style={{ fontSize: '3rem' }}>Contacto</h1>
                        <p className="hero-subtitle" style={{ margin: '0 auto' }}>Estamos aquí para cuidar de tu sonrisa. Contáctanos para agendar una cita o resolver tus dudas.</p>
                    </div>

                    {/* Mobile: Clean tap-friendly list (no map) */}
                    <div className="visible-mobile" style={{ display: 'none' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 var(--spacing-sm)' }}>

                            {/* WhatsApp CTA - Most important action */}
                            <a
                                href="https://wa.me/528182522667?text=Hola%20Dra.%20Carmen%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '18px', fontSize: '1.15rem', color: '#ffffff', textAlign: 'center', justifyContent: 'center' }}
                            >
                                💬 Agendar por WhatsApp
                            </a>

                            {/* Phone */}
                            <a href="tel:8182522667" style={{
                                display: 'flex', alignItems: 'center', gap: '16px',
                                padding: '20px', borderRadius: 'var(--radius-lg)',
                                backgroundColor: 'var(--color-bg-white)', border: '1px solid var(--color-border)',
                                textDecoration: 'none', color: 'var(--color-text-main)'
                            }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Phone size={20} style={{ color: '#ffffff' }} />
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-main)' }}>Llamar ahora</p>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>(81) 8252 2667</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:carmencarrillo.consultorio@gmail.com" style={{
                                display: 'flex', alignItems: 'center', gap: '16px',
                                padding: '20px', borderRadius: 'var(--radius-lg)',
                                backgroundColor: 'var(--color-bg-white)', border: '1px solid var(--color-border)',
                                textDecoration: 'none', color: 'var(--color-text-main)'
                            }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Mail size={20} style={{ color: '#ffffff' }} />
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-main)' }}>Enviar correo</p>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)', overflowWrap: 'break-word', wordBreak: 'break-all' }}>carmencarrillo.consultorio@gmail.com</p>
                                </div>
                            </a>

                            {/* Location */}
                            <a href="https://maps.google.com/?q=Río+San+Lorenzo+609,+Fuentes+del+Valle,+66224+San+Pedro+Garza+García" target="_blank" rel="noopener noreferrer" style={{
                                display: 'flex', alignItems: 'center', gap: '16px',
                                padding: '20px', borderRadius: 'var(--radius-lg)',
                                backgroundColor: 'var(--color-bg-white)', border: '1px solid var(--color-border)',
                                textDecoration: 'none', color: 'var(--color-text-main)'
                            }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <MapPin size={20} style={{ color: '#ffffff' }} />
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-main)' }}>Cómo llegar</p>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Río San Lorenzo 609, Fuentes del Valle, San Pedro Garza García</p>
                                </div>
                            </a>

                            {/* Hours */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '16px',
                                padding: '20px', borderRadius: 'var(--radius-lg)',
                                backgroundColor: 'var(--color-bg-white)', border: '1px solid var(--color-border)'
                            }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Clock size={20} style={{ color: '#ffffff' }} />
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-main)' }}>Horario</p>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Lun - Vie: 9:00 AM - 7:00 PM<br />Sáb: Previa Cita</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Original 2-column layout with map */}
                    <div className="hidden-mobile">
                        <div className="grid grid-cols-2 gap-4xl" style={{ alignItems: 'start' }}>
                            <div className="contact-info-card glass" style={{ padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-xl)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>Información de Contacto</h3>

                                <div className="flex flex-col gap-lg">
                                    <div className="flex gap-md" style={{ alignItems: 'flex-start' }}>
                                        <div className="service-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}><Phone size={20} /></div>
                                        <div>
                                            <h4 style={{ color: 'var(--color-text-main)', marginBottom: 'var(--spacing-xs)' }}>Teléfonos</h4>
                                            <p style={{ margin: 0 }}><a href="tel:8182522667" style={{ color: 'var(--color-text-muted)' }}>(81) 8252 2667</a></p>
                                        </div>
                                    </div>

                                    <div className="flex gap-md" style={{ alignItems: 'flex-start' }}>
                                        <div className="service-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}><MapPin size={20} /></div>
                                        <div>
                                            <h4 style={{ color: 'var(--color-text-main)', marginBottom: 'var(--spacing-xs)' }}>Ubicación</h4>
                                            <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Río San Lorenzo 609<br />Fuentes del Valle<br />San Pedro Garza García, N.L. C.P. 66224</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-md" style={{ alignItems: 'flex-start' }}>
                                        <div className="service-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}><Clock size={20} /></div>
                                        <div>
                                            <h4 style={{ color: 'var(--color-text-main)', marginBottom: 'var(--spacing-xs)' }}>Horario de Atención</h4>
                                            <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Lunes a Viernes: 9:00 AM - 7:00 PM<br />Sábados: Previa Cita</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-md" style={{ alignItems: 'flex-start' }}>
                                        <div className="service-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}><Mail size={20} /></div>
                                        <div>
                                            <h4 style={{ color: 'var(--color-text-main)', marginBottom: 'var(--spacing-xs)' }}>Email</h4>
                                            <p style={{ margin: 0 }}><a href="mailto:carmencarrillo.consultorio@gmail.com" style={{ color: 'var(--color-text-muted)' }}>carmencarrillo.consultorio@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="map-container" style={{ width: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: '350px', boxShadow: 'var(--shadow-md)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4542.226334784527!2d-100.36099632374538!3d25.66070457741542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bdfad6f054b3%3A0x16ecf6705217ad1e!2sR%C3%ADo%20San%20Lorenzo%20609%2C%20Fuentes%20del%20Valle%2C%2066224%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.%2C%20M%C3%A9xico!5e1!3m2!1ses-419!2sco!4v1773057518971!5m2!1ses-419!2sco"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Clínica Dental Transformando Sonrisas - Río San Lorenzo 609, Fuentes del Valle"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
