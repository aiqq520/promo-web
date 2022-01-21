import React from 'react'
import Header from '@/components/header'
import { bannerConfigs } from '@/common/banner'
import './index.less'

function Banner(props) {
  const { type } = props
  const { url, title, extra, info } = (bannerConfigs[type] || {})

  return (
    <div className="banner">
      <img className='banner-img' src={url} alt='' />
      <Header />

      <div className='banner-info'>
        <div className='headline'>
          <div className='title'>{title}&nbsp;<span>{extra}</span></div>
          <div className='desc'>{info}</div>
        </div>
      </div>
    </div>
  )
}

export default Banner
