import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashboardCard from './Components/DashboardCard'

function DashboardIndex() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])

  async function getAllProducts() {
    await axios.get('https://fakestoreapi.com/products')
      .then(res => {
        if (res.data) {
          setProducts(res.data)
          console.log("products", res.data)
        }
      })
      .catch(err => {

      })
  }
  return (
    <div>
      <div className="border-b border-gray-400">
        <h1 className="text-2xl mb-2 font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Products info</h2>
        <ul className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 xl:grid-cols-4 mt-3">
          <DashboardCard
            initials={"TP"}
            length={products.length}
            color={"pink"}
            path={"/products"} />

          <DashboardCard
            initials={"TP"}
            length={products.length}
            color={"blue"}
            path={"/"} />

          <DashboardCard
            initials={"TP"}
            length={products.length}
            color={"orange"}
            path={"/"} />

          <DashboardCard
            initials={"TP"}
            length={products.length}
            color={"green"}
            path={"/"} />
        </ul>
      </div>
    </div>
  )
}

export default DashboardIndex
