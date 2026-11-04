
import { useEffect, useState } from 'react'
import { UserRound, Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar({ onChangeProfile }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        })

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const links = [
        ['HOME', '#home'],
        ['ORIGINALS', '#originals'],
        ['ABOUT', '#about'],
        ['CONTACT', '#contact'],
    ]

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>

            <a href="#home" className="navbar-brand">
                KRISH <span>MODI</span>
            </a>

            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                {links.map(([label, href]) => (
                    <a
                        key={href}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {label}
                    </a>
                ))}
            </div>

            <div className="navbar-actions">

                <button
                    className="navbar-profile"
                    onClick={onChangeProfile}
                    aria-label="Change profile"
                    title="Change profile"
                >
                    <UserRound size={19} />
                </button>

                <button
                    className="navbar-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

            </div>

        </nav>
    )
}

export default Navbar
