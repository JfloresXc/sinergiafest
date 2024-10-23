import type { Panel } from "./panels"

export interface Fair {
    id: number
    title: string
    description: string
    address: string
    imgPreview: string
    urlExternal: string
    date: string
}

export const COMPANIES_LIST: Fair[] = [
    {
        id: 1,
        description:
            "",
        title: "KHALERGY",
        address: "Auditorio San Pablo II",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "KHALERGY-2024.png",
        urlExternal: 'https://khalergy.com/'
    },
    {
        id: 2,
        description:
            "",
        title:
            "Philosophia Consulting",
        date: "01:00 PM - 05:00 PM",
        imgPreview: "Philosophia-Consulting.png",
        address: "Auditorio San Pablo II",
        urlExternal: 'https://philosophyconsulting.com/'
    },
];

export const ACTIVITIES = [
    {
        "id": 1,
        "title": "Registro y apertura de la Feria de Empresas",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "9:00 - 9:30 AM Nov 07 "
    },
    {
        "id": 2,
        "title": "Stands abiertos - Interacción con empresas",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "9:30 - 10:30 AM Nov 07 "
    },
    {
        "id": 3,
        "title": "Presentación de empresas participantes (Presentaciones rápidas)",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "10:30 - 11:00 AM Nov 07 "
    },
    {
        "id": 4,
        "title": "Stands abiertos - Charlas en los stands",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "11:00 AM - 12:00 PM Nov 07 "
    },
    {
        "id": 5,
        "title": "Networking libre: interacción estudiantes-empresas",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "12:00 - 1:00 PM Nov 07 "
    },
    {
        "id": 6,
        "title": "Almuerzo (Pausa general)",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "1:00 - 2:00 PM Nov 07 "
    },
    {
        "id": 7,
        "title": "Stands abiertos - Charlas y demostraciones por empresas",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "2:00 - 3:00 PM Nov 07 "
    },
    {
        "id": 8,
        "title": "Concursos y sorteos organizados por empresas",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "3:00 - 4:00 PM Nov 07 "
    },
    {
        "id": 9,
        "title": "Stands abiertos - Oportunidades de prácticas y becas",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "4:00 - 5:00 PM Nov 07 "
    },
    {
        "id": 10,
        "title": "Cierre de la Feria de Empresas y anuncios de becas o premiaciones",
        "address": "Áreas abiertas del campus UNTELS",
        "date": "5:00 - 6:00 PM Nov 07 "
    }
]
    ;