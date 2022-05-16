import React from 'react'
import '../interests/Interests.css'
import { workInterests } from '../../portfolio'
import InterestsCard from '../../components/InterestsCard/InterestsCard'

const Interests = () => {
  return (
<section class="interests border-section-top" id="interests">
    <div class="container">
        <div class="container-fluid">
            <div class="section">
                <div class="section-img">
                    <img src="./assets/img/education.svg" alt="" />
                    <div class="section-center-icon ">
                        <i class={workInterests.iconImg}></i>
                    </div>
               </div>
                <h1 class="section-h1">{workInterests.title}</h1>
                <h4 class="section-fixed interests-postio-icon">{workInterests.title}</h4>
            </div>

            <InterestsCard />            
        </div>
        
    </div>
 </section> 
  )
}

export default Interests
