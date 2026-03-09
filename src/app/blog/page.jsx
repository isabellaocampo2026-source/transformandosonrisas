import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
    title: 'Blog de Salud Dental y Actualidad | Dra. Carmen Carrillo',
    description: 'Artículos de vanguardia, consejos de higiene oral y novedades sobre odontología estética y diseño de sonrisa en San Pedro Garza García.',
};

export default function BlogIndex() {
    if (!blogPosts || blogPosts.length === 0) {
        return (
            <main style={{ paddingTop: '100px', backgroundColor: 'var(--color-bg-light)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container text-center" style={{ maxWidth: '600px' }}>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Actualidad <span className="text-gradient">Médica</span></h1>
                    <p className="hero-subtitle">Nuevos artículos sobre vanguardia odontológica están en redacción. Vuelve pronto.</p>
                </div>
            </main>
        );
    }

    return (
        <main style={{ paddingTop: '130px', paddingBottom: 'var(--spacing-4xl)', backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container">
                {/* Page Header */}
                <header style={{ marginBottom: 'var(--spacing-3xl)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-xl)' }}>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: 'var(--spacing-sm)' }}>
                        <span className="text-gradient">Blog</span> Odontológico
                    </h1>
                    <p style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', maxWidth: '600px' }}>
                        Elige el artículo que quieres leer sobre salud bucal, estética dental y vanguardia médica en San Pedro Garza García.
                    </p>
                </header>

                {/* Uniform card grid — all posts equal */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--spacing-xl)'
                }}>
                    {blogPosts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="blog-article-card"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            {/* Thumbnail */}
                            <div style={{ position: 'relative', width: '100%', paddingTop: '60%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 'var(--spacing-md)' }}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                    className="card-img"
                                />
                                {/* Category badge */}
                                <div style={{
                                    position: 'absolute', top: '12px', left: '12px',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {post.category}
                                </div>
                            </div>

                            {/* Card body */}
                            <div style={{ padding: '0 var(--spacing-xs)' }}>
                                <div className="flex gap-sm" style={{ color: 'var(--color-text-light)', fontSize: '0.82rem', marginBottom: 'var(--spacing-sm)', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={13} /> {post.date}</span>
                                    <span>·</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={13} /> {post.readTime}</span>
                                </div>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-primary-dark)',
                                    lineHeight: '1.25',
                                    marginBottom: 'var(--spacing-sm)',
                                    transition: 'color 0.2s ease'
                                }}>
                                    {post.title}
                                </h2>
                                <p style={{
                                    color: 'var(--color-text-main)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    {post.excerpt}
                                </p>
                                <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Leer artículo <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
