import React from 'react'
import '../person/Person.css'
import Quick from '../../components/quick/Quick'
import { personal } from '../../portfolio'

const Person = () => {
  return (
    <section class="person">
    <div class="person__person-bg"></div>
 
     <div class="person__set">
            <img src="./assets/img/person-bg.png"class="" alt="" />
    </div>  
       
       <div class="person__person-bg-img">
        <div class="person__person-top">
                <div class="person__person-man-icon">
                    <i class="an an-user"></i>
                </div>
               
                <h4 class="person__person-h4">{personal.title}</h4>
            </div>
         
        <div class="person__mudssar-subtile">
            <div class="person__person-my-title">{personal.subtitle}</div>
            <h1 class="person__mudssar-title">{personal.titleName} <span class="typing">Zahid</span></h1>
            <span class="person__person-subline-title">{personal.subTitleName}</span>
        </div>
 
        <div class="person__person-bottom-absolute">
 
 
                <div class="person__person-left-content">
 
                    <div class="person__box-icon-botton">
                        <span>
                            <i class="an an-map-marker-alt"></i>
                        </span>
                    </div>
                    <div class="person__person-small-content">
                        <h2 class="person__person-h2">{personal.country}</h2>
                        <span class="person__person-punjab">{personal.punjab},{personal.country}</span>
                    </div>
                </div>
                <Quick />
               
        </div>
       </div>
   </section> 
  )
}

export default Person
