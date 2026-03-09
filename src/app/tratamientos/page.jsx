import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Tratamientos Dentales en San Pedro | Transformando Sonrisas',
    description: 'Catálogo de especialidades dentales cerca de ti en San Pedro Garza García: Diseño de Sonrisa, Ortodoncia, Blanqueamiento, Rehabilitación Oral y más.',
};

const treatmentsList = [
    { id: 'rehabilitacion', title: 'Rehabilitación', desc: 'Restauración de la función y estética dental con materiales biocompatibles avanzados.' },
    { id: 'ortodoncia', title: 'Ortodoncia', desc: 'Corrección de la postura dental mediante brackets estéticos o alineadores invisibles.' },
    { id: 'odontologia-estetica', title: 'Odontología Estética', desc: 'Diseño de sonrisa y mejoras cosméticas para una apariencia impecable y natural.' },
    { id: 'endodoncia', title: 'Endodoncia', desc: 'Tratamientos de conducto indoloros para salvar y preservar tus piezas dentales naturales.' },
    { id: 'odontopediatria', title: 'Odontopediatría', desc: 'Odontología preventiva e integral especializada en el cuidado de infantes y niños.' },
    { id: 'odontogeriatria', title: 'Odontogeriatría', desc: 'Atención dental adaptada a las necesidades específicas del adulto mayor.' },
    { id: 'ronquidos', title: 'Problema de Ronquidos', desc: 'Dispositivos intrabucales a la medida para mejorar la respiración nocturna y el descanso.' },
    { id: 'blanqueamiento-dental', title: 'Blanqueamiento Dental', desc: 'Aclaramiento dental seguro y efectivo con lámpara especializada de arco de plasma ZOOM!' },
    { id: 'laser', title: 'Láser', desc: 'Procedimientos menos invasivos y de rápida cicatrización usando tecnología de diodo.' },
    { id: 'celulas-madre-con-dientes', title: 'Células Madre con Dientes', desc: 'Recolección y preservación de células madre a partir de piezas dentales infantiles.' },
    { id: 'embarazo', title: 'Embarazo', desc: 'Cuidados preventivos y salud oral especializada durante la etapa de gestación.' },
];

export default function TreatmentsOverview() {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-4xl)' }}>
                        <h1 className="hero-title" style={{ fontSize: '3rem' }}>Nuestras Especialidades</h1>
                        <p className="hero-subtitle" style={{ margin: '0 auto' }}>Descubre el tratamiento ideal diseñado exclusivamente para ti.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-lg">
                        {treatmentsList.map(treatment => (
                            <div key={treatment.id} className="service-card glass flex flex-col h-full animate-fade-in">
                                <h3 className="service-title" style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{treatment.title}</h3>
                                <p className="service-desc" style={{ flexGrow: 1, marginBottom: 'var(--spacing-lg)' }}>{treatment.desc}</p>
                                <Link href={`/tratamientos/${treatment.id}`} className="flex items-center gap-xs text-primary" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                                    Aprender más <ChevronRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
