
export const projects = [
    {
        id: 'chatnation',
        title: 'CHATNATION',
        subtitle: 'A BETTER WAY TO CONNECT',
        category: 'PRODUCT DESIGN',
        type: 'PRODUCT ORIGINAL',
        season: '01',
        episode: '01',
        year: '2025-26',
        role: 'UI/UX DESIGN',
        description:
            'A chat application designed from scratch, shaped by user research and real communication preferences.',
        image: '/images/posters/chatnation.webp',
        screenshots: [
            '/images/projects/chatnation/overview.webp',
            '/images/projects/chatnation/chat-list.webp',
            '/images/projects/chatnation/conversation.webp',
            '/images/projects/chatnation/user-profile.webp',
            '/images/projects/chatnation/settings.webp',
        ],
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
        type: 'CONCEPT COLLECTION',
        season: '01',
        episode: '02',
        year: '2025-26',
        role: 'UI/UX DESIGN',
        description:
            'A conceptual collection of SaaS dashboards and responsive website experiences exploring interface design, usability and visual presentation.',
        image: '/images/posters/saas.webp',
        screenshots: [
            '/images/projects/saas/dashboard.webp',
            '/images/projects/saas/website.webp',
            '/images/projects/saas/mobile.webp',
        ],
        theme: 'saas',
        accent: '#E50914',
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
        year: '2026',
        role: 'BRANDING & GRAPHIC DESIGN',
        description:
            'Film studio identity, logo design, promotional posters, website design and production-related creative work.',
        image: '/images/posters/film-studio.webp',
        screenshots: [
            '/images/projects/film-studio/branding.webp',
            '/images/projects/film-studio/posters.webp',
            '/images/projects/film-studio/website.webp',
        ],
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
        category: 'EVENT BRANDING',
        type: 'CREATIVE COLLECTION',
        season: '01',
        episode: '04',
        year: '2026',
        role: 'GRAPHIC DESIGN',
        description:
            'Navratri event identity, sponsorship pitch deck, promotional creatives and event visual concepts.',
        image: '/images/posters/navratri.webp',
        screenshots: [
            '/images/projects/navratri/pitch-deck.webp',
            '/images/projects/navratri/branding.webp',
            '/images/projects/navratri/event-visuals.webp',
        ],
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
