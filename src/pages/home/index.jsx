import React from 'react'
import { connect } from 'dva'
import SearchComp from '@/components/search'
import IndexBanner from './components/banner'
import IndexProduct from './components/product'
import './index.less'

function Index(props){

  const { global: { homeInfo, categoryList }, loading } = props

  return (
    <section className='container'>
      <div className='index-section'>
        {/** header */}
        <SearchComp />

        {/** banner */}
        <IndexBanner
          loading={loading}
          dataInfo={homeInfo}
          categoryList={categoryList}
        />

        {/** 商品 */}
        <IndexProduct
          loading={loading}
          dataInfo={homeInfo}
        />
      </div>
    </section>
  )
}

export default connect(({ global, loading }) => ({
  global,
  loading: loading.effects['global/init']
}))(Index)
