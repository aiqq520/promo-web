import React from 'react'
import Link from 'umi/link';
import { navigateConfig } from '@/common/index'
import './index.less'

function Footer(props) {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <div className='nagivation-tab'>
          {navigateConfig.map((v, i) => (
            <Link className='tab-item' to={v.path} key={i}>{v.name}</Link>
          ))}
        </div>

        <div className='copyright'>
          <div>©{new Date().getFullYear()} CINDAPROMO copyright</div>
          <div>This website use FAISCO  Build | Login</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
