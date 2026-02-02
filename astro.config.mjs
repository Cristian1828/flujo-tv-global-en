import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://global.flujooficial.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
});
