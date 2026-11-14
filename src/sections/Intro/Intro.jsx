
import { useCallback, useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import './Intro.css'

const INTRO_DURATION = 5800

// Original cinematic startup sound — not a recording of Netflix audio.
async function playCinematicSound() {
    const AudioContextClass =
        window.AudioContext || window.webkitAudioContext

    if (!AudioContextClass) return null

    const context = new AudioContextClass()
    await context.resume()

    const master = context.createGain()
    const compressor = context.createDynamicsCompressor()

    master.gain.setValueAtTime(0.0001, context.currentTime)
    master.gain.exponentialRampToValueAtTime(
        0.22,
        context.currentTime + 0.12
    )
    master.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + 2.4
    )

    master.connect(compressor)
    compressor.connect(context.destination)

    const now = context.currentTime

    // Deep cinematic bass impact
    const bass = context.createOscillator()
    const bassGain = context.createGain()

    bass.type = 'triangle'
    bass.frequency.setValueAtTime(72, now)
    bass.frequency.exponentialRampToValueAtTime(34, now + 1.7)

    bassGain.gain.setValueAtTime(0.8, now)
    bassGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8)

    bass.connect(bassGain)
    bassGain.connect(master)

    bass.start(now)
    bass.stop(now + 1.9)

    // Short cinematic tonal rise
    const rise = context.createOscillator()
    const riseGain = context.createGain()

    rise.type = 'sine'
    rise.frequency.setValueAtTime(180, now + 0.08)
    rise.frequency.exponentialRampToValueAtTime(520, now + 1.1)

    riseGain.gain.setValueAtTime(0.001, now)
    riseGain.gain.linearRampToValueAtTime(0.16, now + 0.35)
    riseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5)

    rise.connect(riseGain)
    riseGain.connect(master)

    rise.start(now)
    rise.stop(now + 1.6)

        // Subtle final bell tones
        ;[440, 660].forEach((frequency, index) => {
            const bell = context.createOscillator()
            const bellGain = context.createGain()
            const start = now + 0.95 + index * 0.13

            bell.type = 'sine'
            bell.frequency.setValueAtTime(frequency, start)

            bellGain.gain.setValueAtTime(0.001, start)
            bellGain.gain.linearRampToValueAtTime(0.055, start + 0.04)
            bellGain.gain.exponentialRampToValueAtTime(
                0.001,
                start + 1.1
            )

            bell.connect(bellGain)
            bellGain.connect(master)

            bell.start(start)
            bell.stop(start + 1.15)
        })

    return context
}

function Intro({ onComplete }) {
    const [soundEnabled, setSoundEnabled] = useState(false)
    const [isLeaving, setIsLeaving] = useState(false)

    const timerRef = useRef(null)
    const exitTimerRef = useRef(null)
    const audioRef = useRef(null)
    const completedRef = useRef(false)

    const stopSound = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.close().catch(() => { })
            audioRef.current = null
        }

        setSoundEnabled(false)
    }, [])

    const finishIntro = useCallback(() => {
        if (completedRef.current) return

        completedRef.current = true
        setIsLeaving(true)

        clearTimeout(timerRef.current)
        stopSound()

        exitTimerRef.current = setTimeout(() => {
            onComplete?.()
        }, 650)
    }, [onComplete, stopSound])

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        timerRef.current = setTimeout(
            finishIntro,
            reducedMotion ? 1200 : INTRO_DURATION
        )

        const handleKeyDown = (event) => {
            if (
                event.key === 'Enter' ||
                event.key === ' '
            ) {
                event.preventDefault()
                finishIntro()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            clearTimeout(timerRef.current)
            clearTimeout(exitTimerRef.current)
            window.removeEventListener('keydown', handleKeyDown)

            audioRef.current?.close().catch(() => { })
            audioRef.current = null
        }
    }, [finishIntro])

    const toggleSound = async () => {
        if (soundEnabled) {
            stopSound()
            return
        }

        try {
            const context = await playCinematicSound()

            if (!context) return

            audioRef.current = context
            setSoundEnabled(true)
        } catch (error) {
            console.warn('Intro audio could not start:', error)
            setSoundEnabled(false)
        }
    }

    return (
        <main
            className={`intro-screen ${isLeaving ? 'intro-exit' : ''}`}
            aria-label="Krish Modi portfolio introduction"
        >
            <div className="intro-background">
                <div className="intro-red-glow" />
                <div className="intro-vignette" />
                <div className="intro-grain" />
            </div>

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
                            PRODUCT DESIGNER
                        </span>
                    </div>
                </div>

                <p className="intro-description">
                    DESIGNER. CREATOR. BUILDER.
                </p>

                <div className="intro-divider" />
            </section>

            <footer className="intro-footer">
                <span className="intro-season">
                    PRODUCT DESIGN &nbsp;·&nbsp; CREATIVE THINKING
                </span>

                <div className="intro-controls">
                    <button
                        type="button"
                        className="intro-sound-button"
                        onClick={toggleSound}
                        aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
                        aria-pressed={soundEnabled}
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
                        type="button"
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
