export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://www.transformandosonrisas.com.mx/sitemap.xml',
    }
}
