import React from 'react'
import '../services/Services.css'
import { workServices } from '../../portfolio'

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

            <div class="services-row">
            {workServices.services.map((services)=>{
                return <div class="services-col-6 services-m4">
                <div class="services-row-flex">
                    <div class="services-img">
                        <i class={services.img}></i>
                    </div>

                    <div class="services-content">
                        <h2 class="services-h2">{services.subTitle}</h2>
                        <p class="services-p">
                        {services.subDesc}
                        </p>
                    </div>
                </div>
            </div>
            })}
            </div>
        </div>
        
    </div>
 </section> 
  )
}

export default Services
