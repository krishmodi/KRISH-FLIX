import { useState } from 'react'
import { Play, Plus } from 'lucide-react'
import './OriginalPoster.css'

function OriginalPoster({ project, onClick }) {
    const [imageFailed, setImageFailed] = useState(false)

    return (
        <button
            className={`original-poster poster-${project.theme}`}
            onClick={() => onClick?.(project)}
            aria-label={`Explore ${project.title}`}
            style={{ '--poster-accent': project.accent }}
        >
            <div className="poster-artwork">

                {!imageFailed && (
                    <img
                        src={project.image}
                        alt={`${project.title} poster`}
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                )}

                {imageFailed && (
                    <div className="poster-generated-art">
                        <div className="poster-art-shape" />
                        <div className="poster-art-lines" />
                    </div>
                )}

                <div className="original-poster-shade" />

                <div className="original-poster-top">
                    <span>KRISH MODI</span>
                    <span>ORIGINAL</span>
                </div>

                <div className="original-poster-content">

                    <p className="poster-category">
                        {project.category}
                    </p>

                    <h3>{project.title}</h3>

                    <p className="poster-subtitle">
                        {project.subtitle}
                    </p>

                    <div className="poster-episode">
                        S{project.season} · E{project.episode}
                    </div>

                </div>

                <div className="original-poster-hover">
                    <span className="poster-play-icon">
                        <Play size={17} fill="currentColor" />
                    </span>

                    <span>EXPLORE PROJECT</span>
                </div>

            </div>

            <div className="poster-card-footer">
                <div>
                    <p>{project.type}</p>
                    <strong>{project.title}</strong>
                </div>

                <span className="poster-add">
                    <Plus size={17} />
                </span>
            </div>

        </button>
    )
}

export default OriginalPoster
