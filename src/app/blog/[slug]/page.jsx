import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: 'Artículo No Encontrado | Transformando Sonrisas' };
    return {
        title: `${post.title} | Blog Dra. Carmen Carrillo`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            authors: ['Dra. Carmen Carrillo Viejo'],
        },
    };
}

// Convierte el array de bloques de contenido en JSX
function renderContent(content) {
    if (!Array.isArray(content)) return null;

    return content.map((block, i) => {
        switch (block.type) {
            case 'intro':
                return (
                    <p key={i} style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--color-text-main)', fontWeight: 300, marginBottom: 'var(--spacing-2xl)', fontStyle: 'italic' }}>
                        {block.text}
                    </p>
                );
            case 'h2':
                return (
                    <h2 key={i} style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)', marginTop: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-md)' }}>
                        {block.text}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 key={i} style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-sm)' }}>
                        {block.text}
                    </h3>
                );
            case 'p':
            default:
                return (
                    <p key={i} style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#334155', marginBottom: 'var(--spacing-lg)' }}>
                        {block.text}
                    </p>
                );
        }
    });
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": [`https://carmencarrillo.com${post.image}`],
        "datePublished": post.date,
        "author": [{
            "@type": "Person",
            "name": "Dra. Carmen Carrillo Viejo",
            "url": "https://carmencarrillo.com/dentista"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Transformando Sonrisas",
            "logo": { "@type": "ImageObject", "url": "https://carmencarrillo.com/logo.png" }
        }
    };

    return (
        <main style={{ paddingTop: '150px', backgroundColor: 'var(--color-bg-white)', minHeight: '100vh' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            {/* Breadcrumb bar */}
            <div style={{ paddingTop: '150px', paddingBottom: 'var(--spacing-lg)', backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                            <ArrowLeft size={18} /> Volver al Blog
                        </Link>
                        <span style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: 'var(--shadow-sm)' }}>
                            {post.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Article Header */}
            <header style={{ backgroundColor: 'var(--color-bg-light)', paddingBottom: 'var(--spacing-3xl)' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)', lineHeight: '1.2', marginBottom: 'var(--spacing-lg)' }}>
                        {post.title}
                    </h1>
                    <div className="flex" style={{ alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'var(--spacing-md) 0', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                        <div className="flex gap-md" style={{ alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                                <Image src="/doctor_profile.png" alt="Dra. Carmen Carrillo" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: 0, color: 'var(--color-primary-dark)', fontSize: '0.95rem' }}>Dra. Carmen Carrillo Viejo</p>
                                <div className="flex gap-sm" style={{ color: 'var(--color-text-light)', fontSize: '0.85rem', marginTop: '4px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
                                    <span>•</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {post.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <div className="container" style={{ maxWidth: '1000px', paddingBottom: 'var(--spacing-3xl)' }}>
                <div style={{ position: 'relative', width: '100%', paddingTop: '50%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginTop: '-40px' }}>
                    <Image src={post.image} alt={`Imagen del artículo: ${post.title}`} fill priority style={{ objectFit: 'cover' }} />
                </div>
            </div>

            {/* Article Body */}
            <article className="container" style={{ maxWidth: '750px', paddingBottom: 'var(--spacing-4xl)' }}>
                {renderContent(post.content)}

                {/* Inline CTA */}
                <div style={{ backgroundColor: 'var(--color-bg-light)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-primary)', marginTop: 'var(--spacing-3xl)' }}>
                    <h4 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)', marginBottom: 'var(--spacing-sm)' }}>¿Tienes dudas sobre este procedimiento?</h4>
                    <p style={{ fontSize: '1rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-main)' }}>Agenda una valoración clínica en nuestra clínica dental en San Pedro Garza García. Resolveremos todas tus dudas con diagnóstico personalizado.</p>
                    <a href="https://wa.me/528182522667?text=Hola%2C%20estaba%20leyendo%20su%20blog%20y%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block' }}>Agendar Valoración por WhatsApp</a>
                </div>

                {/* Article footer / Tags */}
                <div style={{ marginTop: 'var(--spacing-2xl)', paddingTop: 'var(--spacing-xl)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/blog" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <ArrowLeft size={18} /> Más artículos
                    </Link>
                    <Link href={`/tratamientos/blanqueamiento-dental`} style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
                        Ver Tratamiento de Blanqueamiento →
                    </Link>
                </div>
            </article>
        </main>
    );
}
