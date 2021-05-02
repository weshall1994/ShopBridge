import React from 'react'
import HocGetAllProducts from '../../Common/Componets/HocGetAllProducts'

function CustomerIndex(props) {
  return (
    <div className="divide-y divide-yellow-500">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
    </div>
  )
}

export default HocGetAllProducts(CustomerIndex)
