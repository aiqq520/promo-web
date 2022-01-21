import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
import { navigateConfig } from '@/common/index'
import commonCart from '@/assets/images/cart.png'
import indexCart from '@/assets/images/index-cart.png'
import './index.less'

function Header(props) {
  // 获取头部菜单
  const getHeaderMenu = (data) => {
    return (
      <Menu>
        {data && data.map((item, index) => {
          const { name, path } = (item || {})
          return (
            <Menu.Item key={index}>
              <Link to={path}>{name}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }

  const { type } = props

  return (
    <header className='header'>
      <div className='header-section'>
        <div className='header-left'>
          <Link to={'/login'}>Sign In</Link>
          <Link to={'/register'}>Join Free</Link>
        </div>

        <div className='header-right'>
          <div className='nagivation-tab'>
            {navigateConfig.map((v, i) => {
              const { children } = v
              let menu = <div></div>
              if (Array.isArray(children)) {
                menu = getHeaderMenu(children)
              }

              return (
                <Dropdown overlay={menu} placement='bottomCenter' key={i}>
                  <Link className='tab-item' to={v.path}>
                    <span>{v.name}</span>
                    {Array.isArray(children) && <Icon type="down" />}
                  </Link>
                </Dropdown>
              )
            })}
          </div>

          <div className='header-cart'>
            <img src={type === 'index' ? indexCart : commonCart} alt='' />
            <span>Inquiry Basket</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
