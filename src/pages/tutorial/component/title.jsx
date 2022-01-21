import React from 'react'

function Title(props) {
  const { title } = props
  return (
    <div className='head'>
      <div className='icon'></div>
      <div className='title'>{title}</div>
      <div className='line'></div>
    </div>
  )
}

export default Title
