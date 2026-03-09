import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Blanqueamiento Dental Profesional en San Pedro | Dra. Carmen Carrillo',
    description: 'Dientes visiblemente más blancos en una sola sesión en nuestra clínica en San Pedro Garza García con tecnología ZOOM! y desensibilizantes especializados.',
};

export default function BlanqueamientoDental() {
    return (
        <TreatmentLayout
            title="Blanqueamiento Dental"
            subtitle="Dientes visiblemente más blancos en una sola sesión con la tecnología de Philips ZOOM!"
            imageSrc="/treatment_blanqueamiento.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>TECNOLOGÍA DE BLANQUEAMIENTO ZOOM!</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>El sistema clínico Philips ZOOM! representa el estándar de oro a nivel mundial en aclaramiento dental. Es el protocolo ideal para pacientes ejecutivos o aquellos que exigen resultados dramáticos e inmediatos, superando por mucho la lentitud de los tratamientos caseros con guardas o tiras.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Aplicado íntegramente en nuestro consultorio bajo supervisión profesional, el sistema ZOOM! logra aclarar su esmalte dental en múltiples tonos en menos de 60 minutos. Nuestro protocolo es meticuloso de principio a fin:</p>

                <ul className="feature-list" style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> <b>Preparación protectora:</b> Aislamos meticulosamente las encías y tejidos blandos para garantizar cero irritación durante el proceso.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> <b>Activación fotodinámica:</b> Aplicamos el sofisticado gel blanqueador de peróxido patentado por ZOOM!, formulado específicamente para ser catalizado por la lámpara LED de espectro azul.
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span> <b>Resultados profundos:</b> La luz de alta intensidad acelera la penetración del gel en las micro-porosidades del esmalte y la dentina, fragmentando las moléculas responsables de las manchas, devolviendo el blanco prístino al diente original.
                    </li>
                </ul>
                <p style={{ marginBottom: 'var(--spacing-xl)', fontWeight: 500 }}>Acompañado de una excelente rutina de higiene oral, su nueva sonrisa luminosa se mantendrá deslumbrante a través del tiempo.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>SISTEMA POLA OFFICE: BLANQUEAMIENTO SIN SENSIBILIDAD</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Como alternativa de alta precisión clínica, ofrecemos el sistema de aclaramiento Pola Office, un protocolo ultrarápido capaz de revelar una sonrisa reluciente en una sesión de una hora.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Lo que hace a Pola Office indispensable en la odontología de élite es su formulación avanzada. Cuenta con propiedades desensibilizantes integradas —como el nitrato de potasio de alta concentración— que anulan eficazmente la conducción nerviosa. Esto inhibe la molesta sensibilidad postoperatoria, garantizando un procedimiento completamente libre de dolor. Resultados deslumbrantes, eficacia comprobada y total confort para nuestro paciente.</p>
            </div>
        </TreatmentLayout>
    );
}
