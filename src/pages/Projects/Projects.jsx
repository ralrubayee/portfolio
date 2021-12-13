import { useState } from "react"
import ProjectCard from './ProjectCard'
import {MyProjects} from '../../data.js'

function Projects() {
	return (
		<>
		<ProjectCard MyProjects={MyProjects}/>
			
		
		
		</>
	) 
}

export default Projects