import React from 'react'
import { Route, Switch } from 'react-router'
import SignOut from '../Common/Componets/SignOut'
import CustomerCart from '../Components/CustomerCart/CustomerCart'
import CustomerIndex from '../Components/Dashboard/CustomerIndex'
import CustomerOrders from '../Components/CustomerOrders/CustomerOrders'
import CustomerAccount from '../Components/CustomerAccount/CustomerAccount'
function CustomerRouters() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CustomerIndex} />
        <Route path="/dashboard" component={CustomerIndex} />
        <Route path="/cart" component={CustomerCart} />
        <Route path="/orders" component={CustomerOrders} />
        <Route path="/account" component={CustomerAccount} />
        <Route path="/signout" component={SignOut} />
      </Switch>
    </div>
  )
}

export default CustomerRouters
