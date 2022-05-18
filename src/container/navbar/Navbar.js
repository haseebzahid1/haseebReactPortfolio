import React from 'react'
import '../navbar/Navbar.css'
import NavbarSocialIcon from '../../components/navbarSocialIcon/NavbarSocialIcon';

const Navbar = () => {
  return (
  
        <header className="cursor-light" id="main-nav">

     
<nav className="nav nav__navbar-top-default nav-radius navbar-expand-lg pb-0 ">
    <div className="nav__nav-container">
        <div className="nav__nav-row">
            <div className="nav__nav-logo">
                <img src="assets/img/haseeb logo-1.png" alt="" />
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
                     <img src="assets/img/haseeb logo.png" alt="" />
                </div>
                <li className="nav__nav-item">
                    <a href="#home" className="nav__nav-link">Personal info</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#education" className="nav__nav-link">Education</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#knowledge" className="nav__nav-link">Knowledge</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#Coding_skills" className="nav__nav-link">Coding skills</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#experience" className="nav__nav-link">Experience</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#project" className="nav__nav-link">Project</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#testimonials" className="nav__nav-link">Testimonials</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#language" className="nav__nav-link">Language</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#interests" className="nav__nav-link">Interests</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#services" className="nav__nav-link">Services</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#portfolio" className="nav__nav-link">Portfolio</a>
                </li>
                
                <li className="nav__nav-item">
                    <a href="#pricing" className="nav__nav-link">Pricing</a>
                </li>
                <li className="nav__nav-item">
                    <a href="#contact" className="nav__nav-link">Contact</a>
                </li>

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
