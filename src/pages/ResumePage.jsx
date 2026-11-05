import { useNavigate } from 'react-router-dom'
import {
    ArrowLeft,
    Download,
    Mail,
    MapPin,
    BriefcaseBusiness,
    GraduationCap,
    ExternalLink
} from 'lucide-react'

import './ResumePage.css'

const experience = [
    {
        company: 'STARLINE SOLUTION PVT LTD',
        role: 'Senior UI/UX & Graphics Designer',
        period: 'September 2025 — Present',
        description:
            'Working across UI/UX design, graphic design and frontend implementation.',
        points: [
            'Designing digital product interfaces and user experiences.',
            'Creating graphic design and visual communication assets.',
            'Working with HTML, CSS and React for frontend implementation.'
        ]
    },
    {
        company: 'AAVATTO PVT LTD',
        role: 'Junior UI/UX & Graphics Designer',
        period: 'June 2024 — June 2025',
        description:
            'Contributed to UI/UX and graphic design assignments.',
        points: [
            'Worked on user interface and user experience design.',
            'Created graphic design deliverables for digital projects.'
        ]
    }
]

const skills = [
    'Product Design',
    'UI/UX Design',
    'User Research',
    'Wireframing',
    'Prototyping',
    'Design Systems',
    'Brand Identity',
    'Logo Design',
    'Graphic Design',
    'Social Media Design',
    'Poster Design',
    '3D & 2D Design',
    'HTML',
    'CSS',
    'React'
]

const tools = [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Canva',
    'HTML',
    'CSS',
    'React'
]

function ResumePage() {
    const navigate = useNavigate()

    const handlePrint = () => {
        window.print()
    }

    return (
        <main className="resume-page">

            {/* Top navigation */}
            <div className="resume-toolbar no-print">
                <button onClick={() => navigate('/')}>
                    <ArrowLeft size={17} />
                    BACK TO PORTFOLIO
                </button>

                <button
                    className="resume-download"
                    onClick={handlePrint}
                >
                    <Download size={16} />
                    SAVE AS PDF
                </button>
            </div>

            {/* Resume document */}
            <article className="resume-document">

                {/* Header */}
                <header className="resume-header">

                    <div>
                        <span className="resume-overline">
                            PRODUCT & BRAND DESIGNER
                        </span>

                        <h1>KRISH MODI</h1>

                        <p className="resume-header-description">
                            UI/UX DESIGNER · GRAPHICS DESIGNER ·
                            3D & 2D DESIGNER
                        </p>
                    </div>

                    <div className="resume-contact">
                        <span>
                            <MapPin size={14} />
                            Ahmedabad, India
                        </span>

                        <span>
                            <Mail size={14} />
                            krishpmodi@gmail.com
                        </span>

                        <span>
                            <ExternalLink size={14} />
                            https://krish-flix-six.vercel.app/
                        </span>
                    </div>

                </header>

                {/* Summary */}
                <section className="resume-block">
                    <div className="resume-section-title">
                        <span>01</span>
                        <h2>PROFESSIONAL SUMMARY</h2>
                    </div>

                    <p className="resume-summary">
                        Product & Brand Designer with experience in
                        UI/UX design, graphic design and frontend
                        implementation. I have reshaped the interfaces
                        of several software products and built branding
                        for new brands. I design, and I also code what
                        I design in HTML, CSS and React.
                    </p>
                </section>

                {/* Experience */}
                <section className="resume-block">
                    <div className="resume-section-title">
                        <span>02</span>
                        <h2>PROFESSIONAL EXPERIENCE</h2>
                    </div>

                    <div className="resume-experience-list">
                        {experience.map((item) => (
                            <article
                                className="resume-experience"
                                key={item.company}
                            >
                                <div className="resume-experience-heading">
                                    <div>
                                        <h3>{item.company}</h3>
                                        <h4>{item.role}</h4>
                                    </div>

                                    <span className="resume-period">
                                        {item.period}
                                    </span>
                                </div>

                                <p>{item.description}</p>

                                <ul>
                                    {item.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="resume-block">
                    <div className="resume-section-title">
                        <span>03</span>
                        <h2>CORE SKILLS</h2>
                    </div>

                    <div className="resume-skills">
                        {skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>
                </section>

                {/* Tools */}
                <section className="resume-block">
                    <div className="resume-section-title">
                        <span>04</span>
                        <h2>TOOLS & TECHNOLOGIES</h2>
                    </div>

                    <div className="resume-tools">
                        {tools.map((tool) => (
                            <span key={tool}>{tool}</span>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="resume-block">
                    <div className="resume-section-title">
                        <span>05</span>
                        <h2>EDUCATION</h2>
                    </div>

                    <div className="resume-education">
                        <div>
                            <GraduationCap size={20} />

                            <div>
                                <h3>GANPAT UNIVERSITY</h3>
                                <p>B.Tech — Information Technology</p>
                                <span>2021 — 2025</span>
                            </div>
                        </div>

                        <strong>CGPA 7.98</strong>
                    </div>

                    <div className="resume-education secondary-education">
                        <div>
                            <GraduationCap size={20} />

                            <div>
                                <h3>Shree JMC Sarvajanik Vidyalaya</h3>
                                <p>School Education</p>
                                <span>Passed out 2021</span>
                            </div>
                        </div>

                        <strong>FIRST DIVISION</strong>
                    </div>
                </section>

                {/* Footer */}
                <footer className="resume-footer">
                    <span>KRISH MODI</span>
                    <span>DESIGN WITH PURPOSE. BUILD WITH INTENTION.</span>
                </footer>

            </article>

            <div className="resume-bottom-note no-print">
                <BriefcaseBusiness size={15} />
                <span>
                    Looking for full-time opportunities and freelance
                    collaborations.
                </span>
            </div>

        </main>
    )
}

export default ResumePage