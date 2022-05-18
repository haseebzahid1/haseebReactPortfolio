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
                        <PricingCard />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Pricing
