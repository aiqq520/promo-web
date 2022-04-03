import React from 'react'
import { connect } from 'dva'
import SearchComp from '@/components/search'
import ClassificCmp from '@/components/classific';
import cartEmpty from '@/assets/images/icons/cart-empty.png'
import router from 'umi/router';
import './index.less'

function Cart(props) {
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
    <section className='container'>
      <div className="section-cart-wrap">
        {/* 搜索框 */}
        <SearchComp onSearch={handleSearch} />

        <div className='cart-wrap'>
          {/* 分类 */}
          <ClassificCmp dataList={categoryList} />

          <div className="cart-section">
            <div className="cart-section-blank">
              <img src={cartEmpty} alt="" />
              <div className="blank-info">
                <div className="blank-title">Your shopping cart is empty</div>
                <div className="blank-detail">
                  If you aready have an accout,sign in to see your cart.<br />
                  Or you can search the products what you want in the search bar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default connect(({ global }) => ({ global }))(Cart)
