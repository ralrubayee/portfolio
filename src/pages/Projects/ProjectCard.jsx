import { useState } from "react"
import Languages from './Languages'
import { Route, Routes , NavLink  } from 'react-router-dom'
import ProjectDetail from "./ProjectDetail"

function ProjectCard(props) {

  const languages = props.languages.map((ele,idx)=>{
    return (
      <Languages
        languagesUsed = {ele}
        key= {idx}
      />
    )
  })
	return (
    <>
    <a href={props.github} className="card">
      <div
      id='card-wraper'
      className="card-img-top"
      >

      <img 
        id='project-img'
        src={props.image} 
        alt="project"
        />
      <div id = 'lang-position'>
       {languages}
      </div>
      </div>
      <div className="card-footer">
				{props.name}
      </div>

    </a>
    <main>
      <Routes>
          <Route path='projects/details' element={<ProjectDetail />} />
				</Routes>
    </main>
  </>
  )
}

export default ProjectCard