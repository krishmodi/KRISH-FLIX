import { useNavigate, useParams } from 'react-router-dom'
import {
    ArrowLeft,
    ArrowUpRight,
    Play,
    Layers3
} from 'lucide-react'

import { projects } from '../data/projects'
import './ProjectPage.css'

function ProjectPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const project = projects.find(
        (item) => item.id === slug
    )

    if (!project) {
        return (
            <main className="project-not-found">
                <h1>404</h1>
                <p>This project could not be found.</p>
                <button onClick={() => navigate('/')}>
                    <ArrowLeft size={16} />
                    Back to Home
                </button>
            </main>
        )
    }

    return (
        <main className="project-page">

            {/* Navigation */}
            <nav className="project-nav">
                <button
                    className="project-back"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft size={18} />
                    <span>BACK TO HOME</span>
                </button>

                <span className="project-nav-brand">
                    KRISH MODI <span>®</span>
                </span>

                <span className="project-nav-label">
                    PROJECT DETAILS
                </span>
            </nav>

            {/* Hero */}
            <section
                className="project-hero"
                style={{ '--project-accent': project.accent }}
            >
                <div className="project-hero-content">

                    <div className="project-eyebrow">
                        <span className="project-dot" />
                        {project.type}
                    </div>

                    <p className="project-category">
                        {project.category}
                    </p>

                    <h1>{project.title}</h1>

                    <p className="project-subtitle">
                        {project.subtitle}
                    </p>

                    <p className="project-description">
                        {project.description}
                    </p>

                    <div className="project-hero-actions">
                        <a href="#project-overview" className="project-primary-btn">
                            <Play size={17} fill="currentColor" />
                            EXPLORE PROJECT
                        </a>

                        <span className="project-season">
                            SEASON {project.season} · EPISODE {project.episode}
                        </span>
                    </div>
                </div>

                <div className="project-hero-art">
                    <img
                        src={project.image}
                        alt={`${project.title} project artwork`}
                        onError={(event) => {
                            event.currentTarget.style.display = 'none'
                        }}
                    />
                    <div className="project-art-overlay" />
                </div>
            </section>

            {/* Project Information */}
            <section
                className="project-overview"
                id="project-overview"
            >
                <div className="project-section-heading">
                    <span>01 / THE PROJECT</span>
                    <h2>Inside the story.</h2>
                </div>

                <div className="project-overview-grid">

                    <div className="project-overview-main">
                        <p className="project-label">OVERVIEW</p>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <p className="project-placeholder">
                            Add a detailed project story here: the background,
                            objective, your responsibilities and the final
                            design decisions.
                        </p>
                    </div>

                    <div className="project-meta">

                        <div className="project-meta-item">
                            <span>MY ROLE</span>
                            <strong>{project.role}</strong>
                        </div>

                        <div className="project-meta-item">
                            <span>CATEGORY</span>
                            <strong>{project.category}</strong>
                        </div>

                        <div className="project-meta-item">
                            <span>YEAR</span>
                            <strong>{project.year}</strong>
                        </div>

                        <div className="project-meta-item">
                            <span>DELIVERABLES</span>
                            <div className="project-service-list">
                                {project.services?.map((service) => (
                                    <span key={service}>{service}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="project-process">
                <div className="project-section-heading">
                    <span>02 / THE PROCESS</span>
                    <h2>From thinking to making.</h2>
                </div>

                <div className="project-process-grid">
                    <article>
                        <span>01</span>
                        <h3>DISCOVER</h3>
                        <p>
                            Add the project background, research, user needs
                            and the problem you wanted to solve.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>DEFINE</h3>
                        <p>
                            Explain the creative direction, design strategy
                            and key decisions behind the project.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>DESIGN</h3>
                        <p>
                            Showcase wireframes, visual exploration,
                            interface design or brand development.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <h3>DELIVER</h3>
                        <p>
                            Add final deliverables, project outcomes
                            and any measurable results you can verify.
                        </p>
                    </article>
                </div>
            </section>

            {/* Gallery */}
            <section className="project-gallery">
                <div className="project-section-heading">
                    <span>03 / SELECTED VISUALS</span>
                    <h2>The visual archive.</h2>
                </div>

                {project.screenshots?.length > 0 ? (
                    <div className="project-gallery-grid">
                        {project.screenshots.map((image, index) => (
                            <figure key={`${image}-${index}`}>
                                <img
                                    src={image}
                                    alt={`${project.title} visual ${index + 1}`}
                                    loading="lazy"
                                />
                            </figure>
                        ))}
                    </div>
                ) : (
                    <div className="project-gallery-empty">
                        <Layers3 size={30} />
                        <h3>Visuals coming soon</h3>
                        <p>
                            Add your project screenshots and mockups
                            to bring this case study to life.
                        </p>
                    </div>
                )}
            </section>

            {/* Next Project */}
            <section className="project-next">
                <p>THE NEXT STORY</p>
                <h2>Keep exploring.</h2>

                <button
                    onClick={() => {
                        const currentIndex = projects.findIndex(
                            (item) => item.id === project.id
                        )

                        const nextProject =
                            projects[(currentIndex + 1) % projects.length]

                        navigate(nextProject.href)
                        window.scrollTo(0, 0)
                    }}
                >
                    NEXT PROJECT
                    <ArrowUpRight size={20} />
                </button>
            </section>

            <footer className="project-footer">
                <span>KRISH MODI</span>
                <span>DESIGNED WITH INTENTION.</span>
                <button onClick={() => navigate('/')}>
                    BACK TO HOME ↑
                </button>
            </footer>

        </main>
    )
}

export default ProjectPage