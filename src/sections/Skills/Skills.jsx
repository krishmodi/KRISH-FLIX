
import { useState } from 'react'
import {
    Palette,
    PanelsTopLeft,
    Shapes,
    Box,
    Code2,
    ChevronRight,
    ArrowUpRight,
    Wrench
} from 'lucide-react'

import './Skills.css'

const skillCategories = [
    {
        id: 'product',
        number: '01',
        title: 'PRODUCT DESIGN',
        description: 'Building meaningful digital experiences through research, structure and thoughtful interaction.',
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
        description: 'Creating distinctive visual identities that give brands a recognisable personality.',
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
        description: 'Visual storytelling through compositions, campaigns and creative communication.',
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
        description: 'Exploring form, composition, movement and visual expression.',
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
        description: 'Turning visual concepts into responsive and functional web experiences.',
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

const toolGroups = [
    {
        label: 'DESIGN & PROTOTYPING',
        tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva']
    },
    {
        label: 'DEVELOPMENT',
        tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
        label: 'CREATIVE',
        tools: ['Animation Tools', '2D Design', '3D Design']
    }
]

function Skills() {
    const [activeCategory, setActiveCategory] = useState('product')

    const activeSkill = skillCategories.find(
        (category) => category.id === activeCategory
    ) || skillCategories[0]

    const ActiveIcon = activeSkill.icon

    return (
        <section className="skills-section" id="skills">

            {/* Section heading */}

            <div className="skills-heading">
                <span className="section-eyebrow">
                    02 / MY CREATIVE UNIVERSE
                </span>

                <div className="skills-heading-main">
                    <h2>
                        MORE THAN
                        <span> JUST DESIGN.</span>
                    </h2>

                    <p>
                        A creative mix of design thinking, visual
                        exploration and frontend development.
                        Different skills, one goal: making digital
                        experiences better.
                    </p>
                </div>
            </div>

            {/* Skills explorer */}

            <div className="skills-explorer">

                <div className="skills-explorer-top">
                    <span>DISCIPLINES / 05</span>
                    <span>SELECT A CATEGORY TO EXPLORE</span>
                </div>

                <div className="skills-layout">

                    <div className="skills-category-list" aria-label="Skill categories">
                        {skillCategories.map((category) => {
                            const Icon = category.icon
                            const isActive = activeCategory === category.id

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    className={`skill-category ${isActive ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category.id)}
                                    aria-pressed={isActive}
                                >
                                    <span className="skill-category-number">
                                        {category.number}
                                    </span>

                                    <Icon size={19} strokeWidth={1.6} />

                                    <span className="skill-category-title">
                                        {category.title}
                                    </span>

                                    <ChevronRight
                                        className="skill-category-arrow"
                                        size={17}
                                    />
                                </button>
                            )
                        })}
                    </div>

                    <div
                        className="skills-detail"
                        key={activeCategory}
                        aria-live="polite"
                    >

                        <div className="skills-detail-top">
                            <span className="skills-detail-label">
                                SELECTED DISCIPLINE / {activeSkill.number}
                            </span>

                            <ActiveIcon
                                className="skills-detail-icon"
                                size={35}
                                strokeWidth={1.2}
                            />
                        </div>

                        <h3>{activeSkill.title}</h3>

                        <p className="skills-detail-description">
                            {activeSkill.description}
                        </p>

                        <div className="skills-tags">
                            {activeSkill.skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    style={{ '--skill-index': index }}
                                >
                                    <small>
                                        {String(index + 1).padStart(2, '0')}
                                    </small>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="skills-detail-footer">
                            <span>THINK</span>
                            <span className="skills-footer-line" />
                            <span>CREATE</span>
                            <span className="skills-footer-line" />
                            <span>REFINE</span>
                        </div>

                    </div>

                </div>
            </div>

            {/* Toolkit */}

            <div className="tools-section">

                <div className="tools-heading">
                    <div>
                        <span className="section-eyebrow">
                            THE CREATIVE ARSENAL
                        </span>

                        <h3>TOOLS OF THE TRADE.</h3>
                    </div>

                    <div className="tools-heading-icon">
                        <Wrench size={22} strokeWidth={1.4} />
                    </div>
                </div>

                <div className="tools-groups">
                    {toolGroups.map((group, groupIndex) => (
                        <div className="tools-group" key={group.label}>

                            <div className="tools-group-heading">
                                <span>0{groupIndex + 1}</span>
                                <h4>{group.label}</h4>
                                <span className="tools-group-count">
                                    {String(group.tools.length).padStart(2, '0')} TOOLS
                                </span>
                            </div>

                            <div className="tools-grid">
                                {group.tools.map((tool, index) => (
                                    <div className="tool-card" key={tool}>
                                        <span className="tool-card-number">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <strong>{tool}</strong>

                                        <ArrowUpRight
                                            className="tool-card-arrow"
                                            size={16}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

                <div className="tools-bottom-note">
                    <span className="tools-note-dot" />
                    ALWAYS EXPLORING. ALWAYS LEARNING.
                </div>

            </div>

        </section>
    )
}

export default Skills
