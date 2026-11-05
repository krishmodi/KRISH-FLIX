
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import {
    ArrowUpRight,
    Send,
    MapPin,
    Mail,
    CheckCircle2,
    AlertCircle,
    LoaderCircle
} from 'lucide-react'

import { portfolio } from '../../data/portfolio'
import './Contact.css'

const initialForm = {
    from_name: '',
    from_email: '',
    inquiry_type: 'Full-time opportunity',
    message: ''
}

function Contact() {
    const formRef = useRef(null)

    const [status, setStatus] = useState('idle')
    const [statusMessage, setStatusMessage] = useState('')
    const [formData, setFormData] = useState(initialForm)

    const updateField = (event) => {
        const { name, value } = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }))

        // Clear old feedback when the visitor edits the form.
        if (status !== 'sending') {
            setStatus('idle')
            setStatusMessage('')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (status === 'sending') return

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
            setStatus('error')
            setStatusMessage(
                'The email service is temporarily unavailable. Please contact me directly.'
            )
            return
        }

        setStatus('sending')
        setStatusMessage('')

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                { publicKey }
            )

            setStatus('success')
            setStatusMessage(
                'Your message has been sent successfully. Thank you for reaching out!'
            )

            setFormData(initialForm)
            formRef.current?.reset()
        } catch (error) {
            console.error('EmailJS submission failed:', error)

            setStatus('error')
            setStatusMessage(
                'Your message could not be sent. Please try again or contact me directly.'
            )
        }
    }

    const email =
        portfolio.email && portfolio.email !== '[add]'
            ? portfolio.email
            : ''

    const location = portfolio.location || 'Ahmedabad, India'
    const availability =
        portfolio.availability || 'Open to opportunities'

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <div className="contact-topbar">
                    <span className="contact-eyebrow">
                        07 / LET'S CONNECT
                    </span>

                    <span className="contact-availability">
                        <span className="availability-dot" />
                        {availability.toUpperCase()}
                    </span>
                </div>

                <div className="contact-layout">

                    <div className="contact-intro">
                        <p className="contact-small-label">
                            HAVE A PROJECT IN MIND?
                        </p>

                        <h2 className="contact-heading">
                            HAVE AN IDEA?
                            <span>LET'S BUILD IT.</span>
                        </h2>

                        <p className="contact-description">
                            Whether you're looking for a full-time designer
                            or someone to collaborate on a creative project,
                            I'd love to hear from you.
                        </p>

                        <div className="contact-details">

                            <div className="contact-detail">
                                <span className="contact-detail-icon">
                                    <MapPin size={19} />
                                </span>

                                <div>
                                    <span className="contact-detail-label">
                                        BASED IN
                                    </span>
                                    <p>{location}</p>
                                    <small>{portfolio.relocation || 'Available for opportunities'}</small>
                                </div>
                            </div>

                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    className="contact-detail contact-email-link"
                                >
                                    <span className="contact-detail-icon">
                                        <Mail size={19} />
                                    </span>

                                    <div>
                                        <span className="contact-detail-label">
                                            EMAIL ME DIRECTLY
                                        </span>
                                        <p>{email}</p>
                                    </div>

                                    <ArrowUpRight size={17} />
                                </a>
                            )}

                        </div>
                    </div>

                    <div className="contact-form-wrapper">

                        <div className="contact-form-heading">
                            <span>01 — SEND AN ENQUIRY</span>
                            <span>LET'S TALK</span>
                        </div>

                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={handleSubmit}
                            aria-busy={status === 'sending'}
                        >

                            <div className="contact-field">
                                <label htmlFor="contact-name">
                                    YOUR NAME <span>*</span>
                                </label>

                                <input
                                    id="contact-name"
                                    type="text"
                                    name="from_name"
                                    placeholder="Enter your name"
                                    value={formData.from_name}
                                    onChange={updateField}
                                    autoComplete="name"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                    disabled={status === 'sending'}
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">
                                    EMAIL ADDRESS <span>*</span>
                                </label>

                                <input
                                    id="contact-email"
                                    type="email"
                                    name="from_email"
                                    placeholder="Enter your email address"
                                    value={formData.from_email}
                                    onChange={updateField}
                                    autoComplete="email"
                                    required
                                    maxLength={254}
                                    disabled={status === 'sending'}
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-inquiry">
                                    WHAT ARE YOU LOOKING FOR? <span>*</span>
                                </label>

                                <select
                                    id="contact-inquiry"
                                    name="inquiry_type"
                                    value={formData.inquiry_type}
                                    onChange={updateField}
                                    required
                                    disabled={status === 'sending'}
                                >
                                    <option value="Full-time opportunity">
                                        Full-time opportunity
                                    </option>
                                    <option value="Freelance project">
                                        Freelance project
                                    </option>
                                    <option value="Brand identity">
                                        Brand identity
                                    </option>
                                    <option value="UI/UX design">
                                        UI/UX design
                                    </option>
                                    <option value="Graphic design">
                                        Graphic design
                                    </option>
                                    <option value="Collaboration">
                                        Collaboration
                                    </option>
                                    <option value="Other">
                                        Something else
                                    </option>
                                </select>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-message">
                                    TELL ME ABOUT IT <span>*</span>
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Share a little about your idea, project or opportunity..."
                                    value={formData.message}
                                    onChange={updateField}
                                    rows={5}
                                    required
                                    minLength={10}
                                    maxLength={3000}
                                    disabled={status === 'sending'}
                                />
                            </div>

                            {statusMessage && (
                                <div
                                    className={`contact-status ${status}`}
                                    role="status"
                                    aria-live="polite"
                                >
                                    {status === 'success' ? (
                                        <CheckCircle2 size={19} />
                                    ) : (
                                        <AlertCircle size={19} />
                                    )}

                                    <span>{statusMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <LoaderCircle
                                            className="contact-spinner"
                                            size={19}
                                        />
                                        SENDING YOUR MESSAGE
                                    </>
                                ) : (
                                    <>
                                        SEND MESSAGE
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            <p className="contact-form-note">
                                * Required fields. I'll get back to you as soon as possible.
                            </p>

                        </form>
                    </div>

                </div>

                <div className="contact-bottom">
                    <span>DESIGNED WITH INTENTION.</span>
                    <span>BUILT TO CREATE IMPACT.</span>
                </div>

            </div>
        </section>
    )
}

export default Contact
