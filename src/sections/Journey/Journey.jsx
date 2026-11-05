
import {
    BriefcaseBusiness,
    GraduationCap,
    MapPin,
    ArrowUpRight,
    CalendarDays,
    MoveUpRight
} from 'lucide-react'

import './Journey.css'

const experiences = [
    {
        id: 'starline',
        number: '01',
        role: 'Senior UI/UX & Graphics Designer',
        company: 'STARLINE SOLUTION PVT LTD',
        period: 'SEP 2025 — PRESENT',
        location: 'India',
        description:
            'Working across UI/UX design, graphic design and frontend implementation to create digital experiences and visual communication.',
        responsibilities: ['UI/UX Design', 'Graphic Design', 'HTML & CSS', 'React'],
        current: true
    },
    {
        id: 'aavatto',
        number: '02',
        role: 'Junior UI/UX & Graphics Designer',
        company: 'AAVATTO PVT LTD',
        period: 'JUN 2024 — JUN 2025',
        location: 'India',
        description:
            'Worked on UI/UX and graphic design assignments, contributing to digital product interfaces and visual design deliverables.',
        responsibilities: ['UI/UX Design', 'Graphic Design'],
        current: false
    }
]

const education = [
    {
        id: 'ganpat',
        number: '01',
        degree: 'B.TECH',
        subject: 'INFORMATION TECHNOLOGY',
        institution: 'GANPAT UNIVERSITY',
        period: '2021 — 2025',
        result: 'CGPA 7.98',
        description: 'Bachelor of Technology in Information Technology.'
    },
    {
        id: 'school',
        number: '02',
        degree: 'SCHOOL EDUCATION',
        subject: 'HIGHER SECONDARY / SCHOOL',
        institution: '[ADD SCHOOL NAME]',
        period: 'PASSED OUT 2021',
        result: 'FIRST DIVISION',
        description: 'Completed school education with first division.'
    }
]

function Journey() {
    return (
        <section className="journey-section" id="journey">

            {/* Heading */}

            <div className="journey-topline">
                <span>03 / THE JOURNEY</span>
                <span>EXPERIENCE & EDUCATION</span>
            </div>

            <div className="journey-heading">
                <span className="journey-eyebrow">
                    EVERY CHAPTER COUNTS
                </span>

                <h2>
                    EVERY DESIGNER
                    <span> HAS A STORY.</span>
                </h2>

                <p>
                    A timeline of the places I've worked, the
                    knowledge I've built and the experiences
                    that continue to shape my design journey.
                </p>
            </div>

            {/* Professional experience */}

            <div className="journey-block">

                <div className="journey-block-heading">
                    <div className="journey-heading-icon">
                        <BriefcaseBusiness size={20} strokeWidth={1.5} />
                    </div>

                    <div>
                        <span>THE PROFESSIONAL CHAPTERS</span>
                        <h3>Where I've worked.</h3>
                    </div>

                    <span className="journey-block-count">02 EXPERIENCES</span>
                </div>

                <div className="journey-timeline">
                    {experiences.map((item) => (
                        <article
                            className={`journey-card ${item.current ? 'journey-current' : ''}`}
                            key={item.id}
                        >
                            <div className="journey-marker">
                                <BriefcaseBusiness size={17} />
                            </div>

                            <div className="journey-card-content">

                                <div className="journey-card-top">
                                    <span className="journey-card-number">
                                        CHAPTER {item.number}
                                    </span>

                                    {item.current && (
                                        <span className="journey-current-badge">
                                            <span />
                                            CURRENT ROLE
                                        </span>
                                    )}
                                </div>

                                <h4>{item.role}</h4>
                                <h5>{item.company}</h5>

                                <div className="journey-card-meta">
                                    <span>
                                        <CalendarDays size={14} />
                                        {item.period}
                                    </span>

                                    <span>
                                        <MapPin size={14} />
                                        {item.location}
                                    </span>
                                </div>

                                <p className="journey-card-description">
                                    {item.description}
                                </p>

                                <div className="journey-responsibilities">
                                    {item.responsibilities.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>

                            </div>

                            <MoveUpRight
                                className="journey-card-arrow"
                                size={20}
                                strokeWidth={1.4}
                            />
                        </article>
                    ))}
                </div>
            </div>

            {/* Education */}

            <div className="journey-block education-block">

                <div className="journey-block-heading">
                    <div className="journey-heading-icon">
                        <GraduationCap size={21} strokeWidth={1.5} />
                    </div>

                    <div>
                        <span>THE LEARNING CHAPTERS</span>
                        <h3>Where it started.</h3>
                    </div>

                    <span className="journey-block-count">02 QUALIFICATIONS</span>
                </div>

                <div className="education-grid">
                    {education.map((item) => (
                        <article className="education-card" key={item.id}>

                            <div className="education-card-top">
                                <span className="education-number">
                                    {item.number}
                                </span>

                                <span className="education-period">
                                    {item.period}
                                </span>
                            </div>

                            <h4>{item.degree}</h4>
                            <h5>{item.subject}</h5>

                            <div className="education-card-divider" />

                            <p className="education-institution">
                                {item.institution}
                            </p>

                            <p className="education-description">
                                {item.description}
                            </p>

                            <div className="education-result">
                                {item.result}
                            </div>

                        </article>
                    ))}
                </div>
            </div>

            {/* Closing statement */}

            <div className="journey-ending">

                <div className="journey-ending-topline">
                    <span className="journey-ending-dot" />
                    THE STORY IS STILL BEING WRITTEN.
                </div>

                <div className="journey-ending-content">
                    <span className="journey-ending-kicker">
                        THE NEXT CHAPTER
                    </span>

                    <h3>
                        MORE TO
                        <span> CREATE.</span>
                    </h3>

                    <p>
                        Looking forward to new challenges, meaningful
                        collaborations and opportunities to create
                        something extraordinary.
                    </p>

                    <a href="#contact">
                        LET'S CREATE SOMETHING
                        <ArrowUpRight size={17} />
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Journey
