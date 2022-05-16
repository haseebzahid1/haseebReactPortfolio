import React from 'react'
import '../education/Education.css'
import { workEducation } from '../../portfolio'
import EducationCard from '../../components/educationCard/EducationCard'

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
            <EducationCard />
        </div>
        
    </div>
 </section> 
  )
}

export default Education
