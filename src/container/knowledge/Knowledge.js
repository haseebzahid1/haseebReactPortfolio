import React from 'react'
import '../knowledge/Knowledge.css'
import { workKnowledge } from '../../portfolio'
import KnowledgeCard from '../../components/knowledgeCard/KnowledgeCard'

const Knowledge = () => {
    return (
        <section class="education border-section-top" id="education">
        <div class="container">
            <div class="container-fluid">
                <div class="section">
                    <div class="section-img">
                        <img src="./assets/img/education.svg" alt="" />
                        <div class="section-center-icon">
                            <i class={workKnowledge.imgIcon}></i>
                        </div>
                   </div>
                    <h1 class="section-h1">{workKnowledge.title}</h1>
                    <h4 class="section-fixed">{workKnowledge.title}</h4>
                    <p class="section-p">{workKnowledge.desc}</p>
                </div>
                
                {/* {  } */}
                <KnowledgeCard />
            </div>
            
        </div>
     </section> 
      )
}

export default Knowledge
