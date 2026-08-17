/**
 * Fuente única de contenido de la landing.
 * Todo el copy proviene de las Bases oficiales del concurso SeedTech UDEP 2026.
 * Editar aquí actualiza la web completa.
 */

export const SITE = {
  edition: 'Segunda edición',
  claim: 'Lo grande empezó siendo pequeño',
  contactEmail: 'alex.zapata@hub.udep.pe',
  /* Formularios oficiales de postulación */
  applyTeamUrl: 'https://forms.gle/oAPeUn9e9kUsqx7LA',
  applyIndividualUrl: 'https://forms.gle/FdU5aVPKwPtczZLQ8',
  /* Documentos oficiales del concurso */
  basesUrl:
    'https://docs.google.com/document/d/1D0CavvVhSqoXVSqUre2_RBwqppLtA7rQ/edit?usp=sharing&rtpof=true&sd=true',
  brochureUrl:
    'https://docs.google.com/presentation/d/10-gi5c-YtiSU2YPWSbmRWTWEq22CSXm6wa6_01XCzpw/edit?usp=sharing',
  /* Sólo se comunica la fecha de apertura de la convocatoria */
  openingLabel: 'Convocatoria abierta desde el 17 de agosto',
}

export const NAV_LINKS = [
  { label: '¿Qué es?', href: '#que-es' },
  { label: 'Requisitos', href: '#requisitos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'Premios', href: '#premios' },
  { label: 'FAQ', href: '#faq' },
]

export const STATS = [
  { value: '2 a 5', label: 'estudiantes por equipo', icon: 'Users' },
  { value: '5', label: 'talleres grupales', icon: 'Presentation' },
  { value: '5', label: 'asesorías especializadas', icon: 'ClipboardCheck' },
  { value: '2', label: 'mentorías', icon: 'Network' },
  { value: '2', label: 'office hours', icon: 'Clock' },
  { value: 'S/ 15,000', label: 'en capital semilla', icon: 'Trophy' },
  { value: '4', label: 'ganadores', icon: 'BadgeCheck' },
  { value: 'Demo Day', label: 'presencial', icon: 'Mic' },
]

export const OBJECTIVES = [
  {
    icon: 'Users',
    title: 'Trabajo interdisciplinario',
    text: 'Fomenta la colaboración entre estudiantes de distintas carreras, programas, facultades o campus.',
  },
  {
    icon: 'Cpu',
    title: 'Innovación tecnológica',
    text: 'Promueve soluciones tecnológicas innovadoras de alto impacto.',
  },
  {
    icon: 'Target',
    title: 'Validación real',
    text: 'Ayuda a validar propuestas reales con apoyo de la tecnología.',
  },
  {
    icon: 'Rocket',
    title: 'Habilidades emprendedoras',
    text: 'Fortalece capacidades emprendedoras mediante un proceso formativo integral.',
  },
]

export const TEAM_REQUIREMENTS = [
  'Equipos de 2 a 5 estudiantes de pregrado UDEP.',
  'Los integrantes deben pertenecer a al menos dos programas académicos o campos de especialización diferentes.',
  'Idealmente, los equipos deben estar conformados por estudiantes de distintos programas, facultades o campus UDEP.',
]

export const PROJECT_REQUIREMENTS = [
  'Tener un grado de diferenciación en su propuesta de valor.',
  'Integrar estratégicamente tecnología: producto, aplicación, sistema, dispositivo o herramienta digital.',
  'Transformar, mejorar o redefinir una experiencia, proceso o necesidad concreta.',
  'Vincularse a las líneas prioritarias del concurso.',
  'Estar alineado al ideario de la Universidad de Piura.',
]

/** Vista macro del concurso, tal como aparece en el brochure oficial. */
export const MACRO_PHASES = [
  { label: 'Inscripción', date: 'Desde 17 ago', icon: 'Megaphone' },
  { label: 'Evaluación y selección', date: '7 — 12 set', icon: 'ClipboardCheck' },
  { label: 'Entrenamiento', date: '15 set — 22 oct', icon: 'Presentation' },
  { label: 'Final del concurso', date: '26 oct', icon: 'Trophy' },
]

export const THEMATIC_LINES = [
  'Economía circular',
  'Agroindustria',
  'Construcción',
  'Hardware / Software',
  'Inteligencia artificial',
  'Educación',
  'Finanzas',
  'Entre otras',
]

export const PROJECT_STAGES = [
  {
    icon: 'Lightbulb',
    title: 'Tengo una idea',
    text: 'Tienes una idea de negocio clara que busca resolver un problema real, pero aún no has desarrollado una primera versión de la solución.',
  },
  {
    icon: 'Wrench',
    title: 'Estoy desarrollando mi solución',
    text: 'Ya comenzaste a transformar tu idea en algo que puede mostrarse o probarse: un boceto, maqueta, prototipo, demo o primera versión de tu solución.',
  },
]

export const BENEFITS = [
  {
    icon: 'Presentation',
    title: 'Talleres prácticos',
    text: 'Acceso a talleres prácticos para validar y fortalecer la solución tecnológica.',
  },
  {
    icon: 'Network',
    title: 'Mentorías especializadas',
    text: 'Cada equipo aceptado recibirá un mentor especializado de la red de mentores HUB UDEP.',
  },
  {
    icon: 'MessageCircle',
    title: 'Asesorías personalizadas',
    text: 'Sesiones con especialistas según el avance de cada propuesta.',
  },
  {
    icon: 'Handshake',
    title: 'Networking',
    text: 'Conexión con mentores, asesores, emprendedores y potenciales inversionistas de la comunidad HUB UDEP.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Certificado oficial',
    text: 'Certificado oficial de participación emitido por la Universidad de Piura.',
  },
  {
    icon: 'GraduationCap',
    title: '1 CLC',
    text: '1 CLC correspondiente a 34 horas lectivas para la Facultad de Ciencias Económicas y Empresariales y la Facultad de Ingeniería y Arquitectura.',
  },
]

export const PRIZES = [
  {
    icon: 'Cpu',
    category: 'Emprendimientos tecnológicos',
    note: 'Eje general: cualquier línea temática, excepto Economía Circular.',
    first: 'S/ 5,000',
    second: 'S/ 2,500',
  },
  {
    icon: 'Leaf',
    category: 'Línea de Economía Circular',
    note: 'Línea prioritaria del concurso, con categoría propia.',
    first: 'S/ 5,000',
    second: 'S/ 2,500',
  },
]

/** Reconocimientos que acompañan al capital semilla en ambas categorías. */
export const PRIZE_EXTRAS = [
  'Certificado de la Universidad de Piura',
  'Trofeo de reconocimiento',
]

export const TRAINING = [
  {
    icon: 'Presentation',
    count: '5',
    title: 'Talleres grupales',
    text: 'Sesiones teórico-prácticas con expertos para fortalecer la propuesta.',
  },
  {
    icon: 'ClipboardCheck',
    count: '5',
    title: 'Asesorías especializadas',
    text: 'Sesiones personalizadas con especialistas según el avance de cada proyecto.',
  },
  {
    icon: 'Network',
    count: '2',
    title: 'Mentorías',
    text: 'Reuniones presenciales o virtuales con el mentor asignado al equipo.',
  },
  {
    icon: 'Clock',
    count: '2',
    title: 'Office hours',
    text: 'Reuniones con HUB UDEP para revisar el avance durante el concurso.',
  },
]

export const TIMELINE = [
  {
    phase: 'F1',
    title: 'Convocatoria',
    date: 'Desde el 17 de agosto',
    shortDate: 'Desde 17 ago',
    activity: 'Publicación de bases y difusión del concurso.',
    mode: 'Presencial y virtual',
    icon: 'Megaphone',
  },
  {
    phase: 'F2',
    title: 'Evaluación y selección',
    date: 'Del 7 al 12 de setiembre',
    shortDate: '7 — 12 set',
    activity: 'Selección remota de equipos para la fase de entrenamiento.',
    mode: 'Virtual',
    icon: 'ClipboardCheck',
  },
  {
    phase: 'F3',
    title: 'Diagnóstico',
    date: '15 de setiembre',
    shortDate: '15 set',
    activity: 'Taller 1: Problem/solution fit + Asesoría 1: Diagnóstico empresarial.',
    hours: 'Taller 3h · Asesoría 1.5h',
    mode: 'Virtual',
    icon: 'Search',
  },
  {
    phase: 'F3',
    title: 'Desarrollo y validación',
    date: 'Del 17 al 25 de setiembre',
    shortDate: '17 — 25 set',
    activity: 'Taller 2: Lean Canvas + Asesoría 2: Conceptualización + Mentorías/Office Hours 1.',
    hours: 'Taller 3h · Asesoría 1.5h · Entregable 2h',
    deliverable: 'Entregable 1: Lean Canvas',
    mode: 'Mixta (virtual/presencial)',
    icon: 'Settings',
  },
  {
    phase: 'F3',
    title: 'Prototipado I',
    date: 'Del 7 al 10 de octubre',
    shortDate: '7 — 10 oct',
    activity: 'Taller 3: Prototipado I: IA + Asesoría 3: Tecnología y economía circular.',
    hours: 'Taller 3h · Asesoría 2h',
    mode: 'Virtual',
    icon: 'Box',
  },
  {
    phase: 'F3',
    title: 'Prototipado II',
    date: 'Del 12 al 17 de octubre',
    shortDate: '12 — 17 oct',
    activity: 'Taller 4: Prototipado II: Product/market fit + Asesoría 4: Prototipado.',
    hours: 'Taller 3h · Asesoría 2h · Entregable 2h',
    deliverable: 'Entregable 2: Prototipo',
    mode: 'Virtual',
    icon: 'Boxes',
  },
  {
    phase: 'F3',
    title: 'Pitch de impacto',
    date: 'Del 19 al 22 de octubre',
    shortDate: '19 — 22 oct',
    activity: 'Taller 5: Pitch de impacto + Asesoría 5: Pitch sessions + Mentorías/Office Hours 2.',
    hours: 'Taller 3h · Asesoría 2h · Entregable 2h',
    deliverable: 'Entregable 3: Pitch',
    mode: 'Mixta (virtual/presencial)',
    icon: 'Mic',
  },
  {
    phase: 'F4',
    title: 'Demo Day',
    date: '26 de octubre',
    shortDate: '26 oct',
    activity: 'Evento final y premiación.',
    hours: '4h',
    mode: 'Presencial',
    icon: 'Trophy',
  },
]

/** Desglose de las 34 horas lectivas que equivalen a 1 CLC. */
export const HOURS_BREAKDOWN = [
  { label: 'talleres', value: '15h' },
  { label: 'asesorías', value: '9h' },
  { label: 'entregables', value: '6h' },
  { label: 'Demo Day', value: '4h' },
]

export const DEMO_DAY_POINTS = [
  {
    icon: 'Mic',
    text: 'Cada equipo tendrá 5 minutos para exponer su propuesta ante el jurado y 5 minutos para responder preguntas.',
  },
  {
    icon: 'MapPin',
    text: 'Final presencial en Campus Piura, Campus Lima o ambos, en formato híbrido.',
  },
  {
    icon: 'Building2',
    text: 'Si se realiza en un solo campus, se priorizará Piura sin afectar la calidad del evento para equipos de ambos campus.',
  },
  {
    icon: 'CalendarClock',
    text: 'La selección de finalistas y el formato final se comunicarán con al menos 5 días de anticipación.',
  },
  {
    icon: 'Trophy',
    text: 'Los resultados se publicarán dentro de las 48 horas posteriores al evento final.',
  },
]

export const CRITERIA = [
  {
    icon: 'Target',
    title: 'Claridad del problema',
    text: 'Qué tan claro es el problema que busca resolver la solución.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovación de la propuesta',
    text: 'Grado de diferenciación y valor innovador.',
  },
  {
    icon: 'Cpu',
    title: 'Componente tecnológico',
    text: 'Integración estratégica de tecnología en la solución.',
  },
  {
    icon: 'Users',
    title: 'Interdisciplinariedad del equipo',
    text: 'Diversidad de programas, campos de especialización, facultades o campus.',
  },
]

export const COMMITMENTS = [
  'Participar activamente en el desarrollo del proyecto.',
  'Asistir al entrenamiento virtual y al evento final de cierre.',
  'Cumplir con los plazos establecidos para cada tarea.',
  'Mantener una actitud colaborativa, ética y responsable durante todo el concurso.',
]

export const FAQS = [
  {
    q: '¿Es necesario contar con un proyecto tecnológico para aplicar al concurso?',
    a: 'No. La tecnología debe formar parte de la propuesta, pero no ser el enfoque principal.',
  },
  {
    q: '¿Qué nivel de desarrollo mínimo debe tener mi solución para ser aceptada?',
    a: 'Se aceptan desde ideas hasta prototipos con enfoque tecnológico.',
  },
  {
    q: '¿Cómo demuestro el avance de mi proyecto al momento de postular?',
    a: 'Presentando evidencias como maquetas o prototipos preliminares.',
  },
  {
    q: '¿Pueden postular equipos conformados por estudiantes, otros miembros de la comunidad UDEP y externos?',
    a: 'No. Solo pueden participar estudiantes de pregrado.',
  },
  {
    q: '¿Qué pasa si aún no tengo una solución tecnológica desarrollada?',
    a: 'Puedes postular con una idea y desarrollar el prototipo durante el programa.',
  },
  {
    q: '¿Se puede cambiar un integrante del equipo después de postular?',
    a: 'Sí, pero el líder emprendedor no puede retirarse.',
  },
  {
    q: '¿Puedo postular más de un proyecto?',
    a: 'Sí, aunque solo uno podría ser seleccionado.',
  },
  {
    q: '¿El equipo debe estar completo durante sesiones y mentorías?',
    a: 'Se recomienda, pero como mínimo deben asistir el líder y un integrante.',
  },
  {
    q: '¿Es obligatorio que los proyectos sean exclusivamente de economía circular?',
    a: 'No. Se aceptan proyectos de cualquiera de las líneas temáticas del concurso.',
  },
]
