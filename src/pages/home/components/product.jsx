import React from 'react'
import { Spin } from 'antd'
import { Link } from 'react-router-dom'
import testImage from '@/assets/images/test.png'

function IndexProduct(props) {
  const { dataInfo, loading } = props
  const { newItemList, topSaleList } = (dataInfo || {})

  return (
    <Spin spinning={loading}>
      <div className='index-product'>
        <div className='product-section'>
          <div className='product-wrap'>
            <div className='title'>TOP SELLINGS</div>

            <div className='product-wrapper'>
              {topSaleList &&
                topSaleList.map((item, i) => (
                  <Link
                    className='item'
                    key={i}
                    to={{
                      pathname: '/item/detail',
                      query: { itemId: item.id }
                    }}>
                    <img src={item.mainImage || testImage} alt='' />
                    <div className='detail'>
                      <div className='name'>{item.name}</div>
                      <div className='price'>${item.lowPrice} - {item.highPrice}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div className='product-wrap'>
            <div className='title'>NEW PRODUCTS</div>

            <div className='product-wrapper'>
              {newItemList &&
                newItemList.map((item, i) => (
                  <Link
                    className='item'
                    key={i}
                    to={{
                      pathname: '/item/detail',
                      query: { itemId: item.id }
                    }}>
                    <img src={item.mainImage} alt='' />
                    <div className='detail'>
                      <div className='name'>{item.name}</div>
                      <div className='price'>${item.lowPrice} - {item.highPrice}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Spin>
  )
}

export default IndexProduct
