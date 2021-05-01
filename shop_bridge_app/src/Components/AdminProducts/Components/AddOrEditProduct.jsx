import axios from 'axios';
import React, { useState } from 'react'
import Serialize from 'form-serialize';
import MessagePopUps from '../../../Common/Componets/MessagePopUps';

function AddOrEditProduct(props) {
  const { IsEdit, productToEdit, categoryNames } = props;
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [category, setCategory] = useState(categoryNames ? categoryNames[0] : "")



  async function AddProduct(e) {
    e.preventDefault();
    console.log("AddProduct")
    var form = document.querySelector('#productForm');
    var productValues = Serialize(form, { hash: true });
    let data = {
      category: productValues ? productValues.category : "",
      description: productValues ? productValues.description : "",
      image: productValues ? productValues.image : "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
      price: productValues ? productValues.price : "",
      title: productValues ? productValues.title : ""
    }
    await axios.post("https://fakestoreapi.com/products", data)
      .then(res => {
        if (res.status === 200) {
          props.getAllProducts();
          props.setIsAddProduct(false)
          setIsSuccess(true);
          setTimeout(() => (false), 3000)
        }
      })
      .catch(err => {
        console.log(err)
        props.setIsAddProduct(false)
        setIsFail(true)
        setTimeout(() => setIsFail(false), 3000)
      });
  }

  async function EditProduct(e) {
    e.preventDefault();
    var form = document.querySelector('#productForm');
    var productValues = Serialize(form, { hash: true });
    let data = {
      id: productValues ? productValues.id : 0,
      category: productValues ? productValues.category : "",
      description: productValues ? productValues.description : "",
      image: productValues ? productValues.image : "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
      price: productValues ? productValues.price : "",
      title: productValues ? productValues.title : ""
    }
    await axios.put("https://fakestoreapi.com/products/" + data.id, data)
      .then(res => {
        if (res.status === 200) {
          console.log("EditProduct")
          props.getAllProducts();
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000)
        }
      })
      .catch(err => {
        console.log(err)

      });
    props.setIsAddProduct(false)
  }

  return (
    <div>
      <form onSubmit={IsEdit ? EditProduct : AddProduct} id="productForm">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Product Information</h3>
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">Product Id</label>
                <input
                  defaultValue={productToEdit ? productToEdit.id : 0}
                  type="text" name="id" id="id" placeholder="station Id" readOnly className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="col-span-6 sm:col-span-4 border border-blue-400 p-5 shadow-lg rounded-md justify-self-end">
                <img className="h-20 w-24" src={productToEdit ? productToEdit.image : "https://homepages.cae.wisc.edu/~ece533/images/watch.png"} alt="Not Available" />
              </div>
              <div className="col-span-6">
                <label htmlFor="Product Name" className="block text-sm font-medium text-gray-700">Product Title</label>
                <input
                  defaultValue={productToEdit ? productToEdit.title : ""}
                  type="text" name="title" id="title" placeholder="Product Name" autoComplete="station-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Production Line Name</label>
                <select value={category}
                  onChange={e => setCategory(e.target.value)}
                  id="productionLineId" name="productionLineId" className="mt-1 border block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Select Production Line</option>
                  {categoryNames &&
                    categoryNames.map((category, index) => (
                      <option
                        key={`${index}`}
                        value={category}>{category}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
                <input
                  defaultValue={productToEdit ? productToEdit.price : ""}
                  type="text" name="price" id="price" placeholder="Price" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  rows={3}
                  defaultValue={productToEdit ? productToEdit.description : ""}
                  type="text" name="description" id="description" placeholder="Product description" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="button" onClick={() => { props.setIsAddProduct(false) }} className="mt-3 mx-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
              Cancel
            </button>
            <button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
      {isSuccess &&
        <MessagePopUps
          messageType={"Info"}
          messageText={IsEdit ? "Product Updated Successfully..." : "Product Added Successfully..."}
          color={"blue"}
        />
      }
      {isFail &&
        <MessagePopUps
          messageType={""}
          messageText={"Something Went wrong..."}
          color={"red"}
        />
      }
    </div>
  )
}

export default AddOrEditProduct
