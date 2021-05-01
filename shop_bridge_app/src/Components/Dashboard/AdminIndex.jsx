import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DailySellInfo from './Components/DailySellInfo'
import DashboardCard from './Components/DashboardCard'
let dummyCategories = []
function DashboardIndex() {
  const [products, setProducts] = useState([])
  const [categoryNames, setCategoryNames] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])

  async function getAllProducts() {
    await axios.get('https://fakestoreapi.com/products')
      .then(res => {
        if (res.data) {
          setProducts(res.data)
          console.log("products", res.data)
          if (res.data.length > 0) {
            res.data.forEach(pr => {
              if (!dummyCategories.includes(pr.category)) {
                dummyCategories.push(pr.category)
              }
            })
          }
          setCategoryNames(dummyCategories)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <div className="border-b border-gray-400">
        <h1 className="text-2xl mb-2 font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="px-4 mt-6 sm:px-6 lg:px-8 border-b border-gray-400">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Products info</h2>
        <ul className="grid grid-cols-1 mb-6 gap-2 sm:gap-3 sm:grid-cols-2 xl:grid-cols-3 mt-3">
          <DashboardCard
            initials={"TP"}
            length={products.length}
            color={"pink"}
            path={"/products"}
            heading={"Total Products"} />

          <DashboardCard
            initials={"TC"}
            length={categoryNames.length}
            color={"blue"}
            path={"/products"}
            heading={"Total categories"} />

          {categoryNames &&
            categoryNames.map((c, index) => (
              <DashboardCard
                key={index}
                initials={c.charAt(0) + c.charAt(1)}
                length={products.filter(p => p.category == c).length}
                color={"blue"}
                path={"/products"}
                heading={c} />
            ))
          }
        </ul>
      </div>
      <h3 className="text-lg leading-6 mt-5 uppercase font-medium text-gray-900">Today's Sell</h3>
      <dl className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {categoryNames &&
          categoryNames.map((c, index) => (
            <DailySellInfo
              category={c}
              stat={(100 * Math.random()).toFixed(2)}
              changeType={(100 * Math.random()).toFixed(0) % 2 === 0 ? "increase" : ""}
              change={(10 * Math.random()).toFixed(2)}
              name={c}
            />
          ))
        }
      </dl>
    </div>
  )
}

export default DashboardIndex
