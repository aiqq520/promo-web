import React from 'react'
import Banner from '@/components/banner'
import './index.less'

function About(props) {
  return (
    <section className='container'>
      <Banner type='ABOUT' />

      <div className='container-section'>
        <div className='section-wrap-about'>
          <div className='about-item'>
            <span className='about-title'>CINDA PROMO INC </span>
            <span>is your one-stop for promotional products & business gifts, including corporate promotional bags, personality accessories, embroidered sports-stuffs, printed plastic fans, banners and much more.</span>
          </div>

          <div className='about-item'>
            <span className='about-title'>CINDA PROMO INC </span>
            <span>has maturity operational system, once the order is confirmed, we will make a pre-production sample and courier the sample for the client to approve before the full production commences. We are being strong relationships with suppliers and manufacturers. </span>
          </div>

          <div className='about-item'>
            <span>from all over the world, to ensure our customers receive the best product choice available and the highest quality of product. </span>
          </div>

          <div className='about-item'>
            <span className='about-title'>CINDA PROMO INC </span>
            <span>mission: to be the corporate company first choice for promotional products & business gifts.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
