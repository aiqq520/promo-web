import React from 'react'
import { Spin } from 'antd'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import bannerImage from '@/assets/images/banner.png'
import testImage from '@/assets/images/test.png'

import 'swiper/swiper.less'
import 'swiper/components/pagination/pagination.less'

SwiperCore.use([Pagination, Autoplay])

function IndexBanner(props) {
  const { categoryList, dataInfo, loading } = props
  const { bannerVOS, youMayLikeList } = (dataInfo || {})

  return (
    <Spin spinning={loading}>
      <div className='index-banner'>
        <div className='banner-wrap'>
          <div className='banner-category'>
            <div className='category-wrap'>
              {categoryList && categoryList.map((item) => (
                  <Link
                    key={item.id}
                    className='category-item'
                    to={{
                      pathname: '/item/list',
                      query: { categoryId: item.id }
                    }}
                  >
                    <span>{item.name}</span>
                  </Link>
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
              {bannerVOS && bannerVOS.map((v, i) => (
                <SwiperSlide key={i}>
                  <LazyLoad>
                    <img src={v.image || bannerImage} alt='' />
                  </LazyLoad>
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
                  {youMayLikeList && youMayLikeList.map((item, index) => (
                    <Link
                      className='item'
                      key={index}
                      to={{
                        pathname: '/item/detail',
                        query: { itemId: item.id }
                      }}
                    >
                      <img src={item.mainImage || testImage} alt='' />
                      <div className='detail'>
                        <div className='name'>{item.title}</div>
                        <div className='intro'>{item.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  )
}

export default IndexBanner
