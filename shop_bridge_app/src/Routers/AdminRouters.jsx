import React from 'react'
import { Route, Switch } from 'react-router'
import SignOut from '../Common/Componets/SignOut'
import AdminOrders from '../Components/AdminOrders/AdminOrders'
import Products from '../Components/AdminProducts/Products'
import DashboardIndex from '../Components/Dashboard/AdminIndex'

function AdminRouters() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardIndex} />
      <Route path="/dashboard" component={DashboardIndex} />
      <Route path="/products" component={Products} />
      <Route path="/orders" component={AdminOrders} />
      <Route path="/signout" component={SignOut} />
    </Switch>
  )
}

export default AdminRouters
