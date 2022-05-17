import React from 'react'
import PortfolioProjectCard from '../../components/portfolioProjectCard/PortfolioProjectCard'
const PortfolioProjectCard1 = () => {
    return (
        <div class="portfolio-row">
            <div class="portfolio-col-8 portfolio-col-mt">
                <PortfolioProjectCard
                    projectCard={{
                        link: "https://haseebprofile2.surge.sh",
                        img: "./assets/img/haseebprofile2.PNG",
                        title: "Personal Portfolio Website",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                    }}
                />

            </div>
            <div class="portfolio-col-4 portfolio-col-mt port-mt">
                <PortfolioProjectCard
                    projectCard={{
                        link: "https://haseebprofile3.surge.sh",
                        img: "./assets/img/haseebprofile3.PNG",
                        title: "Personal Portfolio Website",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                    }}
                />
            </div>
        </div>
    )
}

export default PortfolioProjectCard1
