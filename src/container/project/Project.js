import React from 'react'
import '../project/Project.css'
import { workProject } from '../../portfolio'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Project = () => {
  return (
    <section class="project border-section-top" id="project">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section-center-icon">
                        <i class={workProject.imgIcon}></i>
                    </div>
               </div>
                <h1 class="section-h1">{workProject.title}</h1>
                <h4 class="section-fixed">{workProject.title}</h4>
                <p class="section-p">{workProject.desc}</p>
            </div>
            
            <ProjectCard />
        </div>
        
    </div>
 </section> 
  )
}

export default Project
