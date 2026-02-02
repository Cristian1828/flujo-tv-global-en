// Sistema de internacionalización para Flujo TV Global
export type Language = 'es' | 'en';

export interface Translations {
    // Navbar
    nav: {
        home: string;
        benefits: string;
        howItWorks: string;
        plans: string;
        download: string;
        faq: string;
        buyNow: string;
    };

    // Hero Section
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        cta: string;
    };

    // Benefits Section
    benefits: {
        title: string;
        subtitle: string;
        stability: {
            title: string;
            description: string;
        };
        catalog: {
            title: string;
            description: string;
        };
        quality: {
            title: string;
            description: string;
        };
        multiLogin: {
            title: string;
            description: string;
        };
    };

    // How It Works Section
    howItWorks: {
        title: string;
        subtitle: string;
        compatibleDevices: string;
        disclaimer: {
            title: string;
            description: string;
        };
    };

    // Pricing Section
    pricing: {
        title: string;
        subtitle: string;
        month: string;
        months: string;
        bonus: string;
        freeMonth: string;
        freeMonths: string;
        total: string;
        savingsPrefix: string;
        savingsSuffix: string;
        mostPopular: string;
        bestOffer: string;
        cta: string;
        features: {
            channels: string;
            screens: string;
            vod: string;
            quality: string;
            support: string;
            activation: string;
        };
    };

    // Testimonials Section
    testimonials: {
        title: string;
        subtitle: string;
    };

    // Download Section
    download: {
        title: string;
        subtitle: string;
        description: string;
        cta: string;
    };

    // FAQ Section
    faq: {
        title: string;
        questions: {
            q1: { question: string; answer: string };
            q2: { question: string; answer: string };
            q3: { question: string; answer: string };
            q4: { question: string; answer: string };
        };
    };

    // Footer
    footer: {
        contact: string;
        distributor: string;
        disclaimer: string;
        terms: string;
        privacy: string;
    };
}

export const translations: Record<Language, Translations> = {
    es: {
        nav: {
            home: 'Inicio',
            benefits: 'Beneficios',
            howItWorks: 'Cómo Funciona',
            plans: 'Planes',
            download: 'Descarga',
            faq: 'FAQ',
            buyNow: 'COMPRAR AHORA',
        },
        hero: {
            badge: '🚀 Magis evoluciona a FLUJO TV',
            title: 'La evolución definitiva del streaming latino',
            subtitle: 'Acceso inmediato a la plataforma más estable de Latam. +3,000 canales en vivo, películas de estreno y deportes en 4K Real.',
            cta: 'Ver Planes Disponibles',
        },
        benefits: {
            title: '¿Por qué Flujo TV es superior?',
            subtitle: 'Diseñado para no fallar. La experiencia Premium que tu Android merece.',
            stability: {
                title: 'Sistema Anti-Congelamiento',
                description: 'Tecnología exclusiva que garantiza transmisión sin interrupciones ni buffering.',
            },
            catalog: {
                title: '+3,000 Canales y VOD',
                description: 'Acceso ilimitado a canales en vivo, películas de estreno y series completas.',
            },
            quality: {
                title: 'Calidad FHD y 4K Real',
                description: 'Disfruta de contenido en la más alta definición con servidores de alta velocidad.',
            },
            multiLogin: {
                title: '3 Pantallas Simultáneas',
                description: 'Comparte con tu familia. Tres dispositivos pueden ver contenido diferente al mismo tiempo.',
            },
        },
        howItWorks: {
            title: 'Dispositivos Compatibles',
            subtitle: 'Compatible con cualquier dispositivo que soporte sistema operativo Android',
            compatibleDevices: 'Dispositivos Permitidos',
            disclaimer: {
                title: '⚠️ Atención Usuarios Samsung / LG',
                description: 'Nuestra aplicación no se instala directamente en el sistema nativo de tu televisor (Tizen/WebOS). Es obligatorio conectar un dispositivo externo como TV Box, Fire Stick o Chromecast con Google TV para disfrutar del servicio.',
            },
        },
        pricing: {
            title: 'Planes y Precios',
            subtitle: 'Elige el plan que mejor se adapte a tus necesidades. Todos incluyen las mismas características premium.',
            month: 'Mes',
            months: 'Meses',
            bonus: 'Regalo',
            freeMonth: 'Mes Gratis',
            freeMonths: 'Meses Gratis',
            total: 'Total',
            savingsPrefix: 'Ahorras',
            savingsSuffix: '',
            mostPopular: 'MÁS POPULAR',
            bestOffer: 'MEJOR OFERTA',
            cta: 'Quiero empezar ya',
            features: {
                channels: '+3,000 Canales',
                screens: '3 Pantallas Simultáneas',
                vod: 'Cine y Series VOD',
                quality: 'Calidad FHD/4K',
                support: 'Soporte 24/7',
                activation: 'Activación Inmediata',
            },
        },
        testimonials: {
            title: 'Lo que dicen nuestros clientes',
            subtitle: 'Miles de usuarios satisfechos en toda América',
        },
        download: {
            title: '¿Listo para instalar?',
            subtitle: 'Descarga Segura y Verificada',
            description: 'Nuestra instalación es asistida para garantizar que no tengas problemas. Solicita el instalador oficial por WhatsApp y te guiaremos paso a paso.',
            cta: 'Solicitar APK Oficial',
        },
        faq: {
            title: 'Preguntas Frecuentes',
            questions: {
                q1: {
                    question: '¿Qué es exactamente Flujo TV?',
                    answer: 'Es la evolución perfeccionada de Magis TV. Una plataforma premium que utiliza servidores privados de alta velocidad para brindar canales, películas y series sin interrupciones.',
                },
                q2: {
                    question: '¿Tienen prueba gratis?',
                    answer: 'No ofrecemos pruebas gratuitas. Garantizamos nuestro servicio con soporte técnico dedicado: te acompañamos en la instalación hasta que todo funcione perfectamente. Tu satisfacción está asegurada.',
                },
                q3: {
                    question: '¿Funciona en Roku o iPhone?',
                    answer: 'No. Flujo TV es exclusivo para el ecosistema Android. Esto nos permite asegurar la estabilidad del sistema Anti-Freeze que no es posible en otros sistemas cerrados.',
                },
                q4: {
                    question: '¿Qué velocidad de internet necesito?',
                    answer: 'Recomendamos 10 Mbps para contenido HD y 20-30 Mbps de fibra óptica para disfrutar del contenido en 4K Real sin pausas.',
                },
            },
        },
        footer: {
            contact: 'Contacto',
            distributor: 'Distribuidor Oficial Latinoamérica',
            disclaimer: 'Somos un equipo independiente de ventas y soporte técnico. No alojamos contenido con derechos de autor en nuestros servidores; actuamos como intermediarios de acceso al servicio. Todas las marcas mencionadas pertenecen a sus respectivos dueños.',
            terms: 'Términos y Condiciones',
            privacy: 'Políticas de Privacidad',
        },
    },
    en: {
        nav: {
            home: 'Home',
            benefits: 'Benefits',
            howItWorks: 'How It Works',
            plans: 'Plans',
            download: 'Download',
            faq: 'FAQ',
            buyNow: 'BUY NOW',
        },
        hero: {
            badge: '🚀 Magis evolves to FLUJO TV',
            title: 'The ultimate evolution of Latino streaming',
            subtitle: 'Instant access to the most stable platform in Latin America. +3,000 live channels, new release movies, and sports in Real 4K.',
            cta: 'View Available Plans',
        },
        benefits: {
            title: 'Why is Flujo TV superior?',
            subtitle: 'Designed not to fail. The Premium experience your Android deserves.',
            stability: {
                title: 'Anti-Freeze System',
                description: 'Exclusive technology that guarantees transmission without interruptions or buffering.',
            },
            catalog: {
                title: '+3,000 Channels and VOD',
                description: 'Unlimited access to live channels, new release movies, and complete series.',
            },
            quality: {
                title: 'FHD and Real 4K Quality',
                description: 'Enjoy content in the highest definition with high-speed servers.',
            },
            multiLogin: {
                title: '3 Simultaneous Screens',
                description: 'Share with your family. Three devices can watch different content at the same time.',
            },
        },
        howItWorks: {
            title: 'Compatible Devices',
            subtitle: 'Compatible with any device that supports Android operating system',
            compatibleDevices: 'Allowed Devices',
            disclaimer: {
                title: '⚠️ Attention Samsung / LG Users',
                description: 'Our application does not install directly on your TV\'s native system (Tizen/WebOS). It is mandatory to connect an external device such as TV Box, Fire Stick, or Chromecast with Google TV to enjoy the service.',
            },
        },
        pricing: {
            title: 'Plans and Pricing',
            subtitle: 'Choose the plan that best suits your needs. All include the same premium features.',
            month: 'Month',
            months: 'Months',
            bonus: 'Bonus',
            freeMonth: 'Free Month',
            freeMonths: 'Free Months',
            total: 'Total',
            savingsPrefix: 'Save',
            savingsSuffix: '',
            mostPopular: 'MOST POPULAR',
            bestOffer: 'BEST OFFER',
            cta: 'Get Started Now',
            features: {
                channels: '+3,000 Channels',
                screens: '3 Simultaneous Screens',
                vod: 'Movies and Series VOD',
                quality: 'FHD/4K Quality',
                support: '24/7 Support',
                activation: 'Instant Activation',
            },
        },
        testimonials: {
            title: 'What our customers say',
            subtitle: 'Thousands of satisfied users across America',
        },
        download: {
            title: 'Ready to install?',
            subtitle: 'Secure and Verified Download',
            description: 'Our installation is assisted to ensure you have no problems. Request the official installer via WhatsApp and we will guide you step by step.',
            cta: 'Request Official APK',
        },
        faq: {
            title: 'Frequently Asked Questions',
            questions: {
                q1: {
                    question: 'What exactly is Flujo TV?',
                    answer: 'It is the perfected evolution of Magis TV. A premium platform that uses high-speed private servers to provide channels, movies, and series without interruptions.',
                },
                q2: {
                    question: 'Do you have a free trial?',
                    answer: 'We do not offer free trials. We guarantee our service with dedicated technical support: we accompany you in the installation until everything works perfectly. Your satisfaction is assured.',
                },
                q3: {
                    question: 'Does it work on Roku or iPhone?',
                    answer: 'No. Flujo TV is exclusive to the Android ecosystem. This allows us to ensure the stability of the Anti-Freeze system that is not possible on other closed systems.',
                },
                q4: {
                    question: 'What internet speed do I need?',
                    answer: 'We recommend 10 Mbps for HD content and 20-30 Mbps fiber optic to enjoy Real 4K content without pauses.',
                },
            },
        },
        footer: {
            contact: 'Contact',
            distributor: 'Official Latin America Distributor',
            disclaimer: 'We are an independent sales and technical support team. We do not host copyrighted content on our servers; we act as intermediaries for service access. All mentioned brands belong to their respective owners.',
            terms: 'Terms and Conditions',
            privacy: 'Privacy Policies',
        },
    },
};

// Helper function to get translations
export function getTranslations(lang: Language = 'es'): Translations {
    return translations[lang] || translations.es;
}

// Helper function to get current language from localStorage (client-side only)
export function getCurrentLanguage(): Language {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('flujo-language');
        return (stored === 'en' ? 'en' : 'es') as Language;
    }
    return 'es';
}

// Helper function to set language (client-side only)
export function setLanguage(lang: Language): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('flujo-language', lang);
    }
}
