# FLUJO TV Global - Landing Page

Landing page profesional para FLUJO TV Global con SEO optimizado.

## 🚀 SEO Implementado

### ✅ Archivos Creados

- **`/public/robots.txt`** - Permite indexación de motores de búsqueda
- **`/public/sitemap.xml`** - Mapa del sitio para Google/Bing
- **`/public/manifest.json`** - PWA manifest para instalación móvil
- **`/public/og-image.png`** - Imagen Open Graph para redes sociales (1200x630px)
- **Favicon**: Usa `/public/logo_flujo.png` como favicon

### 📊 Meta Tags Incluidos

#### SEO Básico
- Title optimizado con keywords
- Meta description (160 caracteres)
- Keywords relevantes
- Canonical URL
- Robots: index, follow

#### Open Graph (Facebook, LinkedIn, WhatsApp)
- og:title, og:description, og:image
- og:type, og:url, og:locale
- Imagen 1200x630px optimizada

#### Twitter Cards
- twitter:card (summary_large_image)
- twitter:title, twitter:description, twitter:image

#### Structured Data (Schema.org)
- Organization schema
- Product schema con ratings
- Datos estructurados para rich snippets

### 🔍 Indexación en Google

#### 1. Google Search Console
1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Agregar propiedad: `https://flujotvglobal.com`
3. Verificar propiedad (método HTML tag o DNS)
4. Enviar sitemap: `https://flujotvglobal.com/sitemap.xml`

#### 2. Solicitar Indexación
```
URL a indexar: https://flujotvglobal.com
```
- En Search Console → Inspección de URLs
- Pegar la URL y solicitar indexación

#### 3. Google Analytics (Opcional)
- Crear cuenta en [Google Analytics](https://analytics.google.com)
- Obtener ID de medición (G-XXXXXXXXXX)
- Agregar script en `Layout.astro`

### 📱 PWA Support

El sitio puede instalarse como app en móviles:
- Android: "Agregar a pantalla de inicio"
- iOS: "Agregar a pantalla de inicio"

### 🎨 Imagen Open Graph

Ubicación: `/public/og-image.png`
- Dimensiones: 1200x630px
- Formato: PNG
- Se muestra al compartir en:
  - WhatsApp
  - Facebook
  - Twitter/X
  - LinkedIn
  - Telegram

### 🔧 Configuración del Dominio

Actualizar URLs en:
1. `src/layouts/Layout.astro` - Cambiar `flujotvglobal.com` por tu dominio
2. `public/sitemap.xml` - Actualizar `<loc>` con tu dominio
3. `public/robots.txt` - Actualizar Sitemap URL

### 📈 Keywords Principales

- flujo tv
- streaming latino
- iptv
- canales en vivo
- películas 4k
- deportes en vivo
- android tv
- tv box
- fire stick

### ✨ Características SEO

- ✅ Favicon configurado (logo_flujo.png)
- ✅ Meta tags completos
- ✅ Open Graph optimizado
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ PWA Manifest
- ✅ Canonical URLs
- ✅ Mobile-friendly
- ✅ Fast loading
- ✅ Semantic HTML

## 🌐 Deploy

Después de hacer deploy, recuerda:
1. Verificar que todos los archivos estén en `/public`
2. Actualizar URLs en sitemap.xml y Layout.astro
3. Enviar sitemap a Google Search Console
4. Probar OG image en [OpenGraph.xyz](https://www.opengraph.xyz/)

## 📞 Soporte

WhatsApp: +51 914 326 729
Email: soporte@flujooficial.com
