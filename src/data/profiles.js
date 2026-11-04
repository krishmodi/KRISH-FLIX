
import {
    BriefcaseBusiness,
    Layers3,
    Palette
} from 'lucide-react'

export const profiles = [
    {
        id: 'recruiter',
        name: 'RECRUITER',
        subtitle: 'Discover my professional journey',
        icon: BriefcaseBusiness,
        accent: '#E50914',

        sections: [
            'Featured Projects',
            'Professional Experience',
            'My Skills',
            'Education',
            'Download Resume',
            'Contact'
        ],

        description:
            'Explore my product design experience, professional background and strongest projects.'
    },

    {
        id: 'client',
        name: 'CLIENT',
        subtitle: 'Explore what I can create for you',
        icon: Layers3,
        accent: '#E50914',

        sections: [
            'Featured Projects',
            'Branding & Identity',
            'UI/UX Design',
            'Graphic Design',
            '3D & 2D Design',
            'Work With Me',
            'Contact'
        ],

        description:
            'Explore my creative work, design services and branding capabilities.'
    },

    {
        id: 'designer',
        name: 'DESIGNER',
        subtitle: 'Step inside my creative universe',
        icon: Palette,
        accent: '#E50914',

        sections: [
            'Design Process',
            'Featured Projects',
            'My Skill Universe',
            'Creative Experiments',
            'Tools & Technologies',
            'My Journey'
        ],

        description:
            'Explore how I think, design, experiment and turn ideas into digital experiences.'
    }
]
