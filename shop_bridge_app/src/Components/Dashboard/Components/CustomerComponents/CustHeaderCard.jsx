import { CurrencyRupeeIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'

function CustHeaderCard(props) {
  let counter = props.length;
  const [i, setCounter] = useState(props.length)
  // setInterval(() => {
  //   counter--;
  //   console.log("============", i)
  //   setCounter(counter)
  // }, 3000)
  return (
    <div>
      <div className="max-w-md py-4 mx-4 px-8 bg-white shadow-lg rounded-lg my-16">
        {props.category &&
          <>
            {props.category[i] &&
              <>
                <div className="flex justify-center md:justify-end -mr-5 -mt-16">
                  <img className="h-28 w-28 rounded-full border-2 border-gray-200 shadow-xl" src={props.category[i].image} />
                </div>
                <div>
                  <h2 className="text-gray-800 text-sm mt-5 font-bold overflow-none truncate">{props.category[i].title}</h2>
                </div>
                <div className={"flex justify-center md:justify-end"}>
                  <CurrencyRupeeIcon className="h-4 w-4 text-gray-500 mt-3" />
                  <p className="mt-2 text-gray-600 justify-center"> {props.category[i].price}</p>
                </div>
              </>
            }
          </>
        }

        <div className="flex justify-end mt-4">
          <a href="#" className=" font-bold uppercase text-indigo-500">{props.categoryname}</a>
        </div>
      </div>
    </div>
  )
}

export default CustHeaderCard
