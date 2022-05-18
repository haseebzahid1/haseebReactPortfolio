import React from 'react'
import { workPricing } from '../../portfolio'

const PricingCard = ({priceCard}) => {
  return (
    
    <>
       {workPricing.pricing.map((price)=>{
           return <div class="pricing-col-4">
           <div class="pricing-bg-img">
                <img src="./assets/img/cardpricing.png" alt="" class="img" />
           </div>
            <div class="pricing-card">
                <h2 class="pricing-h2">{price.title}</h2>
                <span class="pricing-line"></span>
                <div class="pricing-list">
                    <div class="pricing-group">
                        <span class="pricing-check check-red">
                        <i class={price.check}></i>
                        </span>
                        <span class="pricing-title">{price.subject}</span>
                    </div>
                    <div class="pricing-group">
                        <span class="pricing-check check-red">
                        <i class={price.check}></i>
                        </span>
                        <span class="pricing-title">{price.subject1}</span>
                    </div>
                    <div class="pricing-group">
                     <span class="pricing-check check-red">
                         <i class={price.check}></i>
                     </span>
                        <span class="pricing-title check-red">{price.subject2}</span>
                    </div>
                    <div class="pricing-group">
                     <span class="pricing-check check-red">
                         <i class={price.check}></i>
                     </span>
                     <span class="pricing-title ">{price.subject3}</span>
                 </div>
                    <div class="pricing-group">
                        <span class="pricing-check check-red">
                            <i class={price.check}></i>
                        </span>
                        <span class="pricing-title">{price.subject4}</span>
                    </div>
                   
                    <div class="pricing-group">
                        <span class="pricing-check">
                        <i class={price.check}></i>
                        </span>
                        <span class="pricing-title">{price.subject5}</span>
                    </div>
                    <div class="pricing-group">
                        <span class="pricing-check">
                        <i class={price.check}></i>
                        </span>
                        <span class="pricing-title">{price.subject6}</span>
                    </div>
                    <div class="pricing-group">
                        <span class="pricing-check">
                        <i class={price.check}></i>
                        </span>
                        <span class="pricing-title">{price.subject7}</span>
                    </div>
                   
                    
                </div>
                <div class="pricing-btn">
                    <a href="#." class={price.btnClass}>{price.btn}</a>
                </div>

                <div class={price.pricingTable}>
                    <span class="use-dolor">
                        <i class="an an-usd"></i> 
                    </span>
                    <h1 class="pricing-top-h1">{price.price}</h1>
                    <span class="pricing-top-00">{price.bottomPrice}</span>
                </div>
            </div>
        </div>
       })} 
    </>
  )
}

export default PricingCard
