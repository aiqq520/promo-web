import React, { useEffect, useState } from 'react'
import { Tabs, Button, Spin } from 'antd';
import { connect } from 'dva'
import { router } from 'umi'
import { Link } from 'react-router-dom'
import SearchComp from '@/components/search'
import { getItemInfo } from '@/service/item'
import testImage from '@/assets/images/test.png'
import './index.less'

const { TabPane } = Tabs;

function ItemDetail(props) {
  const [loading, setLoading] = useState(false)
  const [dataInfo, setDataInfo] = useState({}) // 详情信息
  const { query: { itemId } } = props.location
  const { global: { homeInfo } } = props

  useEffect(() => {
    getDataInfo()
  }, [props])

  const getDataInfo = async () => {
    if (itemId) {
      setLoading(true)
      const res = await getItemInfo(itemId)
      setLoading(false)
      setDataInfo(res && res.data || {})
    }
  }

  const build = () => {
    router.push('/item/inquiry')
  }

  const { itemImageVOList, itemPriceVOList, shippingDimensionsHeight, shippingDimensionsWidth, shippingDimensionsLength } = (dataInfo || {})
  const { youMayLikeList } = (homeInfo || {})

  return (
    <section className='container'>
      <div className="item-detail-section">
        <SearchComp />

        <Spin spinning={loading}>
          <div className="detail-section">
            <div className="detail-wrap">
              <div className="breadcumb-tab">
                <Link to={'/index'}>Home</Link><span>{'>'}</span>
                <Link to={{ pathname: '/item/list', query: { categoryId: dataInfo && dataInfo.categoryId } }}>
                  {dataInfo && dataInfo.category}
                </Link>
              </div>

              <div className="item-detail">
                <div className="item-detail-left">
                  <div className="item-img-wrap">
                    <img className="main-img" src={testImage} alt="" />
                    <div className="item-img-list">
                      {itemImageVOList && itemImageVOList.map((item, index) => {
                        if (index <= 4) {
                          return <img src={item.url} alt="" key={index} />
                        }
                      })}
                    </div>
                  </div>

                  <div className="item-info-wrap">
                    <div className="info-title">
                      <div>Custom Full Color Imprint Non-woven Apron</div>
                      <span>Item No.:  GWTW0092</span>
                    </div>
                    <div className="info-price">
                      {itemPriceVOList && itemPriceVOList.map((item, index) => (
                        <div className="price-item" key={index}>
                          <div className="line-1">3000 pieces</div>
                          <div className="line-2">{item.productTime}days</div>
                          <div className="line-3">${item.price}</div>
                        </div>
                      ))}
                    </div>
                    <div className="info-details">
                      <div className="goods-info">
                        <label>Material : </label>
                        <span>{dataInfo && dataInfo.material}</span>
                      </div>
                      <div className="goods-info">
                        <label>Spec. : </label>
                        <span>{shippingDimensionsWidth}"x{shippingDimensionsLength}"x{shippingDimensionsHeight}"</span>
                      </div>
                      <div className="goods-info">
                        <label>Colors : </label>
                        <span>{dataInfo && dataInfo.productColor}</span>
                      </div>
                      <div className="goods-info">
                        <label>Logo : </label>
                        <span>{dataInfo && dataInfo.productSize}</span>
                      </div>
                      <div className="goods-info">
                        <label>Packing : </label>
                        <span>{dataInfo && dataInfo.insidePacking}</span>
                      </div>
                      <div className="goods-info">
                        <label>Feature : </label>
                        <span>{dataInfo && dataInfo.features}</span>
                      </div>
                      <div className="goods-info">
                        <label>Price Code : </label>
                        <span>3R2V </span>
                      </div>
                      <div className="goods-info">
                        <span>Minimum Order is the smallest quantity listed.</span>
                      </div>
                    </div>
                    <div className="info-btns">
                      <Button className="default-btn">Sample Request</Button>
                      <Button type='primary' onClick={build}>Build a Quote</Button>
                      <Button type='primary'>Add To Inquiry</Button>
                    </div>

                    <div className="info-remarks">
                      <div>Email-a-Friend</div>
                      <div>Print-a-Page</div>
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
                        <img src={item.mainImage || testImage} alt="" />
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
            <TabPane tab='Important Note' key='1'>
              Made from non-woven polypropylene, thickness and durable. The size is 21.3"x29". Full length, will protect your clothes properly when cooking,
              gardening, housecleaning or painting. Large area can be imprinted. Custom size is available.
            </TabPane>
            <TabPane tab='Description & Review' key='2'>
              Description & Review Made from non-woven polypropylene, thickness and durable. The size is 21.3"x29". Full length, will protect your clothes properly when cooking,
              gardening, housecleaning or painting. Large area can be imprinted. Custom size is available.
            </TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default connect(({ global }) => ({ global }))(ItemDetail)
