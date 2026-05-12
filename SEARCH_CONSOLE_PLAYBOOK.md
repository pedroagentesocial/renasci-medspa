# Search Console Playbook — Renasci Medical Spa

Paso a paso para dejar Google Search Console y Bing Webmaster Tools listos para que el sitio empiece a posicionar en Utah.

> **Pre-requisito:** ya verificaste la propiedad en https://search.google.com/search-console (ya lo hiciste — "success" en tu mensaje).

---

## PASO 1 · Submit del sitemap (5 minutos)

Ya tienes la propiedad verificada. Falta declarar dónde está el sitemap.

1. Abre https://search.google.com/search-console
2. Selecciona la propiedad `https://renascimedspa.com`
3. En el menú izquierdo, click en **Sitemaps**
4. En "Add a new sitemap" escribe:
   ```
   sitemap.xml
   ```
   Click **Submit**
5. Repite con:
   ```
   sitemap-index.xml
   ```
   (Astro genera ambos automáticamente — el primero es el principal con todas las URLs y hreflang, el segundo es el índice de Astro)

**Qué esperar:**
- Inmediatamente: status = "Couldn't fetch" o "Success"
- En 24 horas: status = "Success" con número de URLs descubiertas (~202)
- En 7-14 días: la mayoría se indexa

---

## PASO 2 · Request indexing manual para 12 URLs prioritarias (15 minutos)

Google indexa cuando quiere. Para las páginas más importantes pedimos indexación manual y bajamos el tiempo de 2-4 semanas a 1-3 días.

### Las 12 URLs (cópialas tal cual, una por una)

Para cada URL:
1. Pega en la barra superior "Inspect any URL in renascimedspa.com"
2. Espera 5-10 segundos (Google la chequea)
3. Click en **Request Indexing**
4. Espera 30 segundos a 1 minuto a que diga "URL added to a priority crawl queue"
5. Pasa a la siguiente

⚠️ **Google limita a ~10 requests por día.** Si pasas el límite, el botón se desactiva — vuelves al día siguiente con las que falten.

| Prioridad | URL | Por qué |
|---|---|---|
| 1 | `https://renascimedspa.com/` | Home — la primera que debe rankear |
| 2 | `https://renascimedspa.com/contact` | Con FAQ schema → rich snippets |
| 3 | `https://renascimedspa.com/services` | Indice de tratamientos |
| 4 | `https://renascimedspa.com/medical-spa-salt-lake-city` | Local SEO core |
| 5 | `https://renascimedspa.com/medical-spa-midvale` | Local SEO core |
| 6 | `https://renascimedspa.com/medical-spa-sandy-utah` | Local SEO core |
| 7 | `https://renascimedspa.com/medical-spa-murray-utah` | Local SEO core |
| 8 | `https://renascimedspa.com/medical-spa-south-jordan-utah` | Local SEO core |
| 9 | `https://renascimedspa.com/medical-spa-draper-utah` | Local SEO core |
| 10 | `https://renascimedspa.com/services/tox-neurotoxina` | Botox — alta búsqueda |
| 11 | `https://renascimedspa.com/services/relleno-labios` | Lip filler — alta búsqueda |
| 12 | `https://renascimedspa.com/services/iv-therapy` | Búsqueda creciente |

---

## PASO 3 · Configurar URL Parameters para `?lang=en` (3 minutos)

Esto le dice a Google que `?lang=en` solo cambia el idioma, no es contenido distinto. Evita que Google trate las URLs con `?lang=en` como duplicados.

> **Nota:** La sección "URL Parameters" fue eliminada del nuevo Search Console. Si no la encuentras, ignora este paso — el hreflang HTML ya le da la pista a Google. Si tu cuenta todavía tiene la versión clásica:
1. Settings (engranaje, abajo izquierda) → **URL parameters** (legacy)
2. Add parameter
   - Parameter: `lang`
   - Does this parameter change page content?: `Yes, sorts/translates/changes content`
   - How does this parameter affect content?: `Translates`
   - Which URLs with this parameter should Googlebot crawl?: `Every URL`

---

## PASO 4 · Marcar conversiones en GA4 (5 minutos)

Esto NO es Search Console pero es crítico complementario. Sin esto, GA4 mide eventos pero no los reporta como conversiones.

1. https://analytics.google.com → selecciona la propiedad de Renasci
2. **Admin** (engranaje abajo izquierda)
3. En la columna *Property*: **Events**
4. Espera tener al menos 1-2 visitas que disparen cada evento (haz click tú mismo en home → tel, en /contact → email, etc.)
5. Una vez que aparezcan en la lista, en cada uno click en el toggle **Mark as key event** (antes se llamaba "Mark as conversion"):
   - `book_click`
   - `contact_phone_click`
   - `contact_email_click`
   - `contact_whatsapp_click`
   - `contact_form_submit`
   - `review_click` ← este es nuevo, el del botón de reseñas

---

## PASO 5 · Vincular GA4 con Search Console (2 minutos)

Te permite ver dentro de GA4 qué keywords trajeron tráfico orgánico.

1. GA4 → **Admin** → en columna *Property* busca **Product Links**
2. Click en **Search Console Links** → **Link**
3. Selecciona tu propiedad de Search Console (`renascimedspa.com`)
4. Selecciona el Web Data Stream de Renasci
5. Submit

Después de esto, en GA4 Reports → Acquisition → Search Console verás las queries reales que llevan tráfico.

---

## PASO 6 · Bing Webmaster Tools (10 minutos)

Bing = ~10% del tráfico de búsqueda en USA. Es muy fácil porque importa todo desde Search Console.

1. Ve a https://www.bing.com/webmasters
2. Sign in con la **misma cuenta de Google** que usas para Search Console
3. En la pantalla principal click **Import from Google Search Console**
4. Auth con Google → autoriza
5. Selecciona `renascimedspa.com` → Import
6. En 24 horas: propiedad verificada + sitemap importado + URLs descubiertas

Bonus: Bing tiene **"IndexNow"** (mucho más rápido que Google). Para activarlo:
- Bing Webmaster → **Settings** → **IndexNow** → genera la API key
- Cuando publiques una página nueva, llama al endpoint de IndexNow → Bing indexa en minutos (no días)

---

## PASO 7 · Configurar alertas (3 minutos)

Te avisa si algo se rompe (caída de tráfico, errores de crawl, manual actions).

1. Search Console → **Settings** (engranaje) → **Users and permissions**
2. Verifica que tu email principal esté ahí con rol "Owner"
3. En **Settings** → debajo de "About this property" → asegúrate de que esté **Email preferences = Enabled**
4. Google te enviará alertas automáticas si:
   - Caída brusca de impresiones/clicks
   - Errores nuevos de Coverage
   - Manual penalty (raro pero crítico)
   - Issues de Core Web Vitals

---

## PASO 8 · Setup de monitoreo semanal (15 min cada lunes)

Una vez por semana, dale 15 minutos a estos 4 paneles:

### a) **Performance** (Search Console)
- Date range: Last 28 days vs Previous 28 days
- Mira:
  - **Total clicks** subiendo
  - **Average position** bajando (1 = mejor, 100 = peor)
  - **Top queries**: qué keywords están funcionando
  - **Top pages**: qué páginas están convirtiendo impresiones en clicks

### b) **Pages** (Search Console → Indexing → Pages)
- "Indexed" debería ir subiendo hacia ~200
- Si hay "Not indexed" en aumento, investiga (click en el motivo)

### c) **Core Web Vitals** (Search Console → Experience → Core Web Vitals)
- Debería decir "Good URLs" → la mayoría en verde
- Si aparece "Poor" en alguna URL, dímelo y lo arreglamos

### d) **GA4 → Acquisition → Traffic acquisition**
- Mira **Organic Search** sessions trending
- Compare con la semana anterior

---

## PASO 9 · Hoja de objetivos a 90 días

Métricas realistas para una clínica medspa nueva en Utah:

| Métrica | Mes 1 | Mes 2 | Mes 3 |
|---|---|---|---|
| URLs indexadas en GSC | 80 | 180 | 200+ |
| Impresiones orgánicas / mes | 500 | 3,000 | 10,000+ |
| Clicks orgánicos / mes | 20 | 150 | 500+ |
| Reseñas en Google Business Profile | 5 | 15 | 30+ |
| Posición promedio | 60-80 | 40-60 | 20-40 |
| Tráfico desde Maps Pack (GBP) | poco | medio | el mayor |

> El tráfico **orgánico de Google web** rara vez es el mayor canal para una medspa local. **El Maps Pack** (Google Maps + carrousel local en search) genera más leads que las búsquedas web tradicionales. Por eso #1 sigue siendo **conseguir reseñas reales en Google Business Profile**.

---

## PASO 10 · Cuándo volver y qué pedirme

| Cuándo | Qué decirme | Yo hago |
|---|---|---|
| Cuando tengas 20+ reseñas reales | "Ya tengo X reseñas, rating Y" | Actualizo el `AggregateRating` schema con tus datos reales |
| Si Search Console marca URLs con error | "Tengo X URLs con problema" | Diagnostico y corrijo |
| Si CWV reporta "Poor" en alguna URL | "Esta URL tiene Y problema" | Optimizo |
| Si quieres lanzar Google Ads | "Voy a lanzar Ads" | Te paso el conversion ID guide + completo los placeholders |
| Si quieres migrar inglés a `/en/` | "Quiero el sitio inglés en /en/" | Refactor completo del i18n (sesión dedicada) |
| Si quieres montar el blog | "Quiero blog" | Setup de blog en Astro + plantilla de post |

---

## Resumen de las 12 URLs para copy-paste rápido

```
https://renascimedspa.com/
https://renascimedspa.com/contact
https://renascimedspa.com/services
https://renascimedspa.com/medical-spa-salt-lake-city
https://renascimedspa.com/medical-spa-midvale
https://renascimedspa.com/medical-spa-sandy-utah
https://renascimedspa.com/medical-spa-murray-utah
https://renascimedspa.com/medical-spa-south-jordan-utah
https://renascimedspa.com/medical-spa-draper-utah
https://renascimedspa.com/services/tox-neurotoxina
https://renascimedspa.com/services/relleno-labios
https://renascimedspa.com/services/iv-therapy
```
