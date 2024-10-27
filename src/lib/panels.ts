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
        date: "09:00 - 09:30 AM Nov 07",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 2,
        description:
            "Navegando la Agilidad es una ponencia dirigida a profesionales y equipos de trabajo que buscan aprovechar las metodologías ágiles para optimizar la gestión de proyectos en un entorno empresarial en constante cambio. En esta sesión, exploraremos cómo enfoques como SCRUM permiten a los equipos adaptarse rápidamente a nuevas condiciones, mejorar la colaboración y maximizar el valor entregado a los clientes. A través de casos prácticos y experiencias reales, se presentarán los beneficios y desafíos de implementar agilidad, proporcionando herramientas clave para navegar con éxito en la transformación organizacional.",
        title:
            "Ponencia: Navegando la Agilidad",
        date: "09:30 - 10:15 AM Nov 07",
        imgPreview: "panel2.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['antonella-ochoa.jpg']
    },
    {
        id: 3,
        title:
            "Pausa / Transición (15 minutos)",
        date: "10:15 - 10:30 AM Nov 07",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 4,
        description:
            "En el competitivo mundo laboral actual, la forma en que los reclutadores y entrenadores de talento evalúan los CVs está evolucionando rápidamente. Este panel discutirá cómo los profesionales de recursos humanos y People Trainers están utilizando nuevas metodologías y herramientas, como la inteligencia artificial y el análisis de datos, para identificar y desarrollar el mejor talento. Abordaremos qué buscan los empleadores en un CV moderno, la importancia de las habilidades blandas frente a las técnicas, y cómo las certificaciones y experiencias no tradicionales están cobrando más valor que nunca.",
        title: "PANEL #1 Entrenadores del Talento: Descodificando el CV del Futuro",
        address: "Auditorio San Pablo II",
        date: "10:30 - 11:15 AM Nov 07",
        imgPreview: "panel1.jpeg",
        participants: ['carlos-perez.jpg', 'emelyn-alvino.jpeg', 'raquel-sanchez.jpeg']
    },
    {
        id: 5,
        title:
            "Pausa / Transición (15 minutos)",
        date: "11:15 - 11:30 AM Nov 07",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 6,
        description:
            "La Inteligencia Artificial está transformando industrias y redefiniendo lo que es posible. Este panel se centrará en el impacto de las redes neuronales, algoritmos genéticos y la lógica difusa en el desarrollo de soluciones inteligentes para problemas complejos. Desde la IA aplicada a la realidad aumentada hasta su integración en dispositivos IoT, nuestros expertos compartirán cómo estas tecnologías están impulsando la innovación y ofreciendo nuevas oportunidades en áreas clave como la salud, el transporte y la manufactura.",
        title: "PANEL #2 IA y Machine Learning: Construyendo la Próxima Revolución",
        date: "11:30 AM - 12:15 PM Nov 07",
        imgPreview: "panel4.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['maxz.jpg', 'cesar-ruiz.jpeg']

    },
    {
        id: 7,
        title:
            "Pausa / Transición (15 minutos)",
        date: "12:15 - 12:30 PM Nov 07",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 8,
        title:
            "Almuerzo y Networking",
        date: "01:00 - 02:00 PM Nov 07",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 9,
        description:
            "En un mundo cada vez más interconectado, las amenazas cibernéticas están en constante evolución. Este panel explorará cómo las empresas y las instituciones gubernamentales pueden protegerse frente a ataques cibernéticos a través de la implementación de tecnologías avanzadas y buenas prácticas en ciberseguridad. Expertos en Ethical Hacking, gestión de centros de datos y sistemas de toma de decisiones analizarán las estrategias y herramientas más efectivas para proteger los datos y la infraestructura crítica.",
        title: "PANEL #3 Ciberdefensas en Acción: La Guerra Invisible",
        imgPreview: "panel3.jpeg",
        date: "02:00 - 02:45 PM Nov 07",
        address: "Auditorio San Pablo II",
        participants: ['arturo-simich.jpg', 'jorge-luis-rejas.jpg', 'ricardo-berrospi.jpg']
    },
    {
        id: 10,
        title:
            "Pausa / Transición (15 minutos)",
        date: "02:45 - 03:00 PM Nov 07",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    {
        id: 11,
        description:
            "Este panel presentará las principales especialidades de la Ingeniería Mecánica, como diseño mecánico, robótica y energías renovables. Expertos del sector explicarán las oportunidades laborales, las competencias más demandadas y los retos actuales en la industria. Ideal para estudiantes que desean conocer las diferentes trayectorias profesionales y las habilidades necesarias para destacar en el campo.",
        title: "PANEL #4 Explorando las Ramas de la Ingeniería Mecánica: Especialidades y Oportunidades",
        date: "03:00 - 03:45 PM Nov 07",
        imgPreview: "panel2.jpeg",
        address: "Auditorio San Pablo II",
        participants: []

    },
    {
        id: 13,
        title:
            "Ponencia: Iniciando con IA en el desarrollo de Productos Digitales",
        description: "En esta ponencia, descubrirás cómo la inteligencia artificial (IA) está revolucionando el ciclo de desarrollo de productos digitales. Aprenderás a integrar IA en cada fase del proceso: desde la redacción de requisitos y la creación de diagramas, hasta la elaboración de casos de prueba y la generación de código. Con ejemplos prácticos, exploraremos cómo estas herramientas pueden agilizar el desarrollo de funcionalidades básicas, mejorar la precisión y aumentar la eficiencia del equipo. Esta es tu oportunidad para comprender cómo la IA está transformando el desarrollo digital y cómo puedes aplicarla en tus proyectos.",
        date: "03:45 - 04:15 PM Nov 07",
        address: "Auditorio San Pablo II",
        imgPreview: "panel3.jpeg",
        participants: ['cleber-de-cunha.jpg']
    },
    {
        id: 14,
        title:
            "Ponencia: Despega tu Carrera: Introducción a Especialidad",
        description: "Este webinar está diseñado para ayudar a los estudiantes y profesionales a conocer las diversas especialidades dentro del campo de la Ingeniería de Sistemas. Durante la sesión, se explorarán las oportunidades de carrera, las habilidades clave requeridas para cada especialidad y cómo elegir la mejor trayectoria profesional según intereses y fortalezas personales. Además, se proporcionarán consejos prácticos sobre cómo comenzar y avanzar en cada área, con el objetivo de facilitar el desarrollo de una carrera exitosa y bien enfocada.",
        date: "04:15 - 04:45 PM Nov 07",
        imgPreview: "panel3.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['nefi-arroyo.jpg']
    },
    {
        id: 15,
        title:
            "Ponencia: Potencia tu código. IA como aliada para programadores",
        description: "En un mundo donde el desarrollo de software avanza a un ritmo vertiginoso, la inteligencia artificial (IA) se ha convertido en una herramienta esencial para los programadores que buscan optimizar su flujo de trabajo, mejorar la calidad del código y reducir el tiempo de desarrollo. En esta ponencia, exploraremos cómo la IA puede transformar la forma en que codificamos, desde asistentes inteligentes y herramientas de depuración automática, hasta generación de código basado en descripciones. Descubre cómo puedes aprovechar el poder de la IA para llevar tus habilidades de programación al siguiente nivel y aumentar tu productividad. ¡No te quedes atrás en la revolución tecnológica!",
        date: "04:45 - 05:15 PM Nov 07",
        imgPreview: "panel3.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['jose-flores.png']
    },
    {
        id: 16,
        title:
            "Ponencia: Aplicaciones de Machine Learning en Segmentación Predictiva.",
        description: "La segmentación predictiva es una técnica de machine learning que clasifica a los clientes en grupos homogéneos según características y comportamientos similares. Esta metodología permite a las empresas personalizar campañas de marketing, identificar clientes potenciales, prevenir la pérdida de clientes (churn), mejorar la experiencia del cliente y anticipar tendencias del mercado. Al analizar datos demográficos y de comportamiento, las organizaciones pueden adaptar sus estrategias para maximizar la efectividad de sus acciones comerciales y aumentar la satisfacción y fidelización del cliente.",
        date: "05:15 - 05:45 PM Nov 07",
        imgPreview: "panel2.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['alfredo.jpg']
    },
    {
        id: 17,
        title:
            "Ponencia: Comunidad y Tecnología: Construyendo el Futuro Juntos",
        description: "Esta ponencia te mostrará cómo las tecnologías de Google, como Google Cloud, inteligencia artificial y machine learning, están transformando el mundo digital. Además, conocerás la comunidad de Google, a través de los Google Developer Groups (GDG) y Developer Student Clubs (DSC), que conectan a profesionales y estudiantes para impulsar proyectos innovadores. Descubre cómo estas herramientas y redes pueden potenciar tu carrera.",
        date: "05:45 - 06:15 PM Nov 07",
        imgPreview: "panel1.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['yancel-salinas.jpg']
    },
    {
        id: 18,
        title:
            "Cierre con grupos artísticos",
        date: "06:15 - 08:00 PM Nov 07",
        address: "Auditorio San Pablo II",
        isABreak: true
    },
    // {
    //     id: 6,
    //     description:
    //         "En este panel, exploraremos cómo la transformación digital está redefiniendo el panorama empresarial y social. Desde la gestión de datos masivos con Big Data hasta la automatización industrial y la digitalización de procesos empresariales, los panelistas compartirán estrategias y experiencias de cómo las organizaciones están adoptando estas tecnologías para mejorar la eficiencia y crear nuevos modelos de negocio. Con una visión hacia el futuro, discutiremos cómo las empresas pueden mantenerse competitivas en un mundo cada vez más digitalizado.",
    //     title:
    //         "Transformación Digital: Navegando el Cambio en la Nueva Era Tecnológica",
    //     date: "09:00 - 09:30 AM Nov 07",
    //     imgPreview: "panel3.jpeg",
    //     address: "Auditorio San Pablo II",
    //     participants: []

    // },
];