
import { useNavigate } from 'react-router-dom'
import {
    Play,
    ArrowDown,
    ArrowUpRight,
    BriefcaseBusiness,
    Mail,
    MapPin,
    Palette,
    Layers3,
    Code2
} from 'lucide-react'

import Navbar from '../../components/navigation/Navbar'
import Originals from '../Originals/Originals'
import Skills from '../Skills/Skills'
import Journey from '../Journey/Journey'
import About from '../About/About'
import Contact from '../Contact/Contact'

import { portfolio } from '../../data/portfolio'
import { projects, projectOrder } from '../../data/projects'

import './HomePage.css'

function HomePage({ profile, onChangeProfile }) {
    const navigate = useNavigate()

    // Profile configuration
    const profileId = profile?.id || 'recruiter'

    const profileContent = {
        recruiter: {
            eyebrow: 'AVAILABLE FOR FULL-TIME OPPORTUNITIES',
            heading: 'DESIGNER.',
            description:
                'A Product & Brand Designer focused on creating meaningful digital products and distinctive visual identities.',
            button: 'VIEW MY RESUME'
        },

        client: {
            eyebrow: 'AVAILABLE FOR FREELANCE PROJECTS',
            heading: 'CREATIVE PARTNER.',
            description:
                'From brand identity to digital experiences, I help transform ideas into thoughtful visual solutions.',
            button: 'EXPLORE MY SERVICES'
        },

        designer: {
            eyebrow: 'WELCOME TO MY CREATIVE WORLD',
            heading: 'DESIGN. CREATE. BUILD.',
            description:
                'Exploring design, technology and visual storytelling through products, brands and creative experiments.',
            button: 'EXPLORE MY WORK'
        }
    }

    const currentProfile =
        profileContent[profileId] || profileContent.recruiter

    // Order projects based on selected profile
    const orderedProjects = (
        projectOrder[profileId] || projectOrder.recruiter
    )
        .map((id) => projects.find((project) => project.id === id))
        .filter(Boolean)

    // Navigate to individual project pages
    const openProject = (project) => {
        if (!project?.href) return

        navigate(project.href)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Hero action
    const handleHeroAction = () => {
        if (profileId === 'recruiter') {
            navigate('/resume')
            return
        }

        if (profileId === 'client') {
            document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
            })
            return
        }

        document.getElementById('originals')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <main className="home-page">

            {/* NAVIGATION */}
            <Navbar
                profile={profile}
                onChangeProfile={onChangeProfile}
            />

            {/* HERO SECTION */}
            <section className="hero-section" id="home">

                <div className="hero-background">
                    {portfolio.photo && (
                        <img
                            src={portfolio.photo}
                            alt="Krish Modi"
                            className="hero-profile-image"
                            onError={(event) => {
                                event.currentTarget.style.display = 'none'
                            }}
                        />
                    )}

                    <div className="hero-gradient" />
                    <div className="hero-vignette" />
                </div>

                <div className="hero-content">

                    <div className="hero-status">
                        <span className="hero-status-dot" />
                        {currentProfile.eyebrow}
                    </div>

                    <span className="hero-intro">
                        THE CREATIVE WORLD OF
                    </span>

                    <h1 className="hero-title">
                        {portfolio.name || 'KRISH MODI'}
                    </h1>

                    <h2 className="hero-role">
                        {currentProfile.heading}
                    </h2>

                    <p className="hero-tagline">
                        {portfolio.tagline}
                    </p>

                    <p className="hero-description">
                        {currentProfile.description}
                    </p>

                    <div className="hero-actions">

                        <button
                            className="hero-primary-btn"
                            onClick={handleHeroAction}
                        >
                            <Play size={17} fill="currentColor" />
                            {currentProfile.button}
                        </button>

                        <button
                            className="hero-secondary-btn"
                            onClick={() => {
                                document.getElementById('originals')?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                        >
                            <ArrowDown size={17} />
                            EXPLORE PORTFOLIO
                        </button>

                    </div>

                    <div className="hero-location">
                        <MapPin size={14} />
                        <span>{portfolio.location}</span>
                        <span className="hero-location-divider">/</span>
                        <span>{portfolio.relocation}</span>
                    </div>

                </div>

                <div className="hero-bottom-label">
                    <span>BRAND / UI / GRAPHICS</span>
                    <span>PORTFOLIO SERIES — 2026</span>
                </div>

            </section>

            {/* ORIGINAL PROJECTS */}
            <section id="originals" className="home-originals-section">

                <div className="home-section-heading">
                    <div>
                        <span className="home-section-eyebrow">
                            01 / SELECTED WORK
                        </span>

                        <h2>MY ORIGINALS.</h2>

                        <p>
                            A collection of projects, ideas and creative
                            experiences I've worked on.
                        </p>
                    </div>

                    <span className="home-section-count">
                        {String(orderedProjects.length).padStart(2, '0')} PROJECTS
                    </span>
                </div>

                <Originals
                    projects={orderedProjects}
                    onProjectClick={openProject}
                />

            </section>

            {/* SKILLS */}
            <Skills />

            {/* PROFESSIONAL JOURNEY */}
            <Journey />

            {/* ABOUT ME */}
            <About />

            {/* SERVICES */}
            <section className="home-services" id="services">

                <div className="home-section-heading">
                    <div>
                        <span className="home-section-eyebrow">
                            05 / WHAT I DO
                        </span>

                        <h2>CREATIVE SERVICES.</h2>

                        <p>
                            Combining design thinking, visual creativity
                            and technology to bring ideas to life.
                        </p>
                    </div>
                </div>

                <div className="home-services-grid">

                    <article className="home-service-card">
                        <div className="home-service-icon">
                            <Layers3 size={24} />
                        </div>

                        <span>01</span>
                        <h3>PRODUCT & UI/UX DESIGN</h3>

                        <p>
                            Digital product experiences, user interfaces,
                            wireframes, prototypes and design systems.
                        </p>
                    </article>

                    <article className="home-service-card">
                        <div className="home-service-icon">
                            <Palette size={24} />
                        </div>

                        <span>02</span>
                        <h3>BRAND & GRAPHIC DESIGN</h3>

                        <p>
                            Logo design, brand identity, posters,
                            social media creatives and visual communication.
                        </p>
                    </article>

                    <article className="home-service-card">
                        <div className="home-service-icon">
                            <Code2 size={24} />
                        </div>

                        <span>03</span>
                        <h3>FRONTEND DEVELOPMENT</h3>

                        <p>
                            Translating design concepts into responsive
                            websites and interfaces using HTML, CSS and React.
                        </p>
                    </article>

                    <article className="home-service-card">
                        <div className="home-service-icon">
                            <BriefcaseBusiness size={24} />
                        </div>

                        <span>04</span>
                        <h3>CREATIVE DESIGN</h3>

                        <p>
                            3D and 2D exploration, pitch decks,
                            editorial design and creative concepts.
                        </p>
                    </article>

                </div>

            </section>

            {/* RESUME CTA */}
            <section className="home-resume-section" id="resume">

                <div className="home-resume-content">

                    <span className="home-section-eyebrow">
                        06 / PROFESSIONAL PROFILE
                    </span>

                    <h2>
                        WANT TO KNOW
                        <span> MORE ABOUT ME?</span>
                    </h2>

                    <p>
                        Explore my professional experience,
                        education, skills and creative background
                        in my detailed resume.
                    </p>

                    <button
                        className="home-resume-btn"
                        onClick={() => navigate('/resume')}
                    >
                        VIEW MY RESUME
                        <ArrowUpRight size={18} />
                    </button>

                </div>

                <div className="home-resume-decoration">
                    <span>KRISH</span>
                    <span>MODI</span>
                    <div />
                    <small>PRODUCT & BRAND DESIGNER</small>
                </div>

            </section>

            {/* CONTACT */}

            <Contact />

            <footer className="home-footer">
                {/* Keep your existing footer content here */}
            </footer>

        </main>
    )
}

export default HomePage
