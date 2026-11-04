import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Intro from './sections/Intro/Intro'
import ProfilePicker from './sections/Profiles/ProfilePicker'
import HomePage from './sections/Home/HomePage'
import ProjectPage from './pages/ProjectPage'
import ResumePage from './pages/ResumePage'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [selectedProfile, setSelectedProfile] = useState(null)

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />
  }

  if (!selectedProfile) {
    return <ProfilePicker onSelect={setSelectedProfile} />
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            profile={selectedProfile}
            onChangeProfile={() => setSelectedProfile(null)}
          />
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
        element={<HomePage profile={selectedProfile} />}
      />
    </Routes>
  )
}

export default App