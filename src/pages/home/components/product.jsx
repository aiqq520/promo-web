import React from 'react'
// import { Link } from 'react-router-dom'
import { productList } from '@/common/test'

function IndexProduct(props) {
  return (
    <div className='index-product'>
      <div className='product-section'>
        <div className='product-wrap'>
          <div className='title'>TOP SELLINGS</div>

          <div className='product-wrapper'>
            {productList &&
              productList.map((v, i) => (
                <div className='item' key={i}>
                  <img src={v.url} alt='' />
                  <div className='detail'>
                    <div className='name'>{v.name}</div>
                    <div className='price'>{v.price}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className='product-wrap'>
          <div className='title'>NEW PRODUCTS</div>

          <div className='product-wrapper'>
            {productList &&
              productList.map((v, i) => (
                <div className='item' key={i}>
                  <img src={v.url} alt='' />
                  <div className='detail'>
                    <div className='name'>{v.name}</div>
                    <div className='price'>{v.price}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexProduct
