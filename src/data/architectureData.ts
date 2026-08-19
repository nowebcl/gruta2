import { Project, ApproachPillar, JournalArticle, StudioStat, OfficeLocation, ReviewItem } from '../types';

export const STUDIO_INFO = {
  name: 'GRUTA',
  logoUrl: 'https://go.gruta.cl/assets/Recurso-16.webp',
  legalName: 'Maestranza la Gruta — Servicios de Construcción',
  tagline: 'Maestranza e Innovación a Tu Medida',
  subtitle: 'Tu Socio en Construcción de Confianza',
  phone: '+56 9 4121 6407',
  whatsappUrl: 'https://wa.me/56941216407?text=Hola%20Gruta,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto',
  primaryEmail: 'contacto@gruta.cl',
  emails: [
    { label: 'General & Contacto', email: 'contacto@gruta.cl' },
    { label: 'Gerencia', email: 'gnavarro@gruta.cl' },
    { label: 'Contabilidad', email: 'contabilidad@gruta.cl' },
    { label: 'Operaciones', email: 'bcarmona@gruta.cl' }
  ],
  address: 'Calle Los Pinos s/n, Sector Alto Bonito, Puerto Montt, Chile',
  operatingHours: 'Lunes a Viernes — 09:00 a 17:00 hrs',
  cities: ['Puerto Montt', 'Puerto Varas', 'Región de Los Lagos'],
  description: 'En Gruta, construimos con compromiso y excelencia. Ofrecemos soluciones innovadoras en construcción y maestranza que superan expectativas, creando espacios que perduran y relaciones de confianza. Nuestra pasión por la calidad y la mejora continua nos define.',
  extendedBio: 'Nos distinguimos por nuestro compromiso inquebrantable con la calidad y la entrega puntual de cada proyecto. Nuestra experiencia y enfoque innovador nos permiten ofrecer soluciones eficientes y personalizadas en maestranza pesada, obras civiles, estructuras metálicas y proyectos de ingeniería especializada como gaviones y contención en el sur de Chile.',
  vision: 'Ser líderes en el sector de la construcción y maestranza, reconocidos por nuestra calidad, innovación y compromiso en cada proyecto, y convertirnos en el socio estratégico de referencia para empresas que buscan soluciones constructivas confiables y duraderas.',
  mission: 'Construimos espacios que inspiran, aportando soluciones de calidad que superan las expectativas de nuestros clientes. Nos dedicamos a ofrecer un servicio excepcional con integridad, transparencia y un enfoque constante en la mejora continua para asegurar resultados sostenibles y duraderos.',
  quote: {
    text: 'En Gruta no solo construimos obras, forjamos relaciones duraderas basadas en la confianza técnica, la precisión y la palabra empeñada.',
    author: 'Equipo Directivo — Gruta',
    role: 'Maestranza & Servicios de Construcción'
  },
  editorialImage: '/proyectos/obra-01.jpeg'
};

// Real project images from public/proyectos/ ordered strictly by local LastWriteTime descending
export const PROJECTS: Project[] = [
  {
    id: 'proyecto-01',
    number: '01',
    title: 'Proyecto 01',
    category: 'Proyecto 1',
    location: 'Puerto Montt, Chile',
    year: '2026',
    image: '/proyectos/obra-01.jpeg',
    galleryImages: [
      '/proyectos/obra-01.jpeg',
      '/proyectos/obra-02.jpeg',
      '/proyectos/obra-03.jpeg',
      '/proyectos/obra-04.jpeg'
    ],
    description: 'Ejecución y montaje técnico de maestranza estructural y obras de precisión en terreno con altos estándares de calidad.',
    area: 'Faena Integral',
    leadArchitect: 'Equipo Gruta',
    features: ['Estructuras de acero de alta resistencia', 'Supervisión técnica continua', 'Montaje con altos estándares']
  },
  {
    id: 'proyecto-02',
    number: '02',
    title: 'Proyecto 02',
    category: 'Proyecto 2',
    location: 'Puerto Varas, Chile',
    year: '2026',
    image: '/proyectos/obra-02.jpeg',
    galleryImages: [
      '/proyectos/obra-02.jpeg',
      '/proyectos/obra-03.jpeg',
      '/proyectos/obra-04.jpeg'
    ],
    description: 'Desarrollo de faenas constructivas y maestranza especializada para infraestructura en el sur de Chile.',
    area: 'Obra en Terreno',
    leadArchitect: 'Equipo Gruta',
    features: ['Control dimensional milimétrico', 'Materiales certificados', 'Entrega en plazos']
  },
  {
    id: 'proyecto-03',
    number: '03',
    title: 'Proyecto 03',
    category: 'Proyecto 3',
    location: 'Sector Alto Bonito, Puerto Montt',
    year: '2026',
    image: '/proyectos/obra-05.jpeg',
    galleryImages: [
      '/proyectos/obra-05.jpeg',
      '/proyectos/obra-06.jpeg',
      '/proyectos/obra-07.jpeg',
      '/proyectos/obra-08.jpeg',
      '/proyectos/obra-09.jpeg'
    ],
    description: 'Soluciones de contención, gaviones y obras civiles adaptadas a la topografía y clima local.',
    area: 'Desarrollo Especializado',
    leadArchitect: 'Equipo Gruta',
    features: ['Malla galvanizada de alta durabilidad', 'Estabilización de taludes', 'Drenaje eficiente']
  },
  {
    id: 'proyecto-04',
    number: '04',
    title: 'Proyecto 04',
    category: 'Proyecto 4',
    location: 'Región de Los Lagos',
    year: '2026',
    image: '/proyectos/obra-10.jpeg',
    galleryImages: [
      '/proyectos/obra-10.jpeg',
      '/proyectos/obra-11.jpeg',
      '/proyectos/obra-12.jpeg',
      '/proyectos/obra-13.jpeg'
    ],
    description: 'Fabricación y armado en taller de maestranza con procesos de soldadura certificados y corte CNC.',
    area: 'Taller & Maestranza',
    leadArchitect: 'Equipo Gruta',
    features: ['Soldadores calificados', 'Pintura anticorrosiva para ambiente marino', 'Estructuras reforzadas']
  },
  {
    id: 'proyecto-05',
    number: '05',
    title: 'Proyecto 05',
    category: 'Proyecto 5',
    location: 'Puerto Montt, Chile',
    year: '2026',
    image: '/proyectos/obra-14.jpeg',
    galleryImages: [
      '/proyectos/obra-14.jpeg',
      '/proyectos/obra-15.jpeg',
      '/proyectos/obra-16.jpeg',
      '/proyectos/obra-17.jpeg'
    ],
    description: 'Montaje de piezas estructurales e ingeniería aplicada para faenas industriales y comerciales.',
    area: 'Faenas Constructivas',
    leadArchitect: 'Equipo Gruta',
    features: ['Montaje seguro', 'Ajuste milimétrico', 'Rendimiento comprobado']
  },
  {
    id: 'proyecto-06',
    number: '06',
    title: 'Proyecto 06',
    category: 'Proyecto 6',
    location: 'Región de Los Lagos',
    year: '2026',
    image: '/proyectos/obra-18.jpeg',
    galleryImages: [
      '/proyectos/obra-18.jpeg',
      '/proyectos/obra-19.jpeg',
      '/proyectos/obra-20.jpeg',
      '/proyectos/obra-21.jpeg',
      '/proyectos/obra-22.jpeg'
    ],
    description: 'Obras y estructuras singulares desarrolladas a la medida de los requerimientos de cada cliente.',
    area: 'Ingeniería a Medida',
    leadArchitect: 'Equipo Gruta',
    features: ['Diseño y fabricación a medida', 'Resistencia climática', 'Materiales de primera línea']
  },
  {
    id: 'proyecto-07',
    number: '07',
    title: 'Proyecto 07',
    category: 'Proyecto 7',
    location: 'Puerto Varas / Los Lagos',
    year: '2026',
    image: '/proyectos/obra-23.jpeg',
    galleryImages: [
      '/proyectos/obra-23.jpeg',
      '/proyectos/obra-24.jpeg',
      '/proyectos/obra-25.jpeg',
      '/proyectos/obra-26.jpeg'
    ],
    description: 'Avance de obra y faenas civiles en terreno con control riguroso de calidad y supervisión especializada.',
    area: 'Infraestructura & Construcción',
    leadArchitect: 'Equipo Gruta',
    features: ['Cimentaciones sólidas', 'Gestión ambiental de faena', 'Compromiso y puntualidad']
  }
];

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    number: '01',
    title: 'Construimos Confiabilidad y Excelencia',
    description: 'En Gruta, nos distinguimos por nuestro compromiso inquebrantable con la calidad y la entrega puntual de cada obra. Nuestra experiencia y enfoque innovador nos permiten ofrecer soluciones eficientes y personalizadas que aseguran resultados duraderos.',
    quote: 'La calidad no es un acto fortuito, es un hábito riguroso en cada soldadura y cada cimiento.'
  },
  {
    number: '02',
    title: 'Compromiso con la Calidad en Cada Proyecto',
    description: 'Cada obra que emprendemos es un reflejo de nuestro compromiso con la excelencia constructiva. Garantizamos un trabajo detallado y especializado, adaptándonos a las necesidades específicas de cada cliente para superar expectativas.',
    quote: 'Soluciones que fortalecen el negocio y el patrimonio de nuestros clientes.'
  },
  {
    number: '03',
    title: 'Tu Socio Estratégico en Maestranza y Construcción',
    description: 'No solo construimos espacios e infraestructuras, sino relaciones de confianza sólidas. Nuestra capacidad para transformar requerimientos complejos en realidades operativas nos convierte en el socio estratégico ideal en el sur de Chile.',
    quote: 'Transformamos ideas técnicas en obras seguras, robustas y rentables.'
  },
  {
    number: '04',
    title: 'Innovación a la Medida del Territorio',
    description: 'Desde obras civiles y gaviones fluviales hasta trampas ecológicas de fauna y naves industriales, diseñamos y ejecutamos soluciones adaptadas al clima extremo y la geografía de la Región de Los Lagos.',
    quote: 'Ingeniería con arraigo local y estándares de clase mundial.'
  }
];

export const STUDIO_STATS: StudioStat[] = [
  {
    value: 120,
    suffix: '+',
    label: 'Proyectos Ejecutados',
    sublabel: 'En Puerto Montt, Puerto Varas y el Sur'
  },
  {
    value: 100,
    suffix: '%',
    label: 'Calificaciones 5 Estrellas',
    sublabel: 'Satisfacción y recomendación comprobada'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Años de Experiencia',
    sublabel: 'En maestranza y construcción'
  },
  {
    value: 24,
    suffix: 'h',
    label: 'Tiempo de Respuesta',
    sublabel: 'Atención técnica personalizada'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Carlos Muñoz',
    initials: 'CM',
    timeAgo: 'Hace 2 semanas',
    rating: 5,
    content: 'Excelente servicio. Muy responsables, ordenados y atentos en cada etapa del proyecto. Se nota la experiencia y el compromiso con la calidad.'
  },
  {
    id: 'rev-2',
    author: 'Paula Vera',
    initials: 'PV',
    timeAgo: 'Hace 1 mes',
    rating: 5,
    content: 'Trabajo impecable y comunicación muy clara. Cumplieron con los tiempos y entregaron justo lo que se necesitaba. Totalmente recomendados.'
  },
  {
    id: 'rev-3',
    author: 'Jorge Rojas',
    initials: 'JR',
    timeAgo: 'Hace 3 semanas',
    rating: 5,
    content: 'Muy buena experiencia de principio a fin. Profesionales, serios y con soluciones concretas. Generan mucha confianza al trabajar.'
  },
  {
    id: 'rev-4',
    author: 'Andrea Molina',
    initials: 'AM',
    timeAgo: 'Hace 5 días',
    rating: 5,
    content: 'Destaco la puntualidad, la disposición y la calidad del resultado final. Se nota que trabajan con altos estándares en cada detalle.'
  },
  {
    id: 'rev-5',
    author: 'Felipe Soto',
    initials: 'FS',
    timeAgo: 'Hace 2 meses',
    rating: 5,
    content: 'Empresa confiable y muy profesional. Supieron entender lo que necesitábamos y entregaron una solución eficiente y bien ejecutada.'
  },
  {
    id: 'rev-6',
    author: 'María León',
    initials: 'ML',
    timeAgo: 'Hace 4 semanas',
    rating: 5,
    content: 'Muy recomendados. La atención fue excelente, el trabajo se vio profesional y el resultado superó nuestras expectativas.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'sistemas-gaviones-estabilizacion-sur',
    date: 'Feb 2026',
    category: 'Técnica',
    title: 'Ingeniería de Gaviones: Estabilización de Taludes y Defensas Fluviales en la Región de Los Lagos',
    readTime: '4 min de lectura',
    excerpt: 'Cómo los muros de gaviones se han consolidado como la solución más costo-eficiente y sustentable para terrenos húmedos del sur de Chile.',
    content: 'En la geografía del sur de Chile, la pluviosidad constante y las pendientes pronunciadas demandan soluciones de contención flexibles y con alta permeabilidad. Los sistemas de gaviones de Maestranza la Gruta combinan mallas galvanizadas con piedra de río o cantera, ofreciendo una estructura monolítica que no acumula presiones hidrostáticas y se integra naturalmente al paisaje.',
    author: 'Ing. Área Técnica Gruta',
    image: '/proyectos/' + encodeURIComponent('WhatsApp Image 2026-08-13 at 07.01.09.jpeg')
  },
  {
    id: 'maestranza-pesada-normas-soldadura',
    date: 'Ene 2026',
    category: 'Maestranza',
    title: 'Control de Calidad y Procesos de Soldadura en Estructuras de Acero para Climas Marítimos',
    readTime: '5 min de lectura',
    excerpt: 'El rigor técnico en corte, armado y aplicación de esquemas de pintura epóxica para resistir la corrosión costera en Puerto Montt.',
    content: 'La salinidad y humedad de la zona costera de Puerto Montt exigen protocolos estrictos en cada unión de acero. En Gruta aplicamos ensayos no destructivos y esquemas de recubrimiento epóxico de alto espesor que triplican la vida útil de galpones y puentes grúa respecto a construcciones convencionales.',
    author: 'Maestranza Gruta',
    image: '/proyectos/' + encodeURIComponent('WhatsApp Image 2026-07-05 at 15.19.28.jpeg')
  },
  {
    id: 'trampas-ecologicas-confinamiento-seguro',
    date: 'Dic 2025',
    category: 'Innovación',
    title: 'Innovación en Captura No Violenta: Trampas Mecánicas para Manejo y Relocalización de Fauna',
    readTime: '3 min de lectura',
    excerpt: 'Diseño industrial orientado a la preservación ecológica y la seguridad en faenas rurales y prediales.',
    content: 'Frente a la necesidad de controlar fauna dañina o especies invasoras sin recurrir a métodos letales o crueles, el equipo de maestranza de Gruta diseñó jaulas y trampas mecánicas de disparo sensible que protegen la integridad física del animal para su retorno a hábitats adecuados.',
    author: 'Departamento I+D Gruta',
    image: '/proyectos/' + encodeURIComponent('WhatsApp Image 2026-06-09 at 11.45.57KJHJ.jpeg')
  },
  {
    id: 'socio-estrategico-obras-civiles',
    date: 'Nov 2025',
    category: 'Sostenibilidad',
    title: 'Por qué Elegir un Contratista Integral en Puerto Montt y Puerto Varas',
    readTime: '4 min de lectura',
    excerpt: 'Las ventajas de centralizar maestranza, movimiento de tierras, cimientos y montaje estructural en un único socio de confianza.',
    content: 'Coordinar múltiples subcontratistas suele generar sobrecostos y descalces de plazos. En Gruta brindamos soluciones llave en mano desde la fabricación en maestranza hasta el montaje en terreno, optimizando presupuestos y tiempos de entrega.',
    author: 'Gerencia de Proyectos Gruta',
    image: '/proyectos/' + encodeURIComponent('NNKLKN.jpeg')
  }
];

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Puerto Montt',
    country: 'Chile',
    address: 'Calle Los Pinos s/n, Sector Alto Bonito',
    postalCode: '5480000 Puerto Montt',
    phone: '+56 9 4121 6407',
    email: 'contacto@gruta.cl',
    schedule: 'Lunes a Viernes: 09:00 — 17:00'
  },
  {
    city: 'Puerto Varas',
    country: 'Chile (Cobertura y Faenas)',
    address: 'Servicio en terreno y faenas cuenca Lago Llanquihue',
    postalCode: 'Región de Los Lagos',
    phone: '+56 9 4121 6407',
    email: 'gnavarro@gruta.cl',
    schedule: 'Atención técnica coordinada'
  }
];
