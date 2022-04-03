import React from 'react'
import Banner from '@/components/banner'
import phone from '@/assets/images/icons/contact-phone.png';
import email from '@/assets/images/icons/contact-email.png';
import './index.less'

function Contact(props) {
  return (
    <section className='container'>

      <Banner type='CONTACT' />

      <div className='container-section'>
        <div className='section-wrap-contact'>
          <div className='contact-item'>
            <img src={phone} alt="手机" />
            <div className='contact-text'>CALL US</div>
            <div className='contact-num'>909-413-7983</div>
          </div>
          <div className='contact-item'>
            <img src={email} alt="邮箱" />
            <div className='contact-text'>SEND US</div>
            <div className='contact-num'>66666666@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
