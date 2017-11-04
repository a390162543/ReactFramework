import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import middlewares from './middleware'
import reducers from './reducer'
import './index.css'
import ReactRouter from './ReactRouter'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
 reducers,
 compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
)

ReactDOM.render(
 <Provider store={store}>
  <ReactRouter />
 </Provider>,
 document.getElementById('root')
)


registerServiceWorker()
