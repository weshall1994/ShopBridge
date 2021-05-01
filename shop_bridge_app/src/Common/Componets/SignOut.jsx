import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router'

import { appContext } from '../../App'
function SignOut() {

  const { setIsUserAuthenticated } = useContext(appContext)

  useEffect(() => {
    setIsUserAuthenticated(false)
  }, [])
  return <Redirect to="/" />
}

export default SignOut
