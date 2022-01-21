import React from 'react'
import Banner from '@/components/banner'
import './index.less'

function Contact(props) {
  return (
    <section className='container'>

      <Banner type='CONTACT' />

      <div className='container-section'>
        <div className='section-wrap-contact'>
          <div className='contact-item'>
            <div className='contact-phone'></div>
            <div className='contact-text'>CALL US</div>
            <div className='contact-num'>909-413-7983</div>
          </div>
          <div className='contact-item'>
            <div className='contact-email'></div>
            <div className='contact-text'>SEND US</div>
            <div className='contact-num'>66666666@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
