
export const projects = [
    {
        id: 'chatnation',
        title: 'CHATNATION',
        subtitle: 'A BETTER WAY TO CONNECT',
        category: 'PRODUCT DESIGN',
        type: 'PRODUCT ORIGINAL',
        season: '01',
        episode: '01',
        year: '[add]',
        role: 'UI/UX DESIGN',
        description:
            'A chat application designed from scratch, shaped by user research and real communication preferences.',
        image: '/images/posters/chatnation.webp',
        screenshots: [],
        theme: 'chatnation',
        accent: '#756BFF',
        featured: true,
        services: ['User Research', 'Product Design', 'UI Design'],
        href: '/projects/chatnation',
    },

    {
        id: 'saas',
        title: 'SAAS REDESIGNS',
        subtitle: 'RETHINKING DIGITAL EXPERIENCES',
        category: 'UI/UX DESIGN',
        type: 'DIGITAL COLLECTION',
        season: '01',
        episode: '02',
        year: '[add]',
        role: 'UI/UX DESIGN',
        description:
            'A collection of redesigned SaaS products and newly designed digital experiences.',
        image: '/images/posters/saas.webp',
        screenshots: [],
        theme: 'saas',
        accent: '#00BFA6',
        featured: true,
        services: ['Interface Design', 'UX Design', 'Web Design'],
        href: '/projects/saas',
    },

    {
        id: 'film-studio',
        title: 'SHREE PARIJAT',
        subtitle: 'STORIES DESERVE AN IDENTITY',
        category: 'BRAND IDENTITY',
        type: 'BRAND ORIGINAL',
        season: '01',
        episode: '03',
        year: '[add]',
        role: 'BRANDING & GRAPHIC DESIGN',
        description:
            'Film studio identity, logo design, promotional posters, pitch decks and production-related creative work.',
        image: '/images/posters/film-studio.webp',
        screenshots: [],
        theme: 'film',
        accent: '#D58A38',
        featured: true,
        services: ['Logo Design', 'Brand Identity', 'Editorial Design'],
        href: '/projects/film-studio',
    },

    {
        id: 'navratri',
        title: 'PARAMPARA',
        subtitle: 'A CELEBRATION OF CULTURE',
        category: 'PRESENTATION DESIGN',
        type: 'CREATIVE COLLECTION',
        season: '01',
        episode: '04',
        year: '2026',
        role: 'GRAPHIC DESIGN',
        description:
            'Premium Navratri event branding and sponsorship presentation design.',
        image: '/images/posters/navratri.webp',
        screenshots: [],
        theme: 'navratri',
        accent: '#D6A84F',
        featured: true,
        services: ['Event Branding', 'Pitch Decks', 'Graphic Design'],
        href: '/projects/navratri',
    },
]

export const projectOrder = {
    recruiter: [
        'chatnation',
        'saas',
        'film-studio',
        'navratri',
    ],

    client: [
        'film-studio',
        'navratri',
        'saas',
        'chatnation',
    ],

    designer: [
        'chatnation',
        'saas',
        'film-studio',
        'navratri',
    ],
}
