import React from 'react'
import SearchComp from '@/components/search'
import ClassificCmp from '@/components/classific';
import { categoryList, productList } from '@/common/test';
import './index.less'

function ItemList(props) {
  return (
    <section className='container'>
      <div className="item-section">
        {/* 搜索框 */}
        <SearchComp />

        <div className="item-wrap">
          {/* 分类 */}
          <ClassificCmp
            dataList={categoryList}
          />

          <div className="item-list-box">
            {productList && productList.map((item, index) => (
              <div className="list-item" key={index}>
                <img className="list-item-img" src={item.url} alt="" />
                <div className="list-item-info">
                  <div className="info-detail">{item.name}</div>
                  <div className="info-price">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemList
