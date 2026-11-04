import {
    ArrowUpRight,
    Sparkles,
    Lightbulb,
    Layers3,
    Code2
} from 'lucide-react'

import './About.css'

const principles = [
    {
        icon: Lightbulb,
        number: '01',
        title: 'THINK BEFORE DESIGN',
        description:
            'Understanding the problem comes before choosing colours, layouts or visual styles.'
    },
    {
        icon: Layers3,
        number: '02',
        title: 'DETAILS MATTER',
        description:
            'Typography, spacing, hierarchy and consistency are what make a design feel complete.'
    },
    {
        icon: Code2,
        number: '03',
        title: 'DESIGN IT. BUILD IT.',
        description:
            'I enjoy translating design ideas into responsive interfaces using frontend technologies.'
    }
]

function About() {
    return (
        <section className="about-section" id="about">

            <div className="about-topline">
                <span>04 / BEHIND THE DESIGNER</span>
                <span>AN INTRODUCTION</span>
            </div>

            <div className="about-main">

                <div className="about-heading">
                    <span className="about-small-label">
                        HELLO, I'M KRISH.
                    </span>

                    <h2>
                        I TURN
                        <span> IDEAS INTO</span>
                        <span className="about-red-text">EXPERIENCES.</span>
                    </h2>
                </div>

                <div className="about-copy">
                    <p className="about-lead">
                        I'm a Product & Brand Designer who enjoys
                        bringing ideas to life through thoughtful
                        design and technology.
                    </p>

                    <p>
                        I have reshaped the interfaces of several
                        software products and built the branding
                        for new brands. I design, and I also code
                        what I design in HTML, CSS and React.
                    </p>

                    <p>
                        My interests span product design, visual
                        identity, graphic design, 2D and 3D
                        exploration, and frontend development.
                    </p>

                    <div className="about-location">
                        <span className="about-location-dot" />
                        AHMEDABAD, INDIA
                        <span className="about-location-divider">/</span>
                        RELOCATING SOON
                    </div>
                </div>

            </div>

            {/* Design philosophy */}
            <div className="about-philosophy">
                <div className="about-philosophy-heading">
                    <span>THE WAY I THINK</span>
                    <h3>MY DESIGN PHILOSOPHY.</h3>
                </div>

                <div className="about-principles">
                    {principles.map((principle) => {
                        const Icon = principle.icon

                        return (
                            <article
                                className="about-principle-card"
                                key={principle.number}
                            >
                                <div className="about-principle-top">
                                    <span>{principle.number}</span>
                                    <Icon size={23} />
                                </div>

                                <h4>{principle.title}</h4>
                                <p>{principle.description}</p>
                            </article>
                        )
                    })}
                </div>
            </div>

            {/* Closing CTA */}
            <div className="about-cta">
                <div>
                    <Sparkles size={20} />
                    <span>OPEN TO NEW OPPORTUNITIES</span>
                </div>

                <h3>
                    LET'S MAKE
                    <span> SOMETHING MATTER.</span>
                </h3>

                <p>
                    Available for full-time opportunities and
                    freelance collaborations.
                </p>

                <a href="#contact">
                    START A CONVERSATION
                    <ArrowUpRight size={17} />
                </a>
            </div>

        </section>
    )
}

export default About