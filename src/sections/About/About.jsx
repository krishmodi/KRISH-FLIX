
import {
    ArrowUpRight,
    Lightbulb,
    Layers3,
    Code2,
    MoveUpRight,
    Palette,
    Compass
} from 'lucide-react'

import './About.css'

const principles = [
    {
        icon: Lightbulb,
        number: '01',
        title: 'THINK BEFORE DESIGN',
        description:
            'Every meaningful experience starts with understanding the problem, the people and the purpose behind it.'
    },
    {
        icon: Layers3,
        number: '02',
        title: 'DETAILS MAKE THE DIFFERENCE',
        description:
            'Typography, spacing, hierarchy and consistency turn an ordinary interface into a thoughtful experience.'
    },
    {
        icon: Code2,
        number: '03',
        title: 'DESIGN IT. BUILD IT.',
        description:
            'I enjoy bringing ideas beyond the design file, translating interfaces into responsive experiences with code.'
    }
]

const creativeFields = [
    'PRODUCT DESIGN',
    'BRAND IDENTITY',
    'UI / UX',
    'GRAPHIC DESIGN',
    '2D & 3D',
    'FRONTEND'
]

function About() {
    return (
        <section className="about-section" id="about">

            <div className="about-topline">
                <span>04 / BEHIND THE DESIGNER</span>
                <span>THE PERSON BEHIND THE PIXELS</span>
            </div>

            {/* Introduction */}

            <div className="about-main">

                <div className="about-heading">
                    <span className="about-small-label">
                        A LITTLE ABOUT ME
                    </span>

                    <h2>
                        NOT JUST
                        <span> MAKING</span>
                        <span className="about-red-text">THINGS LOOK</span>
                        <span>GOOD.</span>
                    </h2>

                    <div className="about-heading-note">
                        <span className="about-note-line" />
                        <span>MAKING THEM MAKE SENSE.</span>
                    </div>
                </div>

                <div className="about-copy">

                    <span className="about-copy-index">
                        THE CREATIVE MIND — 001
                    </span>

                    <p className="about-lead">
                        Hello, I'm Krish. A Product & Brand Designer
                        who believes good design should look beautiful,
                        feel intuitive and work effortlessly.
                    </p>

                    <p>
                        I've worked on reshaping software product
                        interfaces and building visual identities for
                        brands. My work moves between product design,
                        visual storytelling and digital experiences.
                    </p>

                    <p>
                        But I don't stop at the design file. I also
                        enjoy bringing my ideas to life through HTML,
                        CSS and React, connecting thoughtful design
                        with functional development.
                    </p>

                    <div className="about-location">
                        <span className="about-location-dot" />
                        <span>AHMEDABAD, INDIA</span>
                        <span className="about-location-divider">/</span>
                        <span>RELOCATING SOON</span>
                    </div>

                    <div className="about-creative-fields">
                        <span className="about-fields-label">MY CREATIVE UNIVERSE</span>
                        <div className="about-fields-list">
                            {creativeFields.map((field) => (
                                <span key={field}>{field}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Design mindset */}

            <div className="about-mindset">

                <div className="about-mindset-intro">
                    <div>
                        <span className="about-section-kicker">
                            THE WAY I APPROACH THINGS
                        </span>
                        <h3>
                            MY DESIGN
                            <span>PHILOSOPHY.</span>
                        </h3>
                    </div>

                    <p>
                        A few principles that shape the way I think,
                        create and solve design problems.
                    </p>
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
                                    <span>{principle.number} / 03</span>
                                    <Icon size={23} strokeWidth={1.5} />
                                </div>

                                <div className="about-principle-content">
                                    <h4>{principle.title}</h4>
                                    <p>{principle.description}</p>
                                </div>

                                <MoveUpRight
                                    className="about-principle-arrow"
                                    size={19}
                                    strokeWidth={1.5}
                                />
                            </article>
                        )
                    })}
                </div>
            </div>

            {/* Design to development */}

            <div className="about-workflow">
                <div className="about-workflow-heading">
                    <span className="about-section-kicker">
                        MY CREATIVE PROCESS
                    </span>
                    <h3>FROM FIRST THOUGHT TO FINAL PIXEL.</h3>
                </div>

                <div className="about-workflow-steps">
                    <div className="about-workflow-step">
                        <span>01</span>
                        <Compass size={21} />
                        <strong>EXPLORE</strong>
                        <small>Understand the idea.</small>
                    </div>

                    <div className="about-workflow-connector" />

                    <div className="about-workflow-step">
                        <span>02</span>
                        <Lightbulb size={21} />
                        <strong>DESIGN</strong>
                        <small>Shape the experience.</small>
                    </div>

                    <div className="about-workflow-connector" />

                    <div className="about-workflow-step">
                        <span>03</span>
                        <Palette size={21} />
                        <strong>REFINE</strong>
                        <small>Perfect the details.</small>
                    </div>

                    <div className="about-workflow-connector" />

                    <div className="about-workflow-step">
                        <span>04</span>
                        <Code2 size={21} />
                        <strong>BUILD</strong>
                        <small>Bring it to life.</small>
                    </div>
                </div>
            </div>

            {/* Closing CTA */}

            <div className="about-cta">

                <div className="about-cta-topline">
                    <span className="about-cta-dot" />
                    OPEN TO NEW OPPORTUNITIES
                </div>

                <span className="about-cta-watermark">KRISH.</span>

                <div className="about-cta-content">
                    <span className="about-section-kicker">
                        HAVE AN IDEA IN MIND?
                    </span>

                    <h3>
                        LET'S MAKE
                        <span> SOMETHING MATTER.</span>
                    </h3>

                    <p>
                        Open to full-time opportunities and freelance
                        collaborations. Let's create something meaningful.
                    </p>

                    <a href="#contact">
                        START A CONVERSATION
                        <ArrowUpRight size={18} />
                    </a>
                </div>

            </div>

        </section>
    )
}

export default About
