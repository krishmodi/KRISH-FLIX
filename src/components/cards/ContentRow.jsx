
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './ContentRow.css'

function ContentRow({ title, items = [], onProjectClick }) {
    const rowRef = useRef(null)
    const [canGoLeft, setCanGoLeft] = useState(false)
    const [canGoRight, setCanGoRight] = useState(true)

    const updateArrows = () => {
        const element = rowRef.current
        if (!element) return

        setCanGoLeft(element.scrollLeft > 5)

        setCanGoRight(
            element.scrollLeft + element.clientWidth <
            element.scrollWidth - 5
        )
    }

    const scroll = (direction) => {
        const element = rowRef.current
        if (!element) return

        element.scrollBy({
            left: direction * element.clientWidth * 0.75,
            behavior: 'smooth',
        })

        setTimeout(updateArrows, 350)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault()
            scroll(1)
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            scroll(-1)
        }
    }

    const handleDrag = (event) => {
        if (event.pointerType !== 'mouse') return

        const element = rowRef.current
        if (!element) return

        const startX = event.clientX
        const startScroll = element.scrollLeft

        const move = (moveEvent) => {
            element.scrollLeft =
                startScroll - (moveEvent.clientX - startX)
            updateArrows()
        }

        const stop = () => {
            window.removeEventListener('pointermove', move)
            window.removeEventListener('pointerup', stop)
        }

        window.addEventListener('pointermove', move)
        window.addEventListener('pointerup', stop, { once: true })
    }

    return (
        <section className="content-row">

            <div className="content-row-heading">
                <h2>{title}</h2>

                <div className="content-row-arrows">

                    <button
                        onClick={() => scroll(-1)}
                        disabled={!canGoLeft}
                        aria-label={`Scroll ${title} left`}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={() => scroll(1)}
                        disabled={!canGoRight}
                        aria-label={`Scroll ${title} right`}
                    >
                        <ChevronRight />
                    </button>

                </div>
            </div>

            <div
                className="content-row-track"
                ref={rowRef}
                tabIndex={0}
                role="region"
                aria-label={title}
                onScroll={updateArrows}
                onKeyDown={handleKeyDown}
                onPointerDown={handleDrag}
            >

                {items.map((item, index) => (
                    <button
                        key={item.id}
                        className="content-card"
                        onClick={() => onProjectClick?.(item)}
                        aria-label={`Open ${item.title} project`}
                    >

                        <div className="content-card-poster">

                            <img
                                src={item.image}
                                alt={`${item.title} project poster`}
                                loading="lazy"
                                draggable="false"
                                onError={(event) => {
                                    event.currentTarget.style.display = 'none'
                                }}
                            />

                            <div className="poster-fallback">
                                <span>KRISH MODI ORIGINAL</span>
                                <strong>{item.title}</strong>
                                <small>{item.category}</small>
                            </div>

                            <div className="poster-overlay">
                                <span>0{index + 1}</span>
                                <strong>{item.title}</strong>
                                <small>{item.category}</small>
                            </div>

                        </div>

                    </button>
                ))}

            </div>

        </section>
    )
}

export default ContentRow
