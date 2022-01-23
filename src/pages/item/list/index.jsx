import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { connect } from 'dva'
import { Link } from 'react-router-dom'
import SearchComp from '@/components/search'
import ClassificCmp from '@/components/classific'
import { queryItemList } from '@/service/item'
import './index.less'

function ItemList(props) {
  const [loading, setLoading] = useState(false)
  const [dataList, setDataList] = useState([]) // 商品
  const { global: { categoryList }, location } = props
  const { query: { categoryId } } = location

  useEffect(() => {
    getDataList()
  }, [props])

  const getDataList = async () => {
    if (categoryId) {
      setLoading(true)
      const params = { categoryId, page: 1, size: 20 }
      const res = await queryItemList(params)
      setLoading(false)
      const { rows } = (res && res.data || {})
      setDataList(rows)
    }
  }

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

          <Spin spinning={loading}>
            <div className="item-list-box">
              {dataList && dataList.map((item) => (
                <Link
                  className="list-item"
                  key={item.id}
                  to={{
                    pathname: '/item/detail',
                    query: { itemId: item.id }
                  }}>
                  <img className="list-item-img" src={item.mainImage} alt="" />
                  <div className="list-item-info">
                    <div className="info-detail">{item.title}</div>
                    <div className="info-price">${item.lowPrice} - {item.highPrice}</div>
                  </div>
                </Link>
              ))}
            </div>
          </Spin>
        </div>
      </div>
    </section>
  )
}

export default connect(({ global }) => ({ global }))(ItemList)
