// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'static', // Permite páginas estáticas + SSR para Keystatic
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic()],
});