
import { useState } from 'react'
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom'
import {
  AnimatePresence,
  motion,
  useReducedMotion
} from 'motion/react'

import Intro from './sections/Intro/Intro'
import ProfilePicker from './sections/Profiles/ProfilePicker'
import HomePage from './sections/Home/HomePage'
import ProjectPage from './pages/ProjectPage'
import ResumePage from './pages/ResumePage'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [selectedProfile, setSelectedProfile] = useState(null)

  const location = useLocation()
  const reduceMotion = useReducedMotion()

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.25,
          ease: 'easeOut'
        }}
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              selectedProfile ? (
                <HomePage
                  profile={selectedProfile}
                  onChangeProfile={() => setSelectedProfile(null)}
                />
              ) : (
                <ProfilePicker onSelect={setSelectedProfile} />
              )
            }
          />

          <Route
            path="/projects/:slug"
            element={<ProjectPage />}
          />

          <Route
            path="/resume"
            element={<ResumePage />}
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
