import React, { useEffect, useState } from 'react'
import axios from 'axios'

let dummyCategories = []


const HocGetAllProducts = OriginalComponent => {

  function NewComponent() {
    const [products, setProducts] = useState([])
    const [categoryNames, setCategoryNames] = useState([])
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    useEffect(() => {
      getAllProducts()
      return () => source.cancel();
    }, [])

    async function getAllProducts() {

      await axios.get('https://fakestoreapi.com/products', { cancelToken: source.token })
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
          if (axios.isCancel(err)) {
            console.log("axios request cancelled");
          } else {
            console.log(err)
          }

        })
    }
    return (
      <OriginalComponent
        products={products}
        categoryNames={categoryNames}
        getAllProducts={getAllProducts} />
    )
  }
  return NewComponent
}

export default HocGetAllProducts
