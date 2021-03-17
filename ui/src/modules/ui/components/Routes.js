import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ProductRoutes from 'modules/products/components/Routes'
import CartRoutes from 'modules/cart/components/Routes'

export default function Routes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductRoutes></ProductRoutes>
      </Route>
      <Route path="/cart">
        <CartRoutes></CartRoutes>
      </Route>
      <Route exact path="/">
        <Redirect to="/products"></Redirect>
      </Route>
      <Route>
        <div>Page not found</div>
      </Route>
    </Switch>
  )
}
