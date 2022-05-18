import React from 'react'
import { workNavbarSocialIcon } from '../../portfolio'

const NavbarSocialIcon = () => {
    return (
        <div className="nav__nav-social-content">
            {workNavbarSocialIcon.navbarSocialIcon.map((navbar)=>{
                return <a href={navbar.link} className="nav__nav-icon-mobile" target={navbar.target}>
                <i className={navbar.icon}></i>
            </a>
            })}
            
            
        </div>
    )
}

export default NavbarSocialIcon
