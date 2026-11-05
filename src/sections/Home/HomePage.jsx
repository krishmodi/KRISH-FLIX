
import { useNavigate } from 'react-router-dom'
import {
    Play,
    ArrowDown,
    ArrowUpRight,
    Palette,
    Layers3,
    Code2,
    Sparkles,
    Clapperboard,
    Heart,
    Eye,
    WandSparkles,
    Download
} from 'lucide-react'

import Navbar from '../../components/navigation/Navbar'
import Skills from '../Skills/Skills'
import Journey from '../Journey/Journey'
import About from '../About/About'
import Contact from '../Contact/Contact'
import StreamingRows from '../../components/cards/StreamingRows'

import { portfolio } from '../../data/portfolio'
import { projects, projectOrder } from '../../data/projects'

import './HomePage.css'
import './ProfileExperience.css'

const experiences = {
    recruiter: {
        mood: 'THE PROFESSIONAL CUT',
        chapter: 'A DESIGNER WITH A BUILDER’S MINDSET',
        story:
            'From understanding a problem to shaping the final interface, I enjoy connecting design decisions with real product experiences.'
    },

    client: {
        mood: 'THE CREATIVE PARTNERSHIP',
        chapter: 'GOOD IDEAS DESERVE GOOD EXECUTION',
        story:
            'From the first sketch to the final screen, I bring visual thinking, design craft and a practical understanding of how things get built.'
    },

    designer: {
        mood: 'THE EXPERIMENTAL CUT',
        chapter: 'NOT EVERY IDEA NEEDS TO BE NORMAL',
        story:
            'I like exploring the space between structure and chaos: where typography gets expressive, interfaces get playful and visuals tell their own stories.'
    }
}

const services = [
    {
        number: '01',
        title: 'BRAND IDENTITY',
        description: 'Making brands recognisable through thoughtful identities, logos and visual systems.',
        icon: Palette,
        note: 'MAKE IT MEMORABLE'
    },
    {
        number: '02',
        title: 'PRODUCT & UI/UX',
        description: 'Turning complicated flows into clear, useful and considered digital experiences.',
        icon: Layers3,
        note: 'MAKE IT MAKE SENSE'
    },
    {
        number: '03',
        title: 'GRAPHIC DESIGN',
        description: 'Campaign visuals, posters, presentations and design that knows how to get attention.',
        icon: Clapperboard,
        note: 'MAKE IT IMPOSSIBLE TO IGNORE'
    },
    {
        number: '04',
        title: 'DESIGN TO CODE',
        description: 'Bringing designed interfaces to life with HTML, CSS and React.',
        icon: Code2,
        note: 'MAKE IT REAL'
    }
]

const experiments = [
    {
        number: 'EXPERIMENT 001',
        mood: 'THE UNEXPECTED',
        title: 'WHAT IF DESIGN HAD A PLOT TWIST?',
        description: 'Exploring visual storytelling through composition, contrast and unexpected graphic combinations.',
        icon: Eye
    },
    {
        number: 'EXPERIMENT 002',
        mood: 'THE FEELING',
        title: 'PIXELS CAN HAVE EMOTIONS TOO.',
        description: 'Playing with colour, typography and atmosphere to make digital visuals feel more human.',
        icon: Heart
    },
    {
        number: 'EXPERIMENT 003',
        mood: 'THE IMPOSSIBLE',
        title: 'THINK IT. SKETCH IT. BUILD IT.',
        description: 'An open space for 2D, 3D, interface and motion explorations.',
        icon: WandSparkles
    }
]

function HomePage({ profile, onChangeProfile }) {
    const navigate = useNavigate()
    const profileId = profile?.id || 'recruiter'
    const experience = experiences[profileId] || experiences.recruiter

    const orderedProjects = (
        projectOrder[profileId] || projectOrder.recruiter
    )
        .map((id) => projects.find((project) => project.id === id))
        .filter(Boolean)

    const goTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const openProject = (project) => {
        if (!project?.href) return
        navigate(project.href)
    }

    const handlePrimary = () => {
        if (profileId === 'recruiter') {
            navigate('/resume')
        } else if (profileId === 'client') {
            goTo('contact')
        } else {
            goTo('creative-lab')
        }
    }

    return (
        <main className={`home-page experience-${profileId}`}>
            <Navbar
                profile={profile}
                onChangeProfile={onChangeProfile}
            />

            {/* CINEMATIC HERO */}

            {/* CINEMATIC FEATURED HERO */}
            <section className="streaming-hero" id="home">
                {(() => {
                    const featured = orderedProjects[0]

                    if (!featured) return null

                    return (
                        <>
                            <div className="streaming-hero-backdrop">
                                <img
                                    src={featured.image}
                                    alt=""
                                    className="streaming-hero-image"
                                    fetchPriority="high"
                                    onError={(event) => {
                                        event.currentTarget.style.display = 'none'
                                    }}
                                />
                                <div className="streaming-hero-overlay" />
                                <div className="streaming-hero-grain" />
                            </div>

                            <div className="streaming-hero-content">
                                <div className="streaming-featured-label">
                                    <span className="streaming-n-mark">N</span>
                                    <span>KRISH-FLIX ORIGINAL</span>
                                    <span className="streaming-label-divider">|</span>
                                    <span>FEATURED WORK</span>
                                </div>

                                <div className="streaming-hero-category">
                                    {featured.category} <span>•</span> SEASON 01
                                </div>

                                <h1 className="streaming-hero-title">
                                    {featured.title}
                                </h1>

                                <p className="streaming-hero-subtitle">
                                    {featured.subtitle}
                                </p>

                                <p className="streaming-hero-description">
                                    {profileId === 'recruiter' &&
                                        'A closer look at my design thinking, creative decisions and the work behind the final experience.'}

                                    {profileId === 'client' &&
                                        'A creative project that shows how ideas can become memorable visual and digital experiences.'}

                                    {profileId === 'designer' &&
                                        'One of the stories in my creative universe. Explore the thinking, visuals and details behind it.'}
                                </p>

                                <div className="streaming-hero-actions">
                                    <button
                                        type="button"
                                        className="streaming-watch-button"
                                        onClick={() => openProject(featured)}
                                    >
                                        <Play size={18} fill="currentColor" />
                                        VIEW PROJECT
                                    </button>

                                    <button
                                        type="button"
                                        className="streaming-info-button"
                                        onClick={() => goTo('originals')}
                                    >
                                        <ArrowDown size={18} />
                                        EXPLORE MORE
                                    </button>
                                </div>

                                <div className="streaming-hero-meta">
                                    <span className="streaming-meta-dot" />
                                    {profileId === 'recruiter' && 'PRODUCT & UI/UX DESIGN'}
                                    {profileId === 'client' && 'CREATIVE WORK & BRANDING'}
                                    {profileId === 'designer' && 'DESIGN / EXPERIMENT / CREATE'}
                                </div>
                            </div>

                            <div className="streaming-hero-bottom">
                                <span>01 / SELECTED ORIGINALS</span>
                                <span>SCROLL TO EXPLORE <ArrowDown size={13} /></span>
                            </div>
                        </>
                    )
                })()}
            </section>


            {/* PROFILE-SPECIFIC OPENING STORY */}
            <section className="experience-story">
                <div className="experience-story-label">
                    <span>THE OPENING SCENE</span>
                    <span>CHAPTER 01</span>
                </div>

                <div className="experience-story-content">
                    <p className="experience-story-kicker">
                        {experience.chapter}
                    </p>

                    <h2>
                        {profileId === 'recruiter' && (
                            <>I DON'T JUST MAKE<br /><span>THINGS LOOK GOOD.</span></>
                        )}
                        {profileId === 'client' && (
                            <>YOUR NEXT BIG IDEA<br /><span>NEEDS A GOOD STORY.</span></>
                        )}
                        {profileId === 'designer' && (
                            <>A LITTLE ORDER.<br /><span>A LOT OF CHAOS.</span></>
                        )}
                    </h2>

                    <p>{experience.story}</p>
                </div>

                <div className="experience-story-stamp">
                    <span>KM</span>
                    <small>DESIGN / CREATE / REPEAT</small>
                </div>
            </section>

            {/* ORIGINAL PROJECTS */}
            <section className="experience-projects" id="originals">
                <div className="experience-section-heading">
                    <div>
                        <span className="experience-eyebrow">
                            {profileId === 'client' ? 'THE WORK THAT SPEAKS' : 'SELECTED CREATIVE WORK'}
                        </span>

                        <h2>
                            {profileId === 'recruiter' && <>PROOF OF <span>THINKING.</span></>}
                            {profileId === 'client' && <>MADE TO <span>MATTER.</span></>}
                            {profileId === 'designer' && <>THE <span>ORIGINALS.</span></>}
                        </h2>

                        <p>
                            {profileId === 'recruiter' &&
                                'A closer look at product thinking, interface decisions and visual problem-solving.'}
                            {profileId === 'client' &&
                                'A selection of brand, digital and visual design work that shows what we could create together.'}
                            {profileId === 'designer' &&
                                'Different genres. Different moods. Same obsession with making things.'}
                        </p>
                    </div>

                    <span className="experience-project-count">
                        {String(orderedProjects.length).padStart(2, '0')} TITLES
                    </span>
                </div>

                <StreamingRows
                    profileId={profileId}
                    projects={orderedProjects}
                    onProjectClick={openProject}
                />
            </section>

            {/* RECRUITER: PROFESSIONAL STORY */}
            {profileId === 'recruiter' && (
                <>
                    <section className="experience-professional" id="professional">
                        <div className="experience-section-heading">
                            <div>
                                <span className="experience-eyebrow">THE PROFESSIONAL CUT</span>
                                <h2>THE <span>CRAFT.</span></h2>
                                <p>Design capabilities, professional experience and the tools behind the work.</p>
                            </div>
                        </div>

                        <Skills />
                        <Journey />
                        <About />

                        <div className="experience-resume-card">
                            <div>
                                <span className="experience-eyebrow">THE FULL STORY</span>
                                <h2>WANT THE <span>DETAILS?</span></h2>
                                <p>Explore my education, experience and professional background.</p>
                            </div>
                            <button onClick={() => navigate('/resume')}>
                                VIEW RESUME <Download size={17} />
                            </button>
                        </div>
                    </section>
                </>
            )}

            {/* CLIENT: SERVICE-LED EXPERIENCE */}
            {profileId === 'client' && (
                <>
                    <section className="experience-services" id="services">
                        <div className="experience-section-heading">
                            <div>
                                <span className="experience-eyebrow">THE CREATIVE MENU</span>
                                <h2>WHAT CAN WE <span>MAKE?</span></h2>
                                <p>Pick a starting point. We'll figure out the interesting part together.</p>
                            </div>
                        </div>

                        <div className="experience-service-grid">
                            {services.map((service) => {
                                const Icon = service.icon
                                return (
                                    <article className="experience-service-card" key={service.number}>
                                        <div className="experience-service-top">
                                            <span>{service.number}</span>
                                            <Icon size={23} />
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <small>{service.note}</small>
                                    </article>
                                )
                            })}
                        </div>
                    </section>

                    <section className="experience-process" id="process">
                        <span className="experience-eyebrow">NO MAGIC TRICKS. JUST GOOD PROCESS.</span>
                        <h2>FROM “WHAT IF?” TO <span>“THAT'S IT.”</span></h2>

                        <div className="experience-process-grid">
                            {[
                                ['01', 'LISTEN', 'First, I understand the idea, audience and actual problem.'],
                                ['02', 'EXPLORE', 'We look at directions, references and possibilities.'],
                                ['03', 'DESIGN', 'The chosen direction becomes a considered visual experience.'],
                                ['04', 'REFINE', 'We polish the details and prepare the final deliverables.']
                            ].map(([number, title, description]) => (
                                <article key={number}>
                                    <span>{number}</span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="experience-client-cta">
                        <span className="experience-eyebrow">YOUR IDEA IS THE NEXT EPISODE</span>
                        <h2>LET'S MAKE<br /><span>SOMETHING REAL.</span></h2>
                        <button onClick={() => goTo('contact')}>
                            TELL ME ABOUT YOUR PROJECT <ArrowUpRight size={17} />
                        </button>
                    </section>
                </>
            )}

            {/* DESIGNER: EXPERIMENTAL WORLD */}
            {profileId === 'designer' && (
                <>
                    <section className="experience-lab" id="creative-lab">
                        <div className="experience-section-heading">
                            <div>
                                <span className="experience-eyebrow">UNFINISHED IDEAS WELCOME</span>
                                <h2>THE <span>CREATIVE LAB.</span></h2>
                                <p>A space for visual curiosity, experiments and ideas that refuse to sit still.</p>
                            </div>
                            <Sparkles size={32} />
                        </div>

                        <div className="experience-experiment-grid">
                            {experiments.map((item) => {
                                const Icon = item.icon
                                return (
                                    <article className="experience-experiment" key={item.number}>
                                        <div className="experiment-visual">
                                            <span>{item.number}</span>
                                            <Icon size={52} strokeWidth={1} />
                                            <b>{item.mood}</b>
                                        </div>
                                        <div className="experiment-copy">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </section>

                    <section className="experience-manifesto">
                        <span className="experience-eyebrow">A VERY UNOFFICIAL MANIFESTO</span>
                        <h2>
                            BE CURIOUS.<br />
                            BREAK PATTERNS.<br />
                            <span>KEEP MAKING.</span>
                        </h2>
                        <p>
                            The best ideas don't always arrive looking perfect.
                            Sometimes they arrive as a sketch, a weird reference,
                            a late-night thought or a happy accident.
                        </p>
                    </section>

                    <section className="experience-toolkit" id="toolkit">
                        <span className="experience-eyebrow">THE TOOLS IN MY CREATIVE UNIVERSE</span>
                        <h2>MY <span>TOOLKIT.</span></h2>
                        <Skills />
                    </section>
                </>
            )}

            {/* CONTACT */}
            <Contact />

            <footer className="experience-footer">
                <span>KRISH MODI <b>© 2026</b></span>
                <span>{experience.mood}</span>
                <button onClick={onChangeProfile}>
                    CHANGE EXPERIENCE <ArrowUpRight size={15} />
                </button>
            </footer>
        </main>
    )
}

export default HomePage
