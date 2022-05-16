import React from 'react'
import '../footer/Footer.css'
import FooterSocialIcon from '../../components/footerSocialicon/FooterSocialIcon'
import { footer } from '../../portfolio'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="footer-container-fluid">
            <div class="footer-bg-main-img">
                <div class="footer-row">
                    <div class="footer-col-3">
                        <h2 class="footer-h2">{footer.title}</h2>
                        <span class="footer-line"></span>
                        <p class="footer-p">
                        {footer.address}
                        </p>
                    </div>
                    <div class="footer-col-3">
                        <h2 class="footer-h2">{footer.title2}</h2>
                        <span class="footer-line"></span>
                        <div class="footer-text-group">
                            <span class="footer-span-phone">{footer.number}</span>
                            {/* <!-- <span class="footer-span-phone">+92 41 123 456 789</span>  */}
                        </div>
                    </div>
                    <div class="footer-col-3">
                        <h2 class="footer-h2">{footer.title3}</h2>
                        <span class="footer-line"></span>
                        <div class="footer-text-group">
                            <span class="footer-span">{footer.gmail}</span>
                            <span class="footer-span">{footer.gmail2}</span>
                        </div>
                    </div>
                    <div class="footer-col-4">
                        <h2 class="footer-h2">{footer.title4}</h2>
                        <span class="footer-line"></span>
                        <div class="footer-text-group">
                            <span class="footer-span">{footer.follow}</span>
                        </div>
 
                       <FooterSocialIcon />
                    </div>
                </div>
            </div>
 
 
            <div class="footer-bottom">
                <span class="far fa-copyright footer-c"></span><span class="footer-bottom-span"> 2022 All rights reserved.</span>
            </div>
        </div>
    </div>
 </footer>
  )
}

export default Footer
