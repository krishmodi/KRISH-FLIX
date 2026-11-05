
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    ArrowLeft,
    ArrowUpRight,
    Play,
    Layers3,
    X,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'

import { projects } from '../data/projects'
import { caseStudies } from '../data/caseStudies'
import ChatNationShowcase from '../components/projects/ChatNationShowcase'
import ProjectReadingTools from '../components/projects/ProjectReadingTools'

import './ProjectPage.css'

function ProjectPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const [activeImage, setActiveImage] = useState(null)

    const project = projects.find((item) => item.id === slug)
    const caseStudy = caseStudies[slug]

    const screenshots = project?.screenshots || []

    const currentIndex = projects.findIndex((item) => item.id === slug)
    const nextProject =
        currentIndex >= 0
            ? projects[(currentIndex + 1) % projects.length]
            : null

    const isChatNation = slug === 'chatnation'

    const closeLightbox = () => setActiveImage(null)

    const showImage = (direction) => {
        setActiveImage((current) => {
            const index = screenshots.indexOf(current)

            if (index === -1 || screenshots.length === 0) return null

            const nextIndex =
                (index + direction + screenshots.length) % screenshots.length

            return screenshots[nextIndex]
        })
    }

    useEffect(() => {
        if (!activeImage) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeLightbox()
            if (event.key === 'ArrowRight') showImage(1)
            if (event.key === 'ArrowLeft') showImage(-1)
        }

        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [activeImage, screenshots])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [slug])

    if (!project) {
        return (
            <main className="project-not-found">
                <span className="not-found-label">SIGNAL LOST / 404</span>
                <h1>NOT FOUND.</h1>
                <p>This story doesn't seem to exist in the archive.</p>

                <button type="button" onClick={() => navigate('/')}>
                    <ArrowLeft size={17} />
                    BACK TO HOME
                </button>
            </main>
        )
    }

    const goToNextProject = () => {
        if (!nextProject) return
        navigate(nextProject.href || `/projects/${nextProject.id}`)
    }

    const overview = caseStudy?.overview
    const process = caseStudy?.process || []
    const decisions = caseStudy?.decisions || []

    return (
        <main
            className="project-page"
            style={{ '--project-accent': project.accent || '#E50914' }}
        >
            <ProjectReadingTools />

            {/* Navigation */}

            <nav className="project-nav">
                <button
                    className="project-back"
                    type="button"
                    onClick={() => navigate('/')}
                    aria-label="Back to home"
                >
                    <ArrowLeft size={18} />
                    <span>BACK TO HOME</span>
                </button>

                <button
                    className="project-nav-brand"
                    type="button"
                    onClick={() => navigate('/')}
                    aria-label="Krish Modi home"
                >
                    KRISH<span>-FLIX</span>
                </button>

                <span className="project-nav-label">
                    THE PROJECT ARCHIVE
                </span>
            </nav>

            {/* Hero */}

            <section className="project-hero">
                <div className="project-hero-art">
                    <img
                        src={project.image}
                        alt={`${project.title} project artwork`}
                        onError={(event) => {
                            event.currentTarget.style.display = 'none'
                        }}
                    />
                </div>

                <div className="project-hero-grain" />

                <div className="project-hero-content">
                    <div className="project-eyebrow">
                        <span className="project-dot" />
                        {project.type}
                    </div>

                    <p className="project-category">{project.category}</p>

                    <h1>{project.title}</h1>

                    <p className="project-subtitle">{project.subtitle}</p>

                    <p className="project-description">
                        {project.description}
                    </p>

                    <div className="project-hero-actions">
                        <a href="#project-overview" className="project-primary-btn">
                            <Play size={15} fill="currentColor" />
                            EXPLORE THE PROJECT
                        </a>

                        <span className="project-season">
                            {project.year}
                            <span>•</span>
                            {project.role}
                        </span>
                    </div>
                </div>

                <div className="project-cover-index">
                    <span>KRISH MODI</span>
                    <span>ORIGINAL WORK / {project.episode}</span>
                </div>
            </section>

            {/* Overview */}

            <section className="project-overview" id="project-overview">
                <div className="project-section-heading">
                    <span className="project-section-number">
                        01 / THE STORY
                    </span>

                    <h2>
                        A closer look<span>.</span>
                    </h2>

                    <p>
                        Every project starts with a thought. Here's a look at this one.
                    </p>
                </div>

                <div className="project-overview-grid">
                    <div className="project-overview-main">
                        <p className="project-label">THE PROJECT</p>

                        <h3>{overview?.title || project.title}</h3>

                        <p className="project-overview-description">
                            {caseStudy?.introduction || project.description}
                        </p>

                        {overview?.description && (
                            <p className="project-overview-description project-overview-secondary">
                                {overview.description}
                            </p>
                        )}

                        <div className="project-overview-note">
                            <span>THE CREATIVE DIRECTION</span>
                            <p>
                                Explore the thinking, visual direction and creative
                                details behind this project through the work showcased below.
                            </p>
                        </div>
                    </div>

                    <aside className="project-meta">
                        <div className="project-meta-item">
                            <span>MY ROLE</span>
                            <strong>{project.role}</strong>
                        </div>

                        <div className="project-meta-item">
                            <span>DISCIPLINE</span>
                            <strong>{project.category}</strong>
                        </div>

                        <div className="project-meta-item">
                            <span>YEAR</span>
                            <strong>{project.year}</strong>
                        </div>

                        <div className="project-meta-item">
                            <span>WHAT'S INCLUDED</span>
                            <div className="project-service-list">
                                {project.services?.map((service) => (
                                    <span key={service}>{service}</span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Challenge */}

            {caseStudy && (
                <div className="case-study-content">

                    <section className="case-study-section">
                        <div className="project-section-heading">
                            <span className="project-section-number">
                                02 / THE CREATIVE CHALLENGE
                            </span>

                            <h2>
                                {caseStudy.challenge.title}
                                <span>.</span>
                            </h2>

                            <p>{caseStudy.challenge.description}</p>
                        </div>

                        <div className="case-study-challenge-grid">
                            {caseStudy.challenge.points.map((point, index) => (
                                <article key={point}>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    <p>{point}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Approach */}

                    <section className="case-study-section case-study-research">
                        <div className="project-section-heading">
                            <span className="project-section-number">
                                03 / THE APPROACH
                            </span>

                            <h2>
                                {caseStudy.approach.title}
                                <span>.</span>
                            </h2>

                            <p>{caseStudy.approach.description}</p>
                        </div>

                        <p className="research-note">
                            {caseStudy.approach.note}
                        </p>
                    </section>

                    {/* Process */}

                    <section className="case-study-section">
                        <div className="project-section-heading">
                            <span className="project-section-number">
                                04 / THE PROCESS
                            </span>

                            <h2>
                                From idea to final work<span>.</span>
                            </h2>

                            <p>
                                A look at the stages that shaped this creative project.
                            </p>
                        </div>

                        <div className="project-process-grid">
                            {process.map((step) => (
                                <article key={step.number}>
                                    <span className="process-index">{step.number}</span>
                                    <p className="process-kicker">PROJECT JOURNEY</p>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Design decisions */}

                    <section className="case-study-section case-study-decisions">
                        <div className="project-section-heading">
                            <span className="project-section-number">
                                05 / DESIGN THINKING
                            </span>

                            <h2>
                                Little details. Better experiences<span>.
                                </span>
                            </h2>
                        </div>

                        <div className="design-decision-grid">
                            {decisions.map((decision, index) => (
                                <article key={decision.title}>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    <h3>{decision.title}</h3>
                                    <p>{decision.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Reflection */}

                    <section className="case-study-reflection">
                        <span>THE FINAL THOUGHT</span>
                        <h2>{caseStudy.reflection.title}</h2>
                        <p>{caseStudy.reflection.description}</p>
                    </section>

                </div>
            )}

            {/* ChatNation interactive screen explorer */}

            {isChatNation && <ChatNationShowcase />}

            {/* Visual archive for other projects */}

            {!isChatNation && (
                <section className="project-gallery" id="project-gallery">
                    <div className="project-section-heading">
                        <span className="project-section-number">
                            06 / THE VISUAL ARCHIVE
                        </span>

                        <h2>
                            {caseStudy?.galleryTitle || 'Frames from the process'}
                            <span>.</span>
                        </h2>

                        <p>
                            {caseStudy?.galleryDescription ||
                                'Selected screens, compositions and visual explorations.'}
                        </p>
                    </div>

                    {screenshots.length > 0 ? (
                        <div className="project-gallery-grid">
                            {screenshots.map((image, index) => (
                                <button
                                    className="project-gallery-item"
                                    key={`${image}-${index}`}
                                    type="button"
                                    onClick={() => setActiveImage(image)}
                                    aria-label={`View project image ${index + 1}`}
                                >
                                    <img
                                        src={image}
                                        alt={`${project.title} visual ${index + 1}`}
                                        loading="lazy"
                                    />

                                    <span className="gallery-image-index">
                                        VIEW {String(index + 1).padStart(2, '0')}
                                        <ArrowUpRight size={16} />
                                    </span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="project-gallery-empty">
                            <div className="gallery-empty-icon">
                                <Layers3 size={28} strokeWidth={1.3} />
                            </div>

                            <span>THE VISUAL ARCHIVE</span>
                            <h3>More frames are coming.</h3>

                            <p>
                                Project visuals and mockups will appear here as
                                the final assets are added.
                            </p>
                        </div>
                    )}
                </section>
            )}

            {/* Next project */}

            <section className="project-next">
                <div className="project-next-inner">
                    <div>
                        <p className="project-next-kicker">END OF THIS STORY</p>
                        <h2>
                            There's more
                            <br />
                            to explore<span>.</span>
                        </h2>
                    </div>

                    {nextProject && (
                        <button
                            className="project-next-card"
                            type="button"
                            onClick={goToNextProject}
                        >
                            <span>UP NEXT</span>
                            <strong>{nextProject.title}</strong>
                            <small>{nextProject.category}</small>

                            <span className="project-next-arrow">
                                <ArrowUpRight size={23} />
                            </span>
                        </button>
                    )}
                </div>
            </section>

            {/* Footer */}

            <footer className="project-footer">
                <span>KRISH MODI</span>
                <span>DESIGNED WITH INTENTION.</span>

                <button type="button" onClick={() => navigate('/')}>
                    BACK TO HOME ↑
                </button>
            </footer>

            {/* Lightbox */}

            {activeImage && (
                <div
                    className="project-lightbox"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Project image preview"
                >
                    <button
                        className="lightbox-close"
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close image preview"
                    >
                        <X size={24} />
                    </button>

                    {screenshots.length > 1 && (
                        <>
                            <button
                                className="lightbox-arrow lightbox-prev"
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    showImage(-1)
                                }}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={28} />
                            </button>

                            <button
                                className="lightbox-arrow lightbox-next"
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    showImage(1)
                                }}
                                aria-label="Next image"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    <img
                        src={activeImage}
                        alt={`${project.title} enlarged preview`}
                        onClick={(event) => event.stopPropagation()}
                    />

                    <span className="lightbox-counter">
                        {String(screenshots.indexOf(activeImage) + 1).padStart(2, '0')}
                        {' / '}
                        {String(screenshots.length).padStart(2, '0')}
                    </span>
                </div>
            )}
        </main>
    )
}

export default ProjectPage
