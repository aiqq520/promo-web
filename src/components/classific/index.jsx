import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

function ClassificCmp(props) {
  const { dataList, activeKey } = props

  return (
    <div className="classific-section">
      <div className="classific-wrap">
        <div className="classific-list-wrap">
          {dataList && dataList.map((item) => (
            <Link
              className={`classific-item ${activeKey === item.id ? 'classific-item-active' : null}`}
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
    </div>
  )
}

export default ClassificCmp
