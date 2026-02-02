/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#52E7FF',
        secondary: '#000000',
        accent: '#A7FF6A',
        dark: '#05070B',
        light: '#FFFFFF',
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
