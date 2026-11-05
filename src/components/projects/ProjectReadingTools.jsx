
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import './ProjectReadingTools.css'

function ProjectReadingTools() {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(0)
    const [showBackButton, setShowBackButton] = useState(false)

    useEffect(() => {
        const updateScroll = () => {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight

            const currentProgress =
                scrollableHeight > 0
                    ? (window.scrollY / scrollableHeight) * 100
                    : 0

            setProgress(Math.min(100, Math.max(0, currentProgress)))
            setShowBackButton(window.scrollY > 450)
        }

        updateScroll()

        window.addEventListener('scroll', updateScroll, { passive: true })
        window.addEventListener('resize', updateScroll)

        return () => {
            window.removeEventListener('scroll', updateScroll)
            window.removeEventListener('resize', updateScroll)
        }
    }, [])

    return (
        <>
            <div
                className="project-reading-progress"
                role="progressbar"
                aria-label="Project reading progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
            >
                <div
                    className="project-reading-progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <button
                type="button"
                className={`project-floating-back ${showBackButton ? 'visible' : ''}`}
                onClick={() => navigate('/')}
                aria-label="Back to projects"
                tabIndex={showBackButton ? 0 : -1}
            >
                <ArrowLeft size={17} />
                <span>BACK TO PROJECTS</span>
            </button>
        </>
    )
}

export default ProjectReadingTools
