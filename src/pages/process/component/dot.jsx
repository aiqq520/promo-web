import React from 'react'

function Dot(props) {
  const { text, end } = props

  return (
    <div className='dot-wrap'>
      <div className={`dot-circle ${end ? 'dot-circle-end' : 'dot-circle-common'}`}>
        <div className='dot-sub'>
          {end && <div className='dot-bg'>Be Continued</div>}
          <div className='dot-txt'>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Dot
