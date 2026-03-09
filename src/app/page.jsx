import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Dentista en San Pedro Garza García | Transformando Sonrisas',
    description: 'Tu clínica dental cerca de ti en San Pedro Garza García. Diseño de sonrisa, odontología preventiva y tratamientos de vanguardia con la Dra. Carmen Carrillo.',
};

export default function Home() {
    return (
        <main>
            {/* Desktop Hero Section */}
            <section className="hero container hidden-mobile" style={{ paddingTop: '150px', paddingBottom: 'var(--spacing-3xl)' }}>
                <div className="grid grid-cols-2 gap-4xl" style={{ alignItems: 'center' }}>
                    <div className="flex flex-col items-start text-left animate-fade-in content-pad-right">
                        <h1 className="hero-title">Dentista en<br /><span className="text-gradient">San Pedro</span></h1>
                        <p className="hero-subtitle">Odontología de clase mundial cerca de ti en San Pedro Garza García, N.L.</p>
                        <div className="hero-buttons flex gap-md">
                            <Link href="/dentista" className="btn btn-primary">
                                Conoce a la Especialista
                            </Link>
                            <Link href="/tratamientos" className="btn btn-outline">Ver Tratamientos</Link>
                        </div>
                    </div>
                    <div className="animate-fade-in" style={{ position: 'relative', width: '100%', height: '600px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                        <Image
                            src="/dental-checkup.jpg"
                            alt="Paciente feliz en clínica dental"
                            fill
                            priority
                            style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        />
                    </div>
                </div>
            </section>

            {/* Clean Luxury Mobile Hero (Text First) */}
            <section className="app-hero-mobile visible-mobile animate-fade-in" style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '160px', // Massive padding for navbar clearance and breathing room
                backgroundColor: 'var(--color-bg-white)'
            }}>
                {/* App Content First - Very Bright, High Contrast */}
                <div style={{
                    padding: '0 var(--spacing-lg) var(--spacing-2xl)',
                    textAlign: 'left', // Strict Left-Alignment (Magazine Style) to fix false centering
                    position: 'relative',
                    zIndex: 2,
                }}>
                    <h1 className="hero-title" style={{
                        fontSize: '3rem',
                        color: 'var(--color-primary-dark)',
                        marginBottom: '8px',
                        lineHeight: '1.1'
                    }}>
                        Dentista en <br />
                        <span style={{ color: 'var(--color-primary)' }}>San Pedro</span>
                    </h1>
                    <p className="hero-subtitle" style={{
                        color: 'var(--color-text-main)',
                        fontSize: '1.2rem',
                        marginBottom: 'var(--spacing-2xl)',
                        fontWeight: 400
                    }}>
                        Tu clínica dental de confianza, muy cerca de ti en San Pedro Garza García.
                    </p>

                    {/* Solid, High-Contrast Thumb-friendly CTAs */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', alignItems: 'flex-start' }}>
                        <a href="https://wa.me/528182522667?text=Hola%20Dra.%20Carmen%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20o%20recibir%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            Agendar Cita
                        </a>
                        <Link href="/tratamientos" className="btn btn-outline" style={{ width: '100%', padding: '16px', fontSize: '1.15rem' }}>
                            Ver Tratamientos
                        </Link>
                    </div>
                </div>

                {/* Bottom Image (45vh max) */}
                <div style={{ position: 'relative', width: '100%', height: '40vh', minHeight: '300px' }}>
                    <Image
                        src="/dental-checkup.jpg"
                        alt="Paciente feliz en clínica dental"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                    />
                    {/* Top fade to blend image into white background */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, height: '40px',
                        background: 'linear-gradient(to bottom, var(--color-bg-white) 0%, transparent 100%)',
                        zIndex: 1
                    }}></div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-bg-white)' }}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-4xl" style={{ alignItems: 'center' }}>
                        <div className="animate-fade-in hidden-mobile" style={{ position: 'relative', width: '100%', height: '420px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <Image
                                src="/smile_design_new.avif"
                                alt="Diseño de Sonrisa"
                                fill
                                quality={100}
                                unoptimized
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>
                        <div className="content-pad-left">
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--spacing-lg)' }}>DISEÑO DE SONRISA</h2>

                            {/* Desktop Typography */}
                            <p className="hidden-mobile" style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--spacing-2xl)' }}>
                                “Yo quiero una sonrisa como esta”. La gente solía cortar fotos de artistas o estrellas de cine para enseñarle a la Dra. Carrillo y decirle que tipo de sonrisa querían. Entonces los primeros diseños en computadora usaron la misma idea para crear la sonrisa “ideal”.
                                <br /><br />
                                Hoy, gracias a un realzado diseño en computadora, la Dra. Carrillo puede proveerle un look cosmético propio. Incluso el cambio más sutil en tamaño, forma, textura y color puede ser parte de tu look. La dra. Carrillo considera tu sexo, estilo de vida, étnica, para que sonrisa pueda reflejar quien eres.
                            </p>

                            {/* Mobile Typography */}
                            <div className="visible-mobile" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ fontSize: '1.2rem' }}>✨</span>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}><strong>Look cosmético 100% propio</strong>, adaptado a tu estilo de vida y genética.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ fontSize: '1.2rem' }}>💻</span>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}><strong>Diseño digital avanzado</strong> para previsualizar tu sonrisa ideal.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ fontSize: '1.2rem' }}>💎</span>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}><strong>Perfección sutil</strong> en tamaño, forma, textura y color.</span>
                                    </li>
                                </ul>
                            </div>

                            <Link href="/tratamientos/odontologia-estetica" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Ver más <span style={{ fontSize: '1.2em' }}>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', overflow: 'hidden' }}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-4xl" style={{ alignItems: 'center' }}>
                        <div className="content-pad-right">
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--spacing-lg)' }}>ODONTOLOGÍA GENERAL</h2>

                            {/* Desktop Typography */}
                            <p className="hidden-mobile" style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--spacing-2xl)' }}>
                                Somos profesionales dentales que podemos ofrecer a ti y tu familia calidad, prevención en una amigable y confortable consulta dental.
                                <br /><br />
                                La Dra. Carrillo quiere ayudarte en tu higiene dental y mantener tu dientes y boca sanos y saludables.
                            </p>

                            {/* Mobile Typography */}
                            <div className="visible-mobile" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ fontSize: '1.2rem' }}>👨‍👩‍👧‍👦</span>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}><strong>Atención integral</strong> para toda la familia.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ fontSize: '1.2rem' }}>🛡️</span>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}><strong>Prevención y cuidado</strong> en un ambiente confortable.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ fontSize: '1.2rem' }}>🦷</span>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}><strong>Higiene dental experta</strong> para mantener tu sonrisa sana.</span>
                                    </li>
                                </ul>
                            </div>

                            <Link href="/tratamientos" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Conoce Más <span style={{ fontSize: '1.2em' }}>→</span>
                            </Link>
                        </div>
                        <div className="animate-fade-in hidden-mobile" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                src="/odontologia_general.jpg"
                                alt="Odontología General"
                                width={612}
                                height={612}
                                quality={100}
                                unoptimized
                                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}
