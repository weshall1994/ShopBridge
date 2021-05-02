import { CheckIcon, CurrencyRupeeIcon } from '@heroicons/react/outline'
import React from 'react'

function SpecificCategory(props) {
  return (
    <div>
      <div className="flex flex-col mx-4 my-4 rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 flex flex-col justify-between px-6 pt-2 pb-4 bg-gray-50 space-y-6 sm:p-8 sm:pt-2">
          <div className="flex justify-center">
            <img className="h-24 w-24 shadow-full mt-2" src={props.product ? props.product.image : ""} />
          </div>
          <div>
            <h2 className="text-gray-800 text-sm font-bold overflow-none truncate">{props.product ? props.product.title : ""}</h2>
          </div>
          <div className={"flex justify-center md:justify-end"}>
            <CurrencyRupeeIcon className="h-4 w-4 mt-1 text-gray-500" />
            <p className="text-gray-600 justify-center"> {props.product ? props.product.price : ""}</p>
          </div>
          <div className="rounded-md shadow">
            <a
              href={"#"}
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
              aria-describedby="tier-standard" >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecificCategory
