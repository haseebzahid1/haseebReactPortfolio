import React from 'react'
import '../pricing/Pricing.css'
import { workPricing } from '../../portfolio'
import PricingCard from '../../components/pricingCard/PricingCard'

const Pricing = () => {
  return (
    <section class="services border-section-top" id="services">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section-center-icon">
                        <i class={workPricing.imgIcon}></i>
                    </div>
               </div>
                <h1 class="section-h1">{workPricing.title}</h1>
                <h4 class="section-fixed">{workPricing.title}</h4>
                <p class="section-p">{workPricing.desc}</p>
            </div>

            {/*  */}
            <div class="pricing-row">

          
            <PricingCard 
            priceCard={{
                title:"STARTING",
                subject:"Html",
                subject1:"Css",
                subject2:"Sass,Scss",
                subject3:"Bootstrap",
                subject4:"javascript",
                subject5:"WordPress",
                subject6:"Dart",
                subject7:"Flutter",
                check:"an an-check-double",
                price:"25",
                bottomPrice:".00",
                btn:"pricing-btn-a pricing-btn-a-1",
                pricingTable:"pricing-table"
            }}
            />
            <PricingCard 
            priceCard={{
                title:"PREMIUM",
                subject:"Html",
                subject1:"Css",
                subject2:"Sass,Scss",
                subject3:"Bootstrap",
                subject4:"javascript",
                subject5:"WordPress",
                subject6:"Dart",
                subject7:"Flutter",
                check:"an an-check-double",
                price:"35",
                bottomPrice:".00",
                btn:"pricing-btn-a",
                pricingTable:"pricing-table pricing-bg-red"
            }}
            />
            <PricingCard 
            priceCard={{
                title:"PREMIUM",
                subject:"Html",
                subject1:"Css",
                subject2:"Sass,Scss",
                subject3:"Bootstrap",
                subject4:"javascript",
                subject5:"WordPress",
                subject6:"Dart",
                subject7:"Flutter",
                check:"an an-check-double",
                price:"10",
                bottomPrice:".00",
                btn:"pricing-btn-a pricing-btn-a-1",
                pricingTable:"pricing-table"
            }}
            />
              </div>
        </div>
        
    </div>
 </section> 
  )
}

export default Pricing
