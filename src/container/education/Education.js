import React from 'react'
import '../education/Education.css'
const Education = () => {
  return (
    <section class="education border-section-top" id="education">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section__section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section__section-center-icon">
                        <i class="an an-brain"></i>
                    </div>
               </div>
                <h1 class="section__section-h1">Education</h1>
                <h4 class="section__section-fixed">Education</h4>
                <p class="section__section-p">I provide best Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
                 ultrices  gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
               </p>
            </div>
 
            <div class="education__education-inner-row">
                <div class="education__education-bottom-row education__bottom-line">
               
                 <div class="education__education-col education__education-border">
                     <span class="education__span-date">2014 - 2016</span>
                     <h2 class="education__education_h2">Matric | Technical High School | Faisalabad</h2>
                     <p class="education__education-p">Matric in Computer Science  </p>
                 </div>
                 <div class="education__education-col right-p">
                     <span class="education__span-date">2016 - 2018</span>
                     <h2 class="education__education_h2">Chenab Collage of Advance Study | Faisalabad</h2>
                     <p class="education__education-p">Intermediate in Computer Science</p>
                 </div>
             </div>
 
             <div class="education__education-bottom-row">
                 <div class="education__education-col ">
                     <span class="education__span-date">2022  - Continue</span>
                     <h2 class="education__education_h2">Bachelor | Virtual University | Faisalabad</h2>
                     <p class="education__education-p">BS-IT (hons) | Continue. </p>
                  
                 </div>
                 <div class="education__education-col right-p">
                     <span class="education__span-date">2019 - 2020</span>
                     <h2 class="education__education_h2">CERTIFICATION – WEB DEVELOPMENT</h2>
                     <p class="education__education-p">SAYLANI MASS COMMUNICATION AND IT TRAINING</p>
                 </div>
                 
                
             </div>
            </div>
 
        </div>
        
    </div>
 </section> 
  )
}

export default Education
