import { PreviousMap } from 'postcss';
import React, { useState } from 'react'
import { BeakerIcon } from '@heroicons/react/solid'
function LoginForm(Props) {
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' })
  function AuthenticateUser(e) {
    e.preventDefault();
    console.log("Form values", userCredentials);
    Props.authUser(userCredentials)
  }

  const handleEmailChange = (e) => {
    setUserCredentials({ ...userCredentials, username: e.target.value });
  }
  const handlePasswordChange = (e) => {
    setUserCredentials({ ...userCredentials, password: e.target.value });
  }

  return (
    <>
      <div className=" grid grid-cols-1 min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="mb-2 text-center text-2xl font-medium text-indigo-600 justify-self-center mx-auto">
              SHOP BRIDGE
            </h2>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 py-3 bg-yellow-300 rounded-lg text-indigo-600 bg-opacity-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="my-2 text-center text-lg font-base text-gray-400 justify-self-center mx-auto">
              Enter "Admin" for admin login or "Customer" for customer login!
            </h2>
            <form className="space-y-6 mt-5" onSubmit={AuthenticateUser}>
              <div>
                <div className="mt-1">
                  <input id="email"
                    onChange={handleEmailChange}
                    name="email"
                    autoComplete="email"
                    placeholder="Email / Username"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input id="password"
                    onChange={handlePasswordChange}
                    name="password"
                    type='password'
                    autoComplete="current-password"
                    placeholder="Password"
                    className="block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a onClick={() => { setShowForgetPassword(true); }} className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                                     </a>
                </div>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        showForgetPassword ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
            >
              <div className="relative w-l my-6 mx-auto max-w-full">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg border relative flex flex-col bg-white outline-none border-gray-200 focus:outline-none">
                  <div className="border-0 border m-1 pb-5 pl-5 pr-5">
                    {/*header*/}
                    <div className="flex items-start justify-between rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => { setShowForgetPassword(false) }}
                      >
                        <span className="bg-transparent text-black h-10 w-10 pl-8 text-3xl text-gray-200 hover:text-red-500 block outline-none focus:outline-none">
                          ×
                                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="grid grid-cols-1">
                      <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid mt-5 grid-cols-1">
                      <div className="flex justify-center">
                        <div className="font-medium text-xl text-gray-600">Forgot Password?</div>
                      </div>
                    </div>
                    <div className="grid mt-1 grid-cols-1">
                      <div className="flex text-button_color font-base justify-center">
                        <div className="text-gray-400">You can reset your password here.</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 mt-3 w-full">
                      <div className="mt-1">
                        <input id="email"
                          name="email" autoComplete="email"
                          placeholder="Email / Username"
                          className="appearance-none block w-full px-3 py-2 border-b border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 pb-10">
                      <div className="flex items-center justify-center p-6 rounded-b">
                        <button className="px-8 py-2 rounded-md bg-blue-600 font-bold  text-blue-50 w-full hover:shadow-md">Reset Password</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null
      }
    </>
  )
}

export default LoginForm