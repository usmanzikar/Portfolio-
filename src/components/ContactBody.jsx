import React from 'react';
import './Contact.css';
import Seperator from './common/Seperator';
import SocialContacts from './SocialContacts';

const ContactBody = () => {
    return (
        <div className='ContactBody'>
        <Seperator/>
        <label className='heading'>Contact Me</label>
          <div className='contact-container'>
              <div className='contact-left'>
              <div className='brandname'>
                  <h2>USMAN ZIKAR</h2>
                  <div className='underbrand'>
                      <span className='experty'>Front-end-Developer</span>
                  </div>
              </div>
                  <p className='contact-para'>What to get in Touch ? Contact me on any Plateform</p>
                  <h3>Whatsapp No :</h3>
                  <a href='tel:923038960300'> +92-0303-8960300</a>
                  <h3 > Email:</h3>
                  <a href='mailto:muhammadusmanbrw789@gmail.com'> muhammadusmanbrw789@gmail.com</a>
                  <SocialContacts/>
              </div>
          </div> 
        </div>
    )
}

export default ContactBody
