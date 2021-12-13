import { useState } from "react"
import profile from "../../assets/profile.heic"


function MyAbout() {
	return (
		<div>
			<img src={profile} />
      <p>I enjoy creating new and useful web applications that make people's life easier. A great problem solver, I enjoy evaluating issues and finding solutions. I prefer writing clean, logical code.</p>
		</div>
	) 
}

export default MyAbout