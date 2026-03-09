import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Solución a Ronquidos Severos | Diga Adiós al Insomnio',
    description: 'Elimina los ronquidos con nuestras guardas bucales de diseño especial a tu medida. Mejora drásticamente tu calidad de sueño y salud.',
};

export default function Ronquidos() {
    return (
        <TreatmentLayout
            title="Ronquidos / Apnea del Sueño"
            subtitle="Mejora tu descanso y tu salud reduciendo drásticamente los ronquidos."
            imageSrc="/treatment_ronquidos.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary-dark)' }}>DISPOSITIVO DE AVANCE MANDIBULAR (DAM)</h3>
                <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-muted)' }}>La solución ortopédica al ronquido crónico</h4>

                <p style={{ marginBottom: 'var(--spacing-md)' }}>El ronquido no es simplemente un ruido molesto; es el síntoma acústico directo de una asfixia obstructiva parcial. Si alguna vez ha experimentado la desesperación de intentar respirar con la nariz severamente congestionada, comprenderá exactamente el colapso físico al que somete a su garganta y sistema cardiovascular cada noche al roncar.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Durante el sueño, la relajación muscular profunda provoca que los tejidos blandos de la faringe colapsen, estrechando peligrosamente el conducto por donde fluye el oxígeno. Cuando este bloqueo se vuelve absoluto e interrumpe por completo la respiración durante segundos críticos, el cuadro clínico se diagnostica como Síndrome de Apnea Obstructiva del Sueño.</p>

                <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>DISEÑO CLÍNICO INTRAORAL A MEDIDA</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Para erradicar esta peligrosa condición, fabricamos a medida un Dispositivo de Avance Mandibular (DAM). Este sofisticado aparato intraoral, similar a una guarda de alta ingeniería, tracciona milimétrica y confortablemente la mandíbula inferior hacia adelante. Esta acción biométrica despeja instantáneamente las vías respiratorias superiores, silenciando el ronquido, restaurando la oxigenación cerebral y devolviéndole a usted y a su pareja la calidad de vida que otorga un verdadero descanso reparador.</p>
            </div>
        </TreatmentLayout>
    );
}
