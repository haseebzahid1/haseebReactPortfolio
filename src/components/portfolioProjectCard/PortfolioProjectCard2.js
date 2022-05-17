import React from 'react'
import { workPortfolioPoject } from '../../portfolio'

const PortfolioProjectCard2 = () => {
    return (
        <div class="portfolio-row">
        {workPortfolioPoject.portfolioProject.map((project) => {
            return <div class="portfolio-col2-4 portfolio-col-mt">
                <div class="portfolio-img">
                    <a href={project.link} class="portfolio-link">
                        <img src={project.img} alt="" />
                        <div class="portfolio-click-hover">
                            <h1 class="h1-hover">{project.title}</h1>
                            <p class="p-hover">{project.desc}</p>
                        </div>

                    </a>
                </div>
            </div>

        })}
    </div>
    )
}

export default PortfolioProjectCard2
