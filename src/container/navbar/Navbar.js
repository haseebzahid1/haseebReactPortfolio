import React from 'react'
import '../navbar/Navbar.css'
import NavbarSocialIcon from '../../components/navbarSocialIcon/NavbarSocialIcon';
import { workNavbarSocialIcon } from '../../portfolio';
import NavbarTab from '../../components/navbarSocialIcon/NavbarTab';

const Navbar = () => {
  return (
  
        <header className="cursor-light" id="main-nav">

     
<nav className="nav nav__navbar-top-default nav-radius navbar-expand-lg pb-0 ">
    <div className="nav__nav-container">
        <div className="nav__nav-row">
            <div className="nav__nav-logo">
                <img src={workNavbarSocialIcon.logo} alt="" />
            </div>
          
            <input type="radio" name="slide" id="menu-bar" />
            <input type="radio" name="slide" id="close-bar" /> 
            
           
            <label for="menu-bar" className="nav__menu-bar">
             <span className="nav__menu-span"></span>
          </label>
            <ul className="nav__nav-list">
                <label for="close-bar" className="nav__nav-close">
                    <i className="fa fa-times"></i>
                </label>  
                <div className="nav__nav-mobile-img">
                     <img src={workNavbarSocialIcon.logo2} alt="" />
                </div>

                <NavbarTab />
               <NavbarSocialIcon />

            </ul>
         
        </div>
        <input type="checkbox" id="show-search" className="d-none" />
        <label for="show-search" className="nav__search-icon search-icon">
          
            <i className="fas fa-search"></i>
        </label>
        <form action="#" className="nav__search-box search-box">
            <input type="text" placeholder="Type Something to Search..." required className="nav__search-box-input" />
            <button type="submit" className="nav__go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
          </form>
          
    </div>
</nav>

</header>
 
  );
}

export default Navbar
