import React from 'react'
import { Route, Switch } from 'react-router'
import SignOut from '../Common/Componets/SignOut'
import CustomerIndex from '../Components/Dashboard/CustomerIndex'
function CustomerRouters() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CustomerIndex} />
        <Route path="/dashboard" component={CustomerIndex} />
        <Route path="/signout" component={SignOut} />
      </Switch>
    </div>
  )
}

export default CustomerRouters
