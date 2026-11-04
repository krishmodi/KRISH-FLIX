import { useState } from 'react'
import {
    Palette,
    PanelsTopLeft,
    Shapes,
    Box,
    Code2,
    ChevronDown
} from 'lucide-react'

import './Skills.css'

const skillCategories = [
    {
        id: 'product',
        number: '01',
        title: 'PRODUCT DESIGN',
        description: 'Building meaningful digital experiences.',
        icon: PanelsTopLeft,
        skills: [
            'Product Design',
            'UI/UX Design',
            'User Research',
            'Wireframing',
            'Prototyping',
            'Responsive Design',
            'Design Systems',
            'Dashboard Design'
        ]
    },
    {
        id: 'brand',
        number: '02',
        title: 'BRAND & IDENTITY',
        description: 'Creating distinctive visual identities.',
        icon: Palette,
        skills: [
            'Brand Strategy',
            'Logo Design',
            'Visual Identity',
            'Typography',
            'Brand Guidelines',
            'Packaging Design'
        ]
    },
    {
        id: 'graphics',
        number: '03',
        title: 'GRAPHIC DESIGN',
        description: 'Visual storytelling through graphic design.',
        icon: Shapes,
        skills: [
            'Social Media Design',
            'Poster Design',
            'Pitch Deck Design',
            'Editorial Design',
            'Marketing Creatives',
            'Print Design'
        ]
    },
    {
        id: '3d',
        number: '04',
        title: '3D & 2D DESIGN',
        description: 'Exploring form, motion and visual expression.',
        icon: Box,
        skills: [
            '3D Design',
            '2D Design',
            'Visual Composition',
            'Creative Concepts',
            'Animation',
            'Motion Graphics'
        ]
    },
    {
        id: 'development',
        number: '05',
        title: 'FRONTEND DEVELOPMENT',
        description: 'Bringing design concepts into the browser.',
        icon: Code2,
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Tailwind CSS',
            'Responsive Development'
        ]
    }
]

const tools = [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Canva',
    'HTML',
    'CSS',
    'React',
    'Animation Tools'
]

function Skills() {
    const [activeCategory, setActiveCategory] = useState('product')

    const activeSkill = skillCategories.find(
        (category) => category.id === activeCategory
    )

    return (
        <section className="skills-section" id="skills">

            <div className="skills-heading">
                <span className="section-eyebrow">
                    02 / MY CREATIVE UNIVERSE
                </span>

                <h2>
                    MORE THAN
                    <span> JUST DESIGN.</span>
                </h2>

                <p>
                    A combination of creative thinking, design
                    skills and frontend development.
                </p>
            </div>

            <div className="skills-layout">

                {/* Category Navigation */}
                <div className="skills-category-list">
                    {skillCategories.map((category) => {
                        const Icon = category.icon

                        return (
                            <button
                                key={category.id}
                                className={`skill-category ${activeCategory === category.id ? 'active' : ''
                                    }`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className="skill-category-number">
                                    {category.number}
                                </span>

                                <Icon size={19} />

                                <span className="skill-category-title">
                                    {category.title}
                                </span>

                                <ChevronDown
                                    className="skill-category-arrow"
                                    size={17}
                                />
                            </button>
                        )
                    })}
                </div>

                {/* Selected Category */}
                <div className="skills-detail" key={activeCategory}>

                    <span className="skills-detail-label">
                        SELECTED DISCIPLINE / {activeSkill.number}
                    </span>

                    <h3>{activeSkill.title}</h3>

                    <p>{activeSkill.description}</p>

                    <div className="skills-tags">
                        {activeSkill.skills.map((skill, index) => (
                            <span
                                key={skill}
                                style={{ '--skill-index': index }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="skills-detail-footer">
                        <span>CREATIVE THINKING</span>
                        <span>DESIGN EXECUTION</span>
                        <span>CONTINUOUS LEARNING</span>
                    </div>

                </div>

            </div>

            {/* Tools */}
            <div className="tools-section">

                <div className="tools-heading">
                    <span>THE TOOLKIT</span>
                    <h3>TOOLS OF THE TRADE.</h3>
                </div>

                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <div className="tool-card" key={tool}>
                            <span>0{index + 1}</span>
                            <strong>{tool}</strong>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Skills