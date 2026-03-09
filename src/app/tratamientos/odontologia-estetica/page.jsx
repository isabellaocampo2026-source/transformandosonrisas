import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Diseño de Sonrisa en San Pedro Garza García | Clínica Dental',
    description: 'Transforma tu sonrisa con los mejores tratamientos de odontología estética en San Pedro. Carillas, contorneo dental y diseño de sonrisa avanzado.',
};

export default function OdontologiaEstetica() {
    return (
        <TreatmentLayout
            title="Odontología Estética"
            subtitle="Mejora la apariencia de tu sonrisa con tratamientos cosméticos avanzados."
            imageSrc="/treatment_estetica.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Una sonrisa armoniosa es su mejor carta de presentación. Cuando la apariencia de los dientes presenta fracturas, desgaste prematuro, manchas persistentes o asimetrías, la odontología estética interviene para devolver no solo la belleza, sino la confianza absoluta al sonreír.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Una sonrisa estéticamente diseñada tiene el poder de transformar profunda y positivamente su entorno profesional y social.</p>
                <p style={{ marginBottom: 'var(--spacing-xl)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>A través de una planificación clínica de vanguardia, es posible materializar la sonrisa que siempre ha deseado en cuestión de pocas citas y mediante protocolos indoloros.</p>

                <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>DISEÑO DE SONRISA PERSONALIZADO</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Anteriormente, los diseños dentales se basaban en moldes prefabricados o en la imitación de sonrisas de celebridades, sin tener en cuenta la biodinámica facial del paciente.</p>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Hoy en día, la Dra. Carrillo implementa un análisis facial integral. A través de un estudio minucioso de sus proporciones faciales, edad cronológica, tono de piel e incluso su personalidad, parametrizamos cada milímetro de sus futuros dientes. Los cambios sutiles en tamaño, forma, textura y colorización estratificada logran que su nueva sonrisa luzca impecable y 100% natural, reflejando su verdadera identidad.</p>

                <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>ODONTOLOGÍA GENERAL Y PREVENTIVA</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>La base de cualquier procedimiento cosmético es una salud oral inquebrantable. Brindamos atención odontológica integral para toda la familia, enfocándonos firmemente en diagnósticos precisos y protocolos preventivos en un ambiente de confort absoluto.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Nuestro compromiso primario es preservar y proteger su estructura dental natural, educando sobre la correcta higiene bucal para mantener sus dientes sanos a largo plazo.</p>
            </div>
        </TreatmentLayout>
    );
}
