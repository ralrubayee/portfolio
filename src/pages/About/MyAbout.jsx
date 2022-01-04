import { useState } from "react"
import profile from "../../assets/pic.jpg"

function MyAbout() {
	return (
		<div class="card-a">
		<img src={profile} class="card-img-a" id="profile" alt="..."/>
		<div class="card-body-a">
		 <h4 class="card-title-a">Rawan Al Rebeah</h4>
		 <h5 class="card-title-a">software engineer - full stack developer</h5>
			<p class="card-text-a">A software developer who takes pleasure in simplifying people's lives through the creation of innovative and functional web applications. I am a total nerd when it comes to coding and programming. I am a great problem solver who enjoys analyzing a problem and determining the best solution. I prefer developing well-structured, logical, and easily-understood code.</p>
		</div>
	</div>
	) 
}

export default MyAbout