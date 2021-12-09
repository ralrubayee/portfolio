import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import MyContact from './pages/Contact/MyContact'

function App() {
  const [puppies, setPuppies] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        Rawan Al Rebeah
        <nav>
          <NavLink to='/'>Projects</NavLink>
          <NavLink className='m-left' to='/Education'>Education</NavLink>
          <NavLink className='m-left' to='/About'>About</NavLink>
          <NavLink className='m-left' to='/Contact'>Contact</NavLink>
        </nav>
      </header>
      <main>
      <Routes>
	        <Route path='/Contact' element={<MyContact />} />
				</Routes>
      </main>
    </div>
  )
}

export default App
