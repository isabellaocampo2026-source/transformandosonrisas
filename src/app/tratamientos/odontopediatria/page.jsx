import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Odontopediatría Integral | Odontología Infantil en Monterrey',
    description: 'Cuidado dental preventivo y compasivo para tus hijos. Revisiones periódicas, aplicación de flúor y educación higiénica desde sus primeros meses de edad.',
};

export default function Odontopediatria() {
    return (
        <TreatmentLayout
            title="Odontopediatría"
            subtitle="Cuidado dental especializado y compasivo para los más pequeños del hogar."
            imageSrc="/treatment_odontopediatria.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>El cuidado integral de la estructura dental infantil tiene su verdadero inicio desde la gestación. Establecer un protocolo de prevención trimestral durante el embarazo —incluyendo profilaxis profunda y terapias de fluorización— es el estándar médico más seguro tanto para la futura madre como para el desarrollo maxilofacial del bebé.</p>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Es imperativo instaurar el "Hogar Dental" de su hijo una vez que erupcionan las primeras piezas (aproximadamente a los seis meses de edad). Esta intervención temprana nos permite guiar a los padres en protocolos de higiene preventiva, descartando anomalías congénitas de inmediato. Acudir de manera preventiva en la primera infancia, en lugar de esperar al desarrollo de caries, forja una relación positiva del infante con el dentista, evitando traumas y asegurando un arco dental permanente sano.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>BARRERAS PREVENTIVAS: SELLADORES DE FOSAS Y FISURAS</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>La anatomía masticatoria de los molares posee microsurcos naturales (fosas y fisuras) tan estrechos que las cerdas del cepillo dental no logran penetrarlos. Esto los convierte en incubadoras perfectas para la placa bacteriana y el inicio de la caries.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Nuestro procedimiento profiláctico de <b>Selladores Dentales</b> consiste en la aplicación minuciosa de una resina fluida de grado médico sobre la cara masticatoria de premolares y molares sanos (tanto deciduos como permanentes). Este biomaterial fotocurable rellena los surcos retentivos, creando un blindaje protector impermeable a los ácidos destructivos.</p>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Es una intervención clínica rápida, ultra efectiva y 100% libre de dolor o requerimiento de anestesia. Mientras la barrera del sellador permanezca íntegra, el riesgo de desarrollar una lesión cariosa oclusal se neutraliza.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>BioEDEN: PRESERVACIÓN CELULAR INFANTIL</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>La pérdida natural de los dientes deciduos (de leche) representa una ventana biológica inigualable. Estas piezas dentarias albergan pulpa inmadura extremadamente rica en células madre mesenquimales. Su extracción y recolección controlada por un clínico certificado maximiza la viabilidad celular para futuros tratamientos médicos personalizados.</p>
            </div>
        </TreatmentLayout>
    );
}
