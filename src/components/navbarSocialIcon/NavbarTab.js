import React from 'react'
import { workNavbarSocialIcon } from '../../portfolio';
const NavbarTab = () => {
    return (
        <>
            {workNavbarSocialIcon.navbarTab.map((tab) => {
                return <li className="nav__nav-item">
                    <a href={tab.link} className="nav__nav-link">{tab.text}</a>
                </li>
            })}
        </>
    )
}

export default NavbarTab
