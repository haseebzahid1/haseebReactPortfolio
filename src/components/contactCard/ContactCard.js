import React from 'react'
import { workContact } from '../../portfolio'

const ContactCard = () => {
  return (
    <div class="contact-input-row">
    {workContact.contact.map((contact) => {
        return <div class="contact-input-col-6">
            <input type={contact.type} placeholder={contact.placeholder} class="contact-input contact-zero-mt" />
        </div>
    })}
</div>
  )
}

export default ContactCard
