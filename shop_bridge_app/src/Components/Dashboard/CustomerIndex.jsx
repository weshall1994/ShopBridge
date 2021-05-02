import React from 'react'
import HocGetAllProducts from '../../Common/Componets/HocGetAllProducts'
import CustHeaderCard from './Components/CustomerComponents/CustHeaderCard';
import SpecificCategory from './Components/CustomerComponents/SpecificCategory';

function CustomerIndex(props) {
  const { products, categoryNames } = props;
  let i = 0
  return (
    <div className={"relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6"}>
      <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-4 md:grid-cols-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 lg:max-w-none">
        {categoryNames.map((c, index) => (
          <CustHeaderCard key={index}
            categoryname={c}
            category={products.filter(p => p.category == c)}
            length={products.filter(p => p.category == c).length - 1} />
        ))}
      </div>

      {categoryNames.map((c, index) => (
        <div key={index} className="max-w-lg mx-auto grid gap-5 lg:max-w-none">
          <div className={`relative grid lg:grid-cols-2 mt-${index === 0 ? "20" : "10"} flex justify-self-end mb-4`}>
            <a href="#" className="font-bold uppercase text-indigo-500">{c}</a>
            <a href="#" className="font-bold uppercase justify-self-end text-indigo-500">{"View All"}</a>
          </div>
          <div className={`max-w-lg mx-auto grid gap-5 lg:grid-cols-4 md:grid-cols-2 bg-gradient-to-l from-green-400 to-blue-500 lg:max-w-none`}>
            {products.filter(p => p.category == c).map((p, pIndex) => (
              pIndex < 4 &&
              <div key={index + "t" + pIndex} className={"mt-7 mx-2"}>
                <SpecificCategory
                  key={index + "" + pIndex}
                  product={p} />
              </div>
            ))
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default HocGetAllProducts(CustomerIndex)
