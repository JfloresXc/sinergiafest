export interface Panel {
    id: number
    title: string
    description?: string
    address: string
    imgPreview?: string
    date: string
    participants?: string[]
    isABreak?: Boolean;
}

export const PANELS: Panel[] = [
    {
        id: 1,
        title:
            "Registro de participantes e introducción del evento",
        date: "09:00 - 09:30 AM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 2,
        description:
            "En un entorno empresarial en constante cambio, las metodologías ágiles se han convertido en una herramienta clave para la gestión eficiente de proyectos. Este panel reunirá a expertos en SCRUM, Kanban y otras metodologías ágiles para explorar cómo estas prácticas están transformando la planificación, ejecución y entrega de proyectos. Discutiremos casos de éxito, desafíos en la implementación y cómo la agilidad permite a los equipos adaptarse rápidamente a los cambios, mejorar la colaboración y maximizar el valor entregado al cliente.",
        title:
            "PANEL #1 Agilidad en Acción: Innovando la Gestión de Proyectos con Metodologías Ágiles",
        date: "09:00 - 10:15 AM Nov 07, 2024",
        imgPreview: "panel2.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['antonella-ochoa.jpg', 'cleber-de-cunha.jpg']
    },
    {
        id: 3,
        title:
            "Pausa / Transición (15 minutos)",
        date: "10:15 - 10:30 AM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 4,
        description:
            "En el competitivo mundo laboral actual, la forma en que los reclutadores y entrenadores de talento evalúan los CVs está evolucionando rápidamente. Este panel discutirá cómo los profesionales de recursos humanos y People Trainers están utilizando nuevas metodologías y herramientas, como la inteligencia artificial y el análisis de datos, para identificar y desarrollar el mejor talento. Abordaremos qué buscan los empleadores en un CV moderno, la importancia de las habilidades blandas frente a las técnicas, y cómo las certificaciones y experiencias no tradicionales están cobrando más valor que nunca.",
        title: "PANEL #2 Entrenadores del Talento: Descodificando el CV del Futuro",
        address: "Auditorio San Pablo II",
        date: "10:30 - 11:15 AM Nov 07, 2024",
        imgPreview: "panel1.jpeg",
        participants: ['carlos-perez.jpg', 'emelyn-alvino.jpeg']
    },
    {
        id: 5,
        title:
            "Pausa / Transición (15 minutos)",
        date: "11:15 - 11:30 AM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 6,
        description:
            "La Inteligencia Artificial está transformando industrias y redefiniendo lo que es posible. Este panel se centrará en el impacto de las redes neuronales, algoritmos genéticos y la lógica difusa en el desarrollo de soluciones inteligentes para problemas complejos. Desde la IA aplicada a la realidad aumentada hasta su integración en dispositivos IoT, nuestros expertos compartirán cómo estas tecnologías están impulsando la innovación y ofreciendo nuevas oportunidades en áreas clave como la salud, el transporte y la manufactura.",
        title: "PANEL #3 IA y Machine Learning: Construyendo la Próxima Revolución",
        date: "11:30 AM - 12:15 PM Nov 07, 2024",
        imgPreview: "panel4.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['alfredo.jpg', 'maxz.jpg']

    },
    {
        id: 7,
        title:
            "Pausa / Transición (15 minutos)",
        date: "12:15 - 12:30 PM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 8,
        title:
            "Almuerzo y Networking",
        date: "01:00 - 02:00 PM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 9,
        description:
            "En un mundo cada vez más interconectado, las amenazas cibernéticas están en constante evolución. Este panel explorará cómo las empresas y las instituciones gubernamentales pueden protegerse frente a ataques cibernéticos a través de la implementación de tecnologías avanzadas y buenas prácticas en ciberseguridad. Expertos en Ethical Hacking, gestión de centros de datos y sistemas de toma de decisiones analizarán las estrategias y herramientas más efectivas para proteger los datos y la infraestructura crítica.",
        title: "PANEL #4 Ciberdefensas en Acción: La Guerra Invisible",
        imgPreview: "panel3.jpeg",
        date: "02:00 - 02:45 PM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        participants: ['arturo-simich.jpg', 'jorge-luis-rejas.jpg', 'ricardo-berrospi.jpg', 'nefi-arroyo.jpg']

    },
    {
        id: 10,
        title:
            "Pausa / Transición (15 minutos)",
        date: "02:45 - 03:00 PM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 11,
        description:
            "Este panel presentará las principales especialidades de la Ingeniería Mecánica, como diseño mecánico, robótica y energías renovables. Expertos del sector explicarán las oportunidades laborales, las competencias más demandadas y los retos actuales en la industria. Ideal para estudiantes que desean conocer las diferentes trayectorias profesionales y las habilidades necesarias para destacar en el campo.",
        title: "PANEL #5 Explorando las Ramas de la Ingeniería Mecánica: Especialidades y Oportunidades",
        date: "03:00 - 03:45 PM Nov 07, 2024",
        imgPreview: "panel2.jpeg",
        address: "Auditorio San Pablo II",
        participants: []

    },
    {
        id: 12,
        title:
            "Pausa / Transición (15 minutos)",
        date: "02:45 - 03:00 PM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 13,
        title:
            "Mesa redonda sobre tendencias futuras en la ingeniería (1 hora)",
        date: "04:00 - 05:00 PM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 14,
        title:
            "Cierre del panel de especialidades",
        date: "05:00 - 06:00 PM Nov 07, 2024",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    // {
    //     id: 6,
    //     description:
    //         "En este panel, exploraremos cómo la transformación digital está redefiniendo el panorama empresarial y social. Desde la gestión de datos masivos con Big Data hasta la automatización industrial y la digitalización de procesos empresariales, los panelistas compartirán estrategias y experiencias de cómo las organizaciones están adoptando estas tecnologías para mejorar la eficiencia y crear nuevos modelos de negocio. Con una visión hacia el futuro, discutiremos cómo las empresas pueden mantenerse competitivas en un mundo cada vez más digitalizado.",
    //     title:
    //         "Transformación Digital: Navegando el Cambio en la Nueva Era Tecnológica",
    //     date: "09:00 - 09:30 AM Nov 07, 2024",
    //     imgPreview: "panel3.jpeg",
    //     address: "Auditorio San Pablo II",
    //     participants: []

    // },
];