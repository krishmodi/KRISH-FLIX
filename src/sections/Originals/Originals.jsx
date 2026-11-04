
import OriginalPoster from '../../components/cards/OriginalPoster'
import './Originals.css'

function Originals({ projects, onProjectClick }) {
    return (
        <section className="originals-section" id="originals">

            <div className="originals-heading">

                <div>
                    <p className="section-eyebrow">
                        EXCLUSIVE CREATIVE COLLECTION
                    </p>

                    <h2>
                        KRISH MODI <span>ORIGINALS</span>
                    </h2>

                    <p className="originals-description">
                        Selected projects. Different stories. One creative mind.
                    </p>
                </div>

                <div className="originals-count">
                    <strong>{String(projects.length).padStart(2, '0')}</strong>
                    <span>PROJECTS</span>
                </div>

            </div>

            <div className="originals-grid">

                {projects.map(project => (
                    <OriginalPoster
                        key={project.id}
                        project={project}
                        onClick={onProjectClick}
                    />
                ))}

            </div>

            <div className="originals-bottom">
                <span>AN ONGOING CREATIVE COLLECTION</span>
                <span>MORE STORIES TO COME →</span>
            </div>

        </section>
    )
}

export default Originals
