# Changelog

Todas las novedades de este proyecto. Mantenemos el formato Cambios/Añadidos/Eliminados para facilitar revisión.

## 2025-12-03 — Internacionalización (BHRT, Péptidos, IV/IM)

- Añadidos
  - Internacionalización completa con `data-i18n` en páginas de BHRT:
    - `bhrt-membership-her`, `bhrt-setup-labs-consult`, `bhrt-monthly-support`, `hormone-replacement-therapy-him`, `lab-draw`
  - Internacionalización completa con `data-i18n` en páginas de Péptidos:
    - `peptides-bpc-157`, `peptides-cjc1295-ipamorelin`, `peptides-sermorelin`, `peptides-nad`, `peptides-ghku`, `peptides-vitamin-d`, `peptides-hair-growth`
  - Internacionalización completa con `data-i18n` en páginas IV/IM:
    - `iv-drips`, `im-injections`
  - Diccionarios ES/EN extendidos en `src/layouts/BaseLayout.astro` para todas las claves anteriores, más `services.ivim_title` y `cta.view_details`.

- Cambios
  - Aplicación de `data-i18n` en hero, breadcrumb, detalles, beneficios, proceso, FAQ y CTA.
  - Mejora de consistencia del texto en ES/EN según contexto sanitario y estilo del sitio.

- Eliminados
  - `src/pages/services/aumento-completo-labios.astro` (retirado del árbol actual por duplicidad/antigüedad)

- Otros
  - Nuevos archivos incorporados: `src/pages/services/bhrt-membership-her.astro`, `src/pages/services/thighbella.astro`.

