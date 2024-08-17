import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Career from './pages/Career'
import Course from './pages/Course'
import Event from './pages/Event'
import Home from './pages/Home'
import Intern from './pages/Intern'
import Poko from './pages/Poko'
import School from './pages/School'
import Uni from './pages/Uni'
import Zero from './pages/Zero'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <div className='w-full'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/school' element={<School />} />
        <Route path='/course' element={<Course />} />
        <Route path='/intern' element={<Intern />} />
        <Route path='/uni' element={<Uni />} />
        <Route path='/poko' element={<Poko />} />
        <Route path='/event' element={<Event />} />
        <Route path='/career' element={<Career />} />
        <Route path='/zero' element={<Zero />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default App