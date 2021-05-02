import React from 'react'
import HocGetAllProducts from '../../Common/Componets/HocGetAllProducts'
import CustHeaderCard from './Components/CustomerComponents/CustHeaderCard';

function CustomerIndex(props) {
  const { products, categoryNames } = props;
  return (
    <div>
      {products &&
        <div className={`grid lg:grid-cols-4 gap-1 md:grid-cols-3 sm:grid-cols-2 bg-blue-500 w-full h-56 shadow-lg`}>
          {categoryNames &&
            <>
              {
                categoryNames.length > 0 &&
                <>
                  {
                    categoryNames.map((c, index) => (
                      <CustHeaderCard key={index}
                        categoryname={c}
                        category={products.filter(p => p.category == c)}
                        length={products.filter(p => p.category == c).length} />
                    ))
                  }
                </>
              }
            </>

          }
        </div>
      }
    </div>
  )
}

export default HocGetAllProducts(CustomerIndex)
