import { useState } from "react"
import ProjectCard from './ProjectCard'
import {MyProjects} from '../../data.js'

function Projects() {
	const projects = MyProjects.map((ele,idx)=>{
		return (
		<ProjectCard
			name = {ele.name}
			image = {ele.image}
			languages = {ele.languages}
			github={ele.github}
			key = {idx}
		/>
		)
	})
	return (
		<div id="projects">
		
			{projects}
		
		
		</div>
	) 
}

export default Projects