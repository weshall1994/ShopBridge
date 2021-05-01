import React, { useEffect, useState } from 'react'
import axios from 'axios'

let dummyCategories = []

const HocGetAllProducts = OriginalComponent => {

  function NewComponent() {
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
      <OriginalComponent
        products={products}
        categoryNames={categoryNames} />
    )
  }
  return NewComponent
}

export default HocGetAllProducts
