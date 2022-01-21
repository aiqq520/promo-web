import React from 'react'
import './index.less'

function ClassificCmp(props) {
  const { dataList } = props

  return (
    <div className="classific-section">
      <div className="classific-wrap">
        {dataList && dataList.map((item, index) => (
          <div className="classific-item" key={index}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassificCmp
