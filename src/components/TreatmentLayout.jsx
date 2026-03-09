import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function TreatmentLayout({ title, subtitle, imageSrc, children }) {
    return (
        <main style={{ paddingTop: '150px', backgroundColor: 'var(--color-bg-white)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container" style={{ maxWidth: '800px', paddingLeft: 'var(--spacing-lg)', paddingRight: 'var(--spacing-lg)' }}>

                    <Link href="/tratamientos" className="flex items-center gap-xs" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-2xl)', display: 'inline-flex' }}>
                        <ArrowLeft size={20} /> Volver a Especialidades
                    </Link>

                    <div style={{ marginBottom: 'var(--spacing-4xl)' }}>
                        <h1 className="hero-title" style={{ fontSize: '3rem', textAlign: 'left', margin: 0 }}>{title}</h1>
                        <p className="hero-subtitle" style={{ textAlign: 'left', marginLeft: 0, marginTop: 'var(--spacing-sm)' }}>
                            {subtitle}
                        </p>
                    </div>

                    {imageSrc && (
                        <div className="animate-fade-in" style={{
                            position: 'relative',
                            width: '100%',
                            marginBottom: 'var(--spacing-3xl)',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)'
                        }}>
                            <Image
                                src={imageSrc}
                                alt={title}
                                width={1200}
                                height={675}
                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                quality={100}
                                priority
                                unoptimized
                            />
                        </div>
                    )}

                    {children}

                    <div className="treatment-cta glass animate-fade-in">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>¿Listo para transformar tu sonrisa?</h3>
                        <p style={{ color: 'var(--color-text-main)', marginBottom: 'var(--spacing-lg)' }}>Agenda una consulta de valoración con la Dra. Carmen Carrillo y da el primer paso hacia una salud dental superior.</p>
                        <a
                            href={`https://wa.me/528182522667?text=${encodeURIComponent(`Hola Dra. Carmen, me gustaría agendar una cita o recibir más información sobre el tratamiento de: ${title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Agendar Cita Ahora
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
