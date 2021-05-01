import React from 'react'
import { Route, Switch } from 'react-router'
import DashboardIndex from '../Components/Dashboard/AdminIndex'

function AdminRouters() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardIndex} />
      <Route path="/dashboard" component={DashboardIndex} />
    </Switch>
  )
}

export default AdminRouters
