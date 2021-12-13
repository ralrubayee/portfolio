import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import MyContact from './pages/Contact/MyContact'
import MyAbout from './pages/About/MyAbout'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'



function App() {
  const [puppies, setPuppies] = useState([])

  return (
    <div className="App">
      <header className="App-header">
       
        <nav>
          <NavLink  to='/'>About</NavLink>
          <NavLink  to='/Education'>Education</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink  to='/Contact'>Contact</NavLink>
        </nav>
      </header>
      <main>
      <Routes>
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Education' element={<Education />} />
	        <Route path='/Contact' element={<MyContact />} />
          <Route path='/' element={<MyAbout />} />
				</Routes>
      </main>
    </div>
  )
}

export default App
