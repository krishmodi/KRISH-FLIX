
import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { profiles } from '../../data/profiles'
import './ProfilePicker.css'

function ProfilePicker({ onSelect }) {
    const [selectedProfile, setSelectedProfile] = useState(null)

    const handleContinue = () => {
        if (!selectedProfile) return

        onSelect?.(selectedProfile)
    }

    return (
        <main className="profile-screen">

            {/* Background */}
            <div className="profile-background">
                <div className="profile-glow" />
                <div className="profile-vignette" />
            </div>

            {/* Header */}
            <header className="profile-header">

                <a href="/" className="profile-logo">
                    KRISH MODI
                    <span>®</span>
                </a>

                <span className="profile-header-label">
                    AN ORIGINAL DESIGN PORTFOLIO
                </span>

            </header>

            {/* Main */}
            <section className="profile-main">

                <div className="profile-heading">

                    <p className="profile-eyebrow">
                        SEASON 01 &nbsp;·&nbsp; THE BEGINNING
                    </p>

                    <h1>
                        WHO'S <span>WATCHING?</span>
                    </h1>

                    <p className="profile-subheading">
                        Choose your experience.
                    </p>

                </div>

                {/* Profile cards */}
                <div className="profile-grid">

                    {profiles.map((profile, index) => {

                        const Icon = profile.icon

                        const isSelected =
                            selectedProfile?.id === profile.id

                        return (
                            <button
                                key={profile.id}
                                className={`profile-card ${isSelected ? 'selected' : ''
                                    }`}
                                onClick={() => setSelectedProfile(profile)}
                                aria-pressed={isSelected}
                                aria-label={`Select ${profile.name} profile`}
                                style={{
                                    '--profile-accent': profile.accent,
                                    '--card-delay': `${index * 120}ms`
                                }}
                            >

                                <div className="profile-avatar">

                                    <div className="profile-avatar-inner">
                                        <Icon size={43} strokeWidth={1.4} />
                                    </div>

                                    {isSelected && (
                                        <div className="profile-check">
                                            <Check size={16} />
                                        </div>
                                    )}

                                </div>

                                <div className="profile-card-info">

                                    <h2>{profile.name}</h2>

                                    <p>{profile.subtitle}</p>

                                </div>

                                <div className="profile-card-hover">
                                    EXPLORE EXPERIENCE
                                    <ArrowRight size={14} />
                                </div>

                            </button>
                        )
                    })}

                </div>

                {/* Selected profile description */}
                <div
                    className={`profile-details ${selectedProfile ? 'visible' : ''
                        }`}
                    aria-live="polite"
                >

                    {selectedProfile ? (
                        <>
                            <p className="profile-details-title">
                                {selectedProfile.name} EXPERIENCE
                            </p>

                            <p className="profile-details-description">
                                {selectedProfile.description}
                            </p>
                        </>
                    ) : (
                        <p className="profile-details-hint">
                            SELECT A PROFILE TO CONTINUE
                        </p>
                    )}

                </div>

                {/* Continue */}
                <button
                    className="profile-continue"
                    disabled={!selectedProfile}
                    onClick={handleContinue}
                >
                    CONTINUE
                    <ArrowRight size={17} />
                </button>

            </section>

            {/* Footer */}
            <footer className="profile-footer">
                <span>KRISH MODI © 2026</span>
                <span>DESIGNED WITH INTENTION.</span>
            </footer>

        </main>
    )
}

export default ProfilePicker
