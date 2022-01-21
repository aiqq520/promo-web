import React from 'react'
import Banner from '@/components/banner'
import TimeItem from './component/item'
import Dot from './component/dot'
import './index.less'

function Process(props) {
  return (
    <section className='container'>
      <Banner type='PROCESS' />

      <div className='container-section'>
        <div className='section-wrap-process'>
          <div className='process-info'>
            <Dot text={2020} />

            <TimeItem
              type='right-item'
              time='2020.05.20'
              content='Today is Memorial Day. We alltogether lament for those soldiers who sacrifice themselves in the past war.'
            />

            <TimeItem
              type='left-item'
              time='2020.05.20'
              content='Today is Memorial Day. We alltogether lament for those soldiers who sacrifice themselves in the past war.'
            />

            <Dot text={2020} />

            <TimeItem
              type='right-item'
              time='2020.05.20'
              content='Today is Memorial Day. We alltogether lament for those soldiers who sacrifice themselves in the past war.'
            />

            <Dot text={2020} end />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
