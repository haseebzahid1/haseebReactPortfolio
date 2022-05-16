import React from 'react'
import { workInterests } from '../../portfolio'

const InterestsCard = () => {
  return (
    <div className='interests-row'>
                {workInterests.interests.map((interests)=>{
                    return <div class="interests-col-3">
                    <div class="interests-content">
                        <div class="interests-img">
                            <i class={interests.img}></i> 
                        </div>
                        <span class="interests-line"></span>
                        <h2 class="interests-h2">{interests.title}</h2>
                        <p class="interests-p">{interests.desc}</p>
                    </div>
             </div>
                })}
           </div>
  )
}

export default InterestsCard
