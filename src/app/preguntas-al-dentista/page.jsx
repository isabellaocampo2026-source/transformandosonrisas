import { HelpCircle } from 'lucide-react';

export const metadata = {
    title: 'Preguntas Frecuentes | Dentista en Monterrey',
    description: 'Respuestas a las preguntas más comunes sobre tratamientos dentales, blanqueamiento, dolor, sangrado de encías y cuándo es necesario acudir al dentista.',
};

const faqs = [
    {
        q: "¿Por qué deben tomarse modelos o moldes de mi boca previó a un diagnóstico?",
        a: "Para poder lograr la calidad del tratamiento de odontología restauradora se requiere estudiar detalladamente la oclusión, tamaño, forma de sus dientes así como la altura y el tamaño del hueso antes de comenzar y durante el trabajo en boca."
    },
    {
        q: "¿Qué significan Odontología Cosmética y Restauradora?",
        a: "Son técnicas precisas que nos proveen de funciones naturales en la masticación; es algo más que curar y tapar el diente dándole un grado de excelencia, contorno y belleza como si fuera el mismo esmalte sano."
    },
    {
        q: "¿Por qué duele una muela?",
        a: "Generalmente es la consecuencia de una caries cuando está en un nivel muy profundo e irrita al nervio reaccionando éste con sangrado, gas y pus que se expanden tratando de salir de las paredes del diente. Existen otras causas como empaquetamiento de comida entre tus dientes, restauraciones desajustadas, o un desgaste de cuello excesivo."
    },
    {
        q: "¿Qué es una amalgama de plata?",
        a: "Es una aleación de por lo menos tres metales y uno más en estado líquido (Mercurio) que se usan para la base y restauraciones de piezas o dientes posteriores. En el consultorio hemos optado por sustituirlas por resinas o incrustaciones estéticas que son biocompatibles."
    },
    {
        q: "¿Tienen todas las personas las muelas del juicio?",
        a: "NO. El tercer molar o cordal tiene menos porcentaje de aparición cada 100 años con la evolución humana. A su vez puede aparecer en una edad entre 15 o los 35 años o más."
    },
    {
        q: "¿Qué se debe de hacer en caso de caída o golpe en un diente?",
        a: "Buscar el diente si es que se ha caído, lavarlo con agua (no tallarlo), ponerlo en un vaso con agua o leche y llevarlo junto con el accidentado al dentista inmediatamente (no más de 12 horas) para reimplantarlo si es posible."
    },
    {
        q: "¿Por qué sangran las encías?",
        a: "Normalmente ninguna encía sana debe de sangrar. El sangrado es un signo de inflamación y alerta."
    },
    {
        q: "¿Todos los blanqueamientos dañan los dientes?",
        a: "NO. Los productos avalados por las asociaciones dentales internacionales están probados. Se deben de aplicar bajo la supervisión de un dentista."
    },
    {
        q: "¿Sientes dolor en articulación de la mandíbula?",
        a: "Son síntomas que se presentan cada año en más y más pacientes. El estrés causa ruidos de rechinido (bruxismo). Consúltenos, es indispensable evitar el dolor mediante guardas gnatológicos y programación en el consultorio."
    }
];

export default function FAQ() {
    return (
        <main style={{ paddingTop: '150px', backgroundColor: 'var(--color-bg-white)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-4xl)' }}>
                        <h1 className="hero-title" style={{ fontSize: '3rem' }}>Preguntas al Dentista</h1>
                        <p className="hero-subtitle" style={{ margin: '0 auto' }}>Resolvemos tus dudas más comunes sobre la salud bucal.</p>
                    </div>

                    <div className="faq-list flex flex-col gap-lg">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)' }}>
                                <div className="faq-question flex gap-md" style={{ alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
                                    <HelpCircle className="text-primary flex-shrink-0" style={{ marginTop: '4px', color: 'var(--color-primary)' }} />
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', margin: 0, fontWeight: 700 }}>{faq.q}</h3>
                                </div>
                                <div className="faq-answer" style={{ paddingLeft: 'calc(24px + var(--spacing-md))' }}>
                                    <p style={{ margin: 0, color: 'var(--color-text-main)', lineHeight: 1.6 }}>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
