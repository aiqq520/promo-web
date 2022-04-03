import React, { Component } from 'react'
import Header from '@/components/header'
import phone from '@/assets/images/icons/phone.png'
import email from '@/assets/images/icons/email.png'
import logo from '@/assets/images/icons/logo.png'
import { Input } from 'antd'
import './index.less'

const { Search } = Input;

class SearchComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearch: false
    }
  }

  componentDidMount() {
    // 默认搜索框滚动
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    // 滚动条高度
    const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
    const searchElement = document.getElementById('search')
    const fixedTop = searchElement && searchElement.offsetTop ? searchElement.offsetTop : 30

    if (scrollTop > fixedTop) {
      this.setState({ showSearch: true })
    } else if (scrollTop <= fixedTop) {
      this.setState({ showSearch: false })
    }
  }

  onSearch = value => {
    const { onSearch } = this.props
    onSearch && onSearch(value)
  }

  render() {
    const { showSearch } = this.state

    return (
      <div className='search-section'>
        <Header type='index' />

        <div className={`search-header ${showSearch ? 'search-show' : ''}`} id='search'>
          <div className='search-wrap'>
            <div className='logo'>
              <img src={logo} alt='' />
              <span>CINDA PROMO</span>
            </div>

            <div className='search'>
              <Search
                className='search-input'
                placeholder='Enter a keyword to search products'
                allowClear
                enterButton="Search"
                onSearch={this.onSearch}
              />
            </div>

            <div className='search-info'>
              <div className='info-item'>
                <img src={phone} alt='' />
                <span>909-413-7983</span>
              </div>
              <div className='info-item'>
                <img src={email} alt="" />
                <span>23333@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchComp
