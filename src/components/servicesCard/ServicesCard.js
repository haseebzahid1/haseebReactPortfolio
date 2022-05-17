import React from 'react'
import { workServices } from '../../portfolio'

const ServicesCard = () => {
  return (
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
  )
}

export default ServicesCard
