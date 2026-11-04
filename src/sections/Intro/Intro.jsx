
import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import './Intro.css'

const INTRO_DURATION = 5800

function playCinematicSound() {
    const AudioContext =
        window.AudioContext || window.webkitAudioContext

    if (!AudioContext) return null

    const context = new AudioContext()
    const master = context.createGain()

    master.gain.setValueAtTime(0.0001, context.currentTime)
    master.gain.exponentialRampToValueAtTime(
        0.12,
        context.currentTime + 0.15
    )
    master.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + 1.8
    )

    master.connect(context.destination)

    // Original synthesized cinematic low-frequency sweep
    const oscillator = context.createOscillator()
    const oscillatorGain = context.createGain()

    oscillator.type = 'sawtooth'
    oscillator.frequency.setValueAtTime(
        90,
        context.currentTime
    )
    oscillator.frequency.exponentialRampToValueAtTime(
        38,
        context.currentTime + 1.6
    )

    oscillatorGain.gain.value = 0.35

    oscillator.connect(oscillatorGain)
    oscillatorGain.connect(master)

    oscillator.start()
    oscillator.stop(context.currentTime + 1.9)

    return context
}

function Intro({ onComplete }) {
    const [soundEnabled, setSoundEnabled] = useState(false)
    const [isLeaving, setIsLeaving] = useState(false)

    const timerRef = useRef(null)
    const audioRef = useRef(null)
    const completedRef = useRef(false)

    const finishIntro = () => {
        if (completedRef.current) return

        completedRef.current = true
        setIsLeaving(true)

        clearTimeout(timerRef.current)

        audioRef.current?.close().catch(() => { })
        audioRef.current = null

        setTimeout(() => {
            onComplete?.()
        }, 650)
    }

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        timerRef.current = setTimeout(
            finishIntro,
            reducedMotion ? 1200 : INTRO_DURATION
        )

        const handleKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                finishIntro()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', handleKeyDown)
            audioRef.current?.close().catch(() => { })
        }
    }, [])

    const toggleSound = async () => {
        if (soundEnabled) {
            audioRef.current?.close().catch(() => { })
            audioRef.current = null
            setSoundEnabled(false)
            return
        }

        try {
            audioRef.current = playCinematicSound()

            if (audioRef.current?.state === 'suspended') {
                await audioRef.current.resume()
            }

            setSoundEnabled(Boolean(audioRef.current))
        } catch {
            setSoundEnabled(false)
        }
    }

    return (
        <main
            className={`intro-screen ${isLeaving ? 'intro-exit' : ''}`}
            aria-label="Krish Modi portfolio introduction"
        >
            {/* Background atmosphere */}
            <div className="intro-background">
                <div className="intro-red-glow" />
                <div className="intro-vignette" />
                <div className="intro-grain" />
            </div>

            {/* Intro content */}
            <section className="intro-content">

                <p className="intro-eyebrow">
                    AN ORIGINAL PORTFOLIO EXPERIENCE
                </p>

                <div className="intro-title-wrapper">
                    <h1 className="intro-name">
                        KRISH MODI
                    </h1>

                    <div className="intro-series-wrapper">
                        <span className="intro-series">
                            THE SERIES
                        </span>
                    </div>
                </div>

                <p className="intro-description">
                    DESIGNER. CREATOR. BUILDER.
                </p>

                <div className="intro-divider" />

            </section>

            {/* Bottom controls */}
            <footer className="intro-footer">

                <span className="intro-season">
                    SEASON 01 &nbsp;·&nbsp; THE BEGINNING
                </span>

                <div className="intro-controls">

                    <button
                        className="intro-sound-button"
                        onClick={toggleSound}
                        aria-label={
                            soundEnabled ? 'Mute sound' : 'Enable sound'
                        }
                    >
                        {soundEnabled
                            ? <Volume2 size={17} />
                            : <VolumeX size={17} />
                        }

                        <span>
                            {soundEnabled ? 'SOUND ON' : 'SOUND OFF'}
                        </span>
                    </button>

                    <button
                        className="intro-skip-button"
                        onClick={finishIntro}
                    >
                        SKIP INTRO
                        <span>↗</span>
                    </button>

                </div>
            </footer>

        </main>
    )
}

export default Intro
