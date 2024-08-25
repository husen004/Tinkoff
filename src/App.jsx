import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Career from './pages/Career/Career'
import Course from './pages/Course/Course'
import Event from './pages/Event/Event'
import Home from './pages/Home/Home'
import Intern from './pages/Intern/Intern'
import Poko from './pages/Poko/Poko'
import School from './pages/School/School'
import Uni from './pages/Uni/Uni'
import Zero from './pages/Zero/Zero'
import Register from './pages/Register/Register'

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