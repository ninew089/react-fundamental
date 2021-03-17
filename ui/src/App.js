import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from 'store/configureStore'
import Layout from './modules/ui/components/Layout'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout></Layout>
      </ConnectedRouter>
    </Provider>
  )
}
