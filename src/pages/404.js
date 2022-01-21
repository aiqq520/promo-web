import React, { createElement } from 'react'
import { Button } from 'antd'
import Link from 'umi/link';

export default class Exception extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      config: {
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
        info: '404',
        desc: '抱歉，你访问的页面不存在',
      }
    }
  }

  render() {
    const { config } = this.state

    return (
      <div className='exception'>
        <img src={config.img} alt='' />
        <div className='content'>
          <div className='info'>{config.info}</div>
          <div className='desc'>{config.desc}</div>
          <div>
            {createElement(Link, { to: '/', href: '/' },
              <Button type='primary'>返回首页</Button>
            )}
          </div>
        </div>
      </div>
    )
  }

}
