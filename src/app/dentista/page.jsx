import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Dentista Especialista en San Pedro | Dra. Carmen Carrillo',
    description: 'Conoce a la Dra. Carmen Carrillo Viejo, cirujano dentista especialista en odontología restauradora con más de 30 años de experiencia transformando sonrisas en Monterrey y San Pedro.',
};

export default function DoctorProfile() {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <section className="section doctor-section">
                <div className="container">
                    <div className="doctor-grid">
                        <div className="doctor-image-wrapper animate-fade-in" style={{ position: 'relative', width: '100%', aspectRatio: '3/4' }}>
                            <Image
                                src="/doctor_profile.png"
                                alt="Dra. Carmen Carrillo"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="doctor-img"
                            />
                        </div>
                        <div className="doctor-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <h1 className="doctor-name">Dra. María del Carmen Carrillo Viejo</h1>
                            <h3 className="doctor-title">Cirujano Dentista</h3>

                            <div className="doctor-bio" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                                <p style={{ marginBottom: 'var(--spacing-md)' }}>Con una trayectoria fundamentada en la excelencia académica y clínica, la Dra. Carrillo obtuvo su título como <b>Cirujano Dentista en el año 2000</b>, siendo acreedora de los primeros lugares de aprovechamiento tanto a nivel de licenciatura como en sus estudios de posgrado.</p>
                                <p style={{ marginBottom: 'var(--spacing-md)' }}>Perfeccionó su práctica médica realizando un riguroso postgrado como <b>Residente de Odontología Integral Avanzada</b>, donde completó exhaustivas rotaciones clínicas a través de todas las especialidades oclusales y reconstructivas en los centros de salud más prestigiosos de la Ciudad de México y Monterrey.</p>
                                <p style={{ marginBottom: 'var(--spacing-md)' }}>Su visión médica profesional trasciende la práctica privada. Además de liderar los tratamientos de especialidad en nuestra clínica, su profundo conocimiento y juicio clínico le han permitido colaborar activamente <b>asesorando a otros odontólogos en la resolución de casos médicos prequirúrgicos y de alta complejidad</b>.</p>
                            </div>

                            <ul className="feature-list" style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', fontSize: '1.05rem' }}>
                                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={20} color="var(--color-primary)" /> <b>Catedrática Universitaria:</b> 13 años de experiencia docente en la Facultad de Odontología.</li>
                                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={20} color="var(--color-primary)" /> Miembro de <b>The Academy of Operative Dentistry</b>.</li>
                                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={20} color="var(--color-primary)" /> Miembro de la <b>Asociación Dental Mexicana (ADM)</b>.</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={20} color="var(--color-primary)" /> Miembro del <b>Colegio de Odontólogos de Nuevo León</b>.</li>
                            </ul>

                            <div className="flex gap-md doctor-cta-buttons" style={{ marginTop: 'var(--spacing-2xl)' }}>
                                <a href="https://wa.me/528182522667?text=Hola%20Dra.%20Carmen%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20o%20recibir%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar Consulta</a>
                                <Link href="/tratamientos" className="btn btn-outline">Ver Especialidades</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
