import React from 'react'
import { workProject } from '../../portfolio'
const ProjectCard = () => {
  return (
    <div className='project-container'>
    {workProject.project.map((project)=>{
        return <div class="project-row project-mt-1">
        <div class="project-col-1">
            <span class="project-number">{project.number}</span>
        </div>
        <div class="project-col-2">

          <div class="project-left-row">
            <div class="project-mt">
                <h2 class="project-h2">{project.title}</h2>
                <span class="project-date">{project.date}</span>
               </div>

               <div class="projecn-mt">
                <h3 class="project-h3">{project.subTitle}</h3>
                <span class="project-span">{project.work}</span>
               </div>

               <div class="projecn-mt">
                <h3 class="project-h3">{project.url}</h3>
                <span class="project-span">{project.link}</span>
               </div>
          </div>

        </div>
        <div class="project-col-3">
            <h3 class="description-h3">{project.subTitle}</h3>
            <p class="description-text">
                {project.desc2}
            </p>
        </div>
    </div>
    })}
    </div>
  )
}

export default ProjectCard
