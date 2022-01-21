import React from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { categoryList, likeList, bannerList } from '@/common/test'

import 'swiper/swiper.less'
import 'swiper/components/pagination/pagination.less'

SwiperCore.use([Pagination, Autoplay])

function IndexBanner(props) {
  // const { categoryList } = props

  return (
    <div className='index-banner'>
      <div className='banner-wrap'>
        <div className='banner-category'>
          <div className='category-wrap'>
            {categoryList &&
              categoryList.map((item, index) => (
                <div key={index} className='category-item'>
                  <span>{item}</span>
                </div>
              ))}
          </div>
        </div>

        <div className='banner-swiper'>
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            }}
            spaceBetween={50}
            pagination={{ clickable: true }}
          >
            {bannerList && bannerList.map((v, i) => (
              <SwiperSlide key={i}>
                <img src={v} alt='' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='banner-extra'>
          <div className='extra-wrap'>
            <div className='title'>Hi,Welcome to CINDA PROMO</div>

            <div className='btn'>
              <Link to={'/login'}>Sign In</Link>
              <Link to={'/register'}>Join Free</Link>
            </div>

            <div className='guess'>
              <div className='info'>You May Like</div>
              <div className='list'>
                {likeList && likeList.map((item, index) => (
                  <div className='item' key={index}>
                    <img src={item.url} alt='' />
                    <div className='detail'>
                      <div className='name'>{item.name}</div>
                      <div className='intro'>{item.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexBanner
