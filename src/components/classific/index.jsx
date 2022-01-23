import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

function ClassificCmp(props) {
  const { dataList } = props

  return (
    <div className="classific-section">
      <div className="classific-wrap">
        {dataList && dataList.map((item) => (
          <Link
            className="classific-item"
            key={item.id}
            to={{
              pathname: '/item/list',
              query: { categoryId: item.id }
            }}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ClassificCmp
