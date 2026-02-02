// Site configuration for flujotvglobal.com
export const site = {
  domain: 'flujotvglobal.com',
  canonical: 'https://flujotvglobal.com',
  whatsappNumber: '51914326729',
  email: 'soporte@flujooficial.com',

  brand: {
    name: 'Flujo TV Premium Global',
    shortName: 'Flujo TV',
    description: 'La evolución de Magis TV. Streaming premium global con +3,000 canales en vivo, deportes, series y películas en Full HD y 4K. Experiencia VIP sin límites.'
  },

  pricing: {
    currency: 'USD',
    currencyCode: 'USD',
    plans: [
      {
        id: '1m',
        name: 'Mensual',
        duration: '1 Mes',
        price: 9,
        highlight: false,
        label: 'IDEAL PARA PROBAR'
      },
      {
        id: '3m',
        name: 'Trimestral',
        duration: '3 Meses',
        price: 27,
        highlight: true,
        label: 'RECOMENDADO'
      },
      {
        id: '6m',
        name: 'Semestral',
        duration: '6 + 1 Meses Gratis',
        price: 49,
        highlight: false,
        label: '+1 MES GRATIS (7 TOTAL)'
      },
      {
        id: '12m',
        name: 'Anual',
        duration: '12 + 2 Meses Gratis',
        price: 95,
        highlight: false,
        label: 'MEJOR OFERTA - AHORRAS 25%'
      }
    ]
  },

  seo: {
    title: 'Flujo TV Premium Global | La Evolución de Magis TV | +3000 Canales HD y 4K',
    description: 'La evolución de Magis TV está aquí. Disfruta de +3,000 canales en vivo con Flujo TV Premium. Deportes, películas, series y noticias en Full HD y 4K. Activación inmediata. Soporte garantizado 24/7. Planes desde $9 USD.',
    keywords: [
      // Marca y evolución
      'Flujo TV',
      'Flujo TV Premium',
      'Magis TV',
      'evolución Magis TV',
      'Magis a Flujo TV',

      // Geográfico - Global
      'Flujo TV Global',
      'Flujo TV Internacional',
      'streaming global',
      'TV global',

      // Geográfico - Latinoamérica
      'streaming latino',
      'televisión latina',
      'canales latinos',
      'TV latinoamericana',
      'entretenimiento latino',

      // Producto
      'streaming en vivo',
      'canales en vivo',
      'televisión en vivo',
      'TV online',
      'streaming premium',

      // Dispositivos permitidos
      'TV Box',
      'Fire Stick',
      'Chromecast',
      'Android TV',
      'streaming Android',

      // Contenido
      'deportes en vivo',
      'fútbol en vivo',
      'series streaming',
      'películas online',
      'noticias en vivo',

      // Calidad
      'streaming HD',
      'televisión 4K',
      'canales Full HD',
      'calidad premium',

      // Características
      'soporte garantizado',
      'activación inmediata',
      'múltiples pantallas',
      'sin contratos'
    ],
    ogImage: '/og-image.png',
    twitterHandle: '@flujooficial'
  },

  // Legacy compatibility
  brand: 'FLUJO TV',
  localeLabel: 'Premium',
  defaultWhatsappText: 'Hola, quiero el instalador de Flujo TV para mi dispositivo',

  // Testimonials data
  testimonials: [
    {
      id: 1,
      name: 'Carlos Méndez',
      location: 'Miami, FL',
      rating: 5,
      comment: {
        es: 'Increíble servicio. La calidad es excelente y nunca se congela. El soporte me ayudó con la instalación en minutos.',
        en: 'Incredible service. The quality is excellent and it never freezes. Support helped me with installation in minutes.',
      },
    },
    {
      id: 2,
      name: 'María González',
      location: 'San José, Costa Rica',
      rating: 5,
      comment: {
        es: 'Llevo 6 meses usando Flujo TV y es lo mejor que he probado. Todos los canales que necesito en un solo lugar.',
        en: 'I\'ve been using Flujo TV for 6 months and it\'s the best I\'ve tried. All the channels I need in one place.',
      },
    },
    {
      id: 3,
      name: 'Robert Johnson',
      location: 'Houston, TX',
      rating: 5,
      comment: {
        es: 'Perfecto para ver deportes en vivo. La transmisión es estable y la calidad 4K es real. Muy recomendado.',
        en: 'Perfect for watching live sports. The transmission is stable and the 4K quality is real. Highly recommended.',
      },
    },
    {
      id: 4,
      name: 'Ana Rodríguez',
      location: 'Ciudad de Panamá, Panamá',
      rating: 5,
      comment: {
        es: 'Excelente relación calidad-precio. Mi familia está encantada con la variedad de contenido disponible.',
        en: 'Excellent value for money. My family is delighted with the variety of content available.',
      },
    },
  ],

  // Compatible devices
  compatibleDevices: [
    { icon: 'android', label: { es: 'Móvil Android', en: 'Android Mobile' } },
    { icon: 'tv', label: { es: 'TV Box', en: 'TV Box' } },
    { icon: 'amazon', label: { es: 'Fire Stick', en: 'Fire Stick' } },
    { icon: 'google', label: { es: 'Google TV', en: 'Google TV' } },
    { icon: 'device', label: { es: 'Xiaomi Stick', en: 'Xiaomi Stick' } },
  ],
} as const;

// Helper function to generate canonical URLs
export const canonicalUrl = (path: string = ''): string => {
  const cleanPath = path.replace(/^\//, '').replace(/\/$/, '');
  return cleanPath ? `${site.canonical}/${cleanPath}` : site.canonical;
};

// Helper function to generate WhatsApp links with humanized messages
export const getWhatsappLink = (plan: typeof site.pricing.plans[0]): string => {
  const messages = {
    '1m': `¡Hola! 👋 Me interesa activar Flujo TV por 1 mes ($${plan.price} USD). ¿Podrían ayudarme con la activación inmediata? Gracias! 🎬`,
    '3m': `¡Hola! 👋 Quiero contratar Flujo TV por 3 meses ($${plan.price} USD). ¿Cómo hago para activarlo hoy mismo? 📺`,
    '6m': `¡Hola! 👋 Me interesa el plan de 6 meses + 1 GRATIS de Flujo TV ($${plan.price} USD). ¿Está disponible para activar ahora? 🔥`,
    '12m': `¡Hola! 👋 Quiero aprovechar la oferta anual de Flujo TV: 12 meses + 2 GRATIS por $${plan.price} USD. ¿Cómo procedo con la activación? 🎉`
  };

  const message = messages[plan.id as keyof typeof messages] ||
    `¡Hola! Me interesa contratar Flujo TV. ¿Podrían darme más información?`;

  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
