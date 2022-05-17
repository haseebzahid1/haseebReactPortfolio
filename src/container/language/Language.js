import React from 'react'
import '../language/Language.css'
import { workLanguage } from '../../portfolio'
import LanguageCard from '../../components/languageCard/LanguageCard'

const Language = ({language}) => {
    return (
        <section class="interests border-section-top" id="interests">
            <div class="container">
                <div class="container-fluid">
                    <div class="section">
                        <div class="section-img">
                            <img src="./assets/img/education.svg" alt="" />
                            <div class="section-center-icon ">
                                <i class={workLanguage.iconImg}></i>
                            </div>
                        </div>
                        <h1 class="section-h1">{workLanguage.title}</h1>
                        <h4 class="section-fixed interests-postio-icon">{workLanguage.title}</h4>
                    </div>
                    {/* {  } */}
                    <LanguageCard />
                    {/* <div class="language-row">
                        <LanguageCard 
                        language={{
                            range:"100 / 90",
                            subject:"Urdu",
                            span:"language-span language-span-light",
                        }}
                        />
                        <LanguageCard 
                        language={{
                            range:"100 / 40",
                            subject:"English",
                            span:"language-span language-span-light",
                        }}
                        />
                        <LanguageCard 
                        language={{
                            range:"100 / 70",
                            subject:"Punjabi",
                            span:"language-span language-span-light",
                        }}
                        />
                    </div> */}

                </div>

            </div>
        </section>
    )
}

export default Language
