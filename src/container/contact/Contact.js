import React from 'react'
import '../contact/Contact.css'
import { workContact } from '../../portfolio'
import ContactCard from '../../components/contactCard/ContactCard'

const Contact = () => {
    return (
        <section class="services border-section-top" id="services">
            <div class="container">
                <div class="container-fluid">
                    <div class="section">
                        <div class="section-img">
                            <img src="./assets/img/education.svg" alt="" />
                            <div class="section-center-icon">
                                <i class={workContact.imgIcon}></i>
                            </div>
                        </div>
                        <h1 class="section-h1">{workContact.title}</h1>
                        <h4 class="section-fixed">{workContact.title}</h4>
                        <p class="section-p">{workContact.desc}</p>
                    </div>

                    {/*  */}
                    <section class="contact-row">
                        <div class="contact-col-8">
                            <div class="contact-form">
                                <form action="#." class="contact-form-inner">

                                    <ContactCard />

                                    <div class="contact-input-row-2">
                                        <div class="contact-input-col">
                                            <textarea name="" class="contact-textarea" rows="6" placeholder="Message..."></textarea>
                                        </div>
                                    </div>

                                    <div class="contact-button">
                                        <a href="#." class="contact-btn-a">{workContact.btn}</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="contact-col-4 contact-img">
                            <img src={workContact.img} alt="" />
                        </div>
                    </section>


                </div>

            </div>
        </section>
    )
}

export default Contact
