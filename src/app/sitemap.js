export default function sitemap() {
    const baseUrl = 'https://www.transformandosonrisas.com.mx';

    // Definición de las páginas estáticas
    const routes = [
        '',
        '/tratamientos',
        '/dentista',
        '/preguntas-al-dentista',
        '/blog',
        '/contacto',
        '/info',
        '/tratamientos/blanqueamiento-dental',
        '/tratamientos/celulas-madre-con-dientes',
        '/tratamientos/embarazo',
        '/tratamientos/endodoncia',
        '/tratamientos/laser',
        '/tratamientos/odontogeriatria',
        '/tratamientos/odontologia-estetica',
        '/tratamientos/odontopediatria',
        '/tratamientos/ortodoncia',
        '/tratamientos/rehabilitacion',
        '/tratamientos/ronquidos',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
