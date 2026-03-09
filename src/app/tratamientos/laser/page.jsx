import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Odontología Láser | Tratamientos menos invasivos',
    description: 'Odontología moderna con tecnología Láser de diodo. Procedimientos menos invasivos, cicatrización rápida y recuperación ultra eficaz.',
};

export default function Laser() {
    return (
        <TreatmentLayout
            title="Tecnología Láser"
            subtitle="Odontología moderna, menos invasiva y con tiempos de recuperación más rápidos."
            imageSrc="/treatment_laser.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>La odontología láser representa el pináculo de la innovación médica conservadora. Mediante la aplicación de haces de luz de diodo altamente concentrados, logramos intervenciones microquirúrgicas ultra-precisas. Su uso terapéutico disminuye dramáticamente el trauma, acelera exponencialmente la cicatrización natural de tejidos blandos y duros, y posee un potente efecto bactericida invaluable en tratamientos de endodoncia, periodoncia y cirugía de exodoncia.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>TERAPIA NEUROMODULADORA</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Más allá del tejido dental, la bioestimulación de nuestra tecnología láser de diodo actúa como un formidale modulador nervioso. Es una excelente herramienta terapéutica para aliviar cuadros agudos y crónicos complejos como la <b>Neuralgia del Trigémino</b> y la <b>Parálisis Facial</b>, favoreciendo la regeneración celular y la desinflamación tisular profunda.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>ERRADICACIÓN DE LA HIPERSENSIBILIDAD DENTINARIA</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Definida como aquel dolor agudo, eléctrico y penetrante que surge tras consumir bebidas frías, alimentos dulces o ácidos, e incluso al cepillarse, la hipersensibilidad es una patología desgastante que compromete la calidad de vida de 1 de cada 7 adultos.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Ocurre por la recesión de las encías o la erosión ácida que exponen los túbulos microscópicos de la dentina, conectando los estímulos externos directo con el nervio pulpar. Si este proceso bio-químico no se detiene, es la antesala directa a la gingivitis, periodontitis o caries radicular.</p>
                <p style={{ marginBottom: 'var(--spacing-md)', fontWeight: 500 }}>A través del sellado fototérmico mediante láser, oblitermamos las microporosidades de la dentina en segundos, cristalizando la superficie y cortando de raíz la conducción dolorosa hacia el nervio de forma inmediata, segura y totalmente libre de anestesia.</p>
            </div>
        </TreatmentLayout>
    );
}
