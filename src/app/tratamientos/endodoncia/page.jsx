import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
    title: 'Endodoncia sin Dolor | Tratamiento de Conductos en Monterrey',
    description: 'Salva tus dientes naturales con nuestros tratamientos de endodoncia especializados, equipados con localizadores de foramen y anestesia computarizada.',
};

export default function Endodoncia() {
    return (
        <TreatmentLayout
            title="Endodoncia"
            subtitle="Tratamientos de conducto sin dolor para salvar tus dientes naturales."
            imageSrc="/treatment_endodoncia_alt.avif"
        >
            <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>¿QUÉ ES EL TRATAMIENTO DE CONDUCTOS?</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>La endodoncia es el procedimiento microquirúrgico de más alta precisión destinado a rescatar y salvar su diente biológico cuando el tejido interno (la pulpa dentaria) ha sufrido daño irreversible, infección u necrosis. A través de este meticuloso proceso, logramos la desinfección total y el sellado tridimensional de la raíz dentaria, garantizando la permanencia de la pieza y evitando extracciones innecesarias.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>INDICACIONES CLÍNICAS</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Esta intervención especializada es imperativa cuando una lesión cariosa profunda ha permeado el esmalte y la dentina hasta invadir el nervio, o bien como consecuencia de traumatismos agudos que comprometen la vitalidad de la pieza dental.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>SINTOMATOLOGÍA DE ALERTA</h3>
                <p style={{ marginBottom: 'var(--spacing-xl)' }}>Detectar a tiempo una pulpitis es clave. Los indicadores biológicos que sugieren la necesidad de un tratamiento endodóntico incluyen: dolor punzante e irradiado ante cambios térmicos, oscurecimiento o decoloración repentina de la corona dental, dolor al ejercer presión masticatoria y sensibilidad persistente. Sin embargo, en numerosos protocolos crónicos agresivos, la necrosis pulpar avanza silenciosa y sin dolor; por ello nuestro diagnóstico clínico temprano es absolutamente vital.</p>

                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>NUESTRO PROTOCOLO: TECNOLOGÍA Y CONFORT</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>El temor asociado a los tratamientos de conducto ha quedado en el pasado. En <b>Transformando Sonrisas</b>, erradicamos la ansiedad mediante anestesias de nueva generación, y sistemas de sedación local controlada por computadora que aseguran un procedimiento completamente desprovisto de dolor.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Dado que la anatomía dental es compleja (un molar puede ocultar hasta 5 intrincados conductos radiculares), la precisión milimétrica es obligatoria para garantizar el éxito y evitar recidivas infecciosas. Para lograrlo, nuestra sala operatoria está equipada con <b>Localizadores Apicales de Foramen de alta fidelidad</b>.</p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Esta tecnología sónica de navegación nos permite medir la longitud exacta de sus conductos con un margen mínimo de error, minimizando los riesgos asociados a los sistemas radiográficos anticuados y asegurando una limpieza, ensanchamiento y hermeticidad inmaculada de la raíz.</p>
            </div>
        </TreatmentLayout>
    );
}
