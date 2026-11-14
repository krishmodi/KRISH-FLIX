
import {
    BriefcaseBusiness,
    Layers3,
    Palette,
    ArrowUpRight,
    Sparkles,
} from 'lucide-react'

import { profiles } from '../../data/profiles'
import './ProfilePicker.css'

const profileDetails = {
    recruiter: {
        description: 'Explore my professional journey.',
        label: 'PROFESSIONAL',
        mood: 'THE CAREER EDITION',
        number: '01',
        symbol: 'R',
        action: 'EXPLORE PROFILE',
    },
    client: {
        description: 'Discover what we can create together.',
        label: 'CREATIVE PARTNERSHIP',
        mood: 'THE COLLABORATION EDITION',
        number: '02',
        symbol: 'C',
        action: 'DISCOVER MY WORK',
    },
    designer: {
        description: 'Step inside my creative universe.',
        label: 'EXPERIMENTAL',
        mood: 'THE CREATIVE EDITION',
        number: '03',
        symbol: 'D',
        action: 'ENTER THE LAB',
    },
}

const profileIcons = {
    recruiter: BriefcaseBusiness,
    client: Layers3,
    designer: Palette,
}

function ProfilePicker({ onSelect }) {
    return (
        <main className="profile-screen profile-screen-v2">

            {/* Cinematic background */}
            <div className="profile-background" aria-hidden="true">
                <div className="profile-glow profile-glow-one" />
                <div className="profile-glow profile-glow-two" />
                <div className="profile-vignette" />
                <div className="profile-grid-texture" />
                <div className="profile-grain" />
                <span className="profile-background-word">
                    KRISH
                </span>
            </div>

            {/* Header */}
            <header className="profile-header">
                <a href="/" className="profile-logo" aria-label="KRISH-FLIX home">
                    KRISH<span>-FLIX</span>
                    <i />
                </a>

                <div className="profile-header-right">
                    <span className="profile-header-dot" />
                    <span className="profile-header-label">
                        AN ORIGINAL PORTFOLIO EXPERIENCE
                    </span>
                </div>
            </header>

            {/* Main */}
            <section className="profile-main profile-main-v2">

                <div className="profile-heading profile-heading-v2">
                    <p className="profile-v2-kicker">
                        <Sparkles size={13} strokeWidth={1.5} />
                        SELECT YOUR EXPERIENCE
                    </p>

                    <h1>
                        WHO'S <span>WATCHING?</span>
                    </h1>

                    <p className="profile-subheading">
                        One designer. Three different perspectives.
                        <br className="profile-mobile-break" />
                        Choose how you want to explore my work.
                    </p>

                    <div className="profile-heading-line">
                        <span />
                    </div>
                </div>

                <div className="profile-grid profile-grid-v2">

                    {profiles.map((profile, index) => {
                        const Icon = profileIcons[profile.id]
                        const details = profileDetails[profile.id]

                        if (!Icon || !details) return null

                        return (
                            <button
                                key={profile.id}
                                type="button"
                                className={`profile-card profile-card-v2 profile-${profile.id}`}
                                onClick={() => onSelect?.(profile)}
                                style={{
                                    '--card-delay': `${index * 150}ms`,
                                }}
                                aria-label={`Open ${profile.name} experience`}
                            >
                                {/* Visual area */}
                                <div className="profile-card-art">
                                    <span className="profile-art-number">
                                        {details.number} / 03
                                    </span>

                                    <span className="profile-art-symbol">
                                        {details.symbol}
                                    </span>

                                    <div className="profile-art-orbit orbit-one" />
                                    <div className="profile-art-orbit orbit-two" />
                                    <div className="profile-art-orbit orbit-three" />

                                    <div className="profile-avatar">
                                        <Icon size={38} strokeWidth={1.45} />
                                    </div>

                                    <span className="profile-art-bottom">
                                        {details.mood}
                                    </span>

                                    <span className="profile-card-corner">
                                        <ArrowUpRight size={19} />
                                    </span>
                                </div>

                                {/* Card information */}
                                <div className="profile-card-info-v2">
                                    <span className="profile-card-label">
                                        {details.label}
                                    </span>

                                    <h2>{profile.name}</h2>

                                    <p>{details.description}</p>

                                    <div className="profile-enter">
                                        <span>{details.action}</span>
                                        <ArrowUpRight size={17} />
                                    </div>
                                </div>

                                <span className="profile-card-selection" />
                            </button>
                        )
                    })}

                </div>

                <p className="profile-bottom-note">
                    <span className="profile-bottom-line" />
                    YOUR EXPERIENCE STARTS HERE
                    <span className="profile-bottom-line" />
                </p>

            </section>

            {/* Footer */}
            <footer className="profile-footer">
                <span>KRISH MODI © 2026</span>

                <span className="profile-footer-center">
                    AN INDEPENDENT CREATIVE PORTFOLIO
                </span>

                <span>DESIGN. CREATE. REPEAT.</span>
            </footer>

        </main>
    )
}

export default ProfilePicker
