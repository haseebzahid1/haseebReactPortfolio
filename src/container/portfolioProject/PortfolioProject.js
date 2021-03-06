import React from 'react'
import '../portfolioProject/PortfolioProject.css'
import PortfolioProjectCard1 from '../../components/portfolioProjectCard/PortfolioProjectCard1'
import { workPortfolioPoject } from '../../portfolio'
import PortfolioProjectCard2 from '../../components/portfolioProjectCard/PortfolioProjectCard2'
const PortfolioProject = () => {
    return (
        <section class="project border-section-top" id="project">
            <div class="container">
                <div class="container-fluid">
                    <div class="section">
                        <div class="section-img">
                            <img src="./assets/img/education.svg" alt="" />
                            <div class="section-center-icon">
                                <i class={workPortfolioPoject.imgIcon}></i>
                            </div>
                        </div>
                        <h1 class="section-h1">{workPortfolioPoject.title}</h1>
                        <h4 class="section-fixed">{workPortfolioPoject.title}</h4>
                        <p class="section-p">{workPortfolioPoject.desc}</p>
                    </div>

                    <div class="portfolio_margin-tb">

                        {/* row 1 */}

                        <PortfolioProjectCard1 />
                        
                        {/* row 2 */}

                        <PortfolioProjectCard2 />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default PortfolioProject
