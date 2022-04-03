import React from 'react'
import Header from '@/components/header'
import Title from './component/title'
import './index.less'

function Tutorial(props) {
  return (
    <section className='container'>
      <div className='tutorial-section'>
        <Header type='index' />

        <div className='section-wrap-tutorial'>
          <div className='tutorial-item'>
            <Title type={1} title={'HOWER TO ORDER'} />
            <div className='content'>
              <div className='list'>
                <div className='dot'>1</div>
                <div className='detail'>
                  <div>Order by Phone :</div>
                  <div>You can call our phone: <span>909-413-7983</span></div>
                </div>
              </div>

              <div className='list'>
                <div className='dot'>2</div>
                <div className='detail'>
                  <div>Order by Email:</div>
                  <div>We'd like to hear from you. You can send orders & questions to info@<span>66666666@gmail.com</span>we will response to you within 24 hours.</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tutorial-item'>
            <Title type={2} title={'WARRANTY'} />
            <div className='content'>
              <div className='list'>
                <div className='dot'>1</div>
                <div className='detail'>We ensure the quality and shapes are same as the samples confirmed</div>
              </div>

              <div className='list'>
                <div className='dot'>2</div>
                <div className='detail'>if the ship term is the DDP or the DDU ,we take all the responsibility before the cargo to your door.</div>
              </div>

              <div className='list'>
                <div className='dot'>3</div>
                <div className='detail'>if the cargo goes bad during the transportation,we take all the responsibility.</div>
              </div>

              <div className='list'>
                <div className='dot'>4</div>
                <div className='detail'>In general,we can ensure the defect rate are no more than 3%,some items are no more than 0.3%</div>
              </div>

              <div className='list'>
                <div className='dot'>5</div>
                <div className='detail'>we can do any test or certification, like CE,or ROHS,FDA , or any other  standard like  CPSIA (H.R. 4040) .</div>
              </div>
            </div>
          </div>

          <div className='tutorial-item'>
            <Title type={3} title={'PATMENT'} />
            <div className='content'>
              <div className='list'>
                <div className='dot'>1</div>
                <div className='detail'>T/T(Wire Tranfer). 50% Deposit ,and balance before shippment.</div>
              </div>

              <div className='list'>
                <div className='dot'>2</div>
                <div className='detail'>Check.</div>
              </div>

              <div className='list'>
                <div className='dot'>3</div>
                <div className='detail'>Credit card.</div>
              </div>
            </div>

          </div>

          <div className='tutorial-item'>
            <Title type={4} title={'FAQS'} />
            <div className='content'>
              <div className='list answer'>
                <div className='dot'>Q1</div>
                <div className='detail'>
                  <span>Who we are ？</span>
                </div>
              </div>

              <div className='list answer'>
                <div className='dot red'>AN</div>
                <div className='detail'>Our Sourcing Team is very professional with more than 10 years sourcing experience–Our team is exellent and unique. They are fast,efficient,diligent,well trained and professional.Each of us is good at paying attention to each detail,and we regard Quality as the best important thing. We have built long term relationships with our clients based on a mix of service, creativity, value and commitment.</div>
              </div>

              <div className='list answer'>
                <div className='dot'>Q2</div>
                <div className='detail'>
                  <span>If I want small order ,even not up to your MOQ ,But I still want to order ,can you help me ?</span>
                </div>
              </div>

              <div className='list answer'>
                <div className='dot red'>AN</div>
                <div className='detail'>You need to talk us ,we can check it ,if we have stock ,or if you can pay more ,we can try our best help you to figure it out .</div>
              </div>

              <div className='list answer'>
                <div className='dot'>Q3</div>
                <div className='detail'>
                  <span>Can I use the Credit card ? </span>
                </div>
              </div>

              <div className='list answer'>
                <div className='dot red'>AN</div>
                <div className='detail'>An: Yes, for short amount which is under $ 5,000.0, and adding 3% handling charge, you can pay by Credit Card.</div>
              </div>

              <div className='list answer'>
                <div className='dot'>Q4</div>
                <div className='detail'>
                  <span>How can you make us feel relieved ? </span>
                </div>
              </div>

              <div className='list answer'>
                <div className='dot red'>AN</div>
                <div className='detail'>An: Step by step:1:Send you a pre-production sample.2:Then we will send you a mass production sample after confirmation, 3:We will issue QC report after finishing production .4:Daily report ,Update you the processing with pictures. 5:Tell you when to ship ,when will arrive in your port.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Tutorial
