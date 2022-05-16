import React from 'react'
import '../education/Education.css'
import { workEducation } from '../../portfolio'

const Education = () => {
  return (
    <section class="education border-section-top" id="education">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section-center-icon">
                        <i class="an an-brain"></i>
                    </div>
               </div>
                <h1 class="section-h1">{workEducation.title}</h1>
                <h4 class="section-fixed">{workEducation.title}</h4>
                <p class="section-p">{workEducation.desc}</p>
            </div>
 
            <div class="education-inner-row">
                
               
                 {workEducation.education.map((education)=>{
                     return <div class="education-col ">
                     <span class="span-date">{education.year}</span>
                     <h2 class="education_h2">{education.colefication}</h2>
                     <p class="education-p">{education.subject}</p>
                    </div>
                 })}
                 
            </div>
 
        </div>
        
    </div>
 </section> 
  )
}

export default Education
