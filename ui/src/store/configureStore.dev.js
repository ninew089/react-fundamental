import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import reduxThunk from 'redux-thunk'

import createRootReducer from 'modules/reducers'

export const history = createBrowserHistory()

function configureStore(initialState) {
  const middleware = [reduxThunk, routerMiddleware(history)]

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  return store
}

export default configureStore
