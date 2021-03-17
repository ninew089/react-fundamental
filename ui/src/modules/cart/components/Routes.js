import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Cart from './Cart'

export default function Routes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={path}>
        <Cart></Cart>
      </Route>
    </Switch>
  )
}
