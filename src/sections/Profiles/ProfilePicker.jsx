
import {
    BriefcaseBusiness,
    Layers3,
    Palette
} from 'lucide-react'

import { profiles } from '../../data/profiles'
import './ProfilePicker.css'

const profileDetails = {
    recruiter: {
        description: 'Explore my professional journey.',
        label: 'PROFESSIONAL'
    },
    client: {
        description: 'Discover what we can create together.',
        label: 'CREATIVE PARTNERSHIP'
    },
    designer: {
        description: 'Step inside my creative universe.',
        label: 'EXPERIMENTAL'
    }
}

const profileIcons = {
    recruiter: BriefcaseBusiness,
    client: Layers3,
    designer: Palette
}

function ProfilePicker({ onSelect }) {
    return (
        <main className="profile-screen profile-screen-v2">
            <div className="profile-background">
                <div className="profile-glow" />
                <div className="profile-vignette" />
            </div>

            <header className="profile-header">
                <a href="/" className="profile-logo">
                    KRISH<span>-FLIX</span>
                </a>

                <span className="profile-header-label">
                    AN ORIGINAL PORTFOLIO EXPERIENCE
                </span>
            </header>

            <section className="profile-main profile-main-v2">
                <div className="profile-heading profile-heading-v2">
                    <p className="profile-v2-kicker">
                        SELECT YOUR EXPERIENCE
                    </p>

                    <h1>
                        WHO'S <span>WATCHING?</span>
                    </h1>

                    <p className="profile-subheading">
                        Choose how you want to explore my work.
                    </p>
                </div>

                <div className="profile-grid profile-grid-v2">
                    {profiles.map((profile, index) => {
                        const Icon = profileIcons[profile.id]
                        const details = profileDetails[profile.id]

                        return (
                            <button
                                key={profile.id}
                                type="button"
                                className={`profile-card profile-card-v2 profile-${profile.id}`}
                                onClick={() => onSelect?.(profile)}
                                style={{ '--card-delay': `${index * 100}ms` }}
                                aria-label={`Open ${profile.name} experience`}
                            >
                                <div className="profile-avatar">
                                    <Icon size={38} strokeWidth={1.5} />
                                </div>

                                <h2>{profile.name}</h2>

                                <p>{details.description}</p>

                                <span className="profile-card-label">
                                    {details.label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </section>

            <footer className="profile-footer">
                <span>KRISH MODI © 2026</span>
                <span>DESIGN. CREATE. REPEAT.</span>
            </footer>
        </main>
    )
}

export default ProfilePicker
