import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Odontogeriatría | Atención Dental para el Adulto Mayor',
    description: 'Devolvemos y preservamos la función estética dental que los años han desgastado. Reemplazos adecuados para su total seguridad y masticación.',
};

export default function Odontogeriatria() {
    return (
        <TreatmentLayout
            title="Odontogeriatría"
            subtitle="Devolvemos la función y estética dental que los años han desgastado."
            imageSrc="/treatment_odontogeriatria_alt.png"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>La Odontogeriatría es la rama médica dedicada exclusivamente a la prevención, diagnóstico integral y tratamiento de la salud oral en pacientes de la tercera edad. El envejecimiento conlleva procesos degenerativos fisiológicos (como la disminución del flujo salival o alteraciones metabólicas) que exigen un manejo odontológico altamente especializado y empático.</p>
                <p style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--color-primary-dark)', fontWeight: 600 }}>La Dra. Carmen Carrillo cuenta con certificación oficial y amplia experiencia clínica en el área de Odontogeriatría, asegurando un trato ético y adaptado a las necesidades sistémicas del paciente mayor.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>SERVICIO CLÍNICO A DOMICILIO</h3>
                <div style={{ marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--color-border)' }}>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>Comprendemos profundamente que la movilidad reducida o las condiciones sistémicas complejas pueden convertir la visita al consultorio en un desafío formidable para nuestros pacientes mayores. Sin embargo, la salud oral no debe descuidarse bajo ninguna circunstancia.</p>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>Para garantizar que todo adulto mayor reciba la atención de alta calidad que merece, ofrecemos un exclusivo y compasivo <b>servicio odontológico a domicilio</b>. Contamos con equipo portátil de vanguardia que nos permite trasladar la bioseguridad y la precisión de nuestra clínica directamente a la comodidad y seguridad de su hogar.</p>
                    <p style={{ marginBottom: 'var(--spacing-md)', fontWeight: 500, color: 'var(--color-primary-dark)' }}>Contáctenos vía telefónica o WhatsApp para coordinar una evaluación domiciliaria personalizada.</p>
                </div>
            </div>
        </TreatmentLayout>
    );
}
