import { useState } from "react"
import GA from "../../assets/logo.png"
import CState from "../../assets/CState.jpeg"

function Education() {
	return (
    <>
      <div class="card mb-3">
        <img src={GA} class="card-img-top" id="GA" alt="..."/>
        <div class="card-body">
         <h5 class="card-title">General Assembly</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">SEP 2021 - DEC 2021</small></p>
        </div>
      </div>


      <div class="card mb-3">
        <img src={CState} class="card-img-top" id="GA" alt="..."/>
        <div class="card-body">
         <h5 class="card-title">Cincinnat State Technical and Community Collage</h5>
          <p class="card-text">.Net / Java / SQL.</p>
          <p class="card-text"><small class="text-muted">jan 2018 - May 2023 (not complete)</small></p>
        </div>
      </div>


    </>
  )
  }

export default Education