import React from 'react'

const PricingCard = ({priceCard}) => {
  return (
    

               <div class="pricing-col-4">
                  <div class="pricing-bg-img">
                       <img src="./assets/img/cardpricing.png" alt="" class="img" />
                  </div>
                   <div class="pricing-card">
                       <h2 class="pricing-h2">{priceCard.title}</h2>
                       <span class="pricing-line"></span>
                       <div class="pricing-list">
                           <div class="pricing-group">
                               <span class="pricing-check check-red">
                               <i class={priceCard.check}></i>
                               </span>
                               <span class="pricing-title">{priceCard.subject}</span>
                           </div>
                           <div class="pricing-group">
                               <span class="pricing-check check-red">
                               <i class={priceCard.check}></i>
                               </span>
                               <span class="pricing-title">{priceCard.subject1}</span>
                           </div>
                           <div class="pricing-group">
                            <span class="pricing-check check-red">
                                <i class={priceCard.check}></i>
                            </span>
                               <span class="pricing-title check-red">{priceCard.subject2}</span>
                           </div>
                           <div class="pricing-group">
                            <span class="pricing-check check-red">
                                <i class={priceCard.check}></i>
                            </span>
                            <span class="pricing-title ">{priceCard.subject3}</span>
                        </div>
                           <div class="pricing-group">
                               <span class="pricing-check check-red">
                                   <i class={priceCard.check}></i>
                               </span>
                               <span class="pricing-title">{priceCard.subject4}</span>
                           </div>
                          
                           <div class="pricing-group">
                               <span class="pricing-check">
                               <i class={priceCard.check}></i>
                               </span>
                               <span class="pricing-title">{priceCard.subject5}</span>
                           </div>
                           <div class="pricing-group">
                               <span class="pricing-check">
                               <i class={priceCard.check}></i>
                               </span>
                               <span class="pricing-title">{priceCard.subject6}</span>
                           </div>
                           <div class="pricing-group">
                               <span class="pricing-check">
                               <i class={priceCard.check}></i>
                               </span>
                               <span class="pricing-title">{priceCard.subject7}</span>
                           </div>
                          
                           
                       </div>
                       <div class="pricing-btn">
                           <a href="#." class={priceCard.btn}>Buy Now</a>
                       </div>

                       <div class={priceCard.pricingTable}>
                           <span class="use-dolor">
                               <i class="an an-usd"></i> 
                           </span>
                           <h1 class="pricing-top-h1">{priceCard.price}</h1>
                           <span class="pricing-top-00">{priceCard.bottomPrice}</span>
                       </div>
                   </div>
               </div>
             
          
  )
}

export default PricingCard
