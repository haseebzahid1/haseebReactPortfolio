import React from 'react'

const LanguageCard = ({language}) => {
    return (

        <div class="language-row">
               <div class="language-col-3 language-border-top">
                    <div class="language-content">
                        <span class="language-span-title">100 / 90</span>
                        <h1 class="language-h1">Urdu</h1>
                        <div class="language-dots-flex">
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span "></span>
                            <span class="language-span "></span>
                            <span class="language-span "></span>
                            <span class="language-span "></span>
                            <span class="language-span language-span-light"></span>
                        </div>
                    </div>
               </div>
               <div class="language-col-3">
                    <div class="language-content">
                        <span class="language-span-title">100 / 40</span>
                        <h1 class="language-h1">English</h1>
                        <div class="language-dots-flex">
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span language-span-light"></span>
                            <span class="language-span language-span-light"></span>
                            <span class="language-span language-span-light"></span>
                            <span class="language-span language-span-light"></span>
                            <span class="language-span language-span-light"></span>
                        </div>
                    </div>
               </div>
              
               <div class="language-col-3 language-mt-3">
                    <div class="language-content">
                        <span class="language-span-title">100 / 70</span>
                        <h1 class="language-h1">Punjabi</h1>
                        <div class="language-dots-flex">
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span"></span>
                            <span class="language-span language-span-light"></span>
                            <span class="language-span language-span-light"></span>
                        </div>
                    </div>
               </div>
           </div>
        // <div class="language-col-3 language-border-top">
        //     <div class="language-content">
        //         <span class="language-span-title">{language.range}</span>
        //         <h1 class="language-h1">{language.subject}</h1>
        //         <div class="language-dots-flex">
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //             <span class={language.span}></span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default LanguageCard
