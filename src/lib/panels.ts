export interface Panel {
    id: number
    title: string
    description: string
    address: string
    imgPreview: string
    date: string
    participants?: string[]
}

export const PANELS: Panel[] = [
    {
        id: 1,
        description:
            "En el competitivo mundo laboral actual, la forma en que los reclutadores y entrenadores de talento evalúan los CVs está evolucionando rápidamente. Este panel discutirá cómo los profesionales de recursos humanos y People Trainers están utilizando nuevas metodologías y herramientas, como la inteligencia artificial y el análisis de datos, para identificar y desarrollar el mejor talento. Abordaremos qué buscan los empleadores en un CV moderno, la importancia de las habilidades blandas frente a las técnicas, y cómo las certificaciones y experiencias no tradicionales están cobrando más valor que nunca.",
        title: "Entrenadores del Talento: Descodificando el CV del Futuro",
        address: "Auditorio San Pablo II",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "panel1.jpeg",
        participants: ['carlos-perez.jpg', 'emelyn-alvino.jpeg']
    },
    {
        id: 2,
        description:
            "En un entorno empresarial en constante cambio, las metodologías ágiles se han convertido en una herramienta clave para la gestión eficiente de proyectos. Este panel reunirá a expertos en SCRUM, Kanban y otras metodologías ágiles para explorar cómo estas prácticas están transformando la planificación, ejecución y entrega de proyectos. Discutiremos casos de éxito, desafíos en la implementación y cómo la agilidad permite a los equipos adaptarse rápidamente a los cambios, mejorar la colaboración y maximizar el valor entregado al cliente.",
        title:
            "Agilidad en Acción: Innovando la Gestión de Proyectos con Metodologías Ágiles",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "panel2.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['antonella-ochoa.jpg', 'cleber-de-cunha.jpg']
    },
    {
        id: 3,
        description:
            "En un mundo cada vez más interconectado, las amenazas cibernéticas están en constante evolución. Este panel explorará cómo las empresas y las instituciones gubernamentales pueden protegerse frente a ataques cibernéticos a través de la implementación de tecnologías avanzadas y buenas prácticas en ciberseguridad. Expertos en Ethical Hacking, gestión de centros de datos y sistemas de toma de decisiones analizarán las estrategias y herramientas más efectivas para proteger los datos y la infraestructura crítica.",
        title: "Ciberdefensas en Acción: La Guerra Invisible",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "panel3.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['arturo-simich.jpg', 'jorge-luis-rejas.jpg', 'ricardo-berrospi.jpg', 'nefi-arroyo.jpg']

    },
    {
        id: 4,
        description:
            "La Inteligencia Artificial está transformando industrias y redefiniendo lo que es posible. Este panel se centrará en el impacto de las redes neuronales, algoritmos genéticos y la lógica difusa en el desarrollo de soluciones inteligentes para problemas complejos. Desde la IA aplicada a la realidad aumentada hasta su integración en dispositivos IoT, nuestros expertos compartirán cómo estas tecnologías están impulsando la innovación y ofreciendo nuevas oportunidades en áreas clave como la salud, el transporte y la manufactura.",
        title: "IA y Machine Learning: Construyendo la Próxima Revolución",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "panel4.jpeg",
        address: "Auditorio San Pablo II",
        participants: ['alfredo.jpg']

    },
    {
        id: 5,
        description:
            "La Cuarta Revolución Industrial está aquí, y con ella, la integración de tecnologías como la robótica, el Big Data, la inteligencia artificial y el IoT. Este panel reunirá a líderes del sector para debatir cómo la Industria 4.0 está transformando la producción, mejorando la eficiencia y abriendo nuevas fronteras en la automatización. Discutiremos casos de éxito, retos en la implementación y el futuro de las fábricas inteligentes, donde la tecnología y el trabajo humano convergen.",
        title: "Industria 4.0: Innovación en la Era de la Automatización",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "panel2.jpeg",
        address: "Auditorio San Pablo II",
        participants: []

    },
    {
        id: 6,
        description:
            "En este panel, exploraremos cómo la transformación digital está redefiniendo el panorama empresarial y social. Desde la gestión de datos masivos con Big Data hasta la automatización industrial y la digitalización de procesos empresariales, los panelistas compartirán estrategias y experiencias de cómo las organizaciones están adoptando estas tecnologías para mejorar la eficiencia y crear nuevos modelos de negocio. Con una visión hacia el futuro, discutiremos cómo las empresas pueden mantenerse competitivas en un mundo cada vez más digitalizado.",
        title:
            "Transformación Digital: Navegando el Cambio en la Nueva Era Tecnológica",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "panel3.jpeg",
        address: "Auditorio San Pablo II",
        participants: []

    },
];