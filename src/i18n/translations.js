// translations.js — all UI strings in English and Spanish

export const t = {
  // ── Navbar ──────────────────────────────────────────────
  nav: {
    home:       { en: "Home",       es: "Inicio" },
    about:      { en: "About",      es: "Sobre mí" },
    skills:     { en: "Skills",     es: "Habilidades" },
    experience: { en: "Experience", es: "Experiencia" },
    work:       { en: "Work",       es: "Proyectos" },
    services:   { en: "Services",   es: "Servicios" },
    contact:    { en: "Contact",    es: "Contacto" },
  },

  // ── Home ────────────────────────────────────────────────
  home: {
    greeting:    { en: "Hi, I'm",                               es: "Hola, soy" },
    subtitle:    { en: "Full Stack Developer",                   es: "Desarrollador Full Stack" },
    description: {
      en: "Web developer focused on secure, functional and well-structured solutions across backend, frontend and system monitoring.",
      es: "Desarrollador web centrado en soluciones seguras, funcionales y bien estructuradas en backend, frontend y monitorización de sistemas.",
    },
    cta:         { en: "More About Me!",    es: "Más sobre mí" },
    emailLabel:  { en: "Email",             es: "Correo" },
    locationLabel:{ en: "Location",         es: "Ubicación" },
    locationVal: { en: "Madrid, Spain",     es: "Madrid, España" },
    badge3:      { en: "Risk · Networks · Data Protection", es: "Riesgos · Redes · Protección de datos" },
  },

  // ── About ───────────────────────────────────────────────
  about: {
    sectionHeading: { en: "My Intro",       es: "Mi Intro" },
    title:          { en: "About Me",       es: "Sobre Mí" },
    heading: {
      en: "Hi, I'm Guillermo Castro, based in Madrid",
      es: "Hola, soy Guillermo Castro, con base en Madrid",
    },
    description: {
      en: "I enjoy analysing systems and shaping secure, functional and well-structured solutions, whether through code or security event analysis. I like learning new technologies, solving problems with an analytical mindset and contributing in collaborative environments.",
      es: "Disfruto analizando sistemas y diseñando soluciones seguras, funcionales y bien estructuradas, ya sea mediante código o análisis de eventos de seguridad. Me gusta aprender nuevas tecnologías, resolver problemas con mentalidad analítica y contribuir en entornos colaborativos.",
    },
    box1Title:    { en: "Experience",       es: "Experiencia" },
    box1Sub:      { en: "Internship 2025",  es: "Prácticas 2025" },
    box2Title:    { en: "Completed",        es: "Completados" },
    box2Sub:      { en: "10+ Projects",     es: "10+ Proyectos" },
    box3Title:    { en: "Focus",            es: "Enfoque" },
    box3Sub:      { en: "Web & Security",   es: "Web y Seguridad" },
    cta:          { en: "Contact Me",       es: "Contáctame" },
  },

  // ── Skills ──────────────────────────────────────────────
  skills: {
    sectionHeading: { en: "Tech Stack",   es: "Stack Técnico" },
    title:          { en: "Skills",       es: "Habilidades" },
    tags: {
      experiencia: { en: "experience", es: "experiencia" },
      formación:   { en: "training",   es: "formación" },
      prácticas:   { en: "internship", es: "prácticas" },
    },
    categories: {
      Backend:        { en: "Backend",        es: "Backend" },
      "DevOps & Linux":{ en: "DevOps & Linux", es: "DevOps y Linux" },
      Frontend:       { en: "Frontend",       es: "Frontend" },
      Ciberseguridad: { en: "Cybersecurity",  es: "Ciberseguridad" },
    },
    expBullets: {
      en: [
        "Backend development and Linux environment maintenance",
        "Automation of testing and deployment with Goss",
        "Monitoring with Elastic Stack (ES, Kibana, Logstash)",
        "VM management with VirtualBox",
      ],
      es: [
        "Desarrollo backend y mantenimiento de entornos Linux",
        "Automatización de testing y despliegue con Goss",
        "Monitorización con Elastic Stack (ES, Kibana, Logstash)",
        "Gestión de VMs con VirtualBox",
      ],
    },
    certTitle: {
      en: "Professional Certificate in Cybersecurity",
      es: "Certificado Profesional en Ciberseguridad",
    },
    certSub: { en: "IBM SkillsBuild · +65 hours · 2025", es: "IBM SkillsBuild · +65 horas · 2025" },
  },

  // ── Experience ──────────────────────────────────────────
  experience: {
    sectionHeading: { en: "Career Path",          es: "Trayectoria" },
    title:          { en: "Experience",           es: "Experiencia" },
    kicker:         { en: "Professional Experience", es: "Experiencia Profesional" },
    role:           { en: "Web Development Internship", es: "Prácticas como Desarrollador Web" },
    summary: {
      en: "Hands-on experience in backend development, Linux environment maintenance, testing/deployment automation and system monitoring.",
      es: "Experiencia práctica en desarrollo backend, mantenimiento de entornos Linux, automatización de testing/despliegue y monitorización de sistemas.",
    },
    bullets: {
      en: [
        "Participated in backend development and maintenance of Linux environments.",
        "Automated testing and deployment processes using Goss.",
        "Used Elastic Stack — Elasticsearch, Kibana and Logstash — for system monitoring.",
        "Managed virtual machines and test environments with VirtualBox.",
      ],
      es: [
        "Participé en el desarrollo backend y el mantenimiento de entornos Linux.",
        "Automaticé procesos de testing y despliegue utilizando Goss.",
        "Utilicé Elastic Stack — Elasticsearch, Kibana y Logstash — para monitorización de sistemas.",
        "Gestioné máquinas virtuales y entornos de pruebas con VirtualBox.",
      ],
    },
  },

  // ── Work ────────────────────────────────────────────────
  work: {
    sectionHeading: { en: "My Portfolio",  es: "Mi Portafolio" },
    title:          { en: "Recent Works",  es: "Proyectos Recientes" },
    filters: {
      all:        { en: "All",        es: "Todos" },
      web:        { en: "Web",        es: "Web" },
      backend:    { en: "Backend",    es: "Backend" },
      automation: { en: "Automation", es: "Automatización" },
    },
    statusReady:    { en: "Ready",          es: "Listo" },
    statusOpen:     { en: "open",           es: "abierto" },
    statusOpening:  { en: "Opening",        es: "Abriendo" },
    statusAll:      { en: "All projects",   es: "Todos los proyectos" },
    noPreview:      { en: "No preview available", es: "Sin vista previa" },
    openLink:       { en: "Open link",      es: "Abrir enlace" },
    viewProject:    { en: "View project",   es: "Ver proyecto" },
    metaCreated:    { en: "Created",        es: "Creado" },
    metaStack:      { en: "Stack",          es: "Stack" },
    metaRole:       { en: "Role",           es: "Rol" },
    metaCategory:   { en: "Category",       es: "Categoría" },
    dragHint:       { en: "click to open · drag window to move", es: "clic para abrir · arrastra la ventana para moverla" },
    projects: {
      1: {
        title:       { en: "LoreWeaver",                                            es: "LoreWeaver" },
        detailTitle: { en: "LoreWeaver – Interactive Story Generator",              es: "LoreWeaver – Generador de historias interactivas" },
        description: { en: "Web app to manage characters, events and universes in interactive stories.", es: "Aplicación web para gestionar personajes, eventos y universos en historias interactivas." },
        role:        { en: "Full Stack", es: "Full Stack" },
      },
      2: {
        title:       { en: "Github Guide",                                          es: "Guia Github" },
        detailTitle: { en: "Github Guide – Git & GitHub Tutorial",                  es: "Guia Github – Tutorial de Git y GitHub" },
        description: { en: "Complete guide to learn Git and GitHub from scratch.",  es: "Guía completa para aprender Git y GitHub desde cero." },
        role:        { en: "Frontend", es: "Frontend" },
      },
      3: {
        title:       { en: "Personal Portfolio",                                    es: "Portfolio Personal" },
        detailTitle: { en: "Portfolio – Project Showcase",                          es: "Portfolio – Presentación de proyectos" },
        description: { en: "Personal portfolio built with React to showcase skills and projects.", es: "Portfolio personal desarrollado con React para mostrar habilidades y proyectos." },
        role:        { en: "Frontend", es: "Frontend" },
      },
      4: {
        title:       { en: "Escape_Room API",                                       es: "Escape_Room API" },
        detailTitle: { en: "Escape_Room – Themed Room Management",                  es: "Escape_Room – Gestión de salas temáticas" },
        description: { en: "Backend to manage rooms and Escape Room sessions in real time.", es: "Backend para gestionar salas y partidas de Escape Room en tiempo real." },
        role:        { en: "Backend", es: "Backend" },
      },
      5: {
        title:       { en: "PaginaPort",                                            es: "PaginaPort" },
        detailTitle: { en: "PaginaPort – HTML/CSS/JS Project",                      es: "PaginaPort – Proyecto HTML/CSS/JS" },
        description: { en: "Simple website created as a frontend development practice.", es: "Sitio web simple creado como práctica de desarrollo frontend." },
        role:        { en: "Frontend", es: "Frontend" },
      },
      6: {
        title:       { en: "LibreriaProyect",                                       es: "LibreriaProyect" },
        detailTitle: { en: "LibreriaProyect – Library Management",                  es: "LibreriaProyect – Gestión de librerías" },
        description: { en: "Java backend project showcasing server logic and data handling.", es: "Proyecto backend en Java mostrando lógica de servidor y manejo de datos." },
        role:        { en: "Backend", es: "Backend" },
      },
      7: {
        title:       { en: "Selenium UI Test Demo",                                 es: "Selenium UI Test Demo" },
        detailTitle: { en: "selenium-ui-test-herokuapp-demo",                       es: "selenium-ui-test-herokuapp-demo" },
        description: { en: "Automated tests with Selenium over a Heroku demo app.", es: "Pruebas automatizadas con Selenium sobre una demo en Heroku." },
        role:        { en: "QA / Test Automation", es: "QA / Automatización de pruebas" },
      },
    },
  },

  // ── Services ────────────────────────────────────────────
  services: {
    sectionHeading: { en: "Services",     es: "Servicios" },
    title:          { en: "What I Offer", es: "Lo que ofrezco" },
    viewMore:       { en: "View More",    es: "Ver más" },
    items: [
      {
        title: { en: "Full Stack\nDeveloper",      es: "Desarrollador\nFull Stack" },
        modal: {
          title:       { en: "Full Stack Developer",  es: "Desarrollador Full Stack" },
          description: {
            en: "I develop complete web applications with experience in frontend and backend, creating efficient and scalable solutions.",
            es: "Desarrollo aplicaciones web completas con experiencia en frontend y backend, creando soluciones eficientes y escalables.",
          },
          items: {
            en: [
              "Frontend development with React and Angular",
              "Backend with Java and Spring Boot",
              "REST API design and integration",
              "MySQL/PostgreSQL database management",
              "Performance optimisation and scalability",
            ],
            es: [
              "Desarrollo Frontend con React y Angular",
              "Backend con Java y Spring Boot",
              "Diseño e integración de APIs REST",
              "Gestión de bases de datos MySQL/PostgreSQL",
              "Optimización de rendimiento y escalabilidad",
            ],
          },
        },
      },
      {
        title: { en: "UI/UX\nDevelopment", es: "Desarrollo\nUI/UX" },
        modal: {
          title:       { en: "UI/UX Development", es: "Desarrollo UI/UX" },
          description: {
            en: "I design intuitive interfaces and smooth user experiences for modern web applications.",
            es: "Diseño interfaces intuitivas y experiencias de usuario fluidas para aplicaciones web modernas.",
          },
          items: {
            en: [
              "Responsive design with HTML, CSS and JavaScript",
              "Interactive prototypes and mockups",
              "Usability testing and A/B testing",
              "Style guides and visual consistency",
              "Continuous user experience improvement",
            ],
            es: [
              "Diseño responsivo con HTML, CSS y JavaScript",
              "Prototipos interactivos y mockups",
              "Pruebas de usabilidad y A/B testing",
              "Guías de estilo y consistencia visual",
              "Mejora continua de la experiencia de usuario",
            ],
          },
        },
      },
      {
        title: { en: "Project\nManagement", es: "Gestión de\nProyectos" },
        modal: {
          title:       { en: "Project Management", es: "Gestión de Proyectos" },
          description: {
            en: "I organise and manage software projects ensuring quality, efficiency and on-time delivery.",
            es: "Organizo y gestiono proyectos de software asegurando calidad, eficiencia y entrega puntual.",
          },
          items: {
            en: [
              "Task and sprint planning",
              "Version control with Git/GitHub",
              "Project documentation",
              "Coordination with multidisciplinary teams",
              "Project iteration and refinement",
            ],
            es: [
              "Planificación de tareas y sprints",
              "Control de versiones y Git/GitHub",
              "Documentación de proyectos",
              "Coordinación con equipos multidisciplinarios",
              "Iteración y refinamiento de proyectos",
            ],
          },
        },
      },
    ],
  },

  // ── Contact ─────────────────────────────────────────────
  contact: {
    sectionHeading: { en: "Get in Touch",   es: "Contáctame" },
    title:          { en: "Contact Me",     es: "Contáctame" },
    tagline1:       { en: "Let's build something", es: "Construyamos algo" },
    tagline2:       { en: "worth remembering.",     es: "que valga la pena." },
    emailLabel:     { en: "Your email",   es: "Tu correo" },
    emailPlaceholder:{ en: "hello@example.com", es: "hola@ejemplo.com" },
    msgLabel:       { en: "Message",      es: "Mensaje" },
    msgPlaceholder: { en: "Tell me about your project...", es: "Cuéntame sobre tu proyecto..." },
    sendBtn:        { en: "Send message", es: "Enviar mensaje" },
    sending:        { en: "Sending...",   es: "Enviando..." },
    successTitle:   { en: "Message received!",              es: "¡Mensaje recibido!" },
    successSub:     { en: "I'll get back to you as soon as possible.", es: "Me pondré en contacto contigo lo antes posible." },
    sendAnother:    { en: "Send another", es: "Enviar otro" },
  },

  // ── Footer ──────────────────────────────────────────────
  footer: {
    experience: { en: "Experience", es: "Experiencia" },
    work:       { en: "Work",       es: "Proyectos" },
    contact:    { en: "Contact",    es: "Contacto" },
    rights:     { en: "All rights reserved.", es: "Todos los derechos reservados." },
  },
};
