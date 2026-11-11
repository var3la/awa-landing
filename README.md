# AWA · Landing

Astro + Tailwind v4, desplegable en GitHub Pages.

## Primeros pasos
    npm install
    npm run dev

## Contenido
- Logo: `src/assets/logo.png` (o .svg / .webp / .jpg)
- Fotos: cualquier imagen en `src/assets/gallery/`. La primera (orden alfabético) es la portada; nómbralas `01-...`, `02-...` para controlar el orden.
- Textos, horario y contacto: frontmatter de `src/pages/index.astro`.

## Despliegue
1. Edita `site` y `base` en `astro.config.mjs` (tu usuario de GitHub y el nombre del repo).
2. En el repo: Settings → Pages → Source: GitHub Actions.
3. Haz push a `main`; el workflow `.github/workflows/deploy.yml` publica la web.
