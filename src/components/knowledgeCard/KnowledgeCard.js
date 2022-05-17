import React from 'react'
import { workKnowledge } from '../../portfolio'
const KnowledgeCard = () => {
  return (
    <div class="knowledge-row">
               {workKnowledge.Knowledge.map((code)=>{
                   return <div class="knowledge-col knowledge-border">
                   <ul class="knowledge-ul">
                       <li class="knowledge-item">
                           <span class="knowledge-check">
                               <i class={workKnowledge.check}></i>
                           </span>
                           <a href="#." class="knowledge-link">{code.subject}</a>
                       </li>
                       <li class="knowledge-item">
                           <span class="knowledge-check">
                           <i class={workKnowledge.check}></i>
                           </span>
                           <a href="#." class="knowledge-link">{code.subject1}</a>
                       </li>
                       <li class="knowledge-item">
                           <span class="knowledge-check">
                           <i class={workKnowledge.check}></i>
                           </span>
                           <a href="#." class="knowledge-link">{code.subject2}</a>
                       </li>
                       <li class="knowledge-item">
                           <span class="knowledge-check">
                           <i class={workKnowledge.check}></i>
                           </span>
                           <a href="#." class="knowledge-link">{code.subject3}</a>
                       </li>
                      
                   </ul>
                  

               </div>
               })}
              
           </div>
  )
}

export default KnowledgeCard
