import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { connect } from 'dva'
import { Link } from 'react-router-dom'
import SearchComp from '@/components/search'
import ClassificCmp from '@/components/classific'
import { queryItemList, querySearch } from '@/service/item'
// import InfiniteScroll from 'react-infinite-scroll-component';
import './index.less'

function ItemList(props) {
  const [loading, setLoading] = useState(false)
  const [dataList, setDataList] = useState([])
  const [currentId, setCurrentId] = useState(undefined) // 当前类目id
  // const [count, setCount] = useState(0)
  // const [pageIndex, setPageIndex] = useState(1)
  // const [pageSize, setPageSize] = useState(20)
  const { global: { categoryList }, location } = props

  useEffect(() => {
    const { query: { categoryId, keyword, item_keyword, key } } = location
    setCurrentId(categoryId) // 设置当前类目id

    // 存在商品keyword，搜索查询
    if (key && key === 'search') {
      const item_params = { keyword: item_keyword, page: 1, size: 20 }
      getItemList(item_params)
      return
    }

    // 默认根据类目查询分类商品
    const params = { keyword, categoryId, page: 1, size: 20 }
    getDataList(params)
  }, [location])

  // 加载数据
  const getDataList = async (params) => {
    setLoading(true)
    const res = await queryItemList(params)
    setLoading(false)
    const { rows } = (res && res.data || {})
    // setCount(count)
    setDataList(rows)
  }

  // 搜索框查询
  const handleSearch = async (values) => {
    const params = { keyword: values, page: 1, size: 20 }
    getItemList(params)
    setCurrentId(undefined)
  }

  // 商品数据加载
  const getItemList = async (params) => {
    setLoading(true)
    const res = await querySearch(params)
    setLoading(false)
    const { rows } = (res && res.data || {})
    setDataList(rows)
  }

  return (
    <section className='container'>
      <div className="item-section">
        {/* 搜索框 */}
        <SearchComp onSearch={handleSearch} />

        <div className="item-wrap">
          {/* 分类 */}
          <ClassificCmp
            dataList={categoryList}
            activeKey={currentId}
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
              {/* <InfiniteScroll
                dataLength={dataList.length}
                next={getDataList}
                hasMore={dataList.length < count}
                style={{ display: 'flex', flexDirection: 'column' }}
                loader={<Spin />}
                refreshFunction={getDataList}
                pullDownToRefresh
                pullDownToRefreshThreshold={10}
                pullDownToRefreshContent={
                  <div>下拉刷新~</div>
                }
                endMessage={
                  <div style={{ textAlign: 'center' }}>The End</div>
                }
              >
              </InfiniteScroll> */}
            </div>
          </Spin>
        </div>
      </div>
    </section>
  )
}

export default connect(({ global }) => ({ global }))(ItemList)
