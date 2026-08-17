# SeedTech UDEP 2026 — Landing de convocatoria

Landing page de una sola página para el concurso **SeedTech UDEP 2026**, del Centro de
Innovación y Emprendimiento **HUB UDEP** (Vicerrectorado de Investigación, Universidad de Piura).

Stack: **React 19 + Vite 6 + Tailwind CSS v4 + lucide-react**.

---

## 1. Instalación y ejecución

Requiere **Node.js 20.19+ o 22.12+**. Si no lo tienes, descárgalo de [nodejs.org](https://nodejs.org).

```bash
npm install
```

```bash
npm run dev
```

Abre `http://localhost:5173`.

Para generar la versión de producción (carpeta `dist/`, lista para subir a cualquier hosting):

```bash
npm run build
```

Y para revisar ese build antes de publicarlo:

```bash
npm run preview
```

---

## 2. Logos

Todos los logos viven en `public/logos/` y se referencian con rutas absolutas (`/logos/...`),
así que basta con reemplazar el archivo manteniendo el nombre para actualizar la web.

| Archivo | Uso | Fondo |
| --- | --- | --- |
| `logo-seedtech.png` | Lockup completo (badge + wordmark + claim), en el footer | Claro |
| `logo-seedtech-wordmark.png` | Solo la palabra SEEDTECH, en el navbar | Claro |
| `logo-hub-udep.png` | HUB UDEP a color, en la sección «¿Qué es?» | Claro |
| `logo-udep.png` | Universidad de Piura a color, en la sección «¿Qué es?» | Claro |
| `logo-hub-udep-white.png` | HUB UDEP en blanco, franja superior y footer | Oscuro |
| `logo-udep-white.png` | Universidad de Piura en blanco, franja superior y footer | Oscuro |
| `favicon.png` | Ícono de pestaña | — |

Los archivos ya vienen recortados (sin márgenes en blanco) y con fondo transparente, para que
las alturas definidas en el código se vean ópticamente equilibradas entre sí.

Si reemplazas un logo por uno con proporción distinta, ajusta su altura (`h-8`, `h-10`, `h-12`…)
en `Navbar.jsx`, `Footer.jsx` y `AboutSection.jsx`.

---

## 3. Dónde editar el contenido

**Todo el texto, fechas, premios, cronograma y FAQ está centralizado en un solo archivo:**

```
src/data/content.js
```

Ahí se editan, entre otros:

- `SITE` → enlaces de los formularios, bases, brochure, correo de contacto y fecha de apertura.
- `NAV_LINKS` → enlaces del menú.
- `STATS` → las métricas bajo el hero.
- `TIMELINE` y `MACRO_PHASES` → el cronograma.
- `PRIZES`, `PRIZE_EXTRAS` → premios.
- `FAQS` → preguntas frecuentes.

Los íconos se declaran por nombre (texto) y se resuelven en
`src/components/ui/Icon.jsx`. Para usar un ícono nuevo de
[Lucide](https://lucide.dev), impórtalo ahí y agrégalo al objeto `ICONS`.

### Enlaces oficiales configurados

| Destino | URL |
| --- | --- |
| Formulario de equipo | `https://forms.gle/oAPeUn9e9kUsqx7LA` |
| Formulario individual | `https://forms.gle/FdU5aVPKwPtczZLQ8` |
| Bases del concurso | Google Docs |
| Brochure del programa | Google Slides |
| Contacto | `alex.zapata@hub.udep.pe` |

---

## 4. Identidad visual

Los colores se definen como tokens de Tailwind v4 en `src/index.css`, dentro del bloque `@theme`.
Los azules provienen del logo oficial SeedTech y el amarillo del HUB UDEP.

| Token | Valor | Uso |
| --- | --- | --- |
| `seed-500` | `#0094FF` | Azul brillante de marca, botones primarios |
| `seed-600` / `seed-700` | `#0077DB` / `#005EB0` | Hover, textos de acento sobre fondo claro |
| `seed-300` | `#86D0FF` | Textos de acento sobre fondo oscuro |
| `navy-950` | `#001B3F` | Fondo oscuro principal y titulares |
| `navy-700` | `#004077` | Navy institucional UDEP |
| `hub-yellow` | `#FFCB08` | Acento puntual del HUB UDEP |

Regla de color aplicada de forma uniforme en toda la página:

- **Titulares**: `navy-950` sobre claro · `white` sobre oscuro.
- **Cuerpo**: `slate-600` sobre claro · `slate-300` sobre oscuro.
- **Notas y textos terciarios**: `slate-500` sobre claro · `slate-400` sobre oscuro.
- **Acentos, cifras e íconos sueltos**: `seed-600` sobre claro · `seed-300` sobre oscuro.
- **Íconos en contenedor**: degradado `seed-500 → navy-800` con ícono blanco (claro);
  `seed-500/15` con ícono `seed-300` (oscuro).

Tipografías: **Poppins** para títulos y **Inter** para cuerpo, cargadas desde Google Fonts
en `index.html`.

---

## 5. Estructura

```
src/
├─ App.jsx                     Composición de la página
├─ index.css                   Tokens de color, tipografía y utilidades propias
├─ data/content.js             ← TODO el contenido editable
└─ components/
   ├─ Navbar.jsx               Franja institucional + navegación sticky + menú móvil
   ├─ Hero.jsx
   ├─ StatsBar.jsx             Métricas montadas sobre el hero
   ├─ AboutSection.jsx
   ├─ RequirementsSection.jsx
   ├─ BenefitsSection.jsx
   ├─ PrizeSection.jsx
   ├─ TrainingProcessSection.jsx
   ├─ TimelineSection.jsx      Timeline horizontal en desktop, vertical en móvil
   ├─ DemoDaySection.jsx
   ├─ SelectionCriteriaSection.jsx
   ├─ FAQSection.jsx           Acordeón accesible
   ├─ FinalCTA.jsx
   ├─ Footer.jsx
   ├─ MobileCTABar.jsx         Barra fija de postulación en móvil
   └─ ui/
      ├─ Button.jsx            Variantes: primary, secondary, ghostLight, white
      ├─ Card.jsx              Card, CardIcon, FeatureCard
      ├─ Section.jsx           Section + SectionHeading
      ├─ Icon.jsx              Registro central de íconos Lucide
      ├─ Reveal.jsx            Aparición al hacer scroll
      └─ TechBackdrop.jsx      Fondo decorativo de nodos y retícula
```

---

## 6. Accesibilidad y responsive

- Navegación por teclado con anillos de foco visibles y enlace «Saltar al contenido».
- Acordeón de FAQ con `aria-expanded` / `aria-controls` y botones semánticos.
- Menú móvil con `aria-expanded`, bloqueo de scroll de fondo y foco gestionado.
- Imágenes decorativas marcadas con `aria-hidden`; los logos llevan texto alternativo real.
- Respeta `prefers-reduced-motion`: si el sistema pide menos movimiento, se desactivan
  animaciones y el scroll suave.
- Probado en 375 px (móvil), 768 px (tablet) y 1400 px (desktop).

---

## 7. Publicación

`npm run build` genera `dist/`, que es estático y se puede subir tal cual a Netlify, Vercel,
GitHub Pages, o al hosting de la UDEP.

Si la web va a vivir en un subdirectorio (por ejemplo `hub.udep.pe/seedtech/`), cambia `base`
en `vite.config.js`:

```js
base: '/seedtech/',
```

Antes de publicar, actualiza también la URL canónica y las metaetiquetas Open Graph en
`index.html`.
