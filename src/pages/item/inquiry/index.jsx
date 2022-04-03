import React from 'react'
import { connect } from 'dva'
import SearchComp from '@/components/search'
import ClassificCmp from '@/components/classific';
import FormElement from './component/FormElement';
import router from 'umi/router';
import './index.less'

function ItemInquiry(props) {
  const { global: { categoryList } } = props

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
    <section className="container">
      <div className="item-inquiry-section">
        {/* 搜索框 */}
        <SearchComp onSearch={handleSearch} />

        <div className="inquiry-section">
          {/* 分类 */}
          <ClassificCmp
            dataList={categoryList}
          />

          <FormElement />
        </div>

      </div>
    </section>
  )
}

export default connect(({ global }) => ({ global }))(ItemInquiry)
