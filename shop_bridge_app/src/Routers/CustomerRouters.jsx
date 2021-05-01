import React from 'react'
import { Route, Switch } from 'react-router'
import CustomerIndex from '../Components/Dashboard/CustomerIndex'
function CustomerRouters() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CustomerIndex} />
        <Route path="/dashboard" component={CustomerIndex} />
      </Switch>
    </div>
  )
}

export default CustomerRouters
