import { useState } from "react"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"

function MyContact() {
	return (
		<>
		<a href="https://www.linkedin.com/in/rawan-al-rebeah">
			<img id="linkedin" src={linkedin}/>
		</a>
		<a href="https://github.com/ralrubayee">
			<img id="linkedin" src={github}/>
		</a>

	
			<h2>615-573-5171</h2>
			<h2>Ralrubayee@gmail.com</h2>
			
		
		
		</>
	) 
}

export default MyContact