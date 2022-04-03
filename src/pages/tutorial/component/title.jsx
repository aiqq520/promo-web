import React from 'react'
import CART from '@/assets/images/type/CART.png';
import WARRANTY from '@/assets/images/type/WARRANTY.png';
import PATMENT from '@/assets/images/type/PATMENT.png';
import FAQS from '@/assets/images/type/FAQS.png';

const typeIcon = {
  1: CART,
  2: WARRANTY,
  3: PATMENT,
  4: FAQS,
}

function Title(props) {
  const { title, type } = props
  return (
    <div className='head'>
      <div className='icon'>
        <img src={typeIcon[type]} alt="" />
      </div>
      <div className='title'>{title}</div>
      <div className='line'></div>
    </div>
  )
}

export default Title
