import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Salud Dental en el Embarazo | Dentista Monterrey',
    description: 'Asesoramiento preventivo y cuidado de tu salud oral durante el embarazo. Te guiamos para controlar los cambios hormonales y proteger tus encías.',
};

export default function Embarazo() {
    return (
        <TreatmentLayout
            title="Embarazo y Salud Dental"
            subtitle="Durante el embarazo, los cambios hormonales pueden alterar tu salud oral. Estamos aquí para guiarte."
            imageSrc="/treatment_embarazo.webp"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Transformando Sonrisas le aconsejara sobre su salud oral durante este estado biológico.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>Impacto Hormonal</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>La subida en su nivel hormonal puede causar que sus encías se inflamen sangren o atrape el alimento causando una irritación y un problema dental en sí.</p>

                <p style={{ marginBottom: 'var(--spacing-md)' }}>Nosotros trataremos a manera de prevención tu caso de acuerdo a la valoración en conjunto con tú ginecólogo. Evaluando las radiografías si son necesarias estrictamente usando las cubiertas de plomo en especial tu mandil para proteger tu vientre o posponer ciertos procedimientos sobre todo en el primer trimestre.</p>

                <p style={{ marginBottom: 'var(--spacing-md)', fontWeight: 'bold' }}>El factor preventivo es el de mayor éxito y el que la doctora indicará para su propia satisfacción.</p>
            </div>
        </TreatmentLayout>
    );
}
