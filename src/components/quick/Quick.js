import React from 'react'
import '../quick/Quick.css'
import { workQuick } from '../../portfolio'
const Quick = () => {
  return (
    <div class="quick person__person-social-content social-icon-2">

                   
                       {workQuick.map((e)=>{
                           return <div className='quick__quick-icon '>
                                <div class="quick__tooltip">
                         <a href={e.cv} class="person__person-tooltip-a">{e.contact}</a>
                          <div class="quick__custom-arrow"></div>
                        </div>
                        <span class="person__person-icon person-hover">
                            <i class={e.icon}></i>
                        </span>
                           </div>
                       })}
                    
 
 
                      
                      {/* <div class="quick__quick-icon ">
                        <div class="quick__tooltip">
                            <a href="#." class="person__person-tooltip-a">developer.haseeb1@gmail.com</a>
                          <div class="quick__custom-arrow"></div>
                        </div>
                        <span class="person__person-icon person__person-icon-center person-hover">
                            <i class="an an-envelope-open-text"></i>
                        </span>
                      </div> */}
 
                      {/* <div class="quick__quick-icon">
                        <div class="quick__tooltip">
                            <a href="https://drive.google.com/file/d/1NNdd2VaBAMcetXcer6_elOc8QaUImMxc/view?usp=sharing" target="_blank" class="person__person-tooltip-a">Resume</a>
                          <div class="quick__custom-arrow"></div>
                        </div>
                        <span class="person__person-icon person__person-icon-right person-hover">
                            <i class="an an-arrow-to-bottom"></i>
                        </span>
                      </div> */}
                   
                  
                </div>
  )
}

export default Quick
