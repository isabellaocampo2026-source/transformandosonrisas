import Link from 'next/link';

export const metadata = {
    title: 'Información y Bioseguridad | Clínica Dental Transformando Sonrisas',
    description: 'Contamos con los estándares más altos de bioseguridad, higiene y esterilización. Su seguridad está en nuestras manos.',
};

export default function Info() {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-white)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-4xl)' }}>
                        <h1 className="hero-title" style={{ fontSize: '3rem' }}>Información Dental</h1>
                        <p className="hero-subtitle" style={{ margin: '0 auto' }}>Nuestro compromiso está con la higiene y la salud de nuestros pacientes.</p>
                    </div>

                    <div className="treatment-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>Higiene y Esterilización</h3>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}>Para nuestra práctica como también para nosotros su protección contra las enfermedades transmisibles que podemos enfrentar hoy son el mayor reto para usted con el simple contacto del dentista.</p>
                        <p style={{ marginBottom: 'var(--spacing-xl)' }}>Transformando Sonrisas está comprometida a superar la meta exigida por el centro de control de enfermedades CDC (USA).</p>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>Tecnología de Autoclave</h3>
                        <p style={{ marginBottom: 'var(--spacing-xl)' }}>Para lograr lo anterior el consultorio cuenta con el nuevo avance de la tecnología médica, el Autoclave Midmark rítmico para asegurarle una constante desinfección en nuestro instrumental manual y rotatorio que le dará esa gran sensación de bienestar y seguridad.</p>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>Desinfección Sónica</h3>
                        <p style={{ marginBottom: 'var(--spacing-xl)' }}>Todo este instrumental después de pasar por varias etapas de prelavado y de inmersión en una lavadora sónica de ondas biológicas culmina la meta de excelencia en nuestro sistema de esterilización al pasar al autoclave a presión por calor y ser monitoreado.</p>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>Material Desechable</h3>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}>Utilizamos la mayor parte de material desechable (una vez por persona) para que todo sea del mayor agrado visual como mental para cada uno de los integrantes de nuestras familias unidas.</p>

                        <div style={{ marginTop: 'var(--spacing-4xl)', paddingTop: 'var(--spacing-2xl)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
                            <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)' }}>"Su Seguridad está en Nuestras Manos"</p>
                            <a href="https://wa.me/528182522667?text=Hola%20Dra.%20Carmen%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20o%20recibir%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar Consulta</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
