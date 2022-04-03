import React, { useState } from 'react'
import { Spin } from 'antd'
// import { history } from 'umi';
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.less'
import 'swiper/components/pagination/pagination.less'

SwiperCore.use([Pagination, Autoplay])

function IndexBanner(props) {
  const [visible, setVisible] = useState(false)
  const [dataList, setDataList] = useState([]); // 左侧hover数据
  const [currentId, setCurrentId] = useState(undefined); // 当前类目id
  const [currentName, setCurrentName] = useState(undefined); // 当前类目名称
  const { dataInfo, loading } = props
  const { bannerVOS, frontCategoryVOList, youMayLikeList } = (dataInfo || {})

  // 鼠标移入
  const handleEnter = (item) => {
    const data = item && item.keyword && item.keyword.split(',') || []
    setVisible(true)
    setDataList(data)
    setCurrentId(item.id)
    setCurrentName(item.name)
  }

  // 鼠标移出
  const handleLeave = (event) => {
    event.persist();
    let x = event.clientX // 鼠标当前相对于网页的x位置
    let y = event.clientY // 鼠标当前相对于网页的y位置
    let div = document.getElementById('menu')
    let divx1 = div.getBoundingClientRect().left // 获取对象相对于网页的计算左侧位置
    let divy1 = div.getBoundingClientRect().top  // 获取对象相对于网页的计算顶端位置
    let divx2 = divx1 + div.getBoundingClientRect().width
    let divy2 = divy1 + div.getBoundingClientRect().height

    if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
      setVisible(false)
      // setDataList([]); // 清空数据
      // setCurrentId(undefined);
      // setCurrentName(undefined)
    }
  }

  // 二级菜单移入
  const handleHovEnter = () => {
    setVisible(true)
  }

  // 二级菜单移出
  const handleHovLeave = () => {
    setVisible(false)
    setDataList([])
    setCurrentId(undefined)
    setCurrentName(undefined)
  }

  // 点击banner打开地址
  const handleImgClick = (data) => {
    if(!data.website) return
    // history.push(data.website)
  }

  return (
    <Spin spinning={loading}>
      <div className='index-banner'>
        <div className='banner-wrap'>
          <div className='banner-category'>
            <div className="banner-category-wrap">
              <div className='category-wrap'>
                {frontCategoryVOList && frontCategoryVOList.map((item) => (
                  <Link
                    key={item.id}
                    className='category-item'
                    to={{
                      pathname: '/item/list',
                      query: { categoryId: item.id }
                    }}
                    onMouseEnter={() => handleEnter(item)}
                    onMouseLeave={(e) => handleLeave(e)}
                  >
                    <span>{item.name}</span>

                  </Link>
                ))}
              </div>
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
                    <img src={v.image} alt='' onClick={() => handleImgClick(v)} />
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
                      <img src={item.mainImage} alt='' />
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

          {/* 分类hover */}
          <div
            id="menu"
            className={`category_list_section_wrap ${visible ? 'category_list_show' : ''}`}
            onMouseEnter={() => handleHovEnter()}
            onMouseLeave={() => handleHovLeave()}
          >
            <div className='category_list_section'>
              <div className="category_list_wrap">
                <div className='category_list'>
                  <div className="category_list_title">{currentName}</div>
                  {dataList && dataList.map((item, i) => (
                    <Link
                      className="category_list_item"
                      key={i}
                      to={{
                        pathname: '/item/list',
                        query: {
                          keyword: item,
                          categoryId: currentId
                        }
                      }}
                    >
                      <span>{item}</span>
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
