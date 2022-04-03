import React from 'react'
import { connect } from 'dva'
import SearchComp from '@/components/search'
import IndexBanner from './components/banner'
import IndexProduct from './components/product'
import router from 'umi/router';
import './index.less'

function Index(props){

  const { global: { homeInfo, categoryList }, loading } = props

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

  return (
    <section className='container'>
      <div className='index-section'>
        {/** header */}
        <SearchComp onSearch={handleSearch} />

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
