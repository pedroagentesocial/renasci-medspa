# Renasci Medical Spa

Un sitio web moderno y bilingüe (Español/Inglés) para Renasci Medical Spa, construido con Astro y Tailwind CSS.

## 🚀 Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) - Framework web moderno para sitios rápidos
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- **Internacionalización**: [astro-i18next](https://github.com/yassinedoghri/astro-i18next) - Soporte multiidioma
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Iconos**: [Lucide React](https://lucide.dev/) & [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── images/          # Imágenes estáticas
│   └── favicon.svg      # Favicon del sitio
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── CTAButton.astro
│   │   ├── FAQItem.astro
│   │   ├── HeaderNav.astro
│   │   ├── ServiceCard.astro
│   │   └── TierCard.astro
│   ├── data/           # Datos de servicios y contenido
│   │   └── services.ts
│   ├── i18n/           # Archivos de traducción
│   ├── layouts/        # Layouts base
│   │   └── BaseLayout.astro
│   ├── pages/          # Páginas del sitio
│   │   ├── index.astro      # Página principal
│   │   ├── membership.astro # Página de membresías
│   │   └── services/        # Páginas de servicios
│   └── styles/         # Estilos globales
│       ├── _colors.css      # Paleta de colores
│       └── global.css       # Estilos base
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── package.json        # Dependencias del proyecto
```

## 🎨 Paleta de Colores

El sitio utiliza una paleta de colores elegante y profesional:

- **Primary**: `#8B5CF6` (Violeta elegante)
- **Secondary**: `#06B6D4` (Cyan vibrante)
- **Accent**: `#F59E0B` (Ámbar cálido)
- **Neutral**: Escala de grises desde `#F8FAFC` hasta `#0F172A`

Los colores están definidos en `src/styles/_colors.css` y configurados en `tailwind.config.mjs`.

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o pnpm

### Configuración Local

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd renasci-medspa
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**:
   El sitio estará disponible en `http://localhost:4321`

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Previsualiza la build de producción |

## ✏️ Editar Contenido

### Servicios

Los servicios se gestionan desde el archivo `src/data/services.ts`. Para agregar o modificar servicios:

1. Abre `src/data/services.ts`
2. Modifica el array `services` con la información deseada
3. Cada servicio debe incluir:
   - `id`: Identificador único
   - `name`: Nombre del servicio (en español e inglés)
   - `description`: Descripción detallada
   - `price`: Precio del servicio
   - `duration`: Duración estimada
   - `category`: Categoría del servicio
   - `image`: Ruta de la imagen (opcional)

### Traducciones

Las traducciones se encuentran en la carpeta `src/i18n/`. Para modificar textos:

1. Edita los archivos JSON correspondientes a cada idioma
2. Mantén la misma estructura de claves en ambos idiomas
3. Los cambios se reflejarán automáticamente en el sitio

### Estilos y Colores

Para personalizar la apariencia:

1. **Colores**: Modifica `src/styles/_colors.css` y `tailwind.config.mjs`
2. **Estilos globales**: Edita `src/styles/global.css`
3. **Componentes**: Cada componente tiene sus estilos en línea usando Tailwind CSS

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar con Vercel**:
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configuración automática**: Vercel detectará automáticamente que es un proyecto Astro

3. **Variables de entorno**: Si necesitas variables de entorno, configúralas en el dashboard de Vercel

### Otros Proveedores

El sitio es compatible con cualquier proveedor que soporte sitios estáticos:

- **Netlify**: Conecta el repositorio y despliega automáticamente
- **GitHub Pages**: Usa el workflow de GitHub Actions incluido
- **Cloudflare Pages**: Conecta el repositorio con build command `npm run build`

## 🔧 Configuración Avanzada

### Astro

La configuración principal está en `astro.config.mjs`. Incluye:

- Integración con Tailwind CSS
- Soporte para React (para componentes interactivos)
- Configuración de i18n

### Tailwind CSS

Personalizado en `tailwind.config.mjs` con:

- Paleta de colores extendida
- Tipografías personalizadas
- Plugins adicionales (forms, typography)

## 📱 Características

- ✅ **Responsive Design**: Optimizado para todos los dispositivos
- ✅ **Bilingüe**: Soporte completo para Español e Inglés
- ✅ **SEO Optimizado**: Meta tags y estructura semántica
- ✅ **Rendimiento**: Carga rápida con Astro
- ✅ **Animaciones**: Transiciones suaves y efectos visuales
- ✅ **Accesibilidad**: Cumple estándares WCAG
- ✅ **PWA Ready**: Preparado para Progressive Web App

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para soporte o consultas sobre el proyecto, contacta al equipo de desarrollo.

---

**Renasci Medical Spa** - Transformando vidas a través de la medicina estética de vanguardia.
