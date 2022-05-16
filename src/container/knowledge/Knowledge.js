import React from 'react'
import '../knowledge/Knowledge.css'
import { knowledge } from '../../portfolio'

const Knowledge = () => {
    return (
        <section class="education border-section-top" id="education">
        <div class="container">
            <div class="container-fluid">
                <div class="section">
                    <div class="section-img">
                        <img src="./assets/img/education.svg" alt="" />
                        <div class="section-center-icon">
                            <i class="an an-brain"></i>
                        </div>
                   </div>
                    <h1 class="section-h1">{knowledge.title}</h1>
                    <h4 class="section-fixed">{knowledge.title}</h4>
                    <p class="section-p">{knowledge.desc}</p>
                </div>
                

                <div class="knowledge-row">
               {knowledge.coding.map((code)=>{
                   return <div class="knowledge-col knowledge-border">
                   <ul class="knowledge-ul">
                       <li class="knowledge-item">
                           <span class="knowledge-check">
                               
                               <i class={code.check}></i>
                           </span>
                           <a href="#." class="knowledge-link">{code.code}</a>
                       </li>
                      
                   </ul>
                  

               </div>
               })}
              
           </div>
            </div>
            
        </div>
     </section> 
      )
}

export default Knowledge
