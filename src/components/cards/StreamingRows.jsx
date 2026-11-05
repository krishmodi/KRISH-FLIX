
import { useRef } from 'react'
import {
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
    Play
} from 'lucide-react'

import './StreamingRows.css'

const collections = {
    recruiter: [
        {
            id: 'featured',
            title: 'FEATURED WORK',
            description: 'A closer look at the thinking behind the pixels.',
            mood: 'THE PROFESSIONAL CUT',
            projectIds: ['chatnation', 'saas', 'film-studio', 'navratri']
        },
        {
            id: 'product',
            title: 'PRODUCT & INTERFACE STORIES',
            description: 'Where usability meets thoughtful visual design.',
            mood: 'SOLVING THE PUZZLE',
            projectIds: ['chatnation', 'saas']
        },
        {
            id: 'visual',
            title: 'BRAND & VISUAL IDENTITY',
            description: 'Building visual worlds that give ideas a recognisable voice.',
            mood: 'MADE TO BE REMEMBERED',
            projectIds: ['film-studio', 'navratri']
        }
    ],

    client: [
        {
            id: 'brand',
            title: 'MADE FOR BRANDS',
            description: 'Identities, stories and visuals that make a lasting impression.',
            mood: 'THE CREATIVE PARTNERSHIP',
            projectIds: ['film-studio', 'navratri']
        },
        {
            id: 'digital',
            title: 'DIGITAL EXPERIENCES',
            description: 'Turning complicated digital journeys into clearer experiences.',
            mood: 'BUILT WITH PURPOSE',
            projectIds: ['chatnation', 'saas']
        },
        {
            id: 'featured',
            title: 'A LITTLE BIT OF EVERYTHING',
            description: 'Different creative challenges. Different ways to make them matter.',
            mood: 'THE CREATIVE COLLECTION',
            projectIds: ['chatnation', 'film-studio', 'saas', 'navratri']
        }
    ],

    designer: [
        {
            id: 'visual',
            title: 'THE VISUAL STORIES',
            description: 'A visual universe of identities, campaigns and compositions.',
            mood: 'THE EXPERIMENTAL CUT',
            projectIds: ['film-studio', 'navratri']
        },
        {
            id: 'digital',
            title: 'DIGITAL EXPERIMENTS',
            description: 'Interfaces, structures and ideas that deserve a closer look.',
            mood: 'PIXELS WITH A PURPOSE',
            projectIds: ['chatnation', 'saas']
        },
        {
            id: 'featured',
            title: 'THE COMPLETE COLLECTION',
            description: 'Four projects. Different genres. One creative obsession.',
            mood: 'NO SPOILERS',
            projectIds: ['chatnation', 'saas', 'film-studio', 'navratri']
        }
    ]
}

function StreamingRows({
    profileId = 'recruiter',
    projects = [],
    onProjectClick
}) {
    const rows = collections[profileId] || collections.recruiter

    const projectMap = Object.fromEntries(
        projects.map((project) => [project.id, project])
    )

    return (
        <div className={`streaming-catalogue catalogue-${profileId}`}>
            {rows.map((collection, rowIndex) => {
                const rowProjects = collection.projectIds
                    .map((id) => projectMap[id])
                    .filter(Boolean)

                if (!rowProjects.length) return null

                return (
                    <StreamingRow
                        key={collection.id}
                        collection={collection}
                        projects={rowProjects}
                        rowIndex={rowIndex}
                        onProjectClick={onProjectClick}
                    />
                )
            })}
        </div>
    )
}

function StreamingRow({
    collection,
    projects,
    rowIndex,
    onProjectClick
}) {
    const trackRef = useRef(null)

    const scrollTrack = (direction) => {
        if (!trackRef.current) return

        trackRef.current.scrollBy({
            left: direction * Math.max(trackRef.current.clientWidth * 0.75, 250),
            behavior: 'smooth'
        })
    }

    return (
        <section className="streaming-row">
            <div className="streaming-row-heading">
                <div className="streaming-row-heading-copy">
                    <span className="streaming-row-mood">
                        {collection.mood}
                    </span>

                    <h3>{collection.title}</h3>

                    <p>{collection.description}</p>
                </div>

                <div className="streaming-row-controls">
                    <button
                        type="button"
                        onClick={() => scrollTrack(-1)}
                        aria-label={`Scroll ${collection.title} left`}
                    >
                        <ChevronLeft size={19} />
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTrack(1)}
                        aria-label={`Scroll ${collection.title} right`}
                    >
                        <ChevronRight size={19} />
                    </button>
                </div>
            </div>

            <div className="streaming-row-track" ref={trackRef}>
                {projects.map((project, index) => (
                    <button
                        type="button"
                        className="streaming-project-card"
                        key={`${collection.id}-${project.id}`}
                        onClick={() => onProjectClick?.(project)}
                        style={{
                            '--card-accent': project.accent || '#E50914',
                            '--card-index': index
                        }}
                        aria-label={`View ${project.title} project`}
                    >
                        <div className="streaming-project-image">
                            <img
                                src={project.image}
                                alt={`${project.title} project artwork`}
                                loading={rowIndex === 0 ? 'eager' : 'lazy'}
                                onError={(event) => {
                                    event.currentTarget.style.display = 'none'
                                }}
                            />

                            <div className="streaming-project-image-overlay" />

                            <span className="streaming-project-number">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <span className="streaming-project-type">
                                {project.category}
                            </span>

                            <span className="streaming-project-open">
                                <ArrowUpRight size={19} />
                            </span>

                            <div className="streaming-project-hover-content">
                                <span className="streaming-project-hover-label">
                                    {project.type}
                                </span>

                                <span className="streaming-project-view">
                                    <Play size={12} fill="currentColor" />
                                    VIEW TITLE
                                </span>
                            </div>
                        </div>

                        <div className="streaming-project-info">
                            <div className="streaming-project-title-row">
                                <h4>{project.title}</h4>
                                <span className="streaming-project-episode">
                                    EP. {project.episode}
                                </span>
                            </div>

                            <p>{project.subtitle}</p>

                            <div className="streaming-project-meta">
                                <span>{project.role}</span>
                                <span className="streaming-project-meta-dot" />
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default StreamingRows
