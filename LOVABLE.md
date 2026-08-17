# Cómo llevar esta web a Lovable

Este proyecto ya está completo y funcionando. Para que Lovable lo reproduzca **tal cual**,
lo importante es darle el código fuente real, no describírselo: cualquier reconstrucción
"a partir de un prompt" va a diferir en detalles.

Hay dos caminos. El primero es el que conserva el resultado idéntico.

---

## Opción A — GitHub (recomendada, fidelidad exacta)

Lovable sincroniza con GitHub en ambos sentidos. Es la vía más fiable.

1. Crea un repositorio nuevo y vacío en GitHub (por ejemplo `seedtech-udep-2026`).
2. Desde la carpeta del proyecto, en la Terminal:

```bash
cd ~/Downloads/seedtech-udep-2026 && git init && git add . && git commit -m "SeedTech UDEP 2026 landing"
```

3. Conecta y sube (reemplaza `TU-USUARIO`):

```bash
git remote add origin https://github.com/TU-USUARIO/seedtech-udep-2026.git && git branch -M main && git push -u origin main
```

4. En Lovable: **New Project → Import from GitHub** y selecciona el repositorio.

Lovable abrirá el proyecto con todos los archivos y podrás seguir editándolo por chat.

---

## Opción B — Subir el ZIP / los archivos al chat de Lovable

Si prefieres no usar GitHub, tienes `seedtech-udep-2026.zip` en tu carpeta de Descargas.

1. Crea un proyecto nuevo en Lovable.
2. Adjunta el ZIP (o los archivos de `src/`) en el chat y pídele que reemplace el proyecto
   con ese código, usando el mensaje de la sección siguiente.
3. **Sube aparte los 7 logos** de `public/logos/`. Son imágenes: no viajan como texto y
   sin ellos la web se ve rota. Deben quedar en `public/logos/` con exactamente estos nombres:

```
logo-seedtech.png
logo-seedtech-wordmark.png
logo-hub-udep.png
logo-hub-udep-white.png
logo-udep.png
logo-udep-white.png
favicon.png
```

---

## Mensaje para pegar en Lovable

Hay dos mensajes posibles según el camino que elijas:

- **Si adjuntas el código** (Opción A o B): usa el mensaje corto de esta sección.
- **Si vas a construir desde cero por prompt**: usa el prompt largo y autosuficiente de
  **`PROMPT-LOVABLE.md`**, que contiene toda la identidad visual, la estructura y el contenido
  oficial completo.

### Mensaje corto (cuando adjuntas el código)

> Te adjunto el código fuente completo de una landing page ya construida en React 19 + Vite +
> Tailwind CSS v4. Quiero que el proyecto quede exactamente igual a este código, sin rediseñarlo
> ni sustituir componentes por shadcn/ui.
>
> Reglas:
> - Respeta la estructura de archivos tal como viene: `src/App.jsx`, `src/data/content.js`,
>   `src/components/*` y `src/components/ui/*`.
> - Mantén los tokens de color definidos en el bloque `@theme` de `src/index.css`.
>   Si tu plantilla usa Tailwind v3, traduce esos tokens a `tailwind.config` (más abajo te
>   dejo la equivalencia) sin cambiar ningún valor hexadecimal.
> - No cambies textos, fechas, montos ni enlaces: el contenido es oficial y está centralizado
>   en `src/data/content.js`.
> - Las tipografías son Poppins (títulos) e Inter (cuerpo), cargadas desde Google Fonts.
> - Los íconos son de `lucide-react`.
> - Los logos van en `public/logos/` y se referencian como `/logos/nombre.png`.
> - La página debe ser responsive: timeline horizontal con scroll en desktop y vertical en móvil,
>   navegación sticky, acordeón accesible en las FAQ y barra fija de postulación en móvil.

---

## Si Lovable usa Tailwind v3

Este proyecto usa Tailwind **v4**, donde los colores se declaran en CSS. Si la plantilla de
Lovable trae Tailwind v3, hay que pasar los mismos valores a `tailwind.config.js`:

```js
// tailwind.config.js — equivalente v3 del bloque @theme de src/index.css
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        seed: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#b9e2ff',
          300: '#86d0ff',
          400: '#4cb6ff',
          500: '#0094ff',
          600: '#0077db',
          700: '#005eb0',
          800: '#004f91',
          900: '#00467a',
        },
        navy: {
          500: '#005b96',
          600: '#004b80',
          700: '#004077',
          800: '#003b70',
          900: '#002850',
          950: '#001b3f',
          975: '#001129',
        },
        hub: {
          blue: '#3882b1',
          yellow: '#ffcb08',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
```

Además, en Tailwind v3 hay que ajustar algunas clases que en v4 cambiaron de nombre:

| v4 (este proyecto) | v3 (equivalente) |
| --- | --- |
| `bg-linear-to-br` | `bg-gradient-to-br` |
| `size-12` | `h-12 w-12` |
| `bg-white/[0.04]` | igual, sin cambios |
| `opacity-100!` | `!opacity-100` |
| `@utility nombre { … }` en CSS | clase normal dentro de `@layer utilities` |

Las utilidades propias que hay que recrear en `@layer utilities` son:
`text-gradient-seed`, `bg-grid-tech`, `bg-grid-light`, `bg-dots-tech`, `no-scrollbar`,
`reveal-init` y `reveal-shown` (están todas al final de `src/index.css`, listas para copiar).

---

## Nota

Si el objetivo es solo **publicar** la web, no hace falta pasar por Lovable: la carpeta
`dist/` que genera `npm run build` es estática y se sube tal cual a Netlify, Vercel o al
hosting de la UDEP. Lovable tiene sentido si quieres seguir editando la página por chat.
