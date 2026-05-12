# SEO Setup — Renasci Medical Spa

Guía para activar todo lo que dejé cableado en el código y hacer que Google posicione la clínica en Utah.

---

## 1) Variables de entorno (Vercel)

Ve a **Vercel → Settings → Environment Variables** y agrega estas claves (Production + Preview):

| Variable | Valor | De dónde sale |
|---|---|---|
| `PUBLIC_GA4_ID` | `G-XXXXXXXXXX` | Google Analytics 4 → Admin → Data Streams → Web → Measurement ID |
| `PUBLIC_GOOGLE_ADS_ID` | `AW-1234567890` | Google Ads → Tools → Conversions → Tag setup |
| `PUBLIC_GTM_ID` | `GTM-XXXXXXX` | Google Tag Manager → Container → Account |
| `PUBLIC_META_PIXEL_ID` | `1234567890123456` | Meta Business Suite → Events Manager (opcional) |

Después de guardarlas, **redeploy** (Deployments → ⋯ → Redeploy). Sin redeploy no se cargan.

> Si no tienes alguna cuenta, salta a la sección correspondiente más abajo.

---

## 2) Crear Google Analytics 4 (5 min)

1. Ve a https://analytics.google.com → **Admin** → **Create → Account**.
2. Account name: `Renasci Medical Spa`.
3. Property name: `renascimedspa.com`, zona horaria `America/Denver`, moneda `USD`.
4. Business details: *Health & Beauty*, tamaño pequeño.
5. Data Stream → **Web** → URL `https://renascimedspa.com` → Stream name `Renasci Production`.
6. Copia el **Measurement ID** que empieza con `G-` → pégalo en Vercel como `PUBLIC_GA4_ID`.
7. En **Admin → Events → Mark as conversion**, marca como conversiones:
   - `book_click`
   - `contact_phone_click`
   - `contact_email_click`
   - `contact_whatsapp_click`
   - `contact_form_submit`

---

## 3) Crear Google Ads + Conversion Tracking (10 min)

1. https://ads.google.com → crear cuenta (puedes pausarla hasta tener campañas).
2. **Tools → Conversions → New conversion action → Website**.
3. Crea estas 3 acciones de conversión (categoría = *Contact* o *Book appointment*):
   - **Book** — para clicks en "Agendar" / Boulevard widget
   - **Call** — para clicks en `tel:`
   - **Form** — para envíos de formulario
4. Para cada conversión Google te da un *Conversion ID* (`AW-1234567890`) y un *Label* (`abc123XYZ`).
5. El **Conversion ID** es uno solo — guárdalo en Vercel como `PUBLIC_GOOGLE_ADS_ID`.
6. Los **labels** se pegan en [src/components/Analytics.astro](src/components/Analytics.astro) reemplazando `BOOK_LABEL`, `CALL_LABEL`, `FORM_LABEL`.

```
gtag('event', 'conversion', { send_to: '${ADS_ID}/abc123XYZ' });
                                                     ^^^^^^^^^
```

---

## 4) Vincular GA4 ↔ Google Ads

En Google Ads → **Tools → Linked accounts → Google Analytics 4 → Link**. Esto permite ver conversiones GA4 dentro de Ads y hacer remarketing con audiencias GA4. Crítico para que tus campañas sean rentables.

---

## 5) Google Business Profile (GBP) — la mina de oro para SEO local

Es lo **más importante** para aparecer en el Maps Pack cuando alguien busca "medical spa near me" en Utah.

1. https://business.google.com → **Manage now** → busca "Renasci Medical Spa".
2. Si no existe, créalo:
   - **Business name:** `Renasci Medical Spa`
   - **Categoría primaria:** `Medical spa`
   - **Categorías secundarias:** `Skin care clinic`, `Wellness center`, `Hair removal service`, `Weight loss service`
   - **Dirección:** 6770 S 900 E, Suite 100, Midvale, UT 84047
   - **Phone:** (385) 609-2840 — **EXACTO como en el sitio**
   - **Website:** https://renascimedspa.com
   - **Service area:** agrega Salt Lake City, Sandy, Murray, South Jordan, Draper, West Jordan
3. Verificación: por postal (toma ~5 días) o video.
4. Una vez verificado:
   - Sube **mínimo 20 fotos**: clínica, equipo, antes/después (con consent firmado), tratamientos
   - Activa **mensajes** y **booking** (puedes conectar Boulevard si lo soporta)
   - Pide **reseñas** — meta inicial: 30 reseñas (genera link de revisión en el panel)
   - Publica **Updates** semanales (ofertas, novedades, fotos)

> Después de verificar GBP, agrega su link en [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) dentro del `sameAs` del MedicalBusiness schema.

---

## 6) Submit del sitemap

Una vez deployado:

1. **Google Search Console** → https://search.google.com/search-console
2. Add property → `https://renascimedspa.com`
3. Verifica (lo más fácil: DNS TXT, o subiendo un archivo HTML)
4. **Sitemaps → Add new sitemap** → pega:
   - `https://renascimedspa.com/sitemap.xml`
   - `https://renascimedspa.com/sitemap-index.xml` (Astro genera ambos)
5. **Bing Webmaster Tools** → https://www.bing.com/webmasters → Import from GSC

---

## 7) Qué dejé hecho en el código (resumen)

### Schema.org / JSON-LD
- `MedicalBusiness` + `MedicalClinic` + `LocalBusiness` (multi-type para máxima cobertura) con:
  - Dirección completa, geo coordinates, horarios de apertura
  - `areaServed` con 11 ciudades de Utah
  - `AggregateRating` placeholder (5.0 con 27 reseñas — actualízalo cuando tengas reseñas reales)
  - `hasOfferCatalog` con todas las categorías de servicios
  - Email `orders@renascimedspa.com`
- `WebSite` con `SearchAction`
- `FAQPage` en homepage (6 preguntas frecuentes de Utah)
- `MedicalProcedure` + `Offer` en cada página de servicio
- `BreadcrumbList` en cada servicio
- `BreadcrumbList` + `MedicalBusiness` (sub-localizada) en cada city page

### Meta tags y hreflang
- Default title/description con keywords **Utah, Salt Lake City, Midvale** etc.
- Geo meta tags (`geo.region=US-UT`, `geo.position=40.6275;-111.8635`)
- Hreflang `es-US`, `es`, `en-US`, `en`, `x-default` con canonical limpio (sin `?lang=`)
- Robots/Googlebot con `max-image-preview:large` (importante para AI Overviews)

### Sitemap
- `/sitemap.xml` dinámico (regenerado en cada build) con:
  - Páginas estáticas, categorías, todos los servicios
  - Hreflang `xhtml:link` alternates ES/EN para cada URL

### Robots.txt
- Permite a Googlebot, Google-Extended (AI Overviews/SGE), Bing, etc.
- Bloquea Ahrefs/Semrush/MJ12bot (scrapers)
- Bloquea GPTBot/ClaudeBot/CCBot/anthropic-ai (entrenamiento IA)

### Redirects 301 (vercel.json)
- 50+ redirects para que las URLs viejas de servicios apunten a las nuevas
- Preserva el SEO acumulado en links externos hacia las URLs antiguas

### Analytics ([src/components/Analytics.astro](src/components/Analytics.astro))
- Carga condicional según variables de entorno
- Consent Mode v2 listo (granted por defecto, ajusta si implementas banner GDPR)
- Auto-tracking de eventos `book_click`, `contact_phone_click`, `contact_email_click`, `contact_whatsapp_click`, `contact_form_submit`
- Soporte para GTM, GA4, Google Ads, Meta Pixel

### Servicios restaurados
- Arreglado el `staticSlugs` en [src/pages/services/[slug].astro](src/pages/services/[slug].astro): se borraron 88 archivos sueltos pero los slugs seguían listados como "no generar" → todas esas URLs daban 404. Ahora el catch-all las regenera dinámicamente desde [src/data/services-unified.ts](src/data/services-unified.ts).

---

## 8) Tareas que requieren acción humana (NO se pueden hacer desde código)

| Tarea | Dónde | Por qué importa |
|---|---|---|
| Crear/reclamar **Google Business Profile** | https://business.google.com | Maps Pack = 40% del tráfico local de búsqueda |
| Pedir **reseñas en Google** a clientes actuales | Email/SMS post-cita | El AggregateRating es placeholder hasta que tengas reseñas reales |
| Crear **Bing Places for Business** | https://www.bingplaces.com | Tráfico extra y Cortana/Edge |
| Listar en **Yelp** (categoría "Medical Spas") | https://biz.yelp.com | Citas locales = backlinks de autoridad |
| **Healthgrades, Vitals, RealSelf** | Cada uno | Backlinks médicos de alta autoridad para SEO local |
| **Boulevard widget**: configurar conversion postback hacia Ads | Boulevard admin | Mejor optimización de campañas de búsqueda |
| Foto de portada en cada perfil (consistente, branded) | Todas las plataformas | Reconocimiento de marca |
| **NAP audit**: que el nombre, dirección y teléfono sean **idénticos** en todas partes (web, GBP, Yelp, Facebook, Instagram bio) | Manual | Google penaliza inconsistencias |

---

## 9) Google Ads — recomendaciones iniciales (cuando lances campañas)

- **Estructura**: 1 campaña Search por categoría de servicio (Botox, Fillers, IV Therapy, Weight Loss)
- **Geo targeting**: 25 mi radius desde 84047 (Midvale) — cubre todo el valle de Salt Lake
- **Ad extensions**: Location (vinculado a GBP), Call, Sitelinks (a las city pages), Promotions
- **Landing pages**: usar las city pages para ads geo-segmentadas + las service pages para ads por tratamiento
- **Audiences**: GA4 audiences de visitantes de service pages para remarketing
- **Conversion goals**: las 5 que dejé cableadas (book, phone, email, whatsapp, form)
- **Budget inicial sugerido**: $30-50/día por campaña, sube cuando empiecen a llegar leads
- **Quality Score**: las city + service pages ya están optimizadas con keywords y schema — esto te da mejor QS = CPC más bajo

---

## 10) Próximos pasos (fase 2, fuera del scope inicial)

Cosas que mejorarían más el SEO pero requieren más trabajo:

- **Migración a `/en/` paths** (en lugar de `?lang=en`): que Google indexe inglés como páginas separadas
- **Extraer las traducciones inline del `BaseLayout.astro`** (355KB en línea): mejora dramática de Core Web Vitals
- **Blog**: 1-2 posts/mes sobre tratamientos + Utah (ej. "Diferencias entre Botox y Dysport en Salt Lake City")
- **Antes/después galería** con `ImageObject` schema
- **Video schema** en igniterf.astro (ya tienes el video)
- **Customer reviews** integrados desde Google → muestran en el sitio + alimentan AggregateRating real

---

¿Preguntas? Toda la lógica está cableada para que solo necesites pegar los IDs en Vercel y hacer redeploy.
