# Prompt para Lovable — SeedTech UDEP 2026

> **Cómo usarlo:** copia TODO lo que está debajo de la línea y pégalo como primer mensaje en un
> proyecto nuevo de Lovable. Antes de enviarlo, adjunta los 7 PNG de `public/logos/`.
>
> Si además adjuntas el ZIP del proyecto, agrega al inicio: *"Te adjunto también el código fuente
> original; úsalo como referencia exacta y no lo rediseñes."* Eso sube muchísimo la fidelidad.

---

Necesito una landing page de convocatoria, de una sola página, para **SeedTech UDEP 2026**, un
concurso universitario del Centro de Innovación y Emprendimiento **HUB UDEP** (Vicerrectorado de
Investigación, Universidad de Piura, Perú).

Todo el contenido de abajo es oficial. **No inventes, no resumas y no cambies textos, cifras,
fechas ni enlaces.** Si algo no está especificado, elige la opción más sobria y institucional.

## 1. Stack y arquitectura

- React + Vite + Tailwind CSS. Componentes funcionales, sin librerías de UI pesadas.
- Íconos: `lucide-react` exclusivamente.
- Una sola página con navegación por anclas y scroll suave.
- **Todo el contenido editable (textos, fechas, premios, cronograma, FAQ, enlaces) debe vivir en
  un único archivo `src/data/content.js`**, exportado como constantes. Los componentes solo
  consumen esos datos. Este punto es obligatorio: quien mantenga la web no debe tocar JSX.
- Los íconos se declaran por nombre en los datos y se resuelven en un registro central
  (`src/components/ui/Icon.jsx`) que mapea nombre → componente de Lucide.
- Componentes: `Navbar`, `Hero`, `StatsBar`, `AboutSection`, `RequirementsSection`,
  `BenefitsSection`, `PrizeSection`, `TrainingProcessSection`, `TimelineSection`, `DemoDaySection`,
  `SelectionCriteriaSection`, `FAQSection`, `FinalCTA`, `Footer`, `MobileCTABar`.
- Primitivos reutilizables en `src/components/ui/`: `Button`, `Card`, `Section`, `Icon`, `Reveal`,
  `TechBackdrop`.

## 2. Identidad visual

Paleta (valores exactos, tomados del logo oficial):

```
seed-50  #eef8ff   seed-100 #d9efff   seed-200 #b9e2ff   seed-300 #86d0ff
seed-400 #4cb6ff   seed-500 #0094ff   seed-600 #0077db   seed-700 #005eb0
seed-800 #004f91   seed-900 #00467a

navy-500 #005b96   navy-600 #004b80   navy-700 #004077   navy-800 #003b70
navy-900 #002850   navy-950 #001b3f   navy-975 #001129

hub-blue #3882b1   hub-yellow #ffcb08
```

Tipografías (Google Fonts): **Poppins** para títulos (600/700/800) e **Inter** para cuerpo
(400/500/600/700).

**Regla de color, aplicada de forma uniforme en toda la página** — esto es importante, quiero
consistencia total entre secciones claras y oscuras:

| Elemento | Sobre fondo claro | Sobre fondo oscuro |
| --- | --- | --- |
| Titulares | `navy-950` | blanco |
| Texto de cuerpo | `slate-600` | `slate-300` |
| Notas y texto terciario | `slate-500` | `slate-400` |
| Acentos, cifras, íconos sueltos | `seed-600` | `seed-300` |
| Íconos dentro de contenedor | cuadrado redondeado con degradado `seed-500 → navy-800`, ícono blanco | fondo `seed-500/15`, borde `seed-400/25`, ícono `seed-300` |

El amarillo `hub-yellow` se usa **solo como acento puntual** (ícono de trofeo, badge de
entregable). Nunca como color de fondo grande ni de texto largo.

Estilo general: profesional, moderno, tecnológico y juvenil, pero con peso institucional.
Tarjetas con bordes muy redondeados (`rounded-3xl`), borde de 1px `slate-200`, elevación sutil
solo en hover (`-translate-y-1` + sombra). Fondos alternando blanco → azul muy claro
(`seed-50/60`) → navy oscuro. Degradados sutiles navy → azul brillante. Como textura de fondo en
las secciones oscuras: una retícula tenue y una red de nodos conectados en SVG, **muy discreta**,
nunca compitiendo con el texto. Nada de fotos de stock corporativas ni de resplandores excesivos.

Botones:
- Primario: fondo `seed-500`, texto blanco, hover `seed-600`, píldora, sombra suave.
- Secundario: borde 2px `seed-500`, texto `seed-700`, fondo blanco, hover `seed-50`.
- Sobre fondo oscuro: variante fantasma con borde `white/35` y fondo `white/5`.

## 3. Logos

Te adjunto los archivos. Ponlos en `public/logos/` con estos nombres exactos y referéncialos como
`/logos/nombre.png`:

| Archivo | Dónde va |
| --- | --- |
| `logo-seedtech-wordmark.png` | Navbar (solo la palabra SEEDTECH) |
| `logo-seedtech.png` | Footer, lockup completo, invertido a blanco con `brightness-0 invert` |
| `logo-udep-white.png` | Franja institucional superior y footer |
| `logo-hub-udep-white.png` | Franja institucional superior y footer |
| `logo-udep.png` | Sección "¿Qué es?" (fondo claro) |
| `logo-hub-udep.png` | Sección "¿Qué es?" (fondo claro) |
| `favicon.png` | Ícono de pestaña |

**Importante sobre las alturas:** el logo UDEP tiene proporción ~2.8:1 y el del HUB ~4.4:1. No les
des la misma altura literal o se ven desequilibrados. Usa UDEP `h-8` / HUB `h-6` en la franja
superior, y UDEP `h-12` / HUB `h-10` en el footer y en la sección "¿Qué es?", separados por un
divisor vertical de 1px.

## 4. Estructura y contenido

### Franja institucional superior (dentro del header, se pliega al hacer scroll)
Izquierda, texto pequeño: `Vicerrectorado de Investigación · Centro de Innovación y Emprendimiento`
Derecha: logos blancos de UDEP y HUB UDEP sobre fondo `navy-950`.

### Navbar (sticky, debajo de la franja)
Logo SEEDTECH a la izquierda. Enlaces: `¿Qué es?`, `Requisitos`, `Beneficios`, `Cronograma`,
`Premios`, `FAQ`. Botón primario `Postula ahora`.
En móvil: menú hamburguesa desplegable con los enlaces más los dos botones de postulación.

### Hero (fondo navy oscuro con degradado y red de nodos)
- Badge superior: `Concurso universitario | Segunda edición`
- Título H1: **Convierte tu idea en una solución tecnológica real**
  (con "solución tecnológica real" en degradado azul claro)
- Claim, en mayúsculas con tracking amplio y una línea fina a cada lado:
  **LO GRANDE EMPEZÓ SIENDO PEQUEÑO**
- Bajada: *SeedTech UDEP 2026 es el concurso universitario que impulsa propuestas innovadoras
  lideradas por estudiantes de pregrado de los campus Piura y Lima.* (Piura y Lima en negrita)
- Botones: `Postula como equipo` (primario) → https://forms.gle/oAPeUn9e9kUsqx7LA
  y `Postulación individual` (fantasma) → https://forms.gle/FdU5aVPKwPtczZLQ8
- Microcopy: *¿No tienes equipo completo? También puedes postular individualmente y te
  contactaremos para continuar el proceso.*
- Dos enlaces de texto con ícono: `Bases del concurso` y `Brochure del programa`
- Chip final con punto pulsante: **Convocatoria abierta desde el 17 de agosto**
  → **No muestres nunca fecha de cierre ni cuenta regresiva.**

### StatsBar (tarjeta blanca montada sobre el borde inferior del hero)
Ocho métricas en rejilla (2 columnas en móvil, 4 en desktop), cada una con ícono, cifra y etiqueta:

| Cifra | Etiqueta |
| --- | --- |
| 2 a 5 | estudiantes por equipo |
| 5 | talleres grupales |
| 5 | asesorías especializadas |
| 2 | mentorías |
| 2 | office hours |
| S/ 15,000 | en capital semilla |
| 4 | ganadores |
| Demo Day | presencial |

Debajo, nota pequeña: *El capital semilla total resulta de los premios por categoría: S/ 5,000 y
S/ 2,500 en Emprendimientos Tecnológicos, y S/ 5,000 y S/ 2,500 en la Línea de Economía Circular.*

### ¿Qué es SeedTech UDEP? (`#que-es`, fondo blanco, dos columnas)
Columna izquierda: título **¿Qué es SeedTech UDEP?** y el texto:
*SeedTech UDEP es un concurso impulsado por el **Vicerrectorado de Investigación de la Universidad
de Piura**, a través del **Centro de Innovación y Emprendimiento HUB UDEP**. Está dirigido a
estudiantes de pregrado de los campus Piura y Lima que buscan convertir una idea en una solución
tecnológica real.*
Debajo, una caja gris clara con los logos a color de UDEP y HUB UDEP.

Columna derecha: etiqueta `CUATRO OBJETIVOS` y cuatro tarjetas:
1. **Trabajo interdisciplinario** — Fomenta la colaboración entre estudiantes de distintas carreras, programas, facultades o campus.
2. **Innovación tecnológica** — Promueve soluciones tecnológicas innovadoras de alto impacto.
3. **Validación real** — Ayuda a validar propuestas reales con apoyo de la tecnología.
4. **Habilidades emprendedoras** — Fortalece capacidades emprendedoras mediante un proceso formativo integral.

### Requisitos para participar (`#requisitos`, fondo azul muy claro)
Bajada: *Tres condiciones definen una postulación válida: cómo se conforma el equipo, qué debe
proponer el proyecto y en qué etapa se encuentra.*

Dos tarjetas lado a lado, cada ítem con ícono de check:

**Equipo**
- Equipos de 2 a 5 estudiantes de pregrado UDEP.
- Los integrantes deben pertenecer a al menos dos programas académicos o campos de especialización diferentes.
- Idealmente, los equipos deben estar conformados por estudiantes de distintos programas, facultades o campus UDEP.

**Proyecto**
- Tener un grado de diferenciación en su propuesta de valor.
- Integrar estratégicamente tecnología: producto, aplicación, sistema, dispositivo o herramienta digital.
- Transformar, mejorar o redefinir una experiencia, proceso o necesidad concreta.
- Vincularse a las líneas prioritarias del concurso.
- Estar alineado al ideario de la Universidad de Piura.

Al pie de esa tarjeta, etiqueta `LÍNEAS PRIORITARIAS` y chips: Economía circular · Agroindustria ·
Construcción · Hardware / Software · Inteligencia artificial · Educación · Finanzas · Entre otras.

Luego, un bloque destacado ancho sobre fondo navy con degradado:
**¿No tienes equipo completo?** — *Si tienes un proyecto, o te faltan integrantes para completar tu
equipo, puedes postular individualmente. El equipo organizador te contactará para que puedas
continuar el proceso.* Con botón blanco `Postular individualmente` → https://forms.gle/FdU5aVPKwPtczZLQ8

Después, subtítulo centrado **Etapa del proyecto** con la bajada *Puedes postular en cualquiera de
estas dos etapas.* y dos tarjetas (`ETAPA 1` / `ETAPA 2`):
1. **Tengo una idea** — Tienes una idea de negocio clara que busca resolver un problema real, pero aún no has desarrollado una primera versión de la solución.
2. **Estoy desarrollando mi solución** — Ya comenzaste a transformar tu idea en algo que puede mostrarse o probarse: un boceto, maqueta, prototipo, demo o primera versión de tu solución.

### Beneficios (`#beneficios`, fondo blanco)
Título: **¿Qué recibirán los equipos seleccionados?**
Bajada: *Un acompañamiento completo para llevar tu propuesta desde la idea hasta un prototipo listo
para presentar.* Seis tarjetas en rejilla de 3 columnas:
1. **Talleres prácticos** — Acceso a talleres prácticos para validar y fortalecer la solución tecnológica.
2. **Mentorías especializadas** — Cada equipo aceptado recibirá un mentor especializado de la red de mentores HUB UDEP.
3. **Asesorías personalizadas** — Sesiones con especialistas según el avance de cada propuesta.
4. **Networking** — Conexión con mentores, asesores, emprendedores y potenciales inversionistas de la comunidad HUB UDEP.
5. **Certificado oficial** — Certificado oficial de participación emitido por la Universidad de Piura.
6. **1 CLC** — 1 CLC correspondiente a 34 horas lectivas para la Facultad de Ciencias Económicas y Empresariales y la Facultad de Ingeniería y Arquitectura.

### Capital semilla (`#premios`, fondo navy oscuro)
Título: **Capital semilla para los mejores equipos**
Bajada: *Dos categorías, cuatro premios y S/ 15,000 en total para impulsar las propuestas ganadoras.*

Dos tarjetas:
- **Emprendimientos tecnológicos** — *Eje general: cualquier línea temática, excepto Economía Circular.* → 1.er puesto **S/ 5,000** · 2.do puesto **S/ 2,500**
- **Línea de Economía Circular** — *Línea prioritaria del concurso, con categoría propia.* → 1.er puesto **S/ 5,000** · 2.do puesto **S/ 2,500**

En ambas, al pie, dos chips: `Certificado de la Universidad de Piura` y `Trofeo de reconocimiento`.

Banda destacada con ícono de trofeo: **4 ganadores en total** — *S/ 15,000 en capital semilla
distribuidos entre las dos categorías.*

Nota final: *Los proyectos de economía circular compiten en una línea específica. La economía
circular promueve el uso eficiente de recursos, la reducción de residuos, la permanencia de
productos y materiales en uso, y la regeneración de sistemas naturales.*

### Proceso de entrenamiento (`#metodologia`, fondo blanco)
Título: **Un proceso formativo para validar, prototipar y presentar tu solución**
Bajada: *El equipo HUB UDEP, junto con asesores y mentores UDEP, acompaña esta etapa a través de
cuatro espacios de trabajo.*
Cuatro tarjetas, cada una con un número grande decorativo en color `seed-50` en la esquina superior
derecha (completamente dentro de la tarjeta, sin recortarse):
1. **5 Talleres grupales** — Sesiones teórico-prácticas con expertos para fortalecer la propuesta.
2. **5 Asesorías especializadas** — Sesiones personalizadas con especialistas según el avance de cada proyecto.
3. **2 Mentorías** — Reuniones presenciales o virtuales con el mentor asignado al equipo.
4. **2 Office hours** — Reuniones con HUB UDEP para revisar el avance durante el concurso.

Pie: *Seguimiento estratégico con un mentor asignado por equipo durante todo el concurso.*

### Cronograma (`#cronograma`, fondo azul muy claro)
Título: **Cronograma SeedTech UDEP 2026**
Bajada: *Ocho fases, desde la convocatoria hasta el Demo Day, con tres entregables durante el proceso.*

Primero una fila de 4 tarjetas con la vista macro (ícono + "FASE N" + nombre + fecha):
Inscripción · Desde 17 ago | Evaluación y selección · 7 — 12 set | Entrenamiento · 15 set — 22 oct |
Final del concurso · 26 oct

Luego el detalle de 8 fases. Cada tarjeta lleva: badge de fase (F1–F4), modalidad, título, fecha en
azul, actividad, un chip gris con las horas cuando aplique, y un badge amarillo de entregable cuando
aplique.

| # | Fase | Título | Fecha | Actividad | Horas | Entregable | Modalidad |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | F1 | Convocatoria | Desde el 17 de agosto | Publicación de bases y difusión del concurso. | — | — | Presencial y virtual |
| 2 | F2 | Evaluación y selección | Del 7 al 12 de setiembre | Selección remota de equipos para la fase de entrenamiento. | — | — | Virtual |
| 3 | F3 | Diagnóstico | 15 de setiembre | Taller 1: Problem/solution fit + Asesoría 1: Diagnóstico empresarial. | Taller 3h · Asesoría 1.5h | — | Virtual |
| 4 | F3 | Desarrollo y validación | Del 17 al 25 de setiembre | Taller 2: Lean Canvas + Asesoría 2: Conceptualización + Mentorías/Office Hours 1. | Taller 3h · Asesoría 1.5h · Entregable 2h | Entregable 1: Lean Canvas | Mixta (virtual/presencial) |
| 5 | F3 | Prototipado I | Del 7 al 10 de octubre | Taller 3: Prototipado I: IA + Asesoría 3: Tecnología y economía circular. | Taller 3h · Asesoría 2h | — | Virtual |
| 6 | F3 | Prototipado II | Del 12 al 17 de octubre | Taller 4: Prototipado II: Product/market fit + Asesoría 4: Prototipado. | Taller 3h · Asesoría 2h · Entregable 2h | Entregable 2: Prototipo | Virtual |
| 7 | F3 | Pitch de impacto | Del 19 al 22 de octubre | Taller 5: Pitch de impacto + Asesoría 5: Pitch sessions + Mentorías/Office Hours 2. | Taller 3h · Asesoría 2h · Entregable 2h | Entregable 3: Pitch | Mixta (virtual/presencial) |
| 8 | F4 | Demo Day | 26 de octubre | Evento final y premiación. | 4h | — | Presencial |

Debajo, una banda: **34 horas lectivas en total** — *Equivalentes a 1 CLC para CC.EE.EE. e
Ingeniería y Arquitectura.* con los chips `15h talleres` + `9h asesorías` + `6h entregables` +
`4h Demo Day`.

Nota final: *El comité organizador se reserva el derecho de modificar el cronograma, las fechas y
los horarios según convenga para el desarrollo del concurso.*

### Demo Day (`#demo-day`, fondo navy oscuro, dos columnas)
Título: **Demo Day: presenta tu solución ante el ecosistema**
Texto: *El Demo Day será la sesión presencial de cierre del concurso, con un mínimo de **5 equipos
finalistas**. Los finalistas serán seleccionados según su desempeño durante el entrenamiento y los
criterios de evaluación establecidos.*
Debajo, una caja con ícono de calendario: **26 de octubre** — *Evento final y premiación · Presencial*

Columna derecha, cuatro puntos con ícono:
- Cada equipo tendrá 5 minutos para exponer su propuesta ante el jurado y 5 minutos para responder preguntas.
- Final presencial en Campus Piura, Campus Lima o ambos, en formato híbrido.
- Si se realiza en un solo campus, se priorizará Piura sin afectar la calidad del evento para equipos de ambos campus.
- La selección de finalistas y el formato final se comunicarán con al menos 5 días de anticipación.
- Los resultados se publicarán dentro de las 48 horas posteriores al evento final.

### Criterios de selección (`#criterios`, fondo azul muy claro)
Título: **¿Qué evaluaremos?**
Bajada: *Estos son los cuatro criterios con los que el comité seleccionará a los equipos que pasan a
la fase de entrenamiento.* Cuatro tarjetas:
1. **Claridad del problema** — Qué tan claro es el problema que busca resolver la solución.
2. **Innovación de la propuesta** — Grado de diferenciación y valor innovador.
3. **Componente tecnológico** — Integración estratégica de tecnología en la solución.
4. **Interdisciplinariedad del equipo** — Diversidad de programas, campos de especialización, facultades o campus.

Banda destacada: *Se priorizarán propuestas viables, con alto potencial de impacto y con un
componente tecnológico claro.*

Luego una tarjeta ancha, **Compromisos del equipo emprendedor** — *Al postular, tu equipo se
compromete a:* con cuatro ítems en dos columnas:
- Participar activamente en el desarrollo del proyecto.
- Asistir al entrenamiento virtual y al evento final de cierre.
- Cumplir con los plazos establecidos para cada tarea.
- Mantener una actitud colaborativa, ética y responsable durante todo el concurso.

### Preguntas frecuentes (`#faq`, fondo blanco, acordeón)
Título: **Preguntas frecuentes**
Bajada: *Las respuestas oficiales a las consultas más comunes sobre la postulación y el desarrollo
del concurso.* Ancho máximo estrecho, centrado. Primer ítem abierto por defecto.

1. **¿Es necesario contar con un proyecto tecnológico para aplicar al concurso?** No. La tecnología debe formar parte de la propuesta, pero no ser el enfoque principal.
2. **¿Qué nivel de desarrollo mínimo debe tener mi solución para ser aceptada?** Se aceptan desde ideas hasta prototipos con enfoque tecnológico.
3. **¿Cómo demuestro el avance de mi proyecto al momento de postular?** Presentando evidencias como maquetas o prototipos preliminares.
4. **¿Pueden postular equipos conformados por estudiantes, otros miembros de la comunidad UDEP y externos?** No. Solo pueden participar estudiantes de pregrado.
5. **¿Qué pasa si aún no tengo una solución tecnológica desarrollada?** Puedes postular con una idea y desarrollar el prototipo durante el programa.
6. **¿Se puede cambiar un integrante del equipo después de postular?** Sí, pero el líder emprendedor no puede retirarse.
7. **¿Puedo postular más de un proyecto?** Sí, aunque solo uno podría ser seleccionado.
8. **¿El equipo debe estar completo durante sesiones y mentorías?** Se recomienda, pero como mínimo deben asistir el líder y un integrante.
9. **¿Es obligatorio que los proyectos sean exclusivamente de economía circular?** No. Se aceptan proyectos de cualquiera de las líneas temáticas del concurso.

Al pie, caja azul clara: *¿Tu pregunta no está aquí? Escríbenos y te respondemos.* +
enlace `alex.zapata@hub.udep.pe`

### CTA final (`#postula`, fondo navy con degradado y red de nodos discreta)
Claim arriba en mayúsculas: LO GRANDE EMPEZÓ SIENDO PEQUEÑO
Título: **Tu idea puede ser el inicio de algo grande** ("algo grande" en degradado azul)
Texto: *Postula a SeedTech UDEP 2026 y empieza a transformar una idea en una solución tecnológica
con impacto real.*
Botones: `Postula como equipo` y `Postulación individual`.
Microcopy: *Convocatoria abierta desde el 17 de agosto.*

### Footer (fondo `navy-975`)
Cuatro columnas:
1. Logo SeedTech en blanco + *SeedTech UDEP 2026 — Concurso Universitario. Una iniciativa del Vicerrectorado de Investigación de la Universidad de Piura, a través del Centro de Innovación y Emprendimiento HUB UDEP.*
2. **SECCIONES**: los seis enlaces del menú.
3. **RECURSOS**: Bases del concurso · Brochure del programa · Postulación por equipo · Postulación individual.
4. **CONTACTO**: alex.zapata@hub.udep.pe + nota legal *Los participantes aceptan lo dispuesto en el Reglamento de Propiedad Intelectual de la Universidad de Piura, aplicable a la autoría, los derechos y el uso de las soluciones presentadas.*

Franja inferior separada por un borde: logos blancos de UDEP y HUB UDEP a la izquierda, y a la
derecha *© 2026 Universidad de Piura · HUB UDEP* / *Lo grande empezó siendo pequeño*.

## 5. Enlaces (usar exactamente estos)

- Formulario de equipo: https://forms.gle/oAPeUn9e9kUsqx7LA
- Formulario individual: https://forms.gle/FdU5aVPKwPtczZLQ8
- Bases del concurso: https://docs.google.com/document/d/1D0CavvVhSqoXVSqUre2_RBwqppLtA7rQ/edit?usp=sharing&rtpof=true&sd=true
- Brochure del programa: https://docs.google.com/presentation/d/10-gi5c-YtiSU2YPWSbmRWTWEq22CSXm6wa6_01XCzpw/edit?usp=sharing
- Contacto: alex.zapata@hub.udep.pe

Todos los enlaces externos abren en pestaña nueva con `rel="noopener noreferrer"`.

## 6. Comportamiento e interacción

- Header sticky. La franja institucional superior se pliega suavemente al hacer scroll (>24px) y la
  barra de navegación gana fondo translúcido con desenfoque y sombra.
- Scroll suave hacia las anclas, con `scroll-padding-top` suficiente para que el header no tape los
  títulos.
- **Cronograma: carrusel horizontal con scroll-snap en desktop** (tarjetas de ancho fijo unidas por
  una línea con nodos, flechas de anterior/siguiente que se deshabilitan en los extremos, y un
  difuminado en el borde derecho mientras quede contenido) **y timeline vertical con riel a la
  izquierda en móvil y tablet**.
- FAQ en acordeón: solo un ítem abierto a la vez, animación de altura, ícono `+` que rota 45° al
  abrirse.
- Tarjetas con hover sutil: elevación de 4px, borde que pasa a `seed-300` y sombra suave. El ícono
  escala ligeramente.
- Aparición al hacer scroll (fade + desplazamiento vertical de ~22px) con `IntersectionObserver` y
  retardos escalonados dentro de cada rejilla. Si un elemento ya está en pantalla al montar, debe
  mostrarse de inmediato, sin parpadeo.
- Barra fija inferior en móvil con los dos botones de postulación: aparece tras pasar el hero y se
  oculta al llegar al CTA final.

## 7. Accesibilidad y responsive

- Responsive real en 375px, 768px y 1440px. Nada debe desbordar horizontalmente.
- Enlace "Saltar al contenido" al inicio, visible solo al enfocarlo.
- Acordeón con `<button>`, `aria-expanded` y `aria-controls`. Menú móvil con `aria-expanded` y
  bloqueo del scroll de fondo mientras está abierto.
- Anillos de foco visibles en todos los elementos interactivos.
- Imágenes decorativas con `aria-hidden`; los logos con texto alternativo real (no "logo").
- Respetar `prefers-reduced-motion`: desactivar animaciones y scroll suave.
- Contraste mínimo AA en todos los textos, en ambas superficies.

## 8. SEO

- `<html lang="es">`.
- Título: `SeedTech UDEP 2026 | Convierte tu idea en una solución tecnológica real`
- Descripción: `SeedTech UDEP 2026 es el concurso universitario del HUB UDEP para estudiantes de
  pregrado de los campus Piura y Lima. Convocatoria abierta desde el 17 de agosto: talleres,
  mentorías y S/ 15,000 en capital semilla.`
- Etiquetas Open Graph y Twitter Card, `theme-color` `#001B3F`, favicon.

## 9. Qué NO hacer

- No mostrar fecha de cierre de la convocatoria ni cuenta regresiva. Solo la fecha de apertura.
- No cambiar montos, fechas, nombres de talleres ni el número de ganadores.
- No añadir secciones, testimonios, contadores de estadísticas inventadas ni formularios propios:
  la postulación ocurre en los Google Forms enlazados.
- No usar fotos de stock ni ilustraciones genéricas.
- No mezclar otras familias tipográficas ni otros azules fuera de la paleta indicada.
- No poner texto largo sobre la red de nodos si compromete la legibilidad.
