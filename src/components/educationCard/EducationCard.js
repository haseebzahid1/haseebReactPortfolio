import React from 'react'
import { workEducation } from '../../portfolio'
const EducationCard = () => {
  return (
    <div class="education-inner-row">
                
               
    {workEducation.education.map((education)=>{
        return <div class="education-col ">
        <span class="span-date">{education.year}</span>
        <h2 class="education_h2">{education.colefication}</h2>
        <p class="education-p">{education.subject}</p>
       </div>
    })}
    
</div>
  )
}

export default EducationCard
