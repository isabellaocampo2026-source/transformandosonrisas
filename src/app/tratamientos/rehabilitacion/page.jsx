import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Rehabilitación Oral y Prótesis Fija | Transformando Sonrisas',
    description: 'Tratamientos avanzados de rehabilitación oral, incrustaciones de porcelana computarizadas y biomecánica dental para restaurar la función completa de tu sonrisa.',
};

export default function Rehabilitacion() {
    return (
        <TreatmentLayout
            title="Rehabilitación Oral / Implantes"
            subtitle="Recupera la función, salud y estética de tus dientes con los materiales más avanzados de la odontología moderna."
            imageSrc="/treatment_rehabilitacion.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>CARILLAS ESTÉTICAS (VENEERS)</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>La odontología restauradora ha evolucionado hacia la mínima invasión. Con las carillas estéticas, podemos lograr transformaciones radicales en la sonrisa preservando al máximo la estructura dental original.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>La Dra. Carrillo diseña finas láminas de porcelana de alta estética o resinas compuestas de última generación para revestir milimétricamente el frente de sus dientes. Estas restauraciones ultradelgadas corrigen de forma permanente asimetrías, desgastes por bruxismo, fracturas, espacios indeseados (diastemas) y pigmentaciones severas que no responden al blanqueamiento clínico.</p>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>El resultado es una translucidez óptima y una morfología que mimetiza a la perfección el esmalte natural, devolviendo una integridad estructural que supera la apariencia de sus dientes originales.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>CORONAS DE ALTA PRECISIÓN: ZIRCONIA Y EMAX (CAD-CAM)</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Cuando un diente sufre un daño estructural extenso, requerimos soluciones robustas que no sacrifiquen la cosmética. Atrás quedaron las coronas de metal-porcelana con bordes oscuros; hoy empleamos biomateriales puros de altísima resistencia.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Las restauraciones en <b>Disilicato de Litio (EMAX)</b> y <b>Zirconia</b> son diseñadas mediante tecnología digital e impresas con sistemas CAD-CAM de precisión milimétrica. Estas coronas están hechas a la medida exacta de su estructura dentaria, asegurando un sellado marginal perfecto.</p>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Gracias a su naturaleza biomimética, refractan la luz de la misma forma que un diente sano. Sus restauraciones pasarán totalmente desapercibidas en su entorno profesional y personal.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>PRÓTESIS Y REEMPLAZO DENTAL</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>La pérdida de piezas dentales altera severamente la masticación, el perfil facial y el soporte labial. Rehabilitamos arcadas parcial o totalmente edéntulas mediante una arquitectura protésica personalizada, ofreciendo puentes fijos, prótesis removibles estéticas y placas de reconstrucción diseñadas para restaurar su confort y biometría masticatoria.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>CIRUGÍA DE EXTRACCIÓN Y PRESERVACIÓN</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Aunque nuestra filosofía es conservadora, existen escenarios clínicos irrecuperables (fracturas radiculares irreparables, daños periodontales terminales o requerimientos biológicos) donde la extracción es el paso ético necesario. Realizamos estas intervenciones mediante técnicas quirúrgicas atraumáticas para preservar el lecho óseo de cara a una futura implantología o rehabilitación.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>SISTEMA DE ANESTESIA VIRTUALMENTE INDOLORA (CCS)</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Reconocemos que la ansiedad es una barrera real. Por ello, hemos eliminado el dolor asociado a la anetesia tradicional implementando el <b>Controlled Comfort System (CCS)</b>. Tras aplicar una pre-anestesia tópica altamente efectiva, nuestro sistema computarizado regula el flujo y la presión del anestésico, garantizando una inyección imperceptible para su máxima relajación.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>RECOLECCIÓN BIOEDEN (Dientes Permanentes)</h3>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>Como clínica certificada BioEDEN, si su plan de tratamiento requiere exodoncias por necesidad odontológica estricta (como extracciones de muelas del juicio), protocolonizamos la recolección estéril de dichas piezas. Siempre que estén libres de caries y procesos infecciosos profundos, enviamos la pieza a los laboratorios en Texas para el posterior aislamiento de células madre adultas.</p>
            </div>
        </TreatmentLayout>
    );
}
