import React, { useEffect, useState } from 'react'
import { Tabs, Button, Spin, message } from 'antd';
import { connect } from 'dva'
import { router } from 'umi'
import { Link } from 'react-router-dom'
import SearchComp from '@/components/search'
import { getItemInfo } from '@/service/item'
import facebook from '@/assets/images/icons/facebook.png'
import facebookH from '@/assets/images/icons/facebook-hover.png'
import twiter from '@/assets/images/icons/twiter.png'
import twiterH from '@/assets/images/icons/twiter-hover.png'
import linkin from '@/assets/images/icons/linkin.png'
import linkinH from '@/assets/images/icons/linkin-hover.png'
import './index.less'

const { TabPane } = Tabs;

function ItemDetail(props) {
  const [loading, setLoading] = useState(false)
  const [dataInfo, setDataInfo] = useState({}) // 详情信息
  const [currentImage, setCurrentImage] = useState(undefined) // 当前主图
  const { global: { homeInfo }, location } = props

  useEffect(() => {
    getDataInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  // 加载详情数据
  const getDataInfo = async () => {
    const { query: { itemId } } = location
    if (itemId) {
      setLoading(true)
      const res = await getItemInfo(itemId)
      const { itemImageVOList } = res && res.data
      const rawImg = itemImageVOList && itemImageVOList[0]
      setLoading(false)
      setDataInfo(res && res.data || {})
      setCurrentImage(rawImg.url || '')
    } else {
      message.error('商品id不存在')
    }
  }

  // 搜索框查询
  const handleSearch = (values) => {
    router.push({
      pathname: '/item/list',
      query: {
        item_keyword: values,
        key: 'search'
      }
    })
  }

  // 展示imageList
  const renderImage = () => {
    const { itemImageVOList } = (dataInfo || {})
    if (itemImageVOList && itemImageVOList.length > 0) {
      const imageList = itemImageVOList.slice(0, 5)
      return (
        <>
          {imageList && imageList.map((item, index) => (
            <img src={item.url} alt="" key={index} onClick={() => setCurrentImage(item.url)} />
          ))}
        </>
      )
    }
  }

  const handleBuild = () => {
    router.push('/item/inquiry')
  }

  const handleAdd = () => {
    router.push('/cart')
  }

  const { itemPriceVOList, shippingDimensionsHeight, shippingDimensionsWidth, shippingDimensionsLength } = (dataInfo || {})
  const { youMayLikeList } = (homeInfo || {})

  return (
    <section className='container'>
      <div className="item-detail-section">
        {/* 搜索框 */}
        <SearchComp onSearch={handleSearch} />

        <Spin spinning={loading}>
          <div className="detail-section">
            <div className="detail-wrap">
              {/* 类目 */}
              <div className="breadcumb-tab">
                <Link to={'/index'}>Home</Link><span>{'>'}</span>
                <Link to={{
                  pathname: '/item/list',
                  query: { categoryId: dataInfo && dataInfo.categoryId } }}
                >
                  {dataInfo && dataInfo.category}
                </Link>
              </div>

              {/* 商品详情 */}
              <div className="item-detail">
                <div className="item-detail-left">
                  <div className="item-detail-wrap">
                    <div className="item-img-wrap">
                      <img className="main-img" src={currentImage} alt="" />
                      <div className="item-img-list">
                        {renderImage()}
                      </div>
                    </div>

                    <div className="item-info-wrap">
                      <div className="info-title">
                        <div>{dataInfo && dataInfo.description}</div>
                        <span>Item No.:  {dataInfo && dataInfo.itemSn}</span>
                      </div>

                      <div className="info-details">
                        <div className="goods-info">
                          <label>Material</label>
                          <span>{dataInfo && dataInfo.material}</span>
                        </div>
                        <div className="goods-info">
                          <label>Set up charge</label>
                          <span>{dataInfo && dataInfo.setupCharge}</span>
                        </div>
                        <div className="goods-info">
                          <label>Spec. </label>
                          <span>{shippingDimensionsWidth}"x{shippingDimensionsLength}"x{shippingDimensionsHeight}"</span>
                        </div>
                        <div className="goods-info">
                          <label>Colors</label>
                          <span>{dataInfo && dataInfo.productColor}</span>
                        </div>
                        <div className="goods-info">
                          <label>Logo</label>
                          <span>{dataInfo && dataInfo.productSize}</span>
                        </div>
                        <div className="goods-info">
                          <label>Packing</label>
                          <span>{dataInfo && dataInfo.insidePacking}</span>
                        </div>
                        <div className="goods-info">
                          <label>Feature</label>
                          <span>{dataInfo && dataInfo.features}</span>
                        </div>
                        <div className="goods-info">
                          <label>Price Code</label>
                          <span>3R2V </span>
                        </div>
                        <div className="goods-info-extra">
                          <span>Minimum Order is the smallest quantity listed.</span>
                        </div>
                      </div>

                      <div className="info-price">
                        {itemPriceVOList && itemPriceVOList.map((item, index) => (
                          <div className="price-item" key={index}>
                            <div className="line-1"><span>{item.level}</span>pieces</div>
                            <div className="line-2"><span>{item.productTime}</span>days</div>
                            <div className="line-3">${item.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="item-detail-share">
                    <div className="share-btns">
                      <span>Share to</span>
                      <div className='share-btns-wrap'>
                        <a href='#'>
                          <img src={facebook} alt="" />
                          <img src={facebookH} alt="" />
                        </a>
                        <a href='#'>
                          <img src={twiter} alt="" />
                          <img src={twiterH} alt="" />
                        </a>
                        <a href='#'>
                          <img src={linkin} alt="" />
                          <img src={linkinH} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="info-btns">
                      <Button className="default-btn" onClick={() => handleBuild()}>Sample Request</Button>
                      <Button type='primary' onClick={() => handleBuild()}>Build a Quote</Button>
                      <Button type='primary' onClick={() => handleAdd()}>Add To Inquiry</Button>
                    </div>
                  </div>
                </div>

                <div className="item-detail-right">
                  <div className="headline">You May Like</div>
                  <div className="may-like">
                    {youMayLikeList && youMayLikeList.map((item) => (
                      <Link
                        className="like-item"
                        key={item.id}
                        to={{
                          pathname: '/item/detail',
                          query: { itemId: item.id }
                        }}
                      >
                        <img src={item.mainImage} alt="" />
                        <div className="like-price">${item.lowPrice} - {item.highPrice}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Spin>

        <div className="note-section">
          <Tabs type='card' className='note-tab'>
            <TabPane tab='Description & Review' key='1'>
              <div>Made from non-woven polypropylene, thickness and durable. The size is 21.3"x29". Full length, will protect your clothes properly when cooking, gardening, housecleaning or painting. Large area can be imprinted. Custom size is available.</div>
              <div className='note-info'>
                <div className='title'>Shipping Details</div>
                <div>Made from non-woven polypropylene, thickness and durable. The size is 21.3"x29". Full length, will protect your clothes properly when cooking, gardening, housecleaning or painting. Large area can be imprinted. Custom size is available.</div>
              </div>
              <div className='note-info'>
                <div className="title">Important note</div>
                <div>Made from non-woven polypropylene, thickness and durable. The size is 21.3"x29". Full length, will protect your clothes properly when cooking, gardening, housecleaning or painting. Large area can be imprinted. Custom size is available.</div>
              </div>
            </TabPane>
            {/* <TabPane tab='Description & Review' key='2'>
              Description & Review Made from non-woven polypropylene, thickness and durable. The size is 21.3"x29". Full length, will protect your clothes properly when cooking,
              gardening, housecleaning or painting. Large area can be imprinted. Custom size is available.
            </TabPane> */}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default connect(({ global }) => ({ global }))(ItemDetail)
