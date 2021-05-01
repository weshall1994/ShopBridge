import React, { useState } from 'react'
import HocGetAllProducts from '../../Common/Componets/HocGetAllProducts'
import Common from '../../Common/Common'
import axios from 'axios';


function Products(props) {
  const [isDelete, setIsDelete] = useState(false);
  const [productToDelete, setProductToDelete] = useState();
  const [productToEdit, setProductToEdit] = useState();
  const [isEditProduct, setIsEditProduct] = useState(false);
  const { products, categoryNames } = props;

  async function deleteProduct() {
    console.log("stationToDelete", productToDelete)
    await axios.delete("https://fakestoreapi.com/products/" + productToDelete.id)
      .then(res => {
        if (res.status === 200) {
          props.getAllProducts();
        }
      })
      .catch(err => {
        console.log(err)
      });
    setIsDelete(false)
  }

  return (
    <div>
      <div className="border-b border-gray-400">
        <h1 className="text-2xl mb-2 font-semibold text-gray-900">Products</h1>
      </div>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-5">
        <div className="justify-self-end">
          <input
            onKeyUp={() => { Common.SearchFunction("searchProducts", "productTable") }}
            type="text" name="searchProducts" id="searchProducts" placeholder="Search..." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                    >
                      Name
                  </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                    >
                      category
                  </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                    >
                      description
                  </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                    >
                      price
                  </th>
                    <th scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody id="productTable" className="bg-white divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <tr key={product.index}>
                      <td className="px-6 py-4 whitespace-normal">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-16 w-16 rounded-full" src={product.image} alt="" />
                          </div>
                          <div className="ml-5">
                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-normal">
                        <div className="text-sm text-gray-900">{product.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">{product.description}</td>
                      <td className="px-6 py-4 whitespace-normal">
                        <div className="text-sm font-medium text-indigo-600 cursor-pointer">{product.price}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-right text-sm font-medium">
                        <a key={`edit${index}`}
                          onClick={() => { setIsEditProduct(true); setProductToEdit(product) }} className="text-indigo-600 hover:text-indigo-900 ml-1 cursor-pointer">Edit</a>
                        <a key={`delete${index}`}
                          onClick={() => { setIsDelete(true); setProductToDelete(product) }} className="text-indigo-600 hover:text-indigo-900 ml-1 cursor-pointer">Delete</a>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isDelete &&
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button type="button" onClick={() => { setIsDelete(false) }} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete Product?  </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button type="button" onClick={() => { deleteProduct() }} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Delete
                            </button>
                <button type="button" onClick={() => { setIsDelete(false) }} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                  Cancel
                            </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default HocGetAllProducts(Products)
