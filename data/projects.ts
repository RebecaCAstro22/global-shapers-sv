export type ProjectCategory =
  | "Educación Financiera"
  | "Desarrollo Comunitario"
  | "Bienestar y Liderazgo";

export interface HubProject {
  slug: string;
  badge: ProjectCategory;
  title: string;
  summary: string;
  fullDescription: string;
  gradientClass: string;
  beneficiaries: string;
  location: string;
  year: string;
  highlights: string[];
  featured?: boolean;
}

/* TODO: Reemplazar gradientClass por imágenes reales en public/ cuando estén listas */
export const HUB_PROJECTS: HubProject[] = [
  {
    slug: "finanzas-en-juego",
    badge: "Educación Financiera",
    title: "Finanzas en Juego",
    summary:
      "Talleres prácticos y dinámicos sobre ahorro, presupuesto personal, prevención del sobreendeudamiento y herramientas digitales para jóvenes salvadoreños.",
    fullDescription:
      "Finanzas en Juego acerca la educación financiera a estudiantes de bachillerato, universitarios y jóvenes emprendedores mediante metodologías lúdicas y casos reales de la economía salvadoreña.",
    gradientClass: "from-[#0E4D92] via-[#1D4ED8] to-[#38BDF8]",
    beneficiaries: "Jóvenes estudiantes y emprendedores",
    location: "Área Metropolitana de San Salvador",
    year: "Programa Activo",
    highlights: [
      "Módulos interactivos de finanzas personales, ahorro y emprendimiento.",
      "Entrega de guías impresas y plantillas digitales de presupuesto.",
      "Mentorías con jóvenes profesionales del Hub San Salvador.",
    ],
    featured: true,
  },
  {
    slug: "resiliencia-en-accion",
    badge: "Desarrollo Comunitario",
    title: "Resiliencia en Acción",
    summary:
      "Jornadas territoriales de entrega de víveres, fortalecimiento escolar y bienestar integral junto a comunidades prioritarias de San Salvador.",
    fullDescription:
      "Resiliencia en Acción articula a voluntarios, empresas aliadas y líderes locales para llevar apoyo directo en alimentación, kits escolares y acompañamiento comunitario a familias en situación de vulnerabilidad.",
    gradientClass: "from-[#0B104A] via-[#0F2C59] to-[#0EA5E9]",
    beneficiaries: "Familias, niñez y comunidades locales",
    location: "Comunidad El Granjero 2 y zonas de San Salvador",
    year: "Programa Activo",
    highlights: [
      "Entrega directa de víveres, kits educativos y apoyo comunitario.",
      "Eventos solidarios de recaudación con aliados locales.",
      "Trabajo conjunto con directivas y liderazgos comunitarios.",
    ],
    featured: true,
  },
  {
    slug: "salud-mental-y-liderazgo",
    badge: "Bienestar y Liderazgo",
    title: "Salud Mental y Liderazgo Juvenil",
    summary:
      "Campañas de concientización, prevención y espacios de formación para que la juventud lidere iniciativas de bienestar e impacto social.",
    fullDescription:
      "Iniciativa enfocada en derribar estigmas sobre la salud mental en El Salvador, difundir recursos gratuitos de apoyo emocional y fortalecer las capacidades de liderazgo de jóvenes agentes de cambio.",
    gradientClass: "from-[#1E3A8A] via-[#525FE1] to-[#60A5FA]",
    beneficiaries: "Jóvenes agentes de cambio y comunidad digital",
    location: "San Salvador y alcance nacional",
    year: "Programa Activo",
    highlights: [
      "Campañas educativas sobre salud mental y prevención.",
      "Formación de nuevos Shapers y voluntarios en liderazgo social.",
      "Conexión con la red global del Foro Económico Mundial.",
    ],
    featured: true,
  },
  {
    slug: "navidad-en-comunidad",
    badge: "Desarrollo Comunitario",
    title: "Navidad en Comunidad",
    summary:
      "Campaña anual solidaria para compartir alegría, juguetes, víveres y convivencia comunitaria con la niñez salvadoreña.",
    fullDescription:
      "Cada diciembre, el Hub San Salvador moviliza a voluntarios y donantes para llevar una celebración navideña especial a comunidades rurales y urbanas, fortaleciendo la solidaridad juvenil.",
    gradientClass: "from-[#0F2C59] via-[#1E3A8A] to-[#38BDF8]",
    beneficiaries: "Niñez y familias en comunidades rurales y urbanas",
    location: "San Salvador y Ahuachapán (Cantón Ashapuco)",
    year: "Edición Anual",
    highlights: [
      "Recolección transparente de donativos y regalos.",
      "Jornada presencial de actividades lúdicas y convivencia.",
      "Participación abierta de voluntarios y aliados corporativos.",
    ],
  },
  {
    slug: "yoga-con-proposito",
    badge: "Bienestar y Liderazgo",
    title: "Yoga con Propósito",
    summary:
      "Encuentros de bienestar físico y mental en alianza con estudios locales, cuyos fondos se destinan íntegramente a proyectos comunitarios.",
    fullDescription:
      "A través de clases abiertas y accesibles en espacios como SOMA Plaza junto a instructores aliados, recaudamos fondos para financiar Resiliencia en Acción y nuestras jornadas en territorio.",
    gradientClass: "from-[#0E4D92] via-[#0EA5E9] to-[#60A5FA]",
    beneficiaries: "Comunidad participante y beneficiarios de Resiliencia en Acción",
    location: "San Salvador",
    year: "Serie de Eventos",
    highlights: [
      "Alianzas con estudios y marcas locales de bienestar.",
      "100% de lo recaudado destinado a proyectos comunitarios.",
      "Espacio de encuentro para nuevos donantes y voluntarios.",
    ],
  },
  {
    slug: "laboratorios-ciudadanos-ods",
    badge: "Educación Financiera",
    title: "Laboratorios de Liderazgo e Innovación Social",
    summary:
      "Espacios de ideación y mentoría donde jóvenes salvadoreños diseñan soluciones locales alineadas a los Objetivos de Desarrollo Sostenible.",
    fullDescription:
      "Impulsamos bootcamps y mesas de diálogo intergeneracionales para transformar ideas juveniles en proyectos viables con impacto medible en San Salvador.",
    gradientClass: "from-[#0B104A] via-[#1D4ED8] to-[#525FE1]",
    beneficiaries: "Estudiantes universitarios y jóvenes profesionales",
    location: "San Salvador",
    year: "Programa Formativo",
    highlights: [
      "Talleres de diseño de proyectos sociales y presupuestos.",
      "Acompañamiento de Shapers con experiencia multisectorial.",
      "Vinculación con iniciativas globales de Global Shapers.",
    ],
  },
];

export const PROJECT_CATEGORIES: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Educación Financiera",
  "Desarrollo Comunitario",
  "Bienestar y Liderazgo",
];
