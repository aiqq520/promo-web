import React from 'react'
import { connect } from 'dva'
import SearchComp from '@/components/search'
import ClassificCmp from '@/components/classific';
import FormElement from './component/FormElement';
import './index.less'

function ItemInquiry(props) {
  const { global: { categoryList } } = props

  return (
    <section className="container">
      <div className="item-inquiry-section">
        {/* 搜索框 */}
        <SearchComp />

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
