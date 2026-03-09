import TreatmentLayout from '@/components/TreatmentLayout';
import Image from 'next/image';

export const metadata = {
    title: 'Ortodoncia Invisible y Brackets | Dentista en Monterrey',
    description: 'Corrige la posición de tus dientes con tratamientos de ortodoncia tradicional, brackets estéticos o el programa de alineadores invisibles Essix.',
};

export default function Ortodoncia() {
    return (
        <TreatmentLayout
            title="Ortodoncia"
            subtitle="Corrige la posición de tus dientes para una sonrisa perfecta y saludable."
            imageSrc="/treatment_ortodoncia_new.png"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>ORTODONCIA CLÍNICA AVANZADA</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Pocas personas poseen una dentadura naturalmente ideal donde los maxilares encajen a la perfección. La ortodoncia corrige anomalías en la posición de los dientes y el balance neuromuscular del rostro, previniendo no solo problemas estéticos sino también desgastes articulares severos.</p>

                <p style={{ marginBottom: 'var(--spacing-md)' }}>Nuestro tratamiento de ortodoncia de alto nivel utiliza aparatología de precisión (brackets metálicos o estéticos, retenedores y arcos termoflexibles) para:</p>

                <ul className="feature-list" style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Alinear estratégicamente cada pieza dental en su posición biomecánica ideal.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Corregir patologías de oclusión (mordida cruzada, abierta o profunda).
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Cerrar diastemas (espacios entre dientes) para una sonrisa uniforme.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Armonizar el soporte del labio superior con la arcada estética.
                    </li>
                </ul>

                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Si bien interceptar problemas en niños pequeños permite guiar el desarrollo maxilar, el tratamiento ortodóncico moderno es altamente efectivo a cualquier edad. Los adultos que inician tratamiento no solo logran la estética deseada, sino que garantizan la longevidad de sus dientes naturales.</p>

                <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>SISTEMA DE ALINEADORES ESSIX</h3>

                <p style={{ marginBottom: 'var(--spacing-md)' }}>Para los pacientes que exigen resultados sin sacrificar su estética profesional, ofrecemos la ortodoncia invisible. Este avanzado método prescinde por completo de los brackets utilizando en su lugar una secuencia de guardas poliméricas cosméticas.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Cada alineador del sistema ESSIX está calibrado por computadora para ejercer fuerzas ligeras de manera secuencial, orquestando el movimiento dental sin las molestias del alambre.</p>

                <ul className="feature-list" style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> <b>Virtualmente Invisibles:</b> Nadie notará que está en tratamiento.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> <b>Confort Supremo:</b> Sin fricciones de metal en sus mejillas o labios.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> <b>100% Removibles:</b> Retírelos antes de las comidas o durante su rutina de limpieza oral diaria, manteniendo una higiene impecable sin restricciones dietéticas.
                    </li>
                </ul>

                <p style={{ marginBottom: 'var(--spacing-md)' }}>Su efectividad depende de la disciplina: deben usarse la mayor parte del día, cambiándolos progresivamente cada quince días según la evaluación del especialista. Cada caso es monitoreado detalladamente para asegurar el progreso y perfeccionar la sonrisa en el tiempo estimado.</p>

                <div className="animate-fade-in" style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <Image src="/Essix_Dental_Retainers.webp" alt="Ortodoncia Invisible con Essix" width={800} height={500} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized quality={100} />
                </div>
            </div>
        </TreatmentLayout>
    );
}
