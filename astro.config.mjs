import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Cambia USUARIO y el nombre del repo (base) por los tuyos.
// Si usas un dominio propio o un repo "usuario.github.io", pon base: '/'.
export default defineConfig({
  site: 'https://USUARIO.github.io',
  base: '/awa-landing',
  vite: { plugins: [tailwindcss()] },
});
