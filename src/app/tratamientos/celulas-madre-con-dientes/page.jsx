import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Preservación de Células Madre Dentales | BioEDEN',
    description: 'Somos miembros certificados de BioEDEN para la recolección y criopreservación de células madre a partir de la pulpa dental de los dientes temporales de sus hijos.',
};

export default function CelulasMadre() {
    return (
        <TreatmentLayout
            title="Células Madre"
            subtitle="Un seguro de vida biológico: preservación de células madre desde la pulpa dental de tus hijos."
            imageSrc="/treatment_celulas_madre_v4.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary-dark)' }}>LA INVERSIÓN BIOLÓGICA MÁS VALIOSA</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}><b>Transformando Sonrisas</b> pertenece al selecto grupo de clínicas autorizadas oficialmente para la recolección y aislamiento del banco internacional <b>BioEDEN</b>. Preservar las Células Madre Mesenquimales (MSC) alojadas en el interior de los dientes constituye un seguro de vida biológico inestimable para el futuro clínico de su familia.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>A diferencia de la sangre del cordón umbilical, la pulpa de los dientes deciduos (de leche) y de piezas permanentes jóvenes (como las muelas del juicio) resguarda una concentración excepcionalmente pura y vigorosa de células madre multipotentes. La ciencia médica regenerativa ya no es ciencia ficción: los tratamientos enfocados en sustituir tejido celular enfermo o degenerado por células jóvenes y plenamente funcionales son los pilares de la medicina contemporánea.</p>
                <p style={{ marginBottom: 'var(--spacing-lg)' }}>La inmensa ventaja inmunológica de las Células Madre Dentales es que no solo son una garantía autologa (100% de compatibilidad para el propio paciente), sino que ostentan una asombrosa tasa de histocompatibilidad con familiares directos de primer y segundo grado (padres, hermanos y abuelos).</p>

                <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>POTENCIAL REGENERATIVO Y APLICACIONES CLÍNICAS:</h4>
                <ul className="feature-list" style={{ marginTop: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Regeneración de daño neuronal (Mal de Parkinson, Alzheimer).
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Terapéutica para enfermedades sistémicas y Diabetes (regeneración de islotes pancreáticos).
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Ingeniería tisular para lesiones hepáticas, traumatología y lesiones de médula espinal.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Terapias paliativas y regenerativas para Esclerosis Múltiple y padecimientos crónico-degenerativos.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Aplicaciones en ortopedia (Artritis, regeneración de cartílago articular y osteoinducción).
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> Medicina cardiovascular (recuperación tisular post-infarto) y reparación de quemaduras dérmicas severas e injertos de córnea.
                    </li>
                </ul>

                <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}><b>El Protocolo de Recolección es totalmente no invasivo y orgánico.</b> Cuando su hijo presente movilidad natural en un diente primario (diente flojo), o cuando usted requiera una extracción estrictamente indicada (como los terceros molares), acuda a nuestras instalaciones. Nuestro equipo clínico ejecutará una extracción quirúrgicamente aséptica, garantizando la viabilidad del tejido pulpar.</p>
                    <p style={{ marginBottom: '0' }}>La pieza es depositada en un medio de transporte celular especializado y enviada de inmediato a los laboratorios de grado farmacéutico de <b>BioEDEN (Austin, Texas)</b>. Allí, los ingenieros biomédicos evalúan, reproducen exponencialmente y criopreservan la línea celular en nitrógeno líquido, garantizando su vitalidad a perpetuidad.</p>
                </div>

                <h4 style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-sm)', fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>CRIOSUSCEPTIBILIDAD: ¿QUÉ PIEZAS SON APTAS?</h4>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}><b>Pacientes pediátricos:</b> El 100% de la dentición primaria (dientes de leche) en proceso natural de exfoliación es candidata ideal debido a la inmadurez óptima de la célula.</p>
                <p><b>Pacientes adultos:</b> Cualquier pieza dentaria permanente —especialmente terceros molares y premolares extraídos por ortodoncia— conforma un reservorio celular invaluable, siempre y cuando la estructura coronaria o radicular carezca de procesos infecciosos y necrosis pulpar. Cada extracción se convierte así en una oportunidad biológica única.</p>
            </div>
        </TreatmentLayout>
    );
}
