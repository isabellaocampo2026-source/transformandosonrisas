import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-heading' });

export const metadata = {
    title: 'Dentista en San Pedro Garza García | Dra. Carmen Carrillo',
    description: 'Encuentra tu clínica dental de confianza cerca de ti en San Pedro Garza García. Odontología integral de lujo, diseño de sonrisa y tratamientos de vanguardia.',
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dra. Carmen Carrillo Viejo | Transformando Sonrisas",
        "url": "https://carmencarrillo.com",
        "telephone": "+528182522667",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Río San Lorenzo 609",
            "addressLocality": "San Pedro Garza García",
            "addressRegion": "Nuevo León",
            "postalCode": "66224",
            "addressCountry": "MX"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.6567,
            "longitude": -100.3714
        }
    };

    return (
        <html lang="es">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} ${bebas.variable} antialiased`}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
