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