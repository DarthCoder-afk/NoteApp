import React from 'react'
import {Route, Routes} from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NotePage from './pages/NotePage.jsx' 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </div>
  )
}

export default App
