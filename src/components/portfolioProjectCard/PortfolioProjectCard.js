import React from 'react'

const PortfolioProjectCard = ({projectCard}) => {
    return (
        <div class="portfolio-img">
            <a href={projectCard.link} class="portfolio-link">
                <img src={projectCard.img} alt="" />
                <div class="portfolio-click-hover">
                    <h1 class="h1-hover">{projectCard.title}</h1>
                    <p class="p-hover">{projectCard.desc}</p>
                </div>
            </a>
        </div>
    )
}

export default PortfolioProjectCard
