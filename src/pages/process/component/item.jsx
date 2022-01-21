import React from 'react'

function TimeItem(props) {
  const { type, content, time } = props
  return (
    <div className={`info-wrap ${type}`}>
      <div className='head-r'>
        <div className='head'></div>
        <div className='split'></div>
      </div>

      <div className='content'>
        <div className='time'>{time}</div>
        <div className='detail'>{content}</div>
      </div>
    </div>
  )
}

export default TimeItem
