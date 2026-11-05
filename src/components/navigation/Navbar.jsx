
import { useEffect, useState } from 'react'
import {
    Menu,
    X,
    ChevronDown
} from 'lucide-react'

import './Navbar.css'

const navigationByProfile = {
    recruiter: [
        { label: 'Home', id: 'home' },
        { label: 'Originals', id: 'originals' },
        { label: 'My Journey', id: 'professional' },
        { label: 'Contact', id: 'contact' }
    ],

    client: [
        { label: 'Home', id: 'home' },
        { label: 'My Work', id: 'originals' },
        { label: 'Services', id: 'services' },
        { label: 'Process', id: 'process' },
        { label: 'Contact', id: 'contact' }
    ],

    designer: [
        { label: 'Home', id: 'home' },
        { label: 'Originals', id: 'originals' },
        { label: 'Creative Lab', id: 'creative-lab' },
        { label: 'Toolkit', id: 'toolkit' },
        { label: 'Contact', id: 'contact' }
    ]
}

function Navbar({ profile, onChangeProfile }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    const profileId = profile?.id || 'recruiter'

    const navigation =
        navigationByProfile[profileId] || navigationByProfile.recruiter

    const scrollToSection = (id) => {
        const element = document.getElementById(id)

        if (!element) {
            setMenuOpen(false)
            return
        }

        setActiveSection(id)
        setMenuOpen(false)

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 35)

            const threshold = 170
            let current = 'home'

            navigation.forEach((item) => {
                const section = document.getElementById(item.id)

                if (!section) return

                if (section.getBoundingClientRect().top <= threshold) {
                    current = item.id
                }
            })

            setActiveSection(current)
        }

        let ticking = false

        const onScroll = () => {
            if (ticking) return

            ticking = true

            window.requestAnimationFrame(() => {
                handleScroll()
                ticking = false
            })
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [profileId])

    useEffect(() => {
        if (!menuOpen) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [menuOpen])

    const handleProfileSwitch = () => {
        setMenuOpen(false)
        onChangeProfile?.()
    }

    return (
        <header
            className={`netflix-navbar ${scrolled ? 'navbar-scrolled' : ''
                } ${menuOpen ? 'navbar-menu-open' : ''}`}
        >
            <div className="navbar-inner">

                {/* BRAND */}
                <div className="navbar-left">
                    <a
                        href="#home"
                        className="navbar-brand"
                        onClick={(event) => {
                            event.preventDefault()
                            scrollToSection('home')
                        }}
                        aria-label="KRISH-FLIX home"
                    >
                        KRISH<span>-FLIX</span>
                    </a>

                    {/* DESKTOP / MOBILE NAVIGATION */}
                    <nav
                        id="primary-navigation"
                        className={`navbar-links ${menuOpen ? 'nav-open' : ''}`}
                        aria-label="Main navigation"
                    >
                        {navigation.map((item) => (
                            <button
                                type="button"
                                key={item.id}
                                className={
                                    activeSection === item.id ? 'nav-active' : ''
                                }
                                onClick={() => scrollToSection(item.id)}
                                aria-current={
                                    activeSection === item.id ? 'location' : undefined
                                }
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* RIGHT SIDE */}
                <div className="navbar-right">

                    <span className="navbar-profile-label">
                        {profile?.name || 'RECRUITER'}
                    </span>

                    <button
                        type="button"
                        className="navbar-switch"
                        onClick={handleProfileSwitch}
                        aria-label="Switch portfolio experience"
                    >
                        <span>Switch</span>
                        <ChevronDown size={15} />
                    </button>

                    <button
                        type="button"
                        className="navbar-mobile-toggle"
                        onClick={() => setMenuOpen((previous) => !previous)}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                    >
                        {menuOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Navbar
