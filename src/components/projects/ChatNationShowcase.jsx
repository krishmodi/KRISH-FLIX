
import { useState } from 'react'
import {
    ArrowDown,
    Smartphone,
    MessageCircle,
    MessagesSquare,
    UserRound,
    Settings,
    LayoutGrid
} from 'lucide-react'

import './ChatNationShowcase.css'

const screens = [
    {
        id: 'overview',
        label: 'Overview',
        file: 'overview.webp',
        icon: LayoutGrid,
        description: 'A first look at the ChatNation experience.'
    },
    {
        id: 'chats',
        label: 'Chat List',
        file: 'chat-list.webp',
        icon: MessagesSquare,
        description: 'Conversations organised in one place.'
    },
    {
        id: 'conversation',
        label: 'Conversation',
        file: 'conversation.webp',
        icon: MessageCircle,
        description: 'The heart of every messaging experience.'
    },
    {
        id: 'profile',
        label: 'Profile',
        file: 'user-profile.webp',
        icon: UserRound,
        description: 'A personal space for user information.'
    },
    {
        id: 'settings',
        label: 'Settings',
        file: 'settings.webp',
        icon: Settings,
        description: 'Preferences and controls for the experience.'
    }
]

function ChatNationShowcase() {
    const [activeScreen, setActiveScreen] = useState(screens[0])
    const [imageLoaded, setImageLoaded] = useState(true)

    const selectScreen = (screen) => {
        setActiveScreen(screen)
        setImageLoaded(true)
    }

    return (
        <section className="chatnation-showcase" id="chatnation-screens">
            <div className="chatnation-showcase-copy">
                <span className="chatnation-kicker">
                    CHATNATION / PRODUCT EXPERIENCE
                </span>

                <h2>
                    Every screen.
                    <br />
                    <span>One experience.</span>
                </h2>

                <p>
                    Explore the different parts of the ChatNation interface.
                    Select a screen and take a closer look at the product experience.
                </p>

                <a href="#chatnation-screen-explorer">
                    EXPLORE THE SCREENS
                    <ArrowDown size={16} />
                </a>

                <div className="chatnation-screen-count">
                    <strong>0{screens.indexOf(activeScreen) + 1}</strong>
                    <span>/ 0{screens.length} SCREENS</span>
                </div>
            </div>

            <div className="chatnation-device-stage">
                <div className="chatnation-orbit orbit-one" />
                <div className="chatnation-orbit orbit-two" />

                <div className="chatnation-device-shadow" />

                <div className="chatnation-phone">
                    <div className="chatnation-phone-frame">
                        <div className="chatnation-phone-notch" />

                        <div className="chatnation-phone-screen">
                            {imageLoaded && (
                                <img
                                    key={activeScreen.file}
                                    src={`/images/projects/chatnation/${activeScreen.file}`}
                                    alt={`ChatNation ${activeScreen.label} screen`}
                                    onError={() => setImageLoaded(false)}
                                />
                            )}

                            {!imageLoaded && (
                                <div className="chatnation-screen-fallback">
                                    <Smartphone size={30} />
                                    <span>ADD YOUR SCREEN DESIGN</span>
                                    <small>{activeScreen.file}</small>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="chatnation-device-caption">
                    <span>NOW VIEWING</span>
                    <strong>{activeScreen.label.toUpperCase()}</strong>
                    <p>{activeScreen.description}</p>
                </div>
            </div>

            <div
                className="chatnation-screen-explorer"
                id="chatnation-screen-explorer"
            >
                <div className="chatnation-explorer-heading">
                    <div>
                        <span>THE INTERFACE COLLECTION</span>
                        <h3>Explore the screens.</h3>
                    </div>

                    <p>SELECT A SCREEN TO PREVIEW</p>
                </div>

                <div className="chatnation-screen-tabs">
                    {screens.map((screen, index) => {
                        const Icon = screen.icon
                        const isActive = activeScreen.id === screen.id

                        return (
                            <button
                                key={screen.id}
                                type="button"
                                className={`chatnation-screen-tab ${isActive ? 'active' : ''}`}
                                onClick={() => selectScreen(screen)}
                                aria-pressed={isActive}
                            >
                                <span className="chatnation-tab-number">
                                    0{index + 1}
                                </span>

                                <Icon size={18} strokeWidth={1.6} />

                                <span className="chatnation-tab-label">
                                    {screen.label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ChatNationShowcase
