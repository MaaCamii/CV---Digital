/* ==========================================================================
   DATOS DE LA HOJA DE VIDA — María Camila Chala Mena
   --------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar la página.
   - Nuevo curso o certificación: copia una línea dentro de "formacionContinua",
     cámbiale el texto y guarda. La página la ordena sola (lo más reciente arriba).
   - Nuevo cargo: copia un bloque { ... } dentro de "experiencia".
   - Usa "Actualidad" en "fin" para cargos vigentes.
   Ojo: cada línea termina en coma y los textos van entre comillas.
   ========================================================================== */

window.CV = {
  nombre: "María Camila",
  apellidos: "Chala Mena",
  titular: "Abogada · Especialista en Gerencia de Proyectos",
  subtitular: "Consultora en Educación, Innovación Social y Política Pública",
  ciudad: "Medellín, Colombia",

  // Línea corta que aparece en la TARJETA (manténla breve)
  tarjetaRol: "Abogada · Gerente de Proyectos · Educadora Ciudadana · Escritora & Host",

  // Resumen breve que abre la HOJA DE VIDA (2 o 3 frases)
  sintesis: "Abogada especialista en Gerencia de Proyectos y fundadora de ÁGORA: Laboratorio Político. Consultora en Educación, Innovación Social y Política Pública, con experiencia en participación ciudadana, incidencia pública y formación de liderazgos.",

  // Etiquetas de enfoque que se muestran en la hoja de vida
  enfoques: ["Educación ciudadana", "Política pública", "Participación e incidencia", "Innovación social", "Gerencia de proyectos", "IA aplicada a la educación"],

  // Año desde el que se cuentan los "años de trayectoria"
  inicioTrayectoria: 2015,

  contacto: {
    correo: "maacamii@gmail.com",
    whatsapp: "573214620680",
    whatsappVisible: "+57 321 462 06 80",
    mensajeWhatsapp: "Hola María Camila, vi tu perfil profesional y me gustaría conversar contigo.",
    linkedin: "https://www.linkedin.com/in/maacamii/",
    // Página de reservas de Google Calendar (llamadas de 15 min). Para quitar el botón, cambia el link por null.
    agenda: "https://calendar.app.google/iYpfPd2b1V4SLXhd7",
    agendaTexto: "Agendar llamada",
    agendaDetalle: "20 minutos · Google Calendar",
  },

  // Sitios de sus proyectos: botones en la tarjeta y enlace en cada mención de ÁGORA
  sitios: {
    agora: "https://www.agoralab.site/",
    beautyech: "https://www.beautyech.site/",
  },

  // Si más adelante quieres ofrecer el PDF, súbelo como "hoja-de-vida.pdf"
  // (versión SIN cédula, firma ni dirección) y cambia null por "hoja-de-vida.pdf".
  pdf: null,

  perfil: [
    "<strong>Abogada</strong> especialista en Gerencia de Proyectos. Consultora en Educación, Innovación Social y Política Pública, con amplia experiencia en procesos de Participación Ciudadana e Incidencia Pública, e interés en la Planeación, Desarrollo y Gestión de Ciudades Inteligentes y Sostenibles.",
    "Educadora Ciudadana, Speaker y Docente.",
    "Escritora, Creadora de Contenido Cultural y Host Radial / Podcaster.",
  ],

  direccion: {
    cargo: "Directora · Fundadora & CEO",
    organizacion: "ÁGORA: Laboratorio Político",
    lugar: "Colombia",
    inicio: "Enero 2017",
    fin: "Actualidad",
    descripcion: [
      "Escuela de Educación Ciudadana que desarrolla habilidades y competencias para el ejercicio práctico de la Libertad y el Liderazgo en sistemas democráticos.",
      "Creación de contenidos educativos y de estrategias pedagógicas innovadoras en Educación Emocional, Financiera y Cultura Política.",
    ],
    correo: "agoralab.colombia@gmail.com",
  },

  experiencia: [
    { org: "Crack The Code", cargo: "Docente de cátedra — Teach and Mentoring Tech & AI", lugar: "Remoto · Perú y Colombia", inicio: "Mayo 2026", fin: "Actualidad" },
    { org: "LAB 10", cargo: "Mentora — Mentoring Building AI", lugar: "Remoto · EE. UU.", inicio: "Febrero 2026", fin: "Septiembre 2026" },
    { org: "Jaramillo Luján S.A.S.", cargo: "Embajadora de marca, Marca Poder", lugar: "Itagüí, Antioquia", inicio: "Noviembre 2024", fin: "Diciembre 2025" },
    { org: "Educando Alianza", cargo: "Docente de cátedra en el nivel de técnicas y tecnologías para el desarrollo humano y el trabajo", lugar: "Itagüí, Antioquia", inicio: "Mayo 2024", fin: "Diciembre 2024" },
    { org: "Extituto de Política Abierta", cargo: "Coordinadora Territorial para Antioquia, encargada de gestionar procesos de movilización e Innovación Pública", lugar: "Medellín, Antioquia", inicio: "Mayo 2023", fin: "Noviembre 2023" },
    { org: "Gobernación de Antioquia", cargo: "Asesora Jurídica para la Secretaría de Educación", lugar: "Medellín, Antioquia", inicio: "Febrero 2022", fin: "Julio 2022" },
    { org: "Concejo de Medellín", cargo: "Asesora Jurídica y Política", lugar: "Medellín, Antioquia", inicio: "Agosto 2021", fin: "Diciembre 2021" },
    { org: "Asociación Diversidad Corazón del Putumayo", cargo: "Asesora Jurídica y asociada fundadora", lugar: "Villagarzón, Putumayo", inicio: "Junio 2020", fin: "Julio 2021" },
    { org: "Veeduría de Género — Villagarzón", cargo: "Asesora Jurídica", lugar: "Villagarzón, Putumayo", inicio: "Mayo 2020", fin: "Abril 2021" },
    { org: "Gobernación del Putumayo", cargo: "Asistente de la Secretaría de Infraestructura, encargada de acompañar los procesos de gestión y garantía de derechos de las comunidades", lugar: "Mocoa, Putumayo", inicio: "Febrero 2019", fin: "Mayo 2019" },
    { org: "Asamblea Departamental de Antioquia", cargo: "Practicante con énfasis en Derecho Público Administrativo", lugar: "Antioquia, Colombia", inicio: "Febrero 2016", fin: "Noviembre 2017" },
  ],

  procesosSociales: [
    { org: "Cooperación: Tejido Entre Ciudades", cargo: "Gestora de Enlace Territorial — Antioquia, Colombia. Fundación Bolsa de Comercio de Rosario, Argentina", inicio: "Agosto 2021", fin: "Octubre 2023" },
    { org: "Plataforma Municipal de Juventudes de Envigado", cargo: "Equipo Dinamizador", lugar: "Envigado", inicio: "Enero 2023", fin: "Mayo 2023" },
    { org: "Plataforma Departamental de Juventudes del Putumayo", cargo: "Presidente, Líder Juvenil de acuerdo con la Ley Estatutaria 1622 de 2013. Cofundadora de la Primera Semana Departamental de la Juventud 2020 #PutumayoPiensaJoven; representante ante el Consejo de Política Social y el Consejo de Paz del Departamento del Putumayo. Realizadora de contenidos audiovisuales y talleres digitales.", lugar: "Departamento del Putumayo", inicio: "Julio 2020", fin: "Abril 2021" },
    { org: "Plataforma Municipal de Juventudes VILLA JOVEN", cargo: "Secretaria, Gestora de Comunicaciones y delegada a la Representación Departamental ante la Gobernación del Putumayo", lugar: "Villagarzón, Putumayo", inicio: "Marzo 2020", fin: "Marzo 2021" },
    { org: "Movimiento Cívico Convicción", cargo: "Coordinación Territorial y Gestión de Eventos Educativos y de Impacto Social", lugar: "Medellín", inicio: "Marzo 2017", fin: "Septiembre 2018" },
    { org: "Escuela de Líderes — Universidad de Medellín", cargo: "Capacitación, Organización de Eventos y Coordinación del Área de Formación Política. Unidad de Emprendimiento", lugar: "Medellín", inicio: "Septiembre 2015", fin: "Agosto 2017" },
  ],

  educacion: [
    { titulo: "Especialista en Gerencia de Proyectos", institucion: "Universidad del Tolima", anio: 2022 },
    { titulo: "Seminario en Docencia Universitaria", institucion: "Universidad del Tolima", anio: 2022 },
    { titulo: "Abogada. Énfasis en Derecho Público Administrativo", institucion: "Universidad de Medellín", anio: 2019 },
    { titulo: "Diplomado en Educación para la Convivencia Ciudadana", institucion: "Universidad Autónoma Latinoamericana · Área Metropolitana del Valle de Aburrá", anio: 2017 },
  ],

  // Áreas disponibles: "ia", "publico", "derecho", "proyectos", "ddhh", "liderazgo"
  areas: {
    ia: "IA y tecnología",
    publico: "Gestión pública y política",
    derecho: "Derecho",
    proyectos: "Proyectos e innovación",
    ddhh: "Paz, DD. HH. y sostenibilidad",
    liderazgo: "Liderazgo",
  },

  formacionContinua: [
    { nombre: "Seminario de Inteligencia Artificial Aplicada a la Educación", institucion: "Ruta N", anio: 2026, area: "ia" },
    { nombre: "Curso de Inteligencia Artificial Aplicada — Agentes IA", institucion: "EAFIT", anio: 2026, area: "ia" },
    { nombre: "Curso de Introducción a la Inteligencia Artificial", institucion: "EAFIT", anio: 2026, area: "ia" },
    { nombre: "Curso de Introducción a la Inteligencia Cultural", institucion: "Platzi", anio: 2025, area: "liderazgo" },
    { nombre: "Curso de Igualdad de Género", institucion: "Platzi", anio: 2025, area: "ddhh" },
    { nombre: "Curso Aspectos Legales para Startups en Colombia", institucion: "Platzi", anio: 2024, area: "derecho" },
    { nombre: "Curso de Innovación en Emprendimiento Social, Design Thinking y MVPs", institucion: "Platzi", anio: 2024, area: "proyectos" },
    { nombre: "Fundamentos de Project Management", institucion: "Platzi", anio: 2024, area: "proyectos" },
    { nombre: "Curso Profesional de SCRUM", institucion: "Platzi", anio: 2023, area: "proyectos" },
    { nombre: "Laboratorio sobre Elecciones y Poder Local", institucion: "Universidad de Antioquia", anio: 2023, area: "publico" },
    { nombre: "Curso Diseño de Campañas Políticas para Mujeres", institucion: "ESAP", anio: 2023, area: "publico" },
    { nombre: "Diplomado Proyectos de Desarrollo", institucion: "ESAP", anio: 2023, area: "proyectos" },
    { nombre: "Ética y Manejo de Datos para Data Science e Inteligencia Artificial", institucion: "Platzi", anio: 2023, area: "ia" },
    { nombre: "Fundamentos de Inteligencia Artificial para Data y Machine Learning", institucion: "Platzi", anio: 2023, area: "ia" },
    { nombre: "Curso Filosofía para Managers", institucion: "Platzi", anio: 2023, area: "liderazgo" },
    { nombre: "Diplomado Servidor Público 4.0", institucion: "ESAP", anio: 2023, area: "publico" },
    { nombre: "Curso en Responsabilidad Social Empresarial", institucion: "Platzi", anio: 2023, area: "proyectos" },
    { nombre: "Liderazgo para Mujeres", institucion: "Platzi", anio: 2023, area: "liderazgo" },
    { nombre: "Fundamentos de Matemáticas", institucion: "Platzi", anio: 2023, area: "ia" },
    { nombre: "Curso Ética de lo Público", institucion: "ESAP", anio: 2022, area: "publico" },
    { nombre: "Curso en Big Data", institucion: "ESAP", anio: 2022, area: "ia" },
    { nombre: "Curso en Prevención de Delitos contra la Administración Pública", institucion: "ESAP", anio: 2022, area: "publico" },
    { nombre: "Curso en Comunicación Gubernamental", institucion: "ESAP", anio: 2022, area: "publico" },
    { nombre: "Diplomado en Gestión Documental", institucion: "ESAP", anio: 2022, area: "publico" },
    { nombre: "Diplomado Virtual Innovación en el Sector Público", institucion: "ESAP", anio: 2021, area: "publico" },
    { nombre: "Curso Objetivos de Desarrollo Sostenible dentro del Marco de los Derechos Humanos", institucion: "ESAP", anio: 2021, area: "ddhh" },
    { nombre: "Diplomado Generalidades del Modelo Integrado de Planeación y Gestión — MIPG I", institucion: "ESAP", anio: 2021, area: "publico" },
    { nombre: "Curso Objetivos de Desarrollo Sostenible — ODS", institucion: "ESAP", anio: 2021, area: "ddhh" },
    { nombre: "Formulación y Estructuración de Proyectos", institucion: "ESAP", anio: 2021, area: "proyectos" },
    { nombre: "Diplomado en Construcción de Paz y Derechos Humanos", institucion: "USAID · ESAP", anio: 2021, area: "ddhh" },
    { nombre: "Diplomatura en Derecho Público", institucion: "Universidad de Medellín", anio: 2018, area: "derecho" },
    { nombre: "Diplomatura en Derecho Procesal Laboral", institucion: "Universidad de Medellín", anio: 2018, area: "derecho" },
    { nombre: "Fundamentos de Programación", institucion: "SENA", anio: 2018, area: "ia" },
    { nombre: "Incorporación de Dispositivos Multimedia como Apoyo a los Procesos Formativos", institucion: "SENA", anio: 2018, area: "ia" },
    { nombre: "Manejo Básico de Herramientas Informáticas", institucion: "SENA", anio: 2018, area: "ia" },
    { nombre: "Fundamentación en Sistemas de Gestión Ambiental bajo la Norma NTC ISO 14001:2004", institucion: "SENA", anio: 2017, area: "proyectos" },
    { nombre: "Diplomado en Conciliación en el Nuevo Ordenamiento Jurídico Colombiano", institucion: "Universidad de Medellín", anio: 2015, area: "derecho" },
  ],

  publicaciones: [
    { tipo: "Columna · Heterónimo", titulo: "María Mercedes Frank", medio: "Al Poniente", url: "https://alponiente.com/author/mmercedesf/" },
    { tipo: "Columna de opinión", titulo: "María Camila Chala Mena", medio: "Al Poniente", url: "https://alponiente.com/author/mchala/" },
    { tipo: "Podcast", titulo: "El Laboratorio Político", medio: "YouTube", url: "https://www.youtube.com/watch?v=vNmhPueFUOg&list=PL7e5JwK73TvqbA7_quYd8qGrhCN0LhN9M" },
    { tipo: "Podcast", titulo: "Ágora Política", medio: "YouTube", url: "https://youtube.com/playlist?list=PL7e5JwK73TvoaNLYwPQYAX0dFw16APVd3" },
    // PENDIENTE: este enlace es el mismo de "El Laboratorio Político". Reemplázalo por el de Ágora "Al Aire".
    { tipo: "Podcast", titulo: "Ágora “Al Aire”", medio: "YouTube", url: "https://www.youtube.com/watch?v=vNmhPueFUOg&list=PL7e5JwK73TvqbA7_quYd8qGrhCN0LhN9M" },
  ],

  idiomas: [
    { idioma: "Español", nivel: 100, etiqueta: "Nativo" },
    { idioma: "Inglés", nivel: 75, etiqueta: "" },
  ],
};
