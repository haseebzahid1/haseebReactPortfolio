import React from 'react'
import '../skills/Skills.css'
import { workSkills } from '../../portfolio'

const Skills = () => {
  return (
    <section class="skills border-section-top" id="Coding_skills">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section-center-icon">
                        <i class="an an-brain"></i>
                    </div>
               </div>
                <h1 class="section-h1">{workSkills.title}</h1>
                <h4 class="section-fixed">{workSkills.title}</h4>
                <p class="section-p">{workSkills.desc}</p>
            </div>
            

            
        </div>
        
    </div>
 </section> 
  )
}

export default Skills
