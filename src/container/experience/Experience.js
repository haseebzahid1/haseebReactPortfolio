import React from 'react'
import '../experience/Experience.css'
import { workExperience } from '../../portfolio'


const Experience = () => {
  return (
    <section class="experience meta" id="experience">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section-center-icon">
                        <i class={workExperience.imgIcon}></i>
                    </div>
               </div>
                <h1 class="section-h1">{workExperience.title}</h1>
                <h4 class="section-fixed">{workExperience.title}</h4>
                <p class="section-p">{workExperience.desc}</p>
            </div>
         

           <div className='slide-margin'>
           <div class="experience-row">
                 {workExperience.content.map((experience)=>{
                     return <div class="experience-col">
                     <span class="experience-img">
                         <i class={experience.img}></i>
                     </span>
           
                     <span class="experience-line"></span>
           
                     <span class="experience-date">{experience.date}</span>
                     <h2 class="experience-h2">{experience.date}</h2>
                     <p class="experience-p">
                      {experience.experience}
                     </p>
                     <p class="experience-p">
                      {experience.experience2}
                     </p>
                     <p class="experience-p">
                      {experience.experience3}
                     </p>
                    
                 </div>
                 })}
            </div>
           </div>
        </div>
        
    </div>
 </section> 
  )
}

export default Experience
