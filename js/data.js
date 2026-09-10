const cvData = {
    es: {
        header: {
            role: "Desarrollador Full-Stack",
            bio: "Ingeniero y desarrollador independiente especializado en la construcción de arquitecturas SaaS, sistemas Multi-Tenant y scraping escalable. Creador de InkIt y Freeblioteca. Integro Inteligencia Artificial de manera fluida en herramientas de uso masivo.",
            pdfBtn: "Descargar PDF Verificado (Firmado con InkIt)",
            pdfLink: "assets/cv-yeib-es.pdf"
        },
        projects: [
            {
                name: "Indicadores",
                icon: "fa-chart-line",
                desc: "Monitoreo financiero en tiempo real, scraping diario y modelo de IA para predicciones.",
                link: "https://indicadores.yeib.cl"
            },
            {
                name: "InkIt",
                icon: "fa-file-signature",
                desc: "Editor de firma de PDFs open source. Frontend 100% JS (ES6+) con manejo de canvas y binarios.",
                link: "https://github.com/yeib/InkIt"
            },
            {
                name: "Freeblioteca",
                icon: "fa-book-open",
                desc: "Biblioteca digital masiva (+285k obras). Pipeline de ingesta multi-fuente, deduplicación e integración de IA para metadatos.",
                link: "https://freeblioteca.cl",
                fullWidth: true
            }
        ],
        ecosystem: {
            title: "Ecosistema & Otras Plataformas",
            links: [
                { name: "Limpieza y Jardinería Maule", url: "https://limpiezayjardineriamaule.cl" },
                { name: "Yeib Tools", url: "https://tools.yeib.cl" },
                { name: "Proteo (IA)", url: "https://proteo.yeib.cl" },
                { name: "JurisprudencIA", url: "https://jurisprudencia.yeib.cl" },
                { name: "LícitaMejor (IA Agentes)", url: "https://licitamejor.yeib.cl" },
                { name: "Cronicón (Phaser 3)", url: "https://cronicon.cl" },
                { name: "Notaría Digital", url: "https://notaria.yeib.cl" },
                { name: "YeibMail", url: "https://mail.yeib.cl" }
            ]
        },
        experience: {
            title: "Experiencia Destacada",
            items: [
                {
                    title: "Desarrollador Full-Stack Independiente",
                    date: "Ene 2026 – Presente",
                    subtitle: "Freelance / Proyectos Propios",
                    isCurrent: true,
                    bullets: [
                        'Arquitectura y despliegue de plataformas web con <strong class="text-white">ingesta continua de datos en tiempo real</strong> y arquitecturas de caché (Redis) para minimizar latencias.',
                        'Desarrollo y publicación oficial en Microsoft Store de <strong class="text-white">8 aplicaciones nativas en Rust + Tauri v2</strong> (distribuidas en 240 mercados globales).',
                        'Construcción de pipelines de web scraping masivo asíncronos (Puppeteer, Playwright), evasión anti-bots y persistencia en MySQL.',
                        'Implementación de arquitecturas Multi-Tenant e integración de modelos de <strong class="text-white">Inteligencia Artificial</strong> con fallback automático.'
                    ]
                },
                {
                    title: "Jefe de Biblioteca Pública Nº154",
                    date: "Mar 2023 – Dic 2025",
                    subtitle: "Longaví, Región del Maule",
                    isCurrent: false,
                    bullets: [
                        'Administración de sistemas de información (ALEPH).',
                        'Cursos de alfabetización digital comunitaria y análisis de procesos internos.'
                    ]
                },
                {
                    title: "Encargado Programa BiblioRedes (Bibliotecas Nº38 y Nº74)",
                    date: "Ene 2019 – May 2022",
                    subtitle: "Mostazal — VI Región",
                    isCurrent: false,
                    bullets: [
                        'Ejecución de programas de alfabetización y adopción digital para público general y funcionarios.',
                        'Administración del sistema de circulación e inventario automatizado (ALEPH).'
                    ]
                }
            ]
        },
        stack: {
            title: "Stack Tecnológico",
            categories: [
                {
                    name: "Backend & Realtime",
                    icon: "fa-server",
                    items: ["Laravel (Octane / Reverb)", "Node.js", "Rust", "Python"]
                },
                {
                    name: "Frontend & UI",
                    icon: "fa-desktop",
                    items: ["React 18", "TypeScript", "Tailwind CSS", "Inertia.js"]
                },
                {
                    name: "Animaciones & 3D",
                    icon: "fa-cube",
                    items: ["Three.js / R3F", "GSAP", "Framer Motion"]
                },
                {
                    name: "Desktop & Ops",
                    icon: "fa-database",
                    items: ["Tauri v2", "MySQL / Redis", "Playwright", "Docker"]
                }
            ]
        },
        education: {
            title: "Formación",
            items: [
                { name: "Prog. Computacional", detail: "IP CIISA | 2015 – 2018" },
                { name: "Google IT Automation w/ Python", detail: "Google / Coursera" },
                { name: "Bootcamp Full Stack JS V2.0", detail: "Talento Digital" },
                { name: "Dip. Convivencia Libre de Violencia", detail: "Programa BiblioRedes | 2024" },
                { name: "Dip. Gestión de Bibliotecas Públicas", detail: "Universidad de Chile | 2023" },
                { name: "Dip. Gestión Cultural", detail: "Univ. Católica de Temuco | 2021" },
                { name: "Dip. Transformación Digital", detail: "UACh | 2020" }
            ]
        },
        footer: {
            copyright: "Proyecto Open Source (Licencia MIT)",
            desc: "Construido con Tailwind CSS. Disponible para incorporación inmediata."
        }
    },
    en: {
        header: {
            role: "Full-Stack Developer",
            bio: "Engineer and independent developer specialized in building SaaS architectures, Multi-Tenant systems, and scalable web scraping. Creator of InkIt and Freeblioteca. I seamlessly integrate Artificial Intelligence into mass-use tools.",
            pdfBtn: "Download Verified PDF (Signed with InkIt)",
            pdfLink: "assets/cv-yeib-en.pdf"
        },
        projects: [
            {
                name: "Indicadores",
                icon: "fa-chart-line",
                desc: "Real-time financial monitoring, daily scraping, and AI models for predictions.",
                link: "https://indicadores.yeib.cl"
            },
            {
                name: "InkIt",
                icon: "fa-file-signature",
                desc: "Open source PDF signature editor. 100% JS (ES6+) frontend with canvas and binary handling.",
                link: "https://github.com/yeib/InkIt"
            },
            {
                name: "Freeblioteca",
                icon: "fa-book-open",
                desc: "Massive digital library (+285k works). Multi-source ingestion pipeline, deduplication, and AI integration for metadata.",
                link: "https://freeblioteca.cl",
                fullWidth: true
            }
        ],
        ecosystem: {
            title: "Ecosystem & Other Platforms",
            links: [
                { name: "Limpieza y Jardinería Maule", url: "https://limpiezayjardineriamaule.cl" },
                { name: "Yeib Tools", url: "https://tools.yeib.cl" },
                { name: "Proteo (AI)", url: "https://proteo.yeib.cl" },
                { name: "JurisprudencIA", url: "https://jurisprudencia.yeib.cl" },
                { name: "LícitaMejor (AI Agents)", url: "https://licitamejor.yeib.cl" },
                { name: "Cronicón (Phaser 3)", url: "https://cronicon.cl" },
                { name: "Digital Notary", url: "https://notaria.yeib.cl" },
                { name: "YeibMail", url: "https://mail.yeib.cl" }
            ]
        },
        experience: {
            title: "Featured Experience",
            items: [
                {
                    title: "Independent Full-Stack Developer",
                    date: "Jan 2026 – Present",
                    subtitle: "Freelance / Personal Projects",
                    isCurrent: true,
                    bullets: [
                        'Architecture and deployment of web platforms with <strong class="text-white">continuous real-time data ingestion</strong> and cache architectures (Redis) to minimize latency.',
                        'Development and official publication in Microsoft Store of <strong class="text-white">8 native applications in Rust + Tauri v2</strong> (distributed across 240 global markets).',
                        'Construction of massive asynchronous web scraping pipelines (Puppeteer, Playwright), anti-bot evasion, and MySQL persistence.',
                        'Implementation of Multi-Tenant architectures and integration of <strong class="text-white">Artificial Intelligence</strong> models with automatic fallback.'
                    ]
                },
                {
                    title: "Head of Public Library Nº154",
                    date: "Mar 2023 – Dec 2025",
                    subtitle: "Longaví, Maule Region",
                    isCurrent: false,
                    bullets: [
                        'Administration of information systems (ALEPH).',
                        'Community digital literacy courses and internal process analysis.'
                    ]
                },
                {
                    title: "BiblioRedes Program Manager (Libraries Nº38 & Nº74)",
                    date: "Jan 2019 – May 2022",
                    subtitle: "Mostazal — VI Region",
                    isCurrent: false,
                    bullets: [
                        'Execution of digital literacy and adoption programs for the general public and staff.',
                        'Administration of the automated circulation and inventory system (ALEPH).'
                    ]
                }
            ]
        },
        stack: {
            title: "Tech Stack",
            categories: [
                {
                    name: "Backend & Realtime",
                    icon: "fa-server",
                    items: ["Laravel (Octane / Reverb)", "Node.js", "Rust", "Python"]
                },
                {
                    name: "Frontend & UI",
                    icon: "fa-desktop",
                    items: ["React 18", "TypeScript", "Tailwind CSS", "Inertia.js"]
                },
                {
                    name: "Animations & 3D",
                    icon: "fa-cube",
                    items: ["Three.js / R3F", "GSAP", "Framer Motion"]
                },
                {
                    name: "Desktop & Ops",
                    icon: "fa-database",
                    items: ["Tauri v2", "MySQL / Redis", "Playwright", "Docker"]
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                { name: "Computer Programming", detail: "IP CIISA | 2015 – 2018" },
                { name: "Google IT Automation w/ Python", detail: "Google / Coursera" },
                { name: "Bootcamp Full Stack JS V2.0", detail: "Talento Digital" },
                { name: "Dip. Violence-Free Coexistence", detail: "Programa BiblioRedes | 2024" },
                { name: "Dip. Public Library Management", detail: "Universidad de Chile | 2023" },
                { name: "Dip. Cultural Management", detail: "Univ. Católica de Temuco | 2021" },
                { name: "Dip. Digital Transformation", detail: "UACh | 2020" }
            ]
        },
        footer: {
            copyright: "Open Source Project (MIT License)",
            desc: "Built with Tailwind CSS. Available for immediate incorporation."
        }
    }
};
