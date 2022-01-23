import React, { Component } from 'react'
import Header from '@/components/header'
import phone from '@/assets/images/icons/phone.png'
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
    console.log(value)
  }

  render() {
    const { showSearch } = this.state

    return (
      <div className='search-section'>
        <Header type='index' />

        <div className={`search-header ${showSearch ? 'search-show' : ''}`} id='search'>
          <div className='search-wrap'>
            <div className='logo'>
              <img src={''} alt='' />
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

            <div className='phone'>
              <img src={phone} alt='' />
              <span>909-413-7983</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchComp
