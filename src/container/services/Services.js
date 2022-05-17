import React from 'react'
import '../services/Services.css'
import { workServices } from '../../portfolio'
import ServicesCard from '../../components/servicesCard/ServicesCard'

const Services = () => {
  return (
    <section class="services border-section-top" id="services">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section-center-icon">
                        <i class={workServices.imgIcon}></i>
                    </div>
               </div>
                <h1 class="section-h1">{workServices.title}</h1>
                <h4 class="section-fixed">{workServices.title}</h4>
                <p class="section-p">{workServices.desc}</p>
            </div>

            {/*  */}
            <ServicesCard/>
            
        </div>
        
    </div>
 </section> 
  )
}

export default Services
