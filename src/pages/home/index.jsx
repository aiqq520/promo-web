import React, { useEffect, useState } from 'react'
import SearchComp from '@/components/search'
import IndexBanner from './components/banner'
import IndexProduct from './components/product'
import { queryCategoryList, queryHomeList } from '@/service/home';
import './index.less'

function Index(props){
  const [dataInfo, setDataInfo] = useState({}) // 首页信息
  const [categoryList, setCategoryList] = useState([]) // 类目列表

  useEffect(() => {
    // getDataList()
  }, [])

  const getDataList = async() => {
    // 获取类目
    const res = await queryCategoryList()
    setCategoryList(res && res.data || [])

    // 获取首页信息
    const res1 = await queryHomeList()
    setDataInfo(res1 && res1.data || {})
  }

  return (
    <section className='container'>
      <div className='index-section'>
        {/** header */}
        <SearchComp />

        {/** banner */}
        <IndexBanner
          dataInfo={dataInfo}
          categoryList={categoryList}
        />

        {/** 商品 */}
        <IndexProduct />
      </div>
    </section>
  )
}

export default Index
