# Publicar la web

La carpeta `dist/` ya está compilada y es **estática**: no necesita servidor, ni base de datos,
ni Node en el servidor. Se sube tal cual a cualquier hosting.

Elige un camino según lo que necesites hoy.

---

## Opción 1 — Netlify Drop · sin instalar nada, 2 minutos

La vía más rápida para tener un enlace público hoy mismo. No requiere Node, ni terminal, ni git.

1. Entra a **https://app.netlify.com/drop**
2. Inicia sesión (con tu cuenta de Google o GitHub).
3. Arrastra la carpeta **`dist`** (no el ZIP, no la carpeta del proyecto: la carpeta `dist`) a la
   zona de la página.
4. En segundos tendrás una URL tipo `https://algo-aleatorio.netlify.app`.
5. En *Site configuration → Change site name* le pones un nombre decente, por ejemplo
   `seedtech-udep-2026.netlify.app`.

Para abrir la carpeta correcta desde la Terminal:

```bash
open ~/Downloads/seedtech-udep-2026/dist
```

**Limitación:** cada vez que cambies algo hay que recompilar y volver a arrastrar. Para eso está
la Opción 2.

---

## Opción 2 — GitHub + Netlify o Vercel · despliegue automático (recomendada)

Cada vez que hagas `git push`, la web se recompila y se publica sola. **No necesitas Node en tu
Mac**: la compilación ocurre en la nube.

### 2.1 Configura git (solo la primera vez)

```bash
git config --global user.name "Alex Zapata" && git config --global user.email "alex.zapata@hub.udep.pe"
```

### 2.2 Crea el repositorio

Crea uno vacío en https://github.com/new (por ejemplo `seedtech-udep-2026`), **sin** README ni
.gitignore. Luego, desde el proyecto:

```bash
cd ~/Downloads/seedtech-udep-2026 && git init && git add . && git commit -m "Landing SeedTech UDEP 2026"
```

```bash
git branch -M main && git remote add origin https://github.com/TU-USUARIO/seedtech-udep-2026.git && git push -u origin main
```

GitHub pedirá autenticación: usa un **Personal Access Token** (Settings → Developer settings →
Tokens) como contraseña, o instala GitHub Desktop y haz el push desde ahí.

### 2.3 Conecta el hosting

**Netlify:** *Add new site → Import an existing project → GitHub →* elige el repo. Detecta la
configuración desde `netlify.toml`, no toques nada. → *Deploy*.

**Vercel:** *Add New → Project → Import Git Repository →* elige el repo. Lee `vercel.json`.
→ *Deploy*.

Ambos dan HTTPS y dominio gratis, y aceptan un dominio propio después.

---

## Opción 3 — GitHub Pages · gratis, dentro de GitHub

El repositorio ya incluye el workflow `.github/workflows/deploy.yml`.

1. Sube el repo (pasos 2.1 y 2.2 de arriba).
2. En el repo: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.
3. Cada push a `main` publica en `https://TU-USUARIO.github.io/seedtech-udep-2026/`.

El workflow ya ajusta la ruta base al nombre del repo, así que los logos y estilos cargan bien
dentro del subdirectorio.

---

## Opción 4 — Hosting propio de la UDEP

Es lo que corresponde si la web va a vivir bajo un dominio institucional
(`hub.udep.pe/seedtech`, por ejemplo).

**Si va en la raíz de un dominio o subdominio** (`seedtech.udep.pe`), entrega la carpeta `dist/`
tal cual a TI.

**Si va en un subdirectorio** (`hub.udep.pe/seedtech/`), hay que recompilar indicando la ruta:

```bash
VITE_BASE=/seedtech/ npm run build
```

Y entregar la `dist/` resultante. Sin ese paso, los archivos se buscarán en la raíz del dominio y
la página se verá sin estilos ni logos.

Súbelo por SFTP/SSH, o pásale a TI el ZIP del proyecto con esta instrucción. Lo único que debe
configurar el servidor es servir `index.html` para cualquier ruta que no exista.

---

## Antes de publicar en un dominio definitivo

En `index.html`, actualiza la URL canónica y la de la imagen para redes sociales:

```html
<link rel="canonical" href="https://LA-URL-REAL/" />
<meta property="og:image" content="https://LA-URL-REAL/logos/logo-seedtech.png" />
```

Open Graph necesita URLs absolutas: con la ruta relativa actual, la vista previa al compartir en
WhatsApp o LinkedIn no mostrará imagen.

---

## Recompilar después de cambiar algo

Solo hace falta si publicas manualmente (Opciones 1 y 4). Requiere Node 20.19+ o 22.12+
instalado desde [nodejs.org](https://nodejs.org):

```bash
cd ~/Downloads/seedtech-udep-2026 && npm install && npm run build
```
