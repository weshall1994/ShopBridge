/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DailySellInfo(props) {
  return (
    <div>
      <div
        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
      >
        <dt>
          <div className="absolute bg-indigo-500 rounded-md p-3">
            <ShoppingCartIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500 uppercase truncate">{props.category}</p>
        </dt>
        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p className="text-2xl font-semibold text-gray-900 uppercase">{props.stat}</p>
          <p
            className={classNames(
              props.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
              'ml-2 flex items-baseline text-sm font-semibold uppercase'
            )}
          >
            {props.changeType === 'increase' ? (
              <ArrowSmUpIcon className="self-center uppercase flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
            ) : (
              <ArrowSmDownIcon className="self-center uppercase flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
            )}

            <span className="sr-only uppercase">{props.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
            {props.change}
          </p>
          <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <a href="#" className="font-medium uppercase text-indigo-600 hover:text-indigo-500">
                {' '}
                    View all<span className="sr-only"> {props.name} stats</span>
              </a>
            </div>
          </div>
        </dd>
      </div>
    </div>
  )
}
export default DailySellInfo