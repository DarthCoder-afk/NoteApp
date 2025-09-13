import React from 'react'
import {Route, Routes} from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NotePage from './pages/NotePage.jsx' 

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-20 bg-gradient-to-b from-[#282928] to-[#4fa584] opacity-50'></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NotePage />} />
      </Routes>
    </div>
  )
}

export default App
